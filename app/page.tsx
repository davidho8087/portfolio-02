'use client'
import About from '@/app/components/About'
import Banner from '@/app/components/Banner'
import Contact from '@/app/components/Contact'
import Experience from '@/app/components/Experience'
import LeftSide from '@/app/components/LeftSide'
import RightSide from '@/app/components/RightSide'
import Loader from '@/app/Loading'
import React, { useState } from 'react'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoaderLoaded = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 450)
  }


  return (
    <div>
      {showContent && (
        <>
          <div
            className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0 z-10'>
            <LeftSide />
          </div>

          <Banner />

            <About />

          <Experience />

          <Contact />

          <div
            className='hidden xl:inline-flex w-32  h-full fixed right-0 bottom-0 z-10'>
            <RightSide /></div>


        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  )
}
