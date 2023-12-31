import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Sports = () => {
    const allNews = useLoaderData();
    const filterNews = allNews.filter(news => news.section === 'sports')
    return (
        <div>
            <Home title="sports" filterNews={filterNews}></Home>
        </div>
    );
};

export default Sports;