'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
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


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ImageLogo() {
  return (
    <Link href='#' className='-m-1.5 p-1.5'>
      <span className='sr-only'>Your Company</span>
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
    </Link>
  )
}

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  return (
    <div>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <ImageLogo />
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <div className='hidden lg:flex lg:gap-x-12'>
            {linksArray.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-sm font-semibold leading-6 hover:text-textGreen duration-300'
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/*Mobile Menu*/}
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel
          className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <ImageLogo />
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {linksArray.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}

export default NavBar


