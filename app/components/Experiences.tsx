import { MotionDiv } from '@/app/components/frame'
import SectionTitle from '@/app/components/SectionTitle'
import CustomButton from '@/app/ui/CustomButton'
import { staggerContainer } from '@/app/utils/motion'

const Experiences = () => {
  return (
    <MotionDiv
      variants={staggerContainer(0.1, 2, 0.5)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
    >
      <section
        id='about'
        className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8 px-5'
      >
        <div className='flex flex-col lgl:flex-row gap-6 items-start'>
          <SectionTitle title='Experiences' />

          <ol
            className='relative border-l border-gray-200 dark:border-gray-700'>
            <li className='mb-10 ml-4'>
              <div
                className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time
                className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>Present
              </time>
              <h3
                className='text-lg font-semibold'>Full-Stack Developer <span
                className='text-dark-textGreen'>@Singapore</span>
              </h3>
              <p
                className='mb-4 text-base font-normal text-textDark'> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Get access to over 20+ pages
                including a dashboard layout, charts, kanban board, calendar,
                and pre-order E-commerce
                & Marketing pages.</p>

            </li>
            <li className='mb-10 ml-4'>



              <div
                className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
              <time
                className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>March
                2021
              </time>
              <h3
                className='text-lg font-semibold'>Full-Stack Developer <span
                className='text-dark-textGreen'>@Singapore</span>
              </h3>

              <p
                className='text-base font-normal text-gray-500 dark:text-gray-400'>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.All
                of the pages and components are first
                designed in Figma and we keep a parity between the two
                versions even as we update the project.</p>


            </li>
            <li className='mb-10 ml-4'>
              <CustomButton
                bgColor='bg-gray-100'
                textColor='text-gray-900'
                borderColor='border-bodyBorder'
                hoverBgColor='hover:bg-gray-100'
                darkHoverTextColor='dark:hover:text-white'
                darkHoverBgColor='dark:hover:bg-gray-700'
                px='px-6'
                py='py-3'
              >
                Get Resume
              </CustomButton>
            </li>

          </ol>

        </div>


      </section>
    </MotionDiv>
  )
}

export default Experiences