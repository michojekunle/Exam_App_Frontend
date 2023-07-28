'use client'

import Link from 'next/link';

const CourseCard = ({ courseCode, courseTitle }) => {
  return (
    <div className='border-2 border-gray-300 p-7 rounded-md'>
        <p className='text-xl'>
            <span className='font-bold uppercase'>{courseCode}</span>
            {" "}
            <span className=''>({courseTitle})</span>
        </p>
        <Link href='/take-test' className='block w-full text-primary text-md text-right mt-2'>learn more about course....</Link>
    </div>
  )
}

export default CourseCard