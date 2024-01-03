import useAllNews from "../../hooks/useAllNews";
import Home from "../Home/Home";

const Entertainment = () => {
    const [news, loading] = useAllNews()
    const filterNews = news.filter(entertainment => entertainment.section === 'entertainment')
    return (
        <div>
            <Home title="Entertainment" filterNews={filterNews}></Home>
        </div>
    );
};

export default Entertainment;