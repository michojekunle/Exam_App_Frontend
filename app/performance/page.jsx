import { CircularProgressbar } from "react-circular-progressbar";
import { performance } from "@/utils/constants";

export default function Performance(){
    const { percentage, test_taken, questions_answered, answers_gotten, courses_taken, courses_not_taken } = performance;

    return (
        <main className='w-full h-full pb-32'>
            <div className="w-full flex gap-10">
                <div className='w-2/4 bg-white rounded-xl p-8'>
                    <h4 className="capitalize text-3xl font-bold mb-5">My Performance</h4>
                    <p className="text-2xl font-bold mb-8">Total no. of test taken: {test_taken}</p>
                    <p className="text-2xl font-bold mb-8">Total no. of questions answered: {questions_answered}</p>
                    <p className="text-2xl font-bold mb-8">Total no. of answers gotten: {answers_gotten}</p>
                    <p className="text-2xl font-bold mb-8">Total no of courses taken: {courses_taken.length}</p>
                    <p className="text-2xl font-bold mb-8">Total no of courses not taken: {courses_not_taken.length}</p>
                </div>
                <div className='flex-1 flex flex-col'>
                    <div className="w-full">
                        <div className='w-32 h-32'>
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
                    <div className="w-full"></div>
                </div>
            </div>
        </main>
    )
}