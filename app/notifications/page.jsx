import { notifications } from "@/utils/constants";
import NotificationsCard from "@/components/Notifications/NotificationsCard";


export default function Notifications() {
  return (
    <main className="w-full h-full pb-32">
      {notifications.length < 0 ? (
        <div className='flex flex-col gap-8'>
          {notifications.map(({ id, notification }) => <NotificationsCard notification={notification} key={id} /> )}
        </div>
      ) : (
        <div className="flex w-full h-full items-center justify-center text-2xl ">
          No notification Yet
        </div>
      )}
    </main>
  )
}