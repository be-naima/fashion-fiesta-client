import { FaTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hook/UseCart";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);

    const total = cart.reduce((sum, classs) => classs.price + sum, 0);
    

    const handleDelete = classs => {
        console.log(classs);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fashion-fiesta-server-production.up.railway.app/carts/${classs._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your course has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-center bottom-2 bg-blue-300 py-4 text-blue-900">Selected Classes</h1>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Classes: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((classs, index) => <tr
                                
                                key={classs._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
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
                                <td>
                                    {classs.name}
                                </td>
                                <td className="text-end">${classs.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(classs)} className="btn btn-ghost bg-blue-400  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <NavLink to={`/dashboard/singlepayment/${classs._id}`} ><button className="btn bg-blue-400  btn-sm">PAY</button></NavLink>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart; 