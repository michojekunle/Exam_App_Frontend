'use client'

import Image from 'next/image';
import Link from 'next/link';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import NewsCard from '@/components/NewsFeeds/NewsCard';
import CourseCard from '@/components/TakeTest/CourseCard';
import { courses } from '@/utils/constants';

import DashboardAvatar from '@/public/assets/dashboard_avatar.png'
import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard() {
  const percentage = 63;

  return (
    <main className="w-full flex gap-7 md:gap-10  pb-32">
      <div className='w-3/5 flex flex-col gap-10'>
        <div className='w-full bg-primary rounded-xl p-12 relative flex gap-4'>
          <span className="upper_left">
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="70" viewBox="0 0 90 70" fill="none">
              <rect width="70.5804" height="66.4286" rx="11.625" transform="matrix(1 0 0 -1 -4 70)" fill="white" fill-opacity="0.2"/>
              <rect width="70.5804" height="66.4286" rx="11.625" transform="matrix(1 0 0 -1 19.25 43.429)" fill="white" fill-opacity="0.2"/>
            </svg>
          </span>
          <span className="upper_right">
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81" fill="none">
              <rect width="60.9292" height="57.3451" rx="10.0354" fill="white" fill-opacity="0.2"/>
              <rect x="20.0708" y="22.938" width="60.9292" height="57.3451" rx="10.0354" fill="white" fill-opacity="0.2"/>
            </svg>
          </span>
          <span className="lower_left">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="49" viewBox="0 0 50 49" fill="none">
              <rect width="37.1875" height="35" rx="6.12501" fill="white" fill-opacity="0.2"/>
              <rect x="12.25" y="14" width="37.1875" height="35" rx="6.12501" fill="white" fill-opacity="0.2"/>
            </svg>
          </span>
          <span className="lower_right">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
              <rect width="33.3928" height="31.4285" rx="5.49999" transform="matrix(1 0 0 -1 0 44)" fill="white" fill-opacity="0.2"/>
              <rect width="33.3928" height="31.4285" rx="5.49999" transform="matrix(1 0 0 -1 11 31.4287)" fill="white" fill-opacity="0.2"/>
            </svg>
          </span>
          <div className='w-[550px] max-h-72 overflow-hidden'>
            <Image
              src={DashboardAvatar}
              alt='image_v'
              placeholder='blur'
              layout='responsive'
              className='object-cover'
            />
          </div>
          <div className="text-white font-mono">
            <h5 className='text-md mb-3'>Hi, Opeyemi Ayinke</h5>
            <h3 className='text-2xl'>Welcome to Exam App</h3>
            <p className='my-5 text-md'>
              We strive to ensure that your pre-exam experience is optimized,
              enabling you to excel in the actual examination and achieve your
              full potential.
            </p>
            <button className='text-primary bg-white py-4 px-5 rounded-lg'>Get Started</button>
          </div>
        </div>
        <div className='flex flex-col w-full gap-4 bg-white rounded-xl p-8'>
          <h3 className='font-bold text-2xl capitalize mb-2'>Courses</h3>
          {courses.map(({id, courseCode, courseTitle}) => (
            <CourseCard courseCode={courseCode} courseTitle={courseTitle} key={id} small={false}/>
          ))}
          <Link href='/take-test' className='block w-full text-right text-md mt-3 text-primary '>See other courses...</Link>
        </div>
      </div>
      <div className='flex-1 flex flex-col gap-10'>
        <div className='bg-white rounded-xl p-4 w-full'>
         <h3 className='font-bold text-2xl capitalize mb-2'>Latest News</h3>
         <div className='flex flex-col gap-5'>
            <NewsCard summary="Unilag set to start the registration of upcoming putme screening test"/>
            <NewsCard summary="Unilag set to start the registration of upcoming putme screening test"/>
            <NewsCard summary="Unilag set to start the registration of upcoming putme screening test"/>
         </div>
         <Link href='/news-feeds' className='text-md text-primary text-right mt-3 block w-full'>see more...</Link>
        </div>
        <div className='bg-white w-full rounded-xl p-4'>
            <h3 className='font-bold text-2xl capitalize mb-2'>My Performance</h3>
          <div className='flex gap-4 items-center justify-between'>
            <div className='flex flex-col gap-2 font-bold text-sm md:text-md'>
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
