import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase.init'
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosAdmin from "../hooks/useAxiosAdmin";
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    const axiosAdmin = useAxiosAdmin()

    const signUp = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
        
    }

    const logIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const LogOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosAdmin.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
          });
          return ()=>{
            return unsubsCribe();
          }
    },[])

    const authInfo = {user,loading,signUp,logIn,LogOut,googleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;