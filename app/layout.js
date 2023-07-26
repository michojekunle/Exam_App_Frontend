import './globals.css'
import { usePathname } from 'next/navigation';
import { inter, roboto_mono } from './fonts';
import Navbar from '@/components/Bars/Navbar';
import Sidebar from '@/components/Bars/Sidebar';


export const metadata = {
  title: 'Exam App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <div className='w-full max-w-[2200px] mx-auto h-screen overflow-hidden border'>
          <Navbar/>
          <div className='flex flex-col md:flex-row h-full'>
            <div className='w-full md:w-72 h-full relative'>
              <Sidebar/>
            </div>
            <main className='flex-1 bg-gray-300 h-full font-sans p-6'>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
