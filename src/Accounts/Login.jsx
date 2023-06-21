import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from "firebase/auth";
import '../../public/style.css'
import CutoutBannerSolve from '../Pages/Home/CutoutBannerSolve'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

   
const Login = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('')
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const googleProvider = new GoogleAuthProvider();
    const from = location.state?.from?.pathname || "/";
    


        const handleLogin = event => {
            event.preventDefault();
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email, password);
            signIn(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        title: 'User Login Successful.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });

                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorMessage)
                });

        }
        const handleGoogle = () => {
            googleSignIn(googleProvider)
                .then((result) => {
                    const loggeduser = result.user;
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;


                    const saveUser = { name: loggeduser.displayName, email: loggeduser.email }
                    fetch('https://fashion-fiesta-server-production.up.railway.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {


                            navigate(from, { replace: true })

                        })

                    //console.log(user);

                }).catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(error.message)
                    const email = error.customData.email;

                    const credential = GoogleAuthProvider.credentialFromError(error);
                    setError(errorMessage)


                });
        }
        useEffect(() => {
            loadCaptchaEnginge(4);
        }, [])
        const handleValidateCaptcha = (e) => {
            const user_captcha_value = e.target.value;
            if (validateCaptcha(user_captcha_value)) {
                setDisabled(false);
            }
            else {
                setDisabled(true)
            }
        }
        return (
            <div>
                <CutoutBannerSolve></CutoutBannerSolve>
                <div className="hero min-h-screen login_bg">
                    <div className="hero-content flex-col  mt-10">
                        <h1 className="text-5xl font-bold text-center text-blue-900 mt-5 mb-10">Login now!</h1>
                        <div className="border rounded-2xl max-w-screen-lg items-center   bg-white shadow-2xl grid-cols-1 grid md:grid-cols-2 gap-5 md:p-20 mb-20 p-0">
                            <div className="card-body md:ps-12 ps-5">
                                <form onSubmit={handleLogin} className="">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-blue-700 text-xl">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email" className="input input-bordered " required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold text-blue-700 text-xl">Password</span>
                                        </label>
                                        <input type={showPassword ? "text" : "password"}
                                            name="password" placeholder="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            className="input input-bordered "
                                            required />

                                        <span onClick={toggleShowPassword}>
                                            {showPassword ? <FaEyeSlash className="relative left-64 md:left-72 bottom-8 md:ms-5 ms-0" /> : <FaEye className="relative left-64 md:left-72 bottom-8  md:ms-5 ms-0"/>}
                                        </span>




                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate></LoadCanvasTemplate>
                                        </label>
                                        <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the Captcha Above" className="input input-bordered " />
                                        <p className="text-red-600 font-bold">{error}</p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input disabled={disabled} className="btn  btn-primary border-0 hover:bg-sky-400 text-slate-50 font-bold bg-blue-400" type="submit" value="Login" />
                                    </div>

                                </form>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogle} type="submit" className="btn border-0 hover:bg-sky-400 text-slate-50 font-bold bg-blue-400"><FcGoogle className="me-4 text-3xl font-bold bg-slate-50 rounded-full"></FcGoogle> Login with Google</button><p className="font-bold"><small>New to FashionFiesta? <Link to="/register" className="text-blue-700">Register</Link> </small></p>
                            </div>
                            <div><img src="images/login.gif" className="ms-5 w-80 md:w-auto rounded-3xl" alt="" /></div>

                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default Login;