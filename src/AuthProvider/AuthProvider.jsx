import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../firebase.init'


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);

    const signUp = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
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
            setLoading(false);
          });
          return ()=>{
            return unsubsCribe();
          }
    },[])

    const authInfo = {user,loading,signUp,logIn,LogOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;