import { IoNotificationsOutline, Io } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';
import { GrDocumentPerformance } from 'react-icons/gr';
import { BiBookOpen } from 'react-icons/bi';
import { HiOutlineNewspaper }  from 'react-icons/hi';

export const menuItems = [
    {
      href: "/",
      icon: <RxDashboard size={20}/>,
      title: 'Dashboard',
    },
    {
      href: "/take-test",
      icon: <BiBookOpen size={20}/>,
      title: 'Take Test'
    },
    {
      href: "/news-feeds",
      icon: <HiOutlineNewspaper size={20}/>,
      title: 'News Feeds'
    },
    {
      href: "/notifications",
      icon: <IoNotificationsOutline size={20}/>,
      title: 'Notifications'
    },
    {
      href: "/performance",
      icon: <GrDocumentPerformance size={20}/>,
      title: 'Performance'
    },
  ];