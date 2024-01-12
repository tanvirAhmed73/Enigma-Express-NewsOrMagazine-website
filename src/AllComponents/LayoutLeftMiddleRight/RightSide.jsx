import { Link } from "react-router-dom";

const RightSide = ({filterNews}) => {
    const advertiseMent = filterNews.filter(ad=> ad.sideShow === 'advertisement')
    
    return (
        <div className="">
            <h1 className="text-center text-xs mb-5 text-gray-600 underline">ADVERTISEMENT</h1>
            <div className="relative">
                <img className="w-[90px] md:w-max mb-1" src="https://i.ibb.co/XXrHb30/Adobe-Stock-r-DGz-O5t0-Iu.jpg" alt="" />
                <div className="absolute top-0">
                    <h1 className="text-xs md:text-sm">Enigma Express.News</h1>
                </div>
            </div>
            {
                advertiseMent.map(ad => 
                    <Link to={`/details/${ad._id}`}>
                        <div key={ad._id} className="md:flex  gap-3 text-xs mt-2">
                        <div>
                            <img className="w-[100px] h-[70px]" src={ad.newsUrl} alt="" />
                        </div>
                        <div>
                            <span className="text-gray-600">{ad.section.toUpperCase()}</span>
                            <span className="text-gray-600">/ date</span>
                            <h1 className="text-xs lg:text-lg text-black font-bold">{ad.newsHeading}</h1>
                        </div>
                    </div>
                    </Link>
                    )
            }
        </div>
    );
};

export default RightSide;