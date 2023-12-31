import { useLoaderData } from "react-router-dom";
import Home from "../Home/Home";
import LeftSide from "../LayoutLeftMiddleRight/LeftSide";

const Tech = () => {
    const techNews = useLoaderData();
    const filterNews = techNews.filter(tech => tech.section === 'tech')
    
    return (
        <div>
            <Home title='Tech' filterNews={filterNews}></Home>
        </div>
    );
};

export default Tech;