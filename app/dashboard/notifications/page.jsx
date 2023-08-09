import { notifications } from "@/utils/constants";
import NotificationsCard from "@/components/Notifications/NotificationsCard";


export default function Notifications() {
  return (
    <main className="w-full min-h-full pb-32">
      {notifications.length > 0 ? (
        <div className='flex flex-col gap-8'>
          {notifications.map(({ id, notification, date_posted }) => <NotificationsCard notification={notification} date_posted={date_posted} key={id} /> )}
        </div>
      ) : (
        <div className="flex w-full h-full items-center justify-center text-2xl ">
          No notification Yet
        </div>
      )}
    </main>
  )
}