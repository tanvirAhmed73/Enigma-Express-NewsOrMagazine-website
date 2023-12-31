import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Politics = () => {
    const allNews = useLoaderData();
    const filterNews = allNews.filter(news => news.section === 'politics')
    return (
        <div>
            <Home title="politics" filterNews={filterNews}></Home>
        </div>
    );
};

export default Politics;