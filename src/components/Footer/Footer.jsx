import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from 'react-icons/fa';


export const Footer = () => {
    return (
        <>
            <div className="text-white mt-20">
                <div className="container bg-gradient-to-b from-primary to-primaryDark">
                    <h1 className='capitalize py-10 text-3xl font-bold text-yellow text-center'>contact us</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
                        {/* Address section  */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <IoLocationSharp className='text-5xl' />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga vero delectus, culpa voluptatum architecto voluptatibus?</p>
                        </div>

                        {/* Email section  */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <MdEmail className='text-5xl' />
                            </div>
                            <p>lorem@gamil.com</p>
                            <p>lorem@contactInfo.com</p>
                        </div>

                        
                        {/* Number section  */}
                        <div className='text-center space-y-4'>
                            <div className='flex justify-center'>
                                <FaPhone className='text-5xl' />
                            </div>
                            <p>+203215622454212</p>
                            <p>+203215622454212</p>
                        </div>



                    </div>
                    <div className='flex justify-between p-4 items-center'>
                        <p>copy right 2024 GoodFood. All rights reversed</p>
                        <div className='flex items-center gap-6'>
                            <a href="#">Privacy polices</a>
                            <a href="#">Terms and conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
