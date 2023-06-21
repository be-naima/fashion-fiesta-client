import { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BiEditAlt } from 'react-icons/bi';
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyClasses = () => {
    const allClasses = useLoaderData()
    const { user } = useContext(AuthContext)
    const Name = []
    const myClasses = []
    const [newPrice,setNewPrice] = useState(null) 
    for (const i in user) {

        if (i == 'displayName') { Name.push(user[i]) }
    }
    for (const i of allClasses) {
        if (Name[0] === i.instructor) {
            myClasses.push(i)
        }
    }
    const handleUpdate = (classs) =>{
  
        
        Swal.fire({
          title: "Update",
          html: `
            <div>
              <h2>Course Name: ${classs.name}</h2>
              <p>Instructor: ${classs.instructor}</p>
              <p >Email: ${classs.email}</p>
              <textarea id="updated_price" rows="4"  placeholder="Enter course price to update "></textarea>
            </div>
          `,
          showCancelButton: true,
          confirmButtonText: "Submit",
          preConfirm: () => {
            const updated_price = document.getElementById("updated_price").value;
            
            setNewPrice(parseFloat(updated_price))
            console.log(updated_price)
          
          const updatedPrice = {
            price: updated_price,
            
          };
      
          fetch(`https://fashion-fiesta-server-production.up.railway.app/classes/${classs._id}/price`, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPrice)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: 'Success!',
                  text: 'Price Updated Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                }).then((result) => {
                  
                });
              } 
            });
      
          closeFeedbackModal();
          },
        });
      };
      const closeFeedbackModal = () => {
        Swal.close();
      };
    return (

        <div  className="flex flex-col items-center mt-32 px-20 min-h-screen">
           <Helmet>
                <title>Fashion Fiesta | My Classes</title>
            </Helmet>
        <div className="overflow-x-auto w-full">
            <h1 className="text-3xl font-bold text-center bottom-2 bg-blue-300 py-4 text-blue-900">My Classes</h1>
            <div >
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="bg-blue-200 text-blue-800">
                        <tr>
                            <th>Serial No</th>
                            <th>Course Name</th>
                            <th>Status</th>
                            <th>Students</th>
                            <th>Feedback</th>
                            <th>Update</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((classs, index) => <tr key={classs._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={classs.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{classs.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{classs.approval_status}</td>
                                <td>{classs.enrolled}</td>
                                <td >
                                     {classs.approval_status === 'denied'? classs.feedback : ''}
                                </td>

                                <td><button onClick={() => handleUpdate(classs)} className="btn btn-sm bg-blue-400 font-bold"><BiEditAlt/></button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MyClasses;