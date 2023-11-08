'use client'
import { staggerContainer } from '@/app/utils/motion'
import { useState } from 'react'
import  SectionTitle  from './SectionTitle'
import Amazon from './works/Amazon'
import Apple from './works/Apple'
import Google from './works/Google'
import Splash from './works/Splash'
import { motion } from 'framer-motion'

const works = [
  { id: 'google', title: 'Google', content: <Google /> },
  { id: 'apple', title: 'Apple', content: <Apple /> },
  { id: 'splash', title: 'Splash', content: <Splash /> },
  { id: 'amazon', title: 'Amazon', content: <Amazon /> },
]

const Experience = () => {
  const [activeWork, setActiveWork] = useState(works[0].id)

  const handleWorkChange = (workId: string) => {
    setActiveWork(workId)
  }

  return (
    <motion.div
      variants={staggerContainer(0.1, 2, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
    <section id='experience'
             className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
      <SectionTitle title='Where I have Worked' titleNo='02' />
      <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
        <ul className='md:w-32 flex flex-col'>
          {works.map((work) => (
            <li
              key={work.id}
              onClick={() => handleWorkChange(work.id)}
              className={`border-l-2 ${
                activeWork === work.id
                  ? 'border-l-textGreen text-textGreen'
                  : 'border-l-hoverColor text-textDark'
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {work.title}
            </li>
          ))}
        </ul>
        <div>
          {works.find(work => work.id === activeWork)?.content}
        </div>
      </div>
    </section>
    </motion.div>
  )
}

export default Experience
