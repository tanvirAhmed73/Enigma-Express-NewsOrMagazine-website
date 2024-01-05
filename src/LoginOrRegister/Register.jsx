import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAxiosAdmin from '../hooks/useAxiosAdmin';
import SocialLogin from './SocialLogin';

const Register = () => {
    const navigate = useNavigate()
    const {signUp} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [showError, setShowError] = useState('')
    const location = useLocation();
    
    const axiosAdmin = useAxiosAdmin()
   

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setShowError('');
        
        if(password.length<6){
            setShowError('Password Should Be At Least 6 Characters')
            return
        }
        else if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)){
            setShowError('Your password should have One Upper Case, & Special')
            return
        }

        signUp(email, password)
        .then((userCredential) => {
            const userEmail = {email}
            axiosAdmin.post('/user', userEmail)
            .then(res =>{
                if(res.data.insertedId){
                    navigate(location?.state ? location?.state : '/');
        
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Register Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })


            

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
            // ..
          });

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
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
                        {
                            showError && <p className=" text-red-700" >{showError}</p>
                        }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <SocialLogin></SocialLogin>
                            <Link to={'/login'} className='mt-1 hover:underline'>Already Have An Account?</Link>
                        </div>

                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;