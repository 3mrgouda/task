import React, { useState } from 'react';
import api from './api.json';
import { GoLinkExternal } from "react-icons/go";
import LogoIcon from '../../assets/png/logo.png'
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import HeroImg from '../../assets/png/ai-tools.jpg'
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

    const [openMenue, setOpenMenue] = useState(false);
    const toggleMenue = () => {
        setOpenMenue(!openMenue)
    }
    const [dynamic , setDynamic] = useState();
    console.log(dynamic)

    return (
        <div className=' w-full xl:mx-auto ' >
       
            <div className="navbar px-7 shadow-md fixed top-0 right-0 left-0      xl:mx-auto py-5 xl:py-2  xl:bg-white bg-[#F4F4F5]">
            <div className='  flex xl:w-11/12 flex-col w-full xl:flex-row xl:items-center xl:justify-between mx-auto gap-2'>
                <div className="logo flex items-center justify-between text-4xl sm:text-5xl"><div className="flex items-center">Begin <img src={LogoIcon} className='inline-block w-[50px]' alt="" /><span className='font-bold'>Front</span></div> <div className='max-sm:block hidden w-20 '></div>
                    <div className='' onClick={() => toggleMenue()}> {!openMenue ? <IoMdMenu className='block xl:hidden' /> : <IoMdClose className='block xl:hidden' />}
                    </div>
                </div>

                <div className={`navLinks absolute shadow-lg font-bold font-hero xl:shadow-none xl:static xl:w-auto w-full xl:bg-white  p-5 bg-[#F4f3f5] ${openMenue ? 'block' : 'hidden'} xl:block top-[86px] left-0`}>
                    <ul className={`flex flex-col  xl:flex-row  gap-4 xl:text-center  xl:gap-10 justify-center text-2xl `} >{NavLinks.map((link, i) => (<li className='cursor-pointer xl:hover:scale-125 duration-200'  key={i}>{link.name}</li>))}</ul>
                </div>
            </div>



        </div>


        <img src={HeroImg} className='mt-[89px] xl:w-full xl:h-[670px] xl:object-cover fixed -z-10 top-0 ' alt="" />


            <div className=' flex items-center xl:w-11/12  justify-center  mx-auto mt-[330px] md:mt-[600px] xl:mt-[800px]'>
                {/* grid system */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 ">
                    {
                        api.map((item, i) => (
                            <div className="card my-5 mx-2  bg-white border-solid border-gray-100 border-2   rounded-xl p-5 shadow-lg  ">
                                <div className="flex flex-col gap-4">
                                    <a href={item.toolSite}><img src={item.imgSrc} className='cursor-pointer rounded-xl overflow-hidden w-full' alt="" /></a>
                                  <button className='bg-[#4B6BFB] bg-opacity-5 px-4 text-[#4B6BFB] rounded-md w-auto mx-auto capitalize  text-nowrap flex items-center'><a className='' href={item.toolSite}>{item.toolName}</a> <GoLinkExternal/> </button>  
                                    <p className='text-slate-600 lg:leading-tight text-xl'>{item.toolDescSm}</p>
                                    <Link to={'details'}  className='text-white rounded-md py-2 text-center   px-4 bg-[#4B6BFB] hover:bg-opacity-5 hover:text-[#4b6bfb] duration-200  capitalize text-xl text-nowrap'>More Details</Link>
                                   
                                </div>
                            </div>
                        ))}

                </div>
            </div>

        </div>
    )
}


export default ContentAi