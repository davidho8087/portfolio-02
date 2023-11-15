// 'use client'
import About from '@/app/components/About'
import Banner from '@/app/components/Banner'
import Contact from '@/app/components/Contact'
import Experiences from '@/app/components/Experiences'
import LeftSide from '@/app/components/LeftSide'
import RightSide from '@/app/components/RightSide'
import Loader from '@/app/Loading'

export default function Home() {

  return (
    <div>
      <Banner />
      <LeftSide />

      <About />
      <Experiences />
      <Contact />
      <RightSide />
    </div>
  )
}
