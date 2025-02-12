import React from 'react'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  return (
    <div className='app-container'>
      <div class='w-[588px] h-[144px] mt-[150px]'>
        <NavLink to={'/'}>
          <p class='w-[74px] h-[16px] font-[Poppins] text-[14px] mb-2.5 font-normal leading-[16px] text-[#BEB7FB]'>
            MaileHereko
          </p>
        </NavLink>
        <h1 class='w-[223px] text-[#EBEEF5] h-[80px] font-[Poppins] text-[64px] font-semibold leading-[80px]'>
          Movies
        </h1>
      </div>
    </div>
  )
}

export default Movies
