const TakeTestModal = ({  }) => (
    <div className='flex items-center justify-center absolute w-full h-full bg-gray-400'>
           <div className="bg-white w-96 h-52  flex flex-col items-center justify-center">
            <p className=''>Once you click this button you are starting the test.</p>
            <button className='bg-primary py-3 px-8 text-white text-lg'>Start Test</button>
           </div>
    </div>
)

export default TakeTestModal;