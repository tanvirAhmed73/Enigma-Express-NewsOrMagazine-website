import { Children, createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../../firebase.init'


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const signUp = (email, password)=>{
       return createUserWithEmailAndPassword(auth,email, password);
    }

    const subsCribe = useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          });
    },[])

    const authInfo = {user,signUp}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;