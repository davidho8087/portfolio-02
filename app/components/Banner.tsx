'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Banner() {
  return (
    <div className='flex justify-center items-center min-h-screen mt-72'>

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
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='text-4xl lgl:text-7xl font-semibold flex flex-col'
        >David Ho. {' '}
          <span
            className='text-textDark mt-2 lgl:mt-4'>I build things for the web
        </span>
          {/*<TypeAnimation*/}
          {/*  sequence={[*/}
          {/*    "Web Developer",*/}
          {/*    1000,*/}
          {/*    "Mobile Developer",*/}
          {/*    1000,*/}
          {/*    "UI/UX Designer",*/}
          {/*    1000,*/}
          {/*  ]}*/}
          {/*  wrapper="span"*/}
          {/*  speed={50}*/}
          {/*  repeat={0}*/}
          {/*/>*/}
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='text-base md:max-w-[650px] text-textDark font-medium'>
          {' '}
          I am web developer with 4+ years of experience in Full-Stack
          Developer.
          I have a strong foundation in front-end and back-end development.
          <Link className='block' href='http://localhost:3000' target='_blank'>
          <span
            className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
            Learn More
          <span
            className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
          </span>
          </Link>
        </motion.p>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className='w-52 h-14 text-sm border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>
          Check out my Projects!
        </motion.button>
      </section>
    </div>
  )
}

export default Banner