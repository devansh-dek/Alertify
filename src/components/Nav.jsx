import React from 'react';
import Hamburger from "../assets/icons/menu.png";

const Nav = () => {
  return (
    <header className=' py-8 absolute z-10 w-full px-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            alt='Logo'
            width={50}
            height={50}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            <li>
              <a 
                href="#"
                className='font-montserrat hover:underline leading-normal text-lg text-[#F5E8C7]'
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#"
                className='font-montserrat hover:underline leading-normal text-lg text-[#F5E8C7]'
              >
                Our Solution
              </a>
            </li>
            <li>
              <a 
                href="#"
                className='font-montserrat hover:underline leading-normal text-lg text-[#F5E8C7]'
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#"
                className='font-montserrat hover:underline leading-normal text-lg text-[#F5E8C7]'
              >
                Contact Us
              </a>
            </li>
        </ul>
        <a href='/'>
        <div className='flex relative justify-center items-center px-7 py-4 font-montserrat text-lg font-semibold leading-none rounded-full text-[#F5E8C7] border-[#F5E8C7] border-2 hover:bg-[#F5E8C7] hover:text-[#363062] max-lg:hidden'>
          Sign in 
        </div>
        </a>
        <div className='hidden max-lg:block'>
          <img 
            src={Hamburger}
            alt='Hamburger'
            width={25}
            height={25}
            className='peer/ham peer-hover/menu:hidden cursor-pointer z-[100]'
          />
          <div className='hidden hover:block peer-hover/ham:block top-[4%] fixed left-[78%] max-md:left-[70%] max-sm:left-[62%] border-2 border-white text-white w-[10rem] h-[18rem] p-3 rounded-lg m-[10px 0 0 0]'>
          <ul className='flex-column justify-around items-center'>
            <a 
                href="#"
                className='font-montserrat leading-normal text-lg'
            >
            <li className='cursor-pointer py-[12px] px-4 rounded-lg hover:bg-white text-white hover:text-slate-700'>
                Home
            </li>
            </a>
            <a 
                href="#"
                className='font-montserrat leading-normal text-lg'
            >
            <li className='cursor-pointer py-[12px] px-4 rounded-lg hover:bg-white text-white hover:text-slate-700'>
                Solution
            </li>
            </a>
            <a 
                href="#"
                className='font-montserrat leading-normal text-lg'
            >
            <li className='cursor-pointer py-[12px] px-4 rounded-lg hover:bg-white text-white hover:text-slate-700'>
                About Us
            </li>
            </a>
            <a 
                href="#"
                className='font-montserrat leading-normal text-lg'
            >
            <li className='cursor-pointer py-[12px] px-4 rounded-lg hover:bg-white text-white hover:text-slate-700'>
                Contact Us
            </li>
            </a>
          <a 
                href='/'
                className='font-montserrat leading-normal text-lg'
          >
          <li className='flex font-semibold text-xl cursor-pointer py-4 px-4 rounded-lg hover:bg-white text-white hover:text-slate-700'><span>Sign In</span></li>
          </a>
          </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;