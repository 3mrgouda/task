import React from 'react';

import Ract from '../../assets/png/React.png';
import Html from '../../assets/png/html.png';
import JS from '../../assets/png/JS.png';
import Css from '../../assets/png/css.png';
import PrimaryButton from '../shared/PrimaryButton';

export const Banner = () => {
  return (
    <>
    <div className="container py-14 relative">
        <div>
            <h1 className='capitalize tracking-wider py-8 font-semibold text-2x text-dark text-center '>What Is Front End Development?</h1>
            <div  data-aos="fade-up" data-aos-delay="300"className='space-y-10'>
                <div  className='grid grid-cols-1 gap-4 z-30 py-10 sm:grid-cols-2'>
                    <p>Are you intrigued by the world of web <span className='text-primary'>frontend </span>  development, where you get to be the creative director, designing how websites look and feel using <strong>HTML, CSS, and JavaScript</strong> ? Ever wondered about the magic behind buttons changing colors or pages smoothly transitioning? If you're into making websites both functional and visually appealing, could web frontend development be your calling?</p>
                </div>
        
                <div data-aos="fade-up" data-aos-delay="300" className='grid grid-cols-1 gap-4 py-10 sm:grid-cols-2'>
                    <div></div>
                    <div >  <p><span className='text-primary'>Front-end</span> developers are also known as front-end engineers, front-end web developers, JavaScript Developers, HTML/CSS Developer, front-end web designers, and front-end web architects.

Each of these roles mostly encompass the same front-end development skills but require different levels of expertise in different front-end development skills. It's better to look at the job description to get an idea about the job requirements.</p> </div>
                    
                </div>
            </div>
            <div className='flex justify-center mt-10 sm:mt-14'>
                <PrimaryButton/>
            </div>
        </div>
        {/* bg fruits png */}
        <div className='absolute top-5 left-16 opacity-50 sm:opacity-100 sm:bottom-0 sm:left-0 '> <img data-aos='fade-right' className='max-w-[80px]' src={Html} alt="" /></div>
        <div className='absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'> <img data-aos='fade-right' className='max-w-[80px]' src={Css} alt="" /></div>
        <div className='absolute right-16 top-10 sm:right-20 opacity-50 sm:opacity-100'> <img data-aos='fade-left' className='max-w-[80px]' src={JS} alt="" /></div>
        <div className='hidden sm:block absolute bottom-0 right-0'><img className='max-w-[80px]' data-aos='fade-left' src={Ract} alt="" /></div>
    </div>
    </>
  )
}
