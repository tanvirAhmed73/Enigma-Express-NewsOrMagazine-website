import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Fashion = () => {
    const allNews = useLoaderData();
    const filterNews = allNews.filter(news => news.section === 'fashion')
    return (
        <div>
            <Home title="fashion" filterNews={filterNews}></Home>
        </div>
    );
};

export default Fashion;