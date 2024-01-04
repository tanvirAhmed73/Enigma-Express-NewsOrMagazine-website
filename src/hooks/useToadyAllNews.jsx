import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useToadyAllNews = () => {
    const axiosSecure = useAxiosSecure()
    const {data: todayNews = [], refetch} = useQuery({
        queryKey: ['todayNews'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/allNews');
            return res.data;
            
        }
    })
    return [todayNews, refetch]
};

export default useToadyAllNews;