import React from 'react'

const Button = ({label}) => {
  return (
    <button className='flex transition-all justify-center items-center px-7 py-4 font-montserrat text-lg font-semibold leading-none text-[#F5E8C7] border-[#F5E8C7] border-2 hover:bg-[#F5E8C7] hover:text-[#363062]' >
        {label}
    </button>
  )
}

export default Button