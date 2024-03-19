import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GoLinkExternal } from "react-icons/go";
import { FaStarHalfAlt } from "react-icons/fa";




import api from '../api.json';

const Content = () => {
    const {id} = useParams();
   const stringId = id.toString();
     
   

    return (
        <div>
            <div className="showDetails absolute top-0 -z-10 flex flex-col  justify-center mt-[158px] xl:mt-[100px] m-5 gap-10 2xl:gap-24">
                <p className='flex items-center gap-2 font-bold xl:text-2xl  -my-10 sm:-my-5 2xl:-mb-20'><FaStarHalfAlt className='text-green-500'/>{api[stringId].rate}</p>
                <h2 className='text-2xl sm:text-3xl xl:text-4xl'>what is <span className='text-green-500 font-bold'>{api[stringId].toolName}</span>?</h2>
                <div className="describtion text-xl text-left">{api[stringId].toolDesc}</div>
                <div className="imgFrame border-green-500 border-solid border-2 xl:w-[600px] xl:mx-auto rounded-md w-full">
                                    <img src={api[stringId].imgSrc} className='sm:w-[700px]' alt="" />

                </div>

                <button className=' text-white rounded-md py-2 text-center   px-4 bg-green-500 hover:bg-opacity-5 hover:text-green-500 duration-200  capitalize text-xl text-nowrap'> <a href={api[stringId].toolSite} className='flex items-center justify-center gap-2'> visit website<GoLinkExternal/> </a> </button>

            </div>
        </div>
    )
}

export default Content