import { useEffect, useState } from "react";

const useAllNews = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/allNews')
        .then(res => res.json())
        .then( data => {
            setNews(data)
            setLoading(false)
        })
    },[])
    return [news,loading]
};

export default useAllNews;