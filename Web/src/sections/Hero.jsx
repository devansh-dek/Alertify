import React from 'react';
import HeroImg from "../assets/images/Hero.webp";
import Line from '../components/Line';
import Button from '../components/Button';
import Nav from '../components/Nav';

const Hero = () => {
  return (
    <section className='w-full flex flex-col justify-start'>
    <Nav />
    <img src={HeroImg} className='h-[650px] w-full object-cover' />
    <div className='absolute top-20 flex flex-col justify-center items-start w-full pt-18 pl-20'>
        <Line />
        <h1 className='mt-2 font-palanquin text-8xl max-sm:text-[62px] font-bold'>
          <span className='text-[#818FB4]'>Smarter Alerts,</span>
          <br />
          <span className='text-[#F5E8C7]'>Safer Roads</span>
        </h1>
        <Line />
        <p className='font-montserrat text-slate-200 text-lg leading-8 my-8 max-sm:max-w-sm max-sm:text-sm'>Alertify notifies drivers within range of emergency vehicle to make space for emergency vehicles.</p>
        <Button label="Start Alertify Today"/>
    </div>
    <div className="relative bottom-[95px] left-0 w-full rotate-180">
      <svg data-name="Layer 1" className='relative block h-[96px] w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
      </svg>
    </div>
    </section>
  )
}

export default Hero;