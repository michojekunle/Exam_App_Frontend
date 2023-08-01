import React from 'react'

const NewsDetail = ({ feed }) => {
  const { title, content, date_posted }  = feed;

  return (
    <article className='bg-white px-8 py-6 w-full'>
      <h3 className='font-bold text-[22px] mb-4'>Breaking News;</h3>
      <h5 className='text-xl '>{title}</h5>
      <p className='my-4 text-md leading-8'>{content}</p>
      <p className='w-full text-right italic mt-5'>Posted on {date_posted}</p>
    </article>
  )
}

export default NewsDetail;
