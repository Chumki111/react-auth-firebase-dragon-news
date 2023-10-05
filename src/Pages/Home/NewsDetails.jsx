
import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";

import { AiOutlineArrowLeft } from 'react-icons/Ai';




const NewsDetails = () => {
    const [news, setNews] = useState({})
    const { id } = useParams()
    const { title, image_url, details } = news
    console.log(id)

    const newsDetails = useLoaderData()
    console.log(newsDetails)

    useEffect(() => {
        const findNews = newsDetails?.find(aNews => aNews._id === id)
        setNews(findNews)
    }, [id, newsDetails])








    return (
        
        <div>
           
           <Header></Header>
            <div className="grid md:grid-cols-4 gap-5 mt-10">
                <div className="col-span-3">
                    <h2 className="text-2xl pb-4">Dragon News</h2>
                    <div className="card bg-base-100 border p-4">
                        <figure><img src={image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="cardoes he choose?d-actions justify-end">
                                <Link to='/'>
                                    <button className="btn btn-primary capitalize"><AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft>  All news in this category</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;


