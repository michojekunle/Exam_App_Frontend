import './globals.css'
import { inter, roboto_mono } from './fonts';
import Navbar from '@/components/Bars/Navbar';
import Sidebar from '@/components/Bars/Sidebar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto_mono.variable}`}>
        <div className='w-full max-w-[1500px] min-h-[100vh]'>
          <Navbar/>
          <div className=''>
            <div className=''>
              <Sidebar/>
            </div>
            <div className=''>
              {children}
            </div>
          </div>
        </div>
      
      </body>
    </html>
  )
}
