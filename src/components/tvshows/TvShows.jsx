import React from 'react'
import { NavLink } from 'react-router-dom'

const TvShows = () => {
  return (
    <div className='app-container'>
      <div class='w-[588px] h-[144px] mt-[150px]'>
        <NavLink to={'/'}>
          <p class='w-[74px] h-[16px] font-[Poppins] text-[14px] mb-2.5 font-normal leading-[16px] text-[#BEB7FB]'>
            MaileHereko
          </p>
        </NavLink>
        <h1 class='w-[320px] h-[80px] font-[Poppins] text-[64px] font-semibold leading-[80px] text-[#EBEEF5]'>
          TV Shows
        </h1>
      </div>
    </div>
  )
}

export default TvShows
