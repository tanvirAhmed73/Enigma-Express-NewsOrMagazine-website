import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCardMake from './DetailsCardMake';

const DetailsPages = () => {
    const [data, setData] = useState([])

    const {id} = useParams();

    const newsDetails = useLoaderData()

    useEffect( ()=>{
        const findData = newsDetails.find(perData => perData._id == id)
        setData(findData);
    },[id, newsDetails]);
    return (
        <div>
            <DetailsCardMake data= {data}></DetailsCardMake>
        </div>
    );
};

export default DetailsPages;