import React from 'react'
import login from '../../assets/login.svg'
import Email from '../../assets/email.svg'
import Password from '../../assets/password.svg'
import Eyes from '../../assets/eyes.svg'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='app-container flex gap-[200px] pb-[200px]'>
      <div className='w-[384px] h-[560px] rounded-[36px] bg-[#121829] relative top-[150px]'>
        <img
          className='w-[500px] h-[600px] relative bottom-[30px] left-[75px]'
          src={login}
          alt=''
        />
      </div>

      <div className='relative mt-[230px] '>
        <h1
          className='w-[486px] h-[80px] font-[Poppins] mb-10
         font-semibold text-[64px] leading-[80px] text-[#C3C8D4]'
        >
          Login
        </h1>
        <div>
          <input
            className='w-[486px] h-[64px] rounded-[12px] pl-[56px]
            border-2 border-[#323B54] outline-none  p-[12px_16px] bg-[#121829] 
          text-[#475069] placeholder:w-[38px] placeholder:h-[16px] placeholder:font-[Poppins]
           placeholder:font-normal placeholder:text-[14px] placeholder:leading-[16px] 
           placeholder:text-[#475069]'
            type='text'
            placeholder='Email'
          />

          <img className='absolute top-[142px] left-4' src={Email} alt='' />
        </div>

        <div>
          <input
            className='w-[486px] h-[64px] rounded-[12px] mt-4 pl-[56px]
               border-2 border-[#323B54] outline-none  p-[12px_16px] bg-[#121829] 
             text-[#475069] placeholder:w-[68px] placeholder:h-[16px] placeholder:font-[Poppins]
           placeholder:font-normal placeholder:text-[14px] placeholder:leading-[16px] 
           placeholder:text-[#475069]'
            type='text'
            placeholder='Password'
          />

          <img className='absolute top-[223px] left-4' src={Password} alt='' />
          <img
            className='absolute top-[223px] left-[440px]'
            src={Eyes}
            alt=''
          />
        </div>

        <NavLink to={'/'}>
          <button
            className='mt-10 w-[486px] h-[56px] rounded-[12px] cursor-pointer
           p-[16px_32px] bg-[#7B6EF6]'
          >
            <span
              className='w-[43px] h-[24px] font-[Poppins] text-white
             font-medium text-[18px] leading-[24px]'
            >
              Login
            </span>
          </button>{' '}
        </NavLink>
      </div>
    </div>
  )
}

export default Login
