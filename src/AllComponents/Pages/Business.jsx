
import Home from "../Home/Home";
import useAllNews from "../../hooks/useAllNews";

const Business = () => {
    const [news, loading] = useAllNews()
    const filterNews = news.filter(business => business.section === 'business')
    return (
        <div>
            <Home title="business" filterNews={filterNews}></Home>
        </div>
    );
};

export default Business;