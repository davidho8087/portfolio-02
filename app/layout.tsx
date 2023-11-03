import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import React from 'react'
import LeftSide from '@/app/components/LeftSide'
import RightSide from '@/app/components/RightSide'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Inter',
})

const montSerrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-MontSerrat',
})

export const metadata: Metadata = {
  title: 'Sample Webpage',
  description: 'sample WebPage',
}


export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} ${montSerrat.variable}`}>
    <body
      className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>

    <NavBar />

    <main
      className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
      <div className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
        <LeftSide /></div>
      <div className='h-[88vh] w-full mx-auto p-4'>{children}</div>
      <div className='hidden xl:inline-flex w-32  h-full fixed right-0 bottom-0'>
        <RightSide /></div>
    </main>


    </body>
    </html>
  )
}
