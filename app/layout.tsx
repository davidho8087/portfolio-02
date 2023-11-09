
import ThemeSwitch from '@/app/components/themeSwitch'
import ThemeContextProvider from '@/app/provider/ThemeContext'
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
      className='w-full h-screen bg-gradient-to-t from-orange-50 text-textLight overflow-x-hidden overflow-y-scroll'>
    <ThemeContextProvider>
      <NavBar />
      <main
        className='w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
        <div className='h-[88vh] w-full mx-auto p-4'>{children}</div>
      </main>
      <ThemeSwitch />
    </ThemeContextProvider>


    </body>

    </html>

  )
}
