import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hook/useAxioSecure";
import Swal from "sweetalert2";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const profilePhoto = [];
  const Name = [];

  for (const i in user) {
    if (i === 'photoURL') { profilePhoto.push(user[i]); }
    if (i === 'displayName') { Name.push(user[i]); }
  }

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgResponse) => {
       
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, instructor, available_seats,email } = data;
          const newClass = { name, price: parseFloat(price), instructor, available_seats, image: imgURL,email,approval_status:"pending",feedback:"",enrolled: 0 };
          console.log(newClass);
          axiosSecure.post('/classes', newClass)
              .then(data => {
                  console.log('after posting new class', data.data)
                  if(data.data.insertedId){
                      reset();
                      Swal.fire({
                          position: 'top-end',
                          icon: 'success',
                          title: 'Class added successfully',
                          showConfirmButton: false,
                          timer: 1500
                        })
                  }
              })
        }
      });
  };

  return (
    <div className="w-full px-56 mt-20 ">
       <Helmet>
                <title>Fashion Fiesta | Add Class</title>
          </Helmet>
      <h1 className="text-3xl font-bold text-center bottom-2 bg-blue-300 py-4 text-blue-900">Add a Class</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`form-control w-full mb-4 ${errors.name ? 'error' : ''}`}>
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true, maxLength: 120 })}
            className={`input input-bordered w-full ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`form-control w-full my-4 ${errors.image ? 'error' : ''}`}>
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className={`file-input file-input-bordered w-full ${errors.image ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`form-control w-full mb-4 ${errors.instructor ? 'error' : ''}`}>
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            defaultValue={Name[0]}
            {...register("instructor", { required: true, maxLength: 120 })}
            className={`input input-bordered w-full ${errors.instructor ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`form-control w-full mb-4 ${errors.email ? 'error' : ''}`}>
          <label className="label">
            <span className="label-text font-semibold">Email*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            defaultValue={user.email}
            {...register("email", { required: true, maxLength: 120 })}
            className={`input input-bordered w-full ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`form-control w-full mb-4 ${errors.available_seats ? 'error' : ''}`}>
          <label className="label">
            <span className="label-text font-semibold">Available Seats*</span>
          </label>
          <input
            type="number"
            placeholder="Available Seats"
            {...register("available_seats", { required: true, maxLength: 120 })}
            className={`input input-bordered w-full ${errors.available_seats ? 'border-red-500' : ''}`}
          />
        </div>
        <div className={`form-control w-full mb-4 ${errors.price ? 'error' : ''}`}>
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price"
            step="any"
            {...register("price", { required: true, maxLength: 120 })}
            className={`input input-bordered w-full ${errors.price ? 'border-red-500' : ''}`}
          />
        </div>
       <div className='mx-auto flex justify-center items-center'>
       <input className="btn btn-sm mt-4 bg-blue-400 font-bold mx-auto" type="submit" value="Add Class" />
       </div>
      </form>
    </div>
  );
};

export default AddClass;
