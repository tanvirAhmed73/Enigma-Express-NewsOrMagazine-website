import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Business = () => {
    const allNews = useLoaderData();
    const filterNews = allNews.filter(news => news.section === 'business')
    return (
        <div>
            <Home title="business" filterNews={filterNews}></Home>
        </div>
    );
};

export default Business;