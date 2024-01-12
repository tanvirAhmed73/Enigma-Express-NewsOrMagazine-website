import React from 'react';

const DetailsCardMake = ({ data }) => {
    const {_id, newsHeading, section, srDescription, lgDescription, newsUrl, publisherName, publisherPictureUrl, sideShow} =data;
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='rounded-tl-xl mt-5 mb-5 rounded-br-xl font-semibold px-4 py-1 text-center  relative z-10 text-white bg-red-600 w-max'>{section}</h1>
            <h1 className='text-3xl text-black font-extrabold'>{newsHeading}</h1>
            <h2 className='text-gray-600'>{srDescription}</h2>
            <div className='flex mt-5'>
                <div className='avatar'>
                    <div className='w-14 rounded-full'>
                        <img className='' src={publisherPictureUrl} alt="" />
                    </div>
                </div>
                <div className='ml-4 mb-6'>
                    <h1 className='text-sm text-gray-600'>Published 1 years ago October 19</h1>
                    <h1 className='text-lg'>By {publisherName}</h1>
                </div>
            </div>
            <div className='mt-5'>
                <div className=''>
                    <img src={newsUrl} alt="" />
                    <div className='text-justify'>{lgDescription}</div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCardMake;