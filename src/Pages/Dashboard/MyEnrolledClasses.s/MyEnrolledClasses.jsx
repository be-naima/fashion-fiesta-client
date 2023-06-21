
import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { NavLink, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { AuthContext } from "../../../Providers/AuthProvider";

const MyEnrolledClasses = () => {
    const allPayments = useLoaderData()

    const { user } = useContext(AuthContext)


    const myEnrolledClasses = []
    const EnrolledClasses = []
    const sortedEnrolled = []


    for (const i of allPayments) {

        if (user.email === i.email) {
            myEnrolledClasses.push(i)
        }
    }
    // for (let i = allPayments.length - 1; i >= 0; i--) {
    //     if (user.email === allPayments[i].email) {
    //         myEnrolledClasses.push(allPayments[i]);
    //     }
    // }
   
   // console.log(myEnrolledClasses.reverse());




    // <h3 className="text-3xl">Total Classes: {cart.length}</h3>
    //             <h3 className="text-3xl">Total Price: ${total}</h3>

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-center bottom-2 bg-blue-300 py-4 text-blue-900">Enrolled Classes</h1>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Course Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myEnrolledClasses.map((classs, index) => <tr
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
                                            <div className="font-bold">{classs.classname}</div>
                                        </div>
                                    </div>
                                </td>

                                
                                <td className="font-bold">${classs.price}</td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses; 