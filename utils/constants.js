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

export const courses = [
  {
    courseCode: "fsc 111",
    courseTitle: "Introduction to Biology",
    summary: "Biology is the study of living organisms divided into many specialized fields that covers their morphology physiology and many more. We have over 1000 questions already set for you on biology, Enjoy!! "
  },
  {
    courseCode: "fsc 112",
    courseTitle: "Introduction to Chemistry",
    summary: "Chemistry is a branch of science that deals with the identification of the substances of which matter is composed. We have over 1000 questions already set for you on chemistry, Enjoy!!"
  },
  {
    courseCode: "fsc 113",
    courseTitle: "Introduction Computer",
    summary: "This is the study of the principles of computer and it’s uses. We have over 300 questions already set for you on computer, Enjoy!!"
  },
  {
    courseCode: "fsc 114",
    courseTitle: "Introduction to Mathematics",
    summary: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes. We have over 1000 questions set for you on mathematics, Enjoy!!"
  },
]