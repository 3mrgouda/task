import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';
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
    name: "Vegetables",
    link: "/#"
  },
  {
    id: 2,
    name: "Fruits",
    link: "/#"
  },
  {
    id: 3,
    name: "Grains",
    link: "/#"
  },
]
const Navbar = () => {
  return (<>
    <div className='shadow-md bg-white '>
      <div className="cotainer flex justify-between py-4 sm:py-3 px-20">
        {/* logo section */}
        <div className="font-bold text-3xl">logo</div>
        {/* links section */}
        <div>
          <ul className='flex items-center gap-10'>
            {
              navLink.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className='inline-block hover:text-primary font-semibold text-xl'>{name}</a>
                </li>
              ))}
            {/* simple drop-down and links  */}
            <li className='cursor-pointer group'>
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
              <button className='flex items-center bg-secondary text-white px-5 py-2 hover:scale-105 gap-2 duration-300'><FaUser/>My Account</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </>)
}

export default Navbar