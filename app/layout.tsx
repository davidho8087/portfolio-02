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


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} ${montSerrat.variable}`}>
    <body className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>

    <NavBar />
    <div>
      <main className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <LeftSide />
        <div>{children}</div>
        <RightSide />
      </main>

    </div>
    </body>
    </html>
  )
}
