'use client'

import { useTheme } from '@/app/provider/ThemeContext'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'


interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

interface Bar3IconProps {
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

type ImageLoader = (props: ImageLoaderProps) => string;

const linksArray = [
  { text: 'Product', href: '#' },
  { text: 'Features', href: '#' },
  { text: 'Marketplace', href: '#' },
  { text: 'Company', href: '#' },
]

const imageLoader: ImageLoader = ({ src }) => {
  const color = 'red' // default color
  const shade = '600' // default shade
  return `https://tailwindui.com/img/logos/${src}?color=${color}&shade=${shade}`
}

const getVariants = (index: number): Variants => ({
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      // Each link's delay is incremented by 0.1 starting from 0.1
      delay: 0.1 * (index + 1),
    },
  },
})


function ImageLogo() {
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },

  }

  return (
    <Link href='#' className='-m-1.5 p-1.5'>
      <span className='sr-only'>Your Company</span>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={imageVariants}
      >
        <Image
          loader={imageLoader}
          src='mark.svg'
          alt='Picture of logo'
          quality={75}
          className='h-8 w-auto'
          width={40}
          height={40}
          priority={true}
        />
      </motion.div>
    </Link>

  )
}

function Bar3Icon({ setMobileMenuOpen }: Bar3IconProps) {
  return (
    <div className='flex lg:hidden'>
      <button
        type='button'
        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-textGreen'
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className='sr-only'>Open main menu</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  )
}

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { toggleDarkMode } = useTheme();


  const handleToggleTheme = () => {
    toggleDarkMode(); // Use the toggle function provided by the context
  };
  return (
    <div>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <ImageLogo />
        </div>
        {/*Bar3Icon Clickable*/}
        <Bar3Icon setMobileMenuOpen={setMobileMenuOpen} />
        {/*TODO Split component*/}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <ul className='hidden lg:flex lg:gap-x-8 items-center'>
            {linksArray.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className='text-sm font-semibold leading-6 hover:text-textGreen duration-300'
                >

                  <motion.div
                    initial='initial'
                    animate='animate'
                    variants={getVariants(index)}
                  >
                    <span className='text-textGreen mr-2'>{(index + 1).toString().padStart(2, '0')}</span>
                    {link.text}
                  </motion.div>
                </Link>
              </li>
            ))}
            <li className='flex z-20'>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='px-3 py-1 rounded-md text-textGreen text-sm font-semibold leading-6 border border-textGreen hover:bg-hoverColor duration-300 '
                onClick={handleToggleTheme} // Use handleToggleTheme here

              >Resume
              </motion.button>
            </li>
          </ul>
        </div>
      </nav>

      {/*Mobile Menu*/}
      {/*TODO Split component*/}
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel
          className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bodyColor px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <ImageLogo />
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6 text-textGreen hover:text-red-600 duration-300' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <ul className='space-y-2 py-6'>
                {linksArray.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className='-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-sm hover:text-textGreen duration-300'
                    >
                      <motion.div
                        initial='initial'
                        animate='animate'
                        variants={getVariants(index)}
                      >
                        <span className='text-textGreen mr-2'>{(index + 1).toString().padStart(2, '0')}</span>
                        {link.text}
                      </motion.div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default NavBar


