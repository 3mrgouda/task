import React from 'react';
import { GoLinkExternal } from "react-icons/go";



import api from '../api.json';

const Content = () => {
    return (
        <div>
            <div className="showDetails my-32  flex flex-col  justify-center mt-[158px] xl:mt-[100px] m-5 gap-10 2xl:gap-24">
                <h2 className='text-2xl sm:text-3xl xl:text-4xl'>what is <span className='text-green-500 font-bold'>{api[1].toolName}</span>?</h2>
                <div className="describtion text-xl text-left">{api[1].toolDesc}</div>
                <div className="imgFrame border-green-500 border-solid border-2 xl:w-1/2 2xl:w-1/3 xl:mx-auto rounded-md w-full">
                                    <img src={api[1].imgSrc} className='sm:w-[700px]' alt="" />

                </div>

                <button className=' text-white rounded-md py-2 text-center   px-4 bg-green-500 hover:bg-opacity-5 hover:text-green-500 duration-200  capitalize text-xl text-nowrap'> <a href={api[1].toolSite} className='flex items-center justify-center gap-2'> visit website<GoLinkExternal/> </a> </button>

            </div>
        </div>
    )
}

export default Content