import { IoNotificationsOutline } from 'react-icons/io5'
import SearchBar from './SearchBar'
import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/assets/avatar.jpeg'

const Navbar = () => {
  return (
    <nav className='flex flex-row items-center w-full bg-white dark:bg-dark px-8 h-28'>
      <div className='md:w-72'>
        {/* Brand Logo */}
      </div>
      <div className='w-full flex items-center flex-row justify-between'>
        <SearchBar/>
        <div className='flex items-center justify-between gap-[35px]'>
        <Link href='/notifications'>
          <div className='relative'>
              <IoNotificationsOutline size={32} className='text-[24px]'/>
              <div className='absolute bg-primary px-[3px] py-[0.5px] rounded-full text-white font-sans text-[8px] top-1 right-1 leading-1'>3</div>
           </div>
         </Link>
          <div className='h-[35px] w-1 rounded-md bg-gray-400'></div>
          <div className='rounded-full w-16 h-16 overflow-hidden self-end'>
            <Image
              src={avatar}
              placeholder="blur"
              layout='responsive'
              className=''
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
