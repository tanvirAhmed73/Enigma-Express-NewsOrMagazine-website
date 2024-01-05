import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import useAllUsers from "./useAllUsers";

const useAdmin = () => {
    const {user,loading,LogOut} = useContext(AuthContext);
    const [saveUser] = useAllUsers()
    const [isAdmin, setIsAdmin] = useState();
    useEffect(() => {
        if (user && saveUser) {
          const isAdminUser = saveUser.some(
            userWithAdmin => userWithAdmin.email === user.email && userWithAdmin.role === 'admin'
          );
          setIsAdmin(isAdminUser);
        }
      }, [saveUser, user]);
    return [isAdmin]
};

export default useAdmin;