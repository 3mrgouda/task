import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const PrimaryButton = () => {
  return (
    <>
            <div className='flex items-center group'>
                <button className='bg-primary h-[40px] text-white px-3 py-2 '>choose your meal plane</button>
                <div className='group-hover:translate-x-2 cursor-pointer'>
                    <FaArrowRight className='  group-hover:translate-x-2  duration-200 p-2 text-base  text-white bg-primaryDark w-[40px] h-[40px]' />
                </div>
            </div>
            </>
  )
}

export default PrimaryButton