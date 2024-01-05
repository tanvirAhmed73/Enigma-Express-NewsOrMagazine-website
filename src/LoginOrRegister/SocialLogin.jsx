import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
import Swal from "sweetalert2";
const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext)
    const axiosAdmin = useAxiosAdmin()
    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then((result) => {
            navigate(location?.state? location?.state : '/')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });

            const userEmail = {
                email: result.user.email
            }
            axiosAdmin.post('/user', userEmail)
            .then(res =>{
                // 
                console.log(res.data)
            })
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });

    }


    return (
        <div className="flex my-2">
            <Link onClick={handleGoogleLogin}>
                <div className="flex justify-center items-center gap-1 bg-gray-700 rounded-lg hover:bg-green-600 p-1 text-white">

                Google <FaGoogle />
                </div>
                
                </Link>
        </div>
    );
};

export default SocialLogin;