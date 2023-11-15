
'use client'
import React, { useState } from 'react'
import TabButton from '@/app/components/TabButton'
import { AiFillThunderbolt } from 'react-icons/ai'


const SkillIcon = () => (
  <span className='text-textGreen'>
    <AiFillThunderbolt aria-hidden='true' />
  </span>
)


const TabSection = () => {
  const [tab, setTab] = useState(TAB_DATA[0].id) // Default to the first tab

  // Method to render skills dynamically
  const renderSkillsContent = (skills: string[]) => (
    <ul className='max-w-[450px] text-sm grid grid-cols-1 md:grid-cols-3 gap-2'>
      {skills.map((skill, index) => (
        <li key={index} className='flex items-center gap-2'>
          <SkillIcon />{skill}
        </li>
      ))}
    </ul>
  )


  const selectedTabContent = TAB_DATA.find((t) => t.id === tab)?.items

  return (
    <>
      <div className='flex flex-row justify-start mt-2'>
        {TAB_DATA.map((t) => (
          <TabButton
            key={t.id}
            selectTab={() => setTab(t.id)}
            active={tab === t.id}
          >
            {t.title}
          </TabButton>
        ))}
      </div>
      <div className='mt-4 h-48'>
        {selectedTabContent ? renderSkillsContent(selectedTabContent) :
          <p>No content available.</p>}
      </div>
    </>
  )
}

export default TabSection


const TAB_DATA = [
  {
    title: 'Back-end',
    id: 'BE',
    items: [
      'Nodejs',
      'Expressjs',
      'Strapi.io',
      'Nestjs',
      'PostgresSQL',
      'MongoDb',
      'RabbitMQ',
      'Mirco-Service',
    ],
  },
  {
    title: 'Front-end',
    id: 'FE',
    items: [
      'Reactjs',
      'Nextjs',
      'Meteorjs',
      'React-hook-form',
      'TailwindCss',
      'React-Query',
      'RechartJs',
      'Zustand'
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
      'Cloud Management',
    ],
  },
]
