"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function RightSide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className='w-full h-full flex flex-col items-center justify-end gap-20 text-textLight'>

      <Link href='mailto:1073113@gmail.com'>
        <p
          className='text-sm rotate-90  tracking-wide text-textGreen'>1073113@gmail.com</p>
      </Link>

      <div className='w-[2px] h-32 bg-textDark'></div>
    </motion.div>
  )
}

export default RightSide
