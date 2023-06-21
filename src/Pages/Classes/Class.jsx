
import { BsCoin } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hook/UseCart";
import useAdmin from "../../hook/useAdmin";
import useInstructor from "../../hook/useInstructor";
const Class = ({ classs }) => {
    
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const { image, name, _id, instructor, price, available_seats,enrolled } = classs
    useEffect(() => { Aos.init() }, [])
    const { user } = useContext(AuthContext)
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddCart = classs => {
        console.log(classs);
        if (user && user.email) {
            const enrolledClass = { classId: _id, image, name, instructor, price, available_seats, email: user.email,enrolled }
            fetch('https://fashion-fiesta-server-production.up.railway.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(enrolledClass)
            })

                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire(
                            'Best of Luck!',
                            'Enrolled Class Added to Cart',
                            'success'
                          )
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Enroll the Course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        navigate('/login', { state: { from: location } })
                    )
                }
            })
        }
    }
    return (

        <div>
            <div data-aos="zoom-in" className={`item card w-80 ${available_seats === 0 ? 'bg-red-200' : 'bg-base-100'} shadow-xl border bottom-2 `} style={{ objectFit: "cover", height: "100%", width: "100%" }}>
                <figure style={{ height: "200px" }}>
                    <img src={image} alt="Shoes" style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                </figure>
                <div className="card-body ">



                    <div className="flex font-bold text-blue-900"><SiGoogleclassroom className="mt-1 me-1"></SiGoogleclassroom><p>Course Name: <span className="text-black">{name}</span></p></div>
                    <div className="flex font-bold text-blue-900"><FaUser className="mt-1 me-1"></FaUser><p >Instructor: <span className="text-black ms-1">{instructor}</span></p></div>
                    <div className="flex font-bold text-blue-900"><FaUsers className="mt-1 me-1"></FaUsers><p >Enrolled: <span className="text-black ms-1">{enrolled}</span></p></div>
                    <div className="flex font-bold text-red-600"><BsCoin className="mt-1 me-1"></BsCoin><p >Price: <span className="text-red-600 ms-1">${price}</span></p></div>
                    <div className="badge badge-secondary font-bold pt-4 py-4 bg-teal-700 border-0 text-white">Seats:{available_seats}</div>
                    <button disabled={available_seats === 0 || isAdmin || isInstructor} className="btn mt-5 border-0  bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white font-bold " onClick={() => handleAddCart(classs)}>Enroll Now</button>
                </div>

            </div>
        </div>
    );
};

export default Class;