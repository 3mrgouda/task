import React from 'react';
import heroImg from '../../assets/png/hero.png';
import PrimaryButton from '../shared/PrimaryButton';
import HeroBg from '../../assets/png/heroBg.png';
import Aos from 'aos';
const BgStyle = {
    backgroundImage:`url(${HeroBg})`,
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    width:'100%',
    height:'100',
};
const Heros = () => {
  return (
    <>
    
<div  style={BgStyle} className="relative z-[-1]">
        <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
            {/* text content section */}
            <div className='space-y-7 text-dark order-2 sm:order-1 capitalize'>
                <h1 data-aos="fade-up" className='text-5xl'>fresh & healthy meal plan <span className='text-secondary font-cursive text-7xl'>delivery</span>in miami</h1>
                <p data-aos="fade-up" data-aos-delay="300" className='lg:pr-64'>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit.velit nemo fugiat dignissimos et?</p>
                    {/* btn section */}
                    <div data-aos="fade-up" data-aos-delay="500">
                        <PrimaryButton/>
                    </div>
                </div>
            {/* image section */}
            <div data-aos="zoom-in" data-aos-delay="500" className='relative z-30 order-1 sm:order-2'>
                <img className='w-full sm:trnslate-y-16' src={heroImg} alt="" />
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Heros