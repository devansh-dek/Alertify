import React from 'react'

const ButtonD = ({label}) => {
  return (
    <button className='flex transition-all justify-center items-center px-7 py-4 font-montserrat text-lg font-semibold leading-none text-[#363062] border-[#363062] border-2 hover:bg-[#363062] hover:text-[#F5E8C7]' >
        {label}
    </button>
  )
}

export default ButtonD