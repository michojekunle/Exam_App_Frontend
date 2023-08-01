import NewsDetail from '@/components/NewsFeeds/NewsDetail';
import { newsfeeds } from '@/utils/constants';

export default function NewsFeeds() {
  return (
    <main className="w-full h-full pb-32">
      {newsfeeds.length < 0 ? (
        <div className='w-full flex flex-col gap-10' >
          {newsfeeds.map(feed => <NewsDetail feed={feed} key={feed.id}/>)}
        </div>
      ) : (
        <div className='flex w-full h-full items-center justify-center text-2xl'>
          No News Yet
        </div>
      )}
    </main>
  )
}