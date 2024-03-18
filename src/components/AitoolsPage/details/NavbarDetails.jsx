import React from 'react';
import LogoIcon from '../../../assets/png/logo.png';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";


const Navbar = () => {
  return (
    <div className="navbar  px-7 shadow-md fixed top-0 right-0 left-0  xl:mx-auto py-5 xl:py-2  xl:bg-white bg-[#F4F4F5]">

      <div className='  flex xl:w-11/12 sm:flex-row w-full xl:flex-row cursor-pointer items-center justify-around md:justify-between  mx-auto gap-5'>
        <Link to={'../'} className='flex items-center gap-4  text-xl capitalize   sm:border-solid  sm:border-black sm:border-4 rounded-md py-3 px-4 hover:scale-105  duration-200'><FaArrowLeftLong className='text-4xl sm:text-xl'  /> <div className='hidden sm:block'>Ai Tools</div></Link>

        <div className="logo flex items-center justify-between text-4xl"><Link to={'../../'} className="flex items-center">Begin <img src={LogoIcon} className='inline-block w-[50px]' alt="" /><span className='font-bold'>Front</span></Link> <div className='max-sm:block hidden w-20 '></div>
        </div>
        
      </div>
      {/* flex items-center gap-4  text-xl capitalize   border-solid border-black border-4 rounded-md py-3 px-4 hover:scale-105 duration-200 */}

    </div>
  )
}

export default Navbar