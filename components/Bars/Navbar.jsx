import React from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'
import SearchBar from './SearchBar'
import Image from 'next/image';
import avatar from '@/public/assets/avatar.jpeg'

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center w-full bg-white dark:bg-dark'>
      <div className=''>

      </div>
      <SearchBar/>
      <div className='flex items-center gap-[40px]'>
        <div className='relative'>
          <IoNotificationsOutline size={32} className='text-[24px]'/>
          <div className='absolute bg-primary px-[3px] py-[0.5px] rounded-full text-white font-sans text-[8px] top-1 right-1 leading-1'>3</div>
        </div>
        <div className='h-[35px] w-1 rounded-md bg-gray-500'></div>
        <div className='rounded-full w-16 h-16 overflow-hidden'>
          <Image
            src={avatar}
            placeholder="blur"
            layout='responsive'
            className=''
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
