import React from 'react';
import Apple from '../assets/png/apple.png';
import Leaf from '../assets/png/leaf.png';
import Kiwi from '../assets/png/kiwi.png';
import Lemon from '../assets/png/lemon.png';
import Tomato from '../assets/png/tomato.png';
import PrimaryButton from './shared/PrimaryButton';

export const Banner = () => {
  return (
    <>
    <div className="container py-14 relative">
        <div>
            <h1 className='capitalize tracking-wider py-8 font-semibold text-2xl text-dark text-center'>Taste The healthy difference</h1>
            <div className='space-y-10'>
                <div className='grid grid-cols-1 gap-4 py-10 sm:grid-cols-2'>
                    <p>We know that <span className='text-primary'>time</span>  is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dolorem sequi, eligendi sunt voluptate quidem, recusandae illo porro cupiditate laborum laudantium nihil voluptatibus ea officiis vero alias obcaecati incidunt ex corrupti necessitatibus quo maxime. Ex soluta molestias aliquid quae repellat perferendis, fugiat reprehenderit sed vitae alias debitis odio omnis, tempora officia dolores quisquam minima, veritatis amet distinctio inventore?</p>
                </div>
        
                <div className='grid grid-cols-1 gap-4 py-10 sm:grid-cols-2'>
                    <div></div>
                    <div>  <p>We know that <span className='text-primary'>time</span>  is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dolorem sequi, eligendi sunt voluptate quidem, recusandae illo porro cupiditate laborum laudantium nihil voluptatibus ea officiis vero alias obcaecati incidunt ex corrupti necessitatibus quo maxime. Ex soluta molestias aliquid quae repellat perferendis, fugiat reprehenderit sed vitae alias debitis odio omnis, tempora officia dolores quisquam minima, veritatis amet distinctio inventore?</p> </div>
                    
                </div>
            </div>
            <div className='flex justify-center mt-10 sm:mt-14'>
                <PrimaryButton/>
            </div>
        </div>
        {/* bg fruits png */}
        <div className='absolute top-5 left-16 opacity-50 sm:opacity-100 sm:bottom-0 sm:left-0 '> <img className='max-w-[160px]' src={Leaf} alt="" /></div>
        <div className='absolute bottom-16 left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'> <img className='max-w-[280px]' src={Tomato} alt="" /></div>
        <div className='absolute right-16 top-10 sm:right-20 opacity-50 sm:opacity-100'> <img className='max-w-[200px]' src={Lemon} alt="" /></div>
        <div className='hidden sm:block absolute bottom-0 right-0'><img className='max-w-[200px]' src={Apple} alt="" /></div>
        <div className='absolute top-1/2 translate-y-1/2 left-1/3 translate-x-1/2 opacity-50 sm:opacity-100'> <img src={Kiwi} className='max-w-[180px]' alt="" /></div>
    </div>
    </>
  )
}
