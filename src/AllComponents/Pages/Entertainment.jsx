import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";

const Entertainment = () => {
    const allNews = useLoaderData();
    const filterNews = allNews.filter(news => news.section === 'entertainment')
    return (
        <div>
            <Home title="Entertainment" filterNews={filterNews}></Home>
        </div>
    );
};

export default Entertainment;