const CourseDetails = ({ course, handleStart }) => {
  const { courseCode, courseTitle, summary } = course;

  return (
    <div className='bg-white w-full p-8 relative'>
      <h3 className='text-2xl mb-2'>
        <span className="font-bold uppercase">{courseCode}</span>
        {" "}
        <span>({courseTitle})</span>
      </h3>
      <p className='pl-6 text-lg'>{summary}</p>
      <button className='bg-primary text-lg py-2 px-8 absolute right-3 bottom-8 mt-5 rounded outline-0 text-white' onClick={handleStart}>Start</button>
    </div>
  )
}

export default CourseDetails