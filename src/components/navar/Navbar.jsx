import React, { useState } from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import LogoIcon from '../../assets/png/logo.png';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
const navLink = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "About",
    link: "/#"
  },
  {
    id: 3,
    name: "Contact",
    link: "/#"
  },
];
const dropDownLinks = [
  {
    id: 1,
    name: "Html&Css",
    link: "/#"
  },
  {
    id: 2,
    name: "JS",
    link: "/#"
  },
  {
    id: 3,
    name: "AI tools",
    link: "/ai-tools"
  },
]
const Navbar = ({ HandlePopUP }) => {
  const [openMenue, setOpenMenue] = useState(false);
  const toggleMenue = () => {
    setOpenMenue(!openMenue)
  }

  return (<>
 
    <div  className='fixed z-50 bg-white -mt-1 py-1  flex xl:w-11/12 flex-col w-full xl:flex-row xl:items-center xl:justify-between mx-auto gap-2'>
      <Link to={'../../'} className="logo w-10/12 mx-auto flex items-center justify-between text-4xl sm:text-5xl"><div className="flex items-center">Begin <img src={LogoIcon} className='inline-block w-[50px]' alt="" /><span className='font-bold'>Front</span></div> <div className='max-sm:block hidden w-20 '></div>
        <div className='' onClick={() => toggleMenue()}> {!openMenue ? <IoMdMenu className='block xl:hidden' /> : <IoMdClose className='block xl:hidden' />}
        </div>
      </Link>

      <div className={`navLinks -z-10 absolute shadow-lg font-bold font-hero xl:shadow-none xl:static xl:w-auto w-full xl:bg-white  p-5 bg-[#F4f3f5] ${openMenue ? 'block' : 'hidden'} xl:block top-[55px] left-0`}>
        <ul className={`flex flex-col  xl:flex-row  gap-4 xl:text-center  xl:gap-10 justify-center items-center text-2xl `} >{navLink.map((link, i) => (<li className='cursor-pointer  duration-200' key={i}>{link.name}</li>))}

          <li className='cursor-pointer  duration-200 group '>
            <a href="" className='inline-block hover:text-primary font-semibold text-2xl'>
              <div className='flex items-center gap-[2px] py-2'>Category <span><FaCaretDown className='group-hover:rotate-180 duration-300' /></span></div>
            </a>
            <div className='absolute z-50 hidden left-[25%] group-hover:block w-[200px] shadow-md bg-slate-200 p-2'>
              <ul>{

                dropDownLinks.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link to={link} className='inline-block w-full rounded-md p-2  hover:bg-primary/20 font-semibold text-xl'>{name}</Link>

                  </li>
                ))}</ul>
            </div>
          </li>
          <li>
              <button onClick={HandlePopUP} className='flex items-center bg-secondary text-white px-1 md:px-5 text-nowrap  py-2 hover:scale-105 gap-2 duration-300'><FaUser />My Account</button>
            </li>

        </ul>

      </div>
    </div>

  </>)
}

export default Navbar