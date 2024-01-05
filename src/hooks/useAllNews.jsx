import { useEffect, useState } from "react";

const useAllNews = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('https://enigma-express-news-server.vercel.app/allNews')
        .then(res => res.json())
        .then( data => {
            setNews(data)
            setLoading(false)
        })
    },[])
    return [news,loading]
};

export default useAllNews;