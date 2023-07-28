import React from 'react'

const CourseCard = ({ courseCode, courseTitle }) => {
  return (
    <div className='border-2 border-gray-300 p-4 '>
        <p className='text-xl'>
            <span className='font-bold uppercase'>{courseCode}</span>
            <span className=''>({courseTitle})</span>
        </p>
    </div>
  )
}

export default CourseCard