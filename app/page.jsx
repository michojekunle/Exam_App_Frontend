'use client'

import Image from 'next/image';
import Link from 'next/link';
import NewsCard from '@/components/NewsFeeds/NewsCard';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CourseCard from '@/components/TakeTest/CourseCard';
import { courses } from '@/utils/constants';

export default function Dashboard() {
  const percentage = 63;

  return (
    <main className="w-full flex gap-7 md:gap-11">
      <div className='w-4/6 p-8 flex flex-col gap-11'>
        <div className='w-full bg-primary rounded-xl p-3 relative font-mono'>
          <span className="upper_left"></span>
          <span className="upper_right"></span>
          <span className="lower_left"></span>
          <span className="lower_right"></span>
          <div className=''>
            <Image
              src=''
              alt=''
              layout='responsive'
            />
          </div>
          <div className="">

          </div>
        </div>
        <div className='flex flex-col w-full gap-4 bg-white rounded-xl p-8'>
          {courses.map(({courseCode, courseTitle}) => (
            <CourseCard courseCode={courseCode} courseTitle={courseTitle}/>
          ))}
          <Link href='/take-test' className='block w-full text-right text-md mt-3 text-primary '>See More Courses...</Link>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-11'>
        <div className='bg-white rounded-xl p-4 w-full'>
         <h3 className='font-bold text-2xl capitalize'>Latest News</h3>
         <div className='flex flex-col gap-5'>
            <NewsCard summary="Unilag set to start the registration of upcoming putme screening test"/>
            <NewsCard summary="Unilag set to start the registration of upcoming putme screening test"/>
         </div>
         <Link href='/news-feeds' className='text-md text-primary text-right mt-3 block w-full'>read more...</Link>
        </div>
        <div className='bg-white w-full rounded-xl p-4'>
            <h3 className='font-bold text-2xl capitalize'>My Performance</h3>
          <div className='flex gap-6 items-center'>
            <div className='flex flex-col gap-2 font-bold text-md'>
              <p>Total no. of test taken: 12</p>
              <p>Total no. of questions answered: 56</p>
              <p>Total no. of answers gotten: 35</p>
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
