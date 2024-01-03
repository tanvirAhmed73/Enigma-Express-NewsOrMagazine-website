import useAllNews from "../../hooks/useAllNews";
import Home from "../Home/Home";

const Politics = () => {
    const [news, loading] = useAllNews()
    const filterNews = news.filter(politics => politics.section === 'politics')
    return (
        <div>
            <Home title="politics" filterNews={filterNews}></Home>
        </div>
    );
};

export default Politics;