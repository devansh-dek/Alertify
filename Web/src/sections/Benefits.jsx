import React from 'react';
import Dash from "../assets/images/dashboardimg.jpg";
import Alert from "../assets/images/alertimage.avif";
import Game from "../assets/images/gameimg.png";

const Benefits = () => {
  return (
    <section className='mx-10 mt-40 flex flex-col'>
        <div className='relative flex flex-col text-center h-28 items-center p-5'>
          <h3 className='font-palanquin font-bold text-[#435585] text-4xl'>What Alertify offers for organizations</h3>
          <div className='relative h-1 w-20 bg-[#818FB4] mt-7'></div>
        </div>
        <div className='flex flex-row max-sm:flex-col max-sm:ml-[50px] max-sm:mt-10 ml-36 justify-center'>
            <div className='basis-1/3 flex flex-col'>
                <img src={Dash} className='h-[300px] w-[300px]' />
                <h3 className='w-[300px] text-center text-lg font-semibold'>Real-time Situational Dashboard</h3>
                <p className='w-[300px] text-md text-slate-700 text-center p-5'>A detailed dashboard using which organizations can efficiently manage their fleet and track their locations and routes.</p>
            </div>
            <div className='basis-1/3 flex flex-col'>
                <img src={Alert} className='h-[300px] w-[300px]' />
                <h3 className='w-[300px] text-center text-lg font-semibold'>Emergency Alerts</h3>
                <p className='w-[300px] text-md text-slate-700 text-center p-5'>The primary feature is to facilitate faster response times for emergency vehicles, such as ambulances, fire trucks, and police cars, by alerting drivers to clear the way ahead of these vehicles.</p>
            </div>
            <div className='basis-1/3 flex flex-col'>
                <img src={Game} className='h-[300px] w-[300px]' />
                <h3 className='w-[300px] text-center text-lg font-semibold'>Awareness Game</h3>
                <p className='w-[300px] text-md text-slate-700 text-center p-5'>This software also includes an awareness game that will educate you about the practices related to emergency vehicle clearance.</p>
            </div>
        </div>
    </section>
  )
}

export default Benefits;