import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";
import useAllNews from "../../hooks/useAllNews";

const Tech = () => {
    const [news, loading] = useAllNews()
    const filterNews = news.filter(tech => tech.section === 'tech')
    
    return (
        <div>
            <Home title='Tech' key={news._id} filterNews={filterNews}></Home>
        </div>
    );
};

export default Tech;