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
        <div>
            <div className="fixed bg-white w-full py-2 mb-5 top-0 max-sm:px-5 px-28 shadow-md flex justify-between">
                {/* logo section */}
                <div className=''>
                    <Link to='/' className='font-logos font-bold flex lg:w-full lg:text-3xl max-sm:text-2xl md:w-1/6 md:text-xl text-nowrap '>&lt; Begin <img src={LogoIcon} className='max-sm:w-8 md:w-5 lg:w-10' alt="" />Front &gt;</Link>
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

            {/* hero section  */}
            {/* <div style={BgStyle} className="text-black">hfgfgdsfgdfg</div> */}

            <div className='container bg-white max-sm:pt-5 pt-20'>
                {
                    api.map((table, i) => (
                        <div key={i} className={`max-sm:w-full 2xl:w-full lg:w-[80%] mx-auto shadow-md max-sm:h-[360px] 2xl:h-80 lg:h-60  flex max-sm:flex-col  items-center  my-10 bg-slate-200 rounded-md`}>


                            <div className="img-section  max-sm:w-full ">
                                <img className='max-sm:w-full aspect-video lg:w-[90%] 2xl:w-[78%] rounded-md ' src={table.image} alt="pereview" />
                            </div>


                            <div className="text-section flex flex-col gap-6 max-sm:gap-1 max-sm:mx-2  ">
                                <div className="preview  max-sm:text-2xl text-red-800  ">
                                    <a className='flex items-center font-bold cursor-pointer max-sm:justify-center text-[#46b855] lg:text-3xl' href="#">Wizi<GoLinkExternal className='text-xl' /></a>

                                </div>
                                <p className='2xl:text-xl'>{table.description}</p>
                                <Link className='  capitalize bg-[#46b855]  py-2 rounded-md w-[80%] 2xl:w-[95%] text-center max-sm:mx-auto' to='KnowMore'>Know More</Link>
                            </div>


                        </div>
                    ))}

            </div>

        </div>
    )
}


export default ContentAi