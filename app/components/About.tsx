'use client'
import ImageProfile from '@/app/components/ImageProfile'
import SectionTitle from '@/app/components/SectionTitle'
import SkillList from '@/app/components/SkillList'
import TabButton from '@/app/components/TabButton'
import { staggerContainer } from '@/app/utils/motion'


import { motion } from 'framer-motion'
import React, { useTransition, useState } from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'


const TAB_DATA = [
  {
    title: 'Back-end Lib / Framework',
    id: 'BE',
    items: [
      'Nodejs',
      'Expressjs',
      'Strapi.js',
      'Nestjs',
      'PostgresSQL',
      'MongoDb',
    ],
  },
  {
    title: 'Front-end Lib / Framework',
    id: 'FE',
    items: [
      'Reactjs',
      'Nextjs',
      'Meteorjs',
      'React-hook-form',
      'TailwindCss',
      'RadixUI',
      'React Query',
      'Rechart.js',
    ],
  },
  {
    title: 'DevOps',
    id: 'DEVOPS',
    items: [
      'GitLab CI/CD',
      'GitHub CI/CD',
      'Docker',
      'Prometheus',
      'Grafana',
      'ELK',
    ],
  },
]

const SkillIcon = () => (
  <span className='text-textGreen'>
    <AiFillThunderbolt aria-hidden='true' />
  </span>
)


const About = () => {
  const [tab, setTab] = useState(TAB_DATA[0].id)
  const handleTabChange = (newTab: string) => {
    setTab(newTab)
  }

  // Find the content to display based on the current tab
  const selectedTabContent = TAB_DATA.find((t) => t.id === tab)?.items

  // Method to render skills dynamically
  const renderSkillsContent = (skills: string[]) => (
    <ul className='max-w-[450px] text-sm grid grid-cols-3 gap-2'>
      {skills.map((skill, index) => (
        <li key={index} className='flex items-center gap-2'>
          <SkillIcon />{skill}
        </li>
      ))}
    </ul>
  )


  return (
    <motion.div
      variants={staggerContainer(0.1, 2, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <section
        id='about'
        className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 px-5'
      >
        <div className='flex flex-col lgl:flex-row gap-16'>
          <div className='self-center lg:self-start lg:mt-10'>
            <ImageProfile />
          </div>

          <div
            className='w-full lgl:w-2/3 flex flex-col gap-4'>
            <SectionTitle title='About Me' titleNo='01' />
            <p className='text-base text-textDark font-medium'>

            Hello! My name is Noor Mohammad and I enjoy creating things that
              live on the internet. My interest in web development started back
              in
              2012 when I decided to try editing custom Tumblr themes — turns
              out
              hacking together a custom weblog button taught me a lot about HTML
              &
              CSS!
            </p>
            <p className='text-base text-textDark font-medium'>

            Fast-forward to today, and I had the privilege of working at an
              advertising agency, a start-up,{' '}
              <span className='text-textGreen'>
                a huge corporation, and a student-led design studio.
              </span>
            </p>
            <p className='text-base text-textDark font-medium'>Here are a few
              technologies I have been working with
              recently:</p>

            <div className='flex flex-row justify-start mt-8'>
              <TabButton
                selectTab={() => handleTabChange('BE')}
                active={tab === 'BE'}
              >
                Back-end
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('FE')}
                active={tab === 'FE'}
              >
                Front-end
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange('DEVOPS')}
                active={tab === 'DEVOPS'}
              >
                Dev-Ops
              </TabButton>
            </div>
            <div className='mt-8 h-48'>
              {selectedTabContent ? renderSkillsContent(selectedTabContent) :
                <p>No content available.</p>}
            </div>

          </div>

        </div>

      </section>
    </motion.div>
  )
}

export default About