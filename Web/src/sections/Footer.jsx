import React from 'react';
import Insta from "../assets/icons/instagram (1).png";
import Wap from "../assets/icons/whatsapp.png";
import Linked from "../assets/icons/linkedin (2).png";
import Twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <section className='h-[50px] w-full bg-[#435585] flex justify-between flex-row'>
        <div className='text-[#F5E8C7] font-semibold p-3 pl-10'>Copyright &copy; 2024. Agnish</div>
        <div className='flex flex-row gap-8 p-4 pr-20'>
            <img src={Insta} className='h-5 w-5' />
            <img src={Wap} className='h-5 w-5' />
            <img src={Linked} className='h-4 w-4' />
            <img src={Twitter} className='h-3 w-3 mt-1' />
        </div>
    </section>
  )
}

export default Footer;