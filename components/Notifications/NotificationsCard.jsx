const NotificationsCard = ({ notification, date_posted }) => {
    return (
        <article className='w-full bg-white p-6'>
            <p className='text-xl leading-8'>{notification}</p>
            <p className='block w-full text-right italic mt-4'>posted on {date_posted}</p>
        </article>
    )
}

export default NotificationsCard;