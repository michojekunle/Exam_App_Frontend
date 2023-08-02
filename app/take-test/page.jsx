import { courses } from '@/utils/constants';
import CourseDetails from '@/components/TakeTest/CourseDetails'

export default function TakeTest() {
  return (
    <main className="w-full flex flex-col gap-10">
      {courses.map((course) => <CourseDetails key={course.id} course={course}/>)}
    </main>
  )
}