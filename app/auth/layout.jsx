export default function  Layout({ children }) {
    return (
        <div className="flex w-full min-h-screen items-center justify-center">
            <div className='w-full md:w-4/5 min-h-[500px] flex items-center shadow-black shadow-2xl'>
                <div className=""></div>
                <div className="">{children}</div>
            </div>
        </div>
    )
}