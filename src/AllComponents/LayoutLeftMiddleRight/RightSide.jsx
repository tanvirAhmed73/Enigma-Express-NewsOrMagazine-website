
const RightSide = ({filterNews}) => {
    const advertiseMent = filterNews.filter(ad=> ad.sideShow === 'advertisement')
    
    return (
        <div>
            <h1 className="text-center text-xs mb-5 text-gray-600 underline">ADVERTISEMENT</h1>
            {
                advertiseMent.map(ad => 
                    <div className="md:flex gap-3 text-xs">
                        <div>
                            <img className="w-[90px] h-[70px]" src={ad.newsUrl} alt="" />
                        </div>
                        <div>
                            <span className="text-gray-600">{ad.section.toUpperCase()}</span>
                            <span className="text-gray-600">/ date</span>
                            <h1 className=" md:text-xs text-black font-bold">{ad.newsHeading}</h1>
                        </div>
                    </div>
                    )
            }
        </div>
    );
};

export default RightSide;