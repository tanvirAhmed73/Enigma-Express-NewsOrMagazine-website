import React, { Children, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import ReactLoading from 'react-loading';
import { Navigate, useLocation } from 'react-router-dom';
import useAllUsers from '../hooks/useAllUsers';
import useAdmin from '../hooks/useAdmin';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log(location.pathname)
    
    if(loading){
        return <ReactLoading className='mx-auto justify-center' type={"balls"} color={"green"} height={400} width={200} />
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/register'} replace></Navigate>

};

export default PrivateRoutes;