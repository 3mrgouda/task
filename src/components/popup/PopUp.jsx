import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

export const PopUp = ({showPopUp,setShowPopUP}) => {
  return (
        <>
   {!showPopUp && (
        <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50'>
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'>
                    {/* header section  */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className='capitalize font-bold text-2xl text-dark'>login</h1>
                        </div>
                        <div>
                            <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=>setShowPopUP(true)}/>
                        </div>

                    </div>
                     {/* login form section  */}
                     <div className='mt-4'>
                        <input type="email" placeholder='Enter Email' className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />
                        <input type="password" placeholder='Enter Password' className='w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4' />
                     </div>

                     {/* login btn section  */}
                     <div>
                        <button className='w-full bg-primary text-white p-2 rounded-md' onClick={()=>setShowPopUP(true)}>Login</button>
                     </div>

                     {/* social login  */}
                     <div className='mt-4'>
                        <p className='text-center'>or login with</p>
                        <div className='flex justify-center gap-2 mt-2'>
                            <FaFacebook className='text-3xl hover:text-blue-500 duration-200 cursor-pointer'/>
                            <FaGoogle className='text-3xl hover:text-primary duration-200 cursor-pointer'/>
                        </div>
                     </div>

                </div>
            </div>
        </div>
    )
   }
    </>
  

  )
}
