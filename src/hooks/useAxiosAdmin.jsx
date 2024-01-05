import axios from "axios";


const axiosAdmin = axios.create({
    baseURL: 'https://enigma-express-news-server.vercel.app'
})
const useAxiosAdmin = () => {
    return axiosAdmin;
};

export default useAxiosAdmin;