import { FooterComponent } from '@/app/components/Footer'
import { Navbar } from '@/app/components/Navbar/Navbar'
import React from 'react'


interface HomeLayoutProps {
    children: React.ReactNode
}


export const HomeLayout = ( { children } : HomeLayoutProps) => {
  return (
    <div className="min-h-screen w-full  flex flex-col items-center bg-gray-50">
      {/* Navbar */}
      <header className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex flex-col flex-grow w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        { children }
        <div className='mt-10'></div>
        <FooterComponent />
      </main>
    </div>
  )
}
