'use client'

import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { menuItems } from '@/utils/constants';

const Sidebar = () => {
  const router = useRouter();


  return (
    <aside className='relative font-sans flex flex-col justify-between h-full py-32 px-6'>
      <div className='flex flex-col h-full justify-between'>
        <ul className='list-style-none p-0'>
          {menuItems.map(({href, icon, title}) => (
            <li className={`gap-1 mb-8 md:mb-11 font-bold capitalize text-black text-2xl md:text-[32px] ${router.asPath === href && 'bg-slate-700 border border-b-8 border-gray-500'}`} key={title}>
              <Link href={href} className='flex items-center gap-4'>
                <span>{icon}</span>
                <span>{title}</span>
              </Link>
              <span>{router.asPath}</span>
            </li>
          ))}
        </ul>
        <Link href='/logout' className='text-2xl text-black'>Log Out</Link>
      </div>
    </aside>
  )
}

export default Sidebar
