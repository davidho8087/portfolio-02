import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/components/NavBar'
import React from 'react'

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
  title: 'David-Portfolio-01',
  description: 'David PortFolio 01',
}


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} ${montSerrat.variable}`}>
    <body className='w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll'>
    {/*<body>*/}
    <NavBar />
    <main>
      {children}
    </main>
    </body>
    </html>
  )
}
