import React from 'react'
import { FaBus } from 'react-icons/fa'

export const WhyChoose = () => {
  return (
    <>
    <div className="py-14 md:py-28 bg-gray-50">
      <div className="container">
        {/* Heading section */}
        <h1 className='capitalize tracking-wider py-8 font-semibold text-2xl text-dark text-center'>why choose uS</h1>
        {/* card section  */}
        <div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-14 sm:gap-4">
            {/* 1st card */}
            <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p className='rotate-90 text-primary text-5xl text-center translate-x-5'>....</p>
              <FaBus className='text-5xl text-primary'/>
            </div>
            {/* second card */}
            <div className='text-center flex justify-center items-center flex-col-reverse gap-1 px-2'>
              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p className='rotate-90 text-secondary text-5xl text-center translate-x-5'>....</p>
              <FaBus className='text-5xl text-secondary'/>
            </div>
            {/* third card */}
            <div className='text-center flex justify-center items-center flex-col gap-1 px-2'>
              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p className='rotate-90 text-primary text-5xl text-center translate-x-5'>....</p>
              <FaBus className='text-5xl text-primary'/>
            </div>
            {/* forth card */}
            <div className='text-center flex justify-center items-center flex-col-reverse gap-1 px-2'>
              <p className='text-dark/70 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <p className='rotate-90 text-secondary text-5xl text-center translate-x-5'>....</p>
              <FaBus className='text-5xl text-secondary'/>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}
