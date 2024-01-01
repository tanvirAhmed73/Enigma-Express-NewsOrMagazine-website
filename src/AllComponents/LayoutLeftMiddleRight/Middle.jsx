
const Middle = ({filterNews}) => {
    const middleNewsFilter = filterNews.filter(news=> news.sideShow === 'middle')
    
    return (
        <div>
            {
                middleNewsFilter.map(middleNews =>

                    <div className="relative mb-3">
                        <img
                            className="z-10 relative"
                            src={middleNews.newsUrl}
                            alt=""
                        />
                        <div className="absolute top-0 w-full h-full z-20"
                            style={{
                                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))'
                            }}>
                        </div>
                        <div className="z-20 absolute px-2 bottom-0 text-xs">
                            <span className="font-semibold text-sky-400 ">{middleNews.section.toUpperCase()} / </span>
                            <span className="text-gray-400">Date</span>
                            <h1 className="font-extrabold md:text-2xl  text-white">{middleNews.newsHeading}</h1>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Middle;