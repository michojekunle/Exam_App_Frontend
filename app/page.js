'use client'

import Image from 'next/image';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard() {
  const percentage = 63;

  return (
    <main className="w-full flex gap-7 md:gap-11">
      <div className='w-4/6 p-8'>
        <div className='w-full'>

        </div>
        <div>
        jjj
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-8'>
        <div className='bg-white rounded-xl p-4 w-full'>
         <h3 className='font-bold text-2xl capitalize'>Latest News</h3>
         <Link href='/news-feeds' className='text-md text-primary '>read more...</Link>
        </div>
        <div className='bg-white w-full rounded-xl p-4'>
            <h3 className='font-bold text-2xl capitalize'>My Performance</h3>
          <div className='flex gap-6 items-center'>
            <div className='flex flex-col gap-2 font-bold text-md'>
              <p>Total no. of test taken: 0</p>
              <p>Total no. of questions answered: 0</p>
              <p>Total no. of answers gotten: 0</p>
            </div>
            <div className='w-32 h-32'>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Colors
                  pathColor: `#3D81D0`,
                  textColor: '#3D81D0',
                  trailColor: '#ddd',
                  backgroundColor: '#000',
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
