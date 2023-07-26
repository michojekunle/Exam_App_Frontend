'use client'

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { menuItems } from '@/utils/constants';

const Sidebar = () => {
  const pathname = usePathname();


  return (
    <aside className='relative font-sans flex flex-col justify-between h-full py-8 pb-32 px-6'>
      <div className='flex flex-col h-full justify-between'>
        <ul className='list-style-none p-0'>
          {menuItems.map(({href, icon, title}) => (
            <li className={`mb-4 md:mb-6 font-medium capitalize text-black pb-1 text-xl md:text-2xl ${pathname === href && 'border-b-4 border-gray-500'}`} key={title}>
              <Link href={href} className='flex items-center gap-3'>
                <span>{icon}</span>
                <span>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href='/logout' className='text-xl text-gray-600'>Log Out</Link>
      </div>
    </aside>
  )
}

export default Sidebar
