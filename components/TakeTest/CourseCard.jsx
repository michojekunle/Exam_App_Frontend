'use client'

import Link from 'next/link';

const CourseCard = ({ courseCode, courseTitle }) => {
  return (
    <div className='border-2 border-gray-300 p-5 pb-3  rounded-md'>
        <p className='text-xl'>
            <span className='font-bold uppercase'>{courseCode}</span>
            {" "}
            <span className=''>({courseTitle})</span>
        </p>
        <Link href='/take-test' className='block w-full text-primary text-md text-right'>...learn more</Link>
    </div>
  )
}

export default CourseCard