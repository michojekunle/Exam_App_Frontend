'use client'

import { useState } from 'react';
import { courses } from '@/utils/constants';
import CourseDetails from '@/components/TakeTest/CourseDetails';
import TakeTestModal from '@/components/TakeTest/TakeTestModal';

export default function TakeTest() {
  const [ displayModal, setDisplayModal ] = useState(false);

  const handleStart = () => {
    setDisplayModal((prev) => !prev);
  }
  
  return (
    <main className="w-full flex flex-col gap-10 pb-32">
      {courses.map((course) => <CourseDetails key={course.id} course={course}/>)}
      {displayModal && <TakeTestModal handleStart={handleStart}/>}
    </main>
  )
}