const TakeTestModal = ({ handleStart }) => (
    <div className=''>
        <div className='overflow' onClick={handleStart}></div>
        <div className="z-20 bg-white w-[480px] shadow-slate-400 shadow-lg  h-64 flex flex-col items-center justify-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
            <p className='text-xl text-center mb-3'>Once you click this button you are starting the test.</p>
            <button className='bg-primary py-3 px-8 mt-3 text-white text-lg rounded'>Start Test</button>
        </div>
    </div>
)

export default TakeTestModal;