import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import CutoutBannerSolve from '../Pages/Home/CutoutBannerSolve'
const Register = () => {
    const { register, handleSubmit, reset, formState: { errors },watch } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error2, setError] = useState("")
    const onSubmit = data => {

        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {name: data.name, email: data.email}
                        fetch('https://fashion-fiesta-server-production.up.railway.app/users',{
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if(data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                       

                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    };

    return (
        <div>
            <CutoutBannerSolve></CutoutBannerSolve>
            <div className="hero min-h-screen login_bg">
                <div className="hero-content flex-col  mt-10">
                    <h1 className="text-5xl font-bold text-center text-blue-900 mt-5 mb-10">Register now!</h1>
                    <div className="border rounded-2xl max-w-screen-lg items-center bg-white shadow-2xl grid-cols-1 grid md:grid-cols-2 gap-5 md:p-20 mb-20 p-0">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-blue-700 text-xl">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-blue-700 text-xl">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-blue-700 text-xl">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold text-blue-700 text-xl">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,

                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case and one special character.</p>}
                                <label className="label">
                                    <span className="label-text font-bold text-blue-700 text-xl mt-4">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === watch("password"),
                                    })}
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword?.type === 'required' && (
                                    <p className="text-red-600">Confirm Password is required</p>
                                )}
                                {errors.confirmPassword?.type === 'validate' && (
                                    <p className="text-red-600">Passwords do not match</p>
                                )}

                                <label className="label">
                                    <p className="text-red-600 font-bold">{error2}</p>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary border-0 hover:bg-sky-400 text-slate-50 font-bold bg-blue-400" type="submit" value="Sign Up" />
                            </div>
                            <p className="font-bold"><small>Already have an account? <Link to="/login" className="text-blue-700">Login</Link></small></p>
                        </form>
                        <div><img src="images/login.gif" className="ms-5 w-80 md:w-auto rounded-3xl" alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;