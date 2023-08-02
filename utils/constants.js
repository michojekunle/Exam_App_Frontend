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
    id: 1,
    courseCode: "fsc 111",
    courseTitle: "Introduction to Biology",
    summary: "Biology is the study of living organisms divided into many specialized fields that covers their morphology physiology and many more. We have over 1000 questions already set for you on biology, Enjoy!! "
  },
  {
    id: 2,
    courseCode: "fsc 112",
    courseTitle: "Introduction to Chemistry",
    summary: "Chemistry is a branch of science that deals with the identification of the substances of which matter is composed. We have over 1000 questions already set for you on chemistry, Enjoy!!"
  },
  {
    id: 3,
    courseCode: "fsc 113",
    courseTitle: "Introduction Computer",
    summary: "This is the study of the principles of computer and it’s uses. We have over 300 questions already set for you on computer, Enjoy!!"
  },
  {
    id: 4,
    courseCode: "fsc 114",
    courseTitle: "Introduction to Mathematics",
    summary: "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes. We have over 1000 questions set for you on mathematics, Enjoy!!"
  },
];

export const newsfeeds = [
  {
    id: 1,
    title: "Unilag is set to start the commencement of the online based putme test.",
    content: "On the 28th of June, The school made a public announcement as regards the upcoming post utme exam that the registration will start on the 30th of June and will end on the 8th of July, While the exam will commence on  the 10th of July and will come to an end on the 13th of July.",
    date_posted: "26/6/23"
  },
  {
    id: 2,
    title: "Unilag is set to start the commencement of the online based putme test.",
    content: "On the 28th of June, The school made a public announcement as regards the upcoming post utme exam that the registration will start on the 30th of June and will end on the 8th of July, While the exam will commence on  the 10th of July and will come to an end on the 13th of July.",
    date_posted: "26/6/23"
  },
  {
    id: 3,
    title: "Unilag is set to start the commencement of the online based putme test.",
    content: "On the 28th of June, The school made a public announcement as regards the upcoming post utme exam that the registration will start on the 30th of June and will end on the 8th of July, While the exam will commence on  the 10th of July and will come to an end on the 13th of July.",
    date_posted: "26/6/23"
  },
];

export const notifications = [
  {
    id: 1,
    notification: "We will be updating our site today sdiosdf sdfosdfs fosf sfnsfsf jufefjn vnnvbof ibjbgk bgbblh bnib fb kdbuog bm,bjfbgb f,gbouf bfgbo bgobngurrjkgwiof vlsxio bndfv iog fuorg",
    date_posted: "26/6/23"
  },
  {
    id: 1,
    notification: "fuifbf ifshfb  ierfbieb rguefuierg egie gerige e guerge ggiegie geiuge geug eguiege guiegowfowfe egf erge r eufe evuefue enenevbefeve e egbwr wfeuff bbgevbfg ",
    date_posted: "26/6/23"
  },
  {
    id: 1,
    notification: "We will be updating our site today lorem ipsum atefdf dfjfdf dfdfdvusdoiw dd dfudfnvhdf uidf kdfuf dfkusdfjd fsudf u dfsudfduf dfuisdfdfhisdfu dfsuidf sdfi futing",
    date_posted: "26/6/23"
  },
]

export const performance = {
  percentage: 63,
  test_taken: 12,
  questions_answered: 56,
  answers_gotten: 35,
  courses_taken: [
    {
      id: 1,
      courseCode: "fsc 111",
      courseTitle: "Introduction to Biology",
    },
    {
      id: 2,
      courseCode: "fsc 112",
      courseTitle: "Introduction to Chemistry",
    },
    {
      id: 3,
      courseCode: "fsc 113",
      courseTitle: "Introduction Computer",
    },
  ],
  courses_not_taken: [
    {
      id: 4,
      courseCode: "fsc 114",
      courseTitle: "Introduction to Mathematics",
    },
  ]
}