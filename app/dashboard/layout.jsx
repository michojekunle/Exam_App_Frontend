import Navbar from '@/components/Bars/Navbar';
import Sidebar from '@/components/Bars/Sidebar';

export default function Layout({ children }) {
    return (
        <div>
            <div className='w-full max-w-[2200px] mx-auto h-screen overflow-hidden flex flex-col'>
                 <Navbar/>
                 <div className='flex-1 flex flex-col md:flex-row h-full'>
                    <div className='w-full md:w-72 h-full relative'>
                        <Sidebar/>
                    </div>
                    <main className='flex-1 bg-gray-300 h-full font-sans p-10 overflow-y-scroll'>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}