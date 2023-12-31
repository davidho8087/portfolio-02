'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandFacebook,
} from 'react-icons/tb'

function LeftSide() {
  // Define an array of objects for each social link
  const socialLinks = [
    {
      href: 'https://github.com/davidho8087',
      icon: <TbBrandGithub />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/davidho107',
      icon: <TbBrandLinkedin />,
      label: 'LinkedIn',
    },
    {
      href: 'https://www.youtube.com/@TheJazzHopCafe',
      icon: <TbBrandYoutube />,
      label: 'YouTube',
    },
    {
      href: 'https://www.facebook.com/Davidho.Navitas',
      icon: <TbBrandFacebook />,
      label: 'Facebook',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
      <div className='flex flex-col gap-4'>
        {socialLinks.map((link, index) => (
          <Link key={index} href={link.href} aria-label={link.label}
                target='_blank'>
              <span
                className='w-10 h-10 inline-flex items-center justify-center text-xl bg-hoverColor rounded-full hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                {link.icon}
              </span>
          </Link>
        ))}
      </div>
      <div className='w-[2px] h-32 bg-textDark'></div>
    </motion.div>
  )
}

export default LeftSide
