import React from 'react'
import Polygon from '../../assets/png/polygon.png';
import Vector from '../../assets/png/vector-wave.png';
import { FaUser } from 'react-icons/fa';
export const About = ({HandlePopUP}) => {
    const BgStyle = {
        backgroundImage:`url(${Polygon})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'100%',
        height:'100',
    };
  return (
    <>
    <div className='py-14 relative' style={BgStyle}>
        <div className="container min-h-[500px] relative z-10">
        <h1 className='capitalize tracking-wider py-8 font-semibold text-2xl text-dark text-center'>About US</h1>
        {/* card section  */}
        <p className='bg-white/80 p-10 my-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae eos assumenda sapiente eligendi iste, deleniti eius cupiditate qui et aperiam ullam rerum ab porro quibusdam, iure repudiandae libero. Eum distinctio dolores animi minima perspiciatis, reiciendis enim dicta quae? Eveniet, deserunt nihil? Aperiam totam consequatur sed earum cupiditate iure quis iste labore eveniet repellendus quasi sapiente non sit dolorem vel facere, blanditiis esse repudiandae at nulla dignissimos molestiae? Eaque reiciendis harum unde impedit quis laborum ipsum aut nemo architecto? Quidem blanditiis quibusdam porro veniam quasi atque delectus dignissimos possimus. Animi exercitationem asperiores nemo provident molestias modi officiis illum veniam impedit distinctio!</p>
        <div className='flex justify-center pt-10'>
        <button onClick={HandlePopUP} className='flex justify-center items-center bg-primary text-white px-5 py-2 hover:scale-105 gap-2 duration-300'><FaUser/>My Account</button>
        </div></div>
        <div className='top-0 right-0 w-full absolute'><img src={Vector} className='w-full mx-auto' alt="" /></div>
    
    </div>
    </>
  )
}
