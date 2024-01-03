
import useAllNews from "../../hooks/useAllNews";
import Home from "../Home/Home";

const Sports = () => {
    const [news, loading] = useAllNews()
    const filterNews = news.filter(sport => sport.section === 'sports')
    return (
        <div>
            <Home title="sports" filterNews={filterNews}></Home>
        </div>
    );
};

export default Sports;