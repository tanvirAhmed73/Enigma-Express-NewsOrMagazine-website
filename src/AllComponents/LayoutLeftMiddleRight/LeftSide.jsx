import SectionTitle from "../SectionTitle/SectionTitle";

const LeftSide = ({title, filterNews}) => {
    const leftNewsFilter = filterNews.filter(news=> news.sideShow === 'leftSide')
    return (
        <div>
            <SectionTitle title={title}></SectionTitle>
            {
                leftNewsFilter.map(news => 
                <div key={news._id} className="mb-2 md:mb-10 text-xs">
                    <img src={news.newsUrl} alt="" />
                    <span className="font-semibold text-gray-600">{news.section.toUpperCase()} / </span>
                     
                    <span className="text-gray-600">Date</span>
                    <h1 className="font-bold md:font-extrabold md:text-sm lg:text-xl text-black">{news.newsHeading}</h1>
                </div>
                )
            }

        </div>
    );
};

export default LeftSide;