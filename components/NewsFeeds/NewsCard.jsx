'use client';

import Link from'next/link';

const NewsCard = ({ summary }) => {
  return (
    <article className='w-full bg-white p-3 rounded-lg border-2 border-gray-300'>
      <h4 className='font-bold text-xl'>Breaking News;</h4>
      <p className='text-md mt-3 leading-8'>{summary} <Link href='/news-feeds' className='text-primary'>read more...</Link></p>
    </article>
  )
}

export default NewsCard
