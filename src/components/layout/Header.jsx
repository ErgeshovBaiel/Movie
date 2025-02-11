import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Icon from '../../assets/icon.svg'

const Header = () => {

  return (
    <div className='flex justify-center'>
      <div className='app-container z-30 fixed text-white flex justify-between pt-[25px] mx-auto'>
        <div className='flex items-center gap-[70px] '>
          <NavLink to={'/'}>
            <img src={Logo} alt='' />
          </NavLink>

          <div className='font-medium text-xl text-[#FFFFFF]'>
            <div className='flex ml-[730px] mt-[5px]'>
              <div className='flex gap-[40px]'>
                <NavLink
                  to='/movies'
                  className='w-[59px] h-[24px] font-[Poppins] text-base font-semibold text-[#A8AEBF]'
                >
                  Movies
                </NavLink>

                <NavLink
                  to='/tv shows'
                  className='w-[80px] h-[24px] font-[Poppins] text-base font-semibold text-[#A8AEBF]'
                >
                  TV Shows
                </NavLink>

                <NavLink
                to='/login'             
                className='w-[70px] h-[24px] font-[Poppins] text-base font-semibold text-[#A8AEBF] ml-[5px]'
                >
                  Login
                </NavLink>
              </div>

              <img
                width={16}
                height={16}
                src={Icon}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
