import { useQuery } from "@tanstack/react-query";
import useAxiosAdmin from "./useAxiosAdmin";

const useAllUsers = () => {
    const axiosSecure = useAxiosAdmin()
    const {data: saveUser = [], refetch} = useQuery({
        queryKey: ['saveUser'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/user',{
                headers:{
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data;
        }
    })
    return [ saveUser, refetch]
};

export default useAllUsers;