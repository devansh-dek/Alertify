import React from 'react';
import Line from '../components/Line';
import Right from "../assets/icons/next.png";
import Intersection from "../assets/icons/intersection.png";
import Back from "../assets/icons/arrow.png";
import Do from "../assets/images/dosimg.avif";

const Drivers = () => {
  return (
    <section className='flex xl:h-[600px] flex-row gap-[100px] max-sm:gap-10 max-md:flex-col border-2 mx-10 border-slate-300 rounded-xl justify-center px-20 py-10 items-start'>
        <div className='basis-1/2 mt-10 relative left-[-20px] flex-col'>
            <h3 className='font-palanquin font-bold text-[#435585] text-4xl max-sm:w-[300px] w-[400px]'>What to do when you recieve an alert?</h3>
            <Line />
            <p className='font-montserrat max-sm:text-md text-lg mt-10 text-slate-700'>These are the necessary steps you should abide by when you recieve an alert. Try to help as much as possible, so that lives could be saved.</p>
            <img src={Do} className='h-[200px] m-10 max-sm:hidden' />
        </div>
        <div className='grid relative grid-cols-2 max-sm:grid-cols-1 gap-5 grid-rows-2 basis-1/2'>
          <div className='p-6 relative shadow-3xl top-[-100px] hover:scale-[1.05] transition hover:rotate-[-1deg] cursor-pointer max-sm:top-0 h-[300px] w-[250px] rounded-xl bg-[#363062]'>
            <img src={Right} className='h-7 w-7 mb-4 relative left-[45%]' />
            <h4 className='text-[#F5E8C7] font-bold text-center text-2xl'>Pull Over to the Right</h4>
            <p className='text-white text-center py-6'>Safely pull over to the right side of the road and come to a complete stop if necessary.</p>
          </div>
          <div className='p-6 h-[300px] shadow-3xl w-[250px] hover:scale-[1.05] transition hover:rotate-1 cursor-pointer rounded-xl bg-[#363062]'>
            <img src={Intersection} className='h-7 w-7 mb-4 relative left-[45%]' />
            <h4 className='text-[#F5E8C7] font-bold text-center text-2xl'>Stop at Intersections</h4>
            <p className='text-white text-center py-6'>If you're at an intersection, stop and allow the emergency vehicle to pass before proceeding.</p>
          </div>
          <div className='relative shadow-3xl top-[-100px] hover:scale-[1.05] transition hover:rotate-[-1deg] cursor-pointer max-sm:top-0 p-6 h-[300px] w-[250px] rounded-xl bg-[#363062]'>
            <img src={Intersection} className='h-7 w-7 mb-4 relative left-[45%]' />
            <h4 className='text-[#F5E8C7] font-bold text-center text-2xl'>Avoid Blocking Intersections</h4>
            <p className='text-white text-center py-6'>Do not block intersections. Clear the intersection to allow the emergency vehicle to pass through.</p>
          </div>
          <div className='p-6 shadow-3xl h-[300px] w-[250px] hover:scale-[1.05] transition hover:rotate-1 cursor-pointer rounded-xl bg-[#363062]'>
            <img src={Back} className='h-7 w-7 mb-4 relative left-[45%]' />
            <h4 className='text-[#F5E8C7] font-bold text-center text-2xl'>Stay a Safe Distance Behind</h4>
            <p className='text-white text-center py-6'>If you're behind an emergency vehicle, stay a safe distance behind it. Emergency vehicles may stop abruptly.</p>
          </div>
        </div>
    </section>
  )
}

export default Drivers;