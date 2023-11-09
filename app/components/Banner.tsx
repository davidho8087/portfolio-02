'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Banner() {
  return (
    <div className='flex justify-center items-center min-h-screen mt-32'>

      <section
        id='home'
        className='max-w-contentContainer min-h-screen mx-auto flex flex-col gap-6 lgl:gap-8 px-5'
      >
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-lg tracking-wide text-textGreen'>Hi, my name is
        </motion.h3>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}

        >
          <h1 className='text-4xl lgl:text-7xl font-semibold flex flex-col'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400'>
             David Ho. {' '} </span>
            <span
              className='mt-2 lgl:my-4'>{'{ build }'} = {' '}</span>
            <TypeAnimation
              sequence={[
                'Portfolio',
                2000,
                'Website',
                2000,
                'Application',
                2000,
                'things for the web',
                2000,
              ]}
              wrapper='span'
              speed={50}
              repeat={0}
            />
          </h1>
        </motion.div>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='text-base md:max-w-[650px] text-textDark font-medium'>
          {' '}
          I am web developer with 4+ years of experience in Full-Stack
          Developer.
          I have a strong foundation in front-end and back-end development.
        </motion.p>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-52 h-14 text-sm font-semibold rounded-md bg-textGreen text-light-textLight tracking-wide hover:bg-orange-200 duration-300'>
          Download Resume
        </motion.button>
      </section>
    </div>
  )
}

export default Banner