'use client';

import Link from'next/link';

const NewsCard = ({ title, summary }) => {
  return (
    <article className='w-full bg-white p-4 rounded-lg'>
      <h4 className='font-bold text-xl'>Breaking News;</h4>
      <p className='text-md'>{summary} <Link href='/news-feeds' className='text-primary'>read more...</Link></p>
    </article>
  )
}

export default NewsCard
