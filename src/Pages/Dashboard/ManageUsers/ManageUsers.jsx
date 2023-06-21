import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaUserShield } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import Swal from "sweetalert2";
import useAdmin from "../../../hook/useAdmin";
import useAxiosSecure from "../../../hook/useAxioSecure";
import useInstructor from "../../../hook/useInstructor";
const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
   
    
    
    const handleMakeAdmin = (user) => {
        fetch(`https://fashion-fiesta-server-production.up.railway.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    const handleMakeInstructor = (user) => {
        console.log(user, 'user');
        fetch(`https://fashion-fiesta-server-production.up.railway.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data, 'data')
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (
        <div className="w-full">
            <Helmet>
                <title>Fashion Fiesta | Manage Users</title>
            </Helmet>
            <h1 className="text-3xl font-bold text-center bottom-2 bg-blue-300 py-4 text-blue-900">Total Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-blue-400  text-white"><FaUserShield></FaUserShield></button>

                                }</td>
                                <td>
                                    {user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-blue-400  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                    }
                                </td>
                               
                               <td></td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;