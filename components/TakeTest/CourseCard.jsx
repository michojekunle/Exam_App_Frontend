'use client'

import Link from 'next/link';

const CourseCard = ({ courseCode, courseTitle, small }) => {
  return (
    <div className={`border-gray-300 rounded-md ${small ? ' border p-1' : 'border-2 p-5 pb-3'}`}>
        <p className={`${small ? 'text-md pt-2 pl-2' : 'text-xl' } `}>
            <span className='font-bold uppercase'>{courseCode}</span>
            {" "}
            <span className=''>({courseTitle})</span>
        </p>
        <Link href='/take-test' className={`${small ? 'text-xs' : 'text-md' } block w-full text-primary text-right`}>...learn more</Link>
    </div>
  )
}

export default CourseCard