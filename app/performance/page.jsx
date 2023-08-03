'use client';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { performance } from "@/utils/constants";
import CourseCard from "@/components/TakeTest/CourseCard";

import 'react-circular-progressbar/dist/styles.css';


export default function Performance(){
    const { percentage, test_taken, questions_answered, answers_gotten, courses_taken, courses_not_taken } = performance;

    return (
        <main className='w-full min-h-full pb-32'>
            <div className="w-full h-full flex gap-10">
                <div className='w-2/4 bg-white rounded-xl p-8 h-full'>
                    <h4 className="capitalize text-3xl font-bold mb-12">My Performance</h4>
                    <p className="text-2xl font-medium mb-11">Total no. of test taken: {test_taken}</p>
                    <p className="text-2xl font-medium mb-11">Total no. of questions answered: {questions_answered}</p>
                    <p className="text-2xl font-medium mb-11">Total no. of answers gotten: {answers_gotten}</p>
                    <p className="text-2xl font-medium mb-11">Total no of courses taken: {courses_taken.length}</p>
                    <p className="text-2xl font-medium mb-11">Total no of courses not taken: {courses_not_taken.length}</p>
                </div>
                <div className='flex-1 flex flex-col gap-10 w-full h-full'>
                    <div className="w-full h-2/5 flex items-center justify-center p-8 bg-white rounded-xl">
                        <div className='w-2/5 max-h-[]'>
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                styles={buildStyles({
                                    // Colors
                                    pathColor: `#3D81D0`,
                                    textColor: '#3D81D0',
                                    trailColor: '#ddd',
                                    backgroundColor: '#000',
                            })}
                            />
                        </div>
                    </div>
                    <div className="w-full h-3/5 bg-white p-8 rounded-xl">
                        <h4 className='text-2xl mb-3'>Offered Courses</h4>
                        <div className='flex flex-col gap-4 pl-4 mb-4'>
                            {courses_taken.map(({ id, courseCode, courseTitle }) => <CourseCard key={id} courseCode={courseCode} courseTitle={courseTitle} small={true}/>)}
                        </div>
                        <h4 className='text-2xl mb-3'>Courses not offered yet</h4>
                        <div className='flex flex-col gap-4 pl-4'>
                            {courses_not_taken.map(({ id, courseCode, courseTitle }) => <CourseCard key={id} courseCode={courseCode} courseTitle={courseTitle} small={true}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}