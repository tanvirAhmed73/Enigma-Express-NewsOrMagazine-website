import React, { useContext, useState } from 'react';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import SocialLogin from './SocialLogin';
const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email,password)
        .then((userCredential) => {
            navigate(location.state? location.state : '/')
            // Signed in 
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
                
            

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          Swal.fire({
              position: "top-end",
              icon: "error",
              title: errorCode,
              showConfirmButton: false,
              timer: 1500
            });
            form.reset()
          // ..
        });
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className='flex items-center'>
                            <input 
                                type={showPassword? "text" : 'password'}
                                name='password' 
                                placeholder="password" 
                                className="input input-bordered" 
                                required 
                            />
                                <span className='ml-4' onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword? 
                                        <FaEye />
                                        :
                                        <FaEyeSlash />
                                    }
                                </span>
                        </div>
                        <Link className='hover:underline'>Forget Password</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <SocialLogin></SocialLogin>
                            <Link to={'/register'} className='mt-1 hover:underline'>Need to create an account?</Link>
                        </div>

                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;