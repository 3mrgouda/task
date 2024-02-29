import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import LogoIcon from '../../assets/png/logo.png';
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
    link: "/#"
  },
]
const Navbar = ({HandlePopUP}) => {
  return (<>
    <div data-aos="fade" className='shadow-md bg-white '>
      <div className="cotainer flex justify-around md:justify-between items-center py-4 sm:py-3 px-20">
        {/* logo section */}
        <div>
        <a href="#" className='font-logos font-bold flex lg:w-full lg:text-3xl max-sm:text-xl md:w-1/6 md:text-xl text-nowrap '>&lt; Begin <img src={LogoIcon} className='max-sm:w-8 md:w-5 lg:w-10' alt="" />Front &gt;</a>
        </div>
        {/* links section */}
        <div>
          <ul className='flex items-center gap-10 '>
            {
              navLink.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className='hidden md:inline-block hover:text-primary font-semibold text-xl'>{name}</a>
                </li>
              ))}
            {/* simple drop-down and links  */}
            <li className='cursor-pointer group hidden md:block'>
              <a href="" className='inline-block hover:text-primary font-semibold text-xl'>
                <div className='flex items-center gap-[2px] py-2'>Category <span><FaCaretDown className='group-hover:rotate-180 duration-300' /></span></div>
              </a>
              {/* drop-down section */}
              <div className='absolute z-50 hidden group-hover:block w-[200px] shadow-md p-2'>
                <ul>{

                  dropDownLinks.map(({ id, name, link }) => (
                    <li key={id}>
                      <a href={link} className='inline-block w-full rounded-md p-2  hover:bg-primary/20 font-semibold text-xl'>{name}</a>

                    </li>
                  ))}</ul>
              </div>
            </li>
            {/* login btn section */}
            <li>
              <button onClick={HandlePopUP} className='flex items-center bg-secondary text-white px-1 md:px-5 text-nowrap  py-2 hover:scale-105 gap-2 duration-300'><FaUser/>My Account</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </>)
}

export default Navbar