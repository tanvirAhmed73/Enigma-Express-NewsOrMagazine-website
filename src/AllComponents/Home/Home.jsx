import { useEffect, useState } from "react";
import LeftSide from "../LayoutLeftMiddleRight/LeftSide";
import Middle from "../LayoutLeftMiddleRight/Middle";
import RightSide from "../LayoutLeftMiddleRight/RightSide.jsx";

const Home = ({title, filterNews}) => {
    const [ad, setAd] = useState([]);
    useEffect(() => {
        fetch('https://enigma-express-news-server.vercel.app/allNews')
          .then(res => res.json())
          .then(data => setAd(data))
          .catch(error => console.error("Error fetching data:", error));
      }, []);

    
    return (
        <div className="grid grid-cols-4 gap-2 justify-evenly mt-6">

            {/* left side  */}
            <div className="">
                <LeftSide title={title} filterNews={filterNews}></LeftSide>
            </div>

            {/* middle  */}
            <div className=" col-span-2">
                <Middle filterNews={filterNews}></Middle>
            </div>
            
            {/* right side */}
            <div className=" right-0">
                <RightSide filterNews={ad}></RightSide>
            </div>
        </div>
    );
};

export default Home;