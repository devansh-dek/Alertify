import React from 'react';
import Img from "../assets/images/statsimg.png";
import Line from '../components/Line';
import ButtonD from '../components/ButtonDark';

const Stats = () => {
  return (
    <section className='flex flex-row max-sm:flex-col mx-10 mt-40 border-2 border-slate-300 rounded-xl shadow-3xl'>
        <div className='basis-1/2'>
            <img src={Img} className='h-full object-cover rounded-xl' />
        </div>
        <div className='basis-1/2 relative flex-col p-10'>
          <h3 className='font-palanquin font-bold text-[#435585] text-4xl max-sm:w-[300px] w-[500px]'>Focusing On What Matters Most</h3>
          <Line />
          <p className='font-montserrat max-sm:text-md text-lg my-10 text-slate-700'>According to a report published by Times of India about 146,133 people were killed in road accidents in India in the year 2016. Unfortunately about 30% of deaths are caused due to delayed ambulance. Another Indian government data shows .. more than 50% of heart attack cases reach hospital late , which can constitute unavailability of ambulances too but majority of it is due to patients stuck in traffic.</p>
          <ButtonD label="VIEW DOCUMENT" />
        </div>
    </section>
  )
}

export default Stats;