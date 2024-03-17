import React, { useState } from 'react';
import api from './api.json';
import { GoLinkExternal } from "react-icons/go";
import LogoIcon from '../../assets/png/logo.png'
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const ContentAi = () => {
    const NavLinks = [
        {
            name: "Html&Css",
            link: "/#"
        },
        {
            name: "JS",
            link: "/#"
        },
        {
            name: "AI tools",
            link: "/ai-tools"
        },
    ]
    const [close, setclose] = useState(true);
    const toggleclose = () => {
        setclose(!close)
    }

    return (
        <div className=''>
            <div className="fixed bg-white w-full py-2 top-0 max-sm:px-5 px-28 shadow-md flex justify-between ">
                {/* logo section */}
                <div className=''>
                    <Link to='/' className='  font-logos font-bold flex lg:w-full lg:text-3xl max-sm:text-2xl md:w-1/6 md:text-xl text-nowrap '>&lt; Begin <img src={LogoIcon} className='max-sm:w-8 md:w-5 lg:w-10' alt="" />Front &gt;</Link>
                </div>
                <div className="iconNav max-sm:block text-4xl hidden" onClick={() => toggleclose()}>
                    {
                        close ? <IoIosMenu /> : <IoCloseSharp />
                    }
                </div>
                {/* links */}


                <ul className={`flex max-sm:absolute max-sm:flex-col max-sm:py-5 max-sm:shadow-lg max-sm:bg-slate-200 max-sm:w-full max-sm:-translate-x-5  max-sm:translate-y-11  lg:text-xl font-bold uppercase max-sm:justify-around max-sm:gap-4 lg:gap-20 items-center duration-200 ${close ? '-left-96' : 'left-5'}`} >
                    {
                        NavLinks.map((item) => (
                            <li><a className='cursor-pointer' href={item.link}>{item.name}</a></li>
                        ))
                    }
                </ul>


            </div>



            <div className='container flex items-center mt-16 justify-center min-h-screen mx-auto'>
                {/* grid system */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
                    {
                        api.map((item, i) => (
                            <div className="card my-5 mx-2  bg-white border-solid border-gray-100 border-2   rounded-xl p-5 shadow-lg  ">
                                <div className="flex flex-col gap-4">
                                    <a href={item.toolSite}><img src={item.imgSrc} className='cursor-pointer rounded-xl overflow-hidden' alt="" /></a>
                                  <button className='bg-[#4B6BFB] bg-opacity-5 px-4 text-[#4B6BFB] rounded-md w-auto mx-auto capitalize  text-nowrap flex items-center'><a className='' href={item.toolSite}>{item.toolName}</a> <GoLinkExternal/> </button>  
                                    <p className='text-slate-600 lg:leading-tight'>{item.toolDescSm}</p>
                                    <button  className='text-white rounded-md    px-4 bg-[#4B6BFB]  capitalize text-xl text-nowrap'>More Details</button>

                                </div>
                            </div>
                        ))}

                </div>
            </div>

        </div>
    )
}


export default ContentAi