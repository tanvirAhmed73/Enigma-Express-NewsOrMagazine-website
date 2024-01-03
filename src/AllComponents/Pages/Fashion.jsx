import useAllNews from "../../hooks/useAllNews";
import Home from "../Home/Home";

const Fashion = () => {
    const [news, loading] = useAllNews()
    const filterNews = news.filter(fashion => fashion.section === 'fashion')
    return (
        <div>
            <Home title="fashion" filterNews={filterNews}></Home>
        </div>
    );
};

export default Fashion;