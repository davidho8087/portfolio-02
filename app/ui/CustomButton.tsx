import React, { ReactNode } from 'react'

interface CustomButtonProps {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  darkHoverTextColor?: string;
  darkHoverBgColor?: string;
  px?: string;
  py?: string;
  children: React.ReactNode;  // Correctly specifying the type for children
}

const CustomButton = ({
                        bgColor = 'bg-white',
                        textColor = 'text-gray-900',
                        borderColor = 'border-bodyBorder',
                        hoverBgColor = 'hover:bg-gray-100',
                        darkHoverTextColor = 'dark:hover:text-white',
                        darkHoverBgColor = 'dark:hover:bg-gray-700',
                        px = 'px-4',  // default horizontal padding
                        py = 'py-2',  // default vertical padding
                        children
                      }: CustomButtonProps) => {
  return (
    <button
      className=
        {`inline-flex items-center 
      ${px} ${py} text-sm font-medium ${textColor} 
      focus:outline-none ${bgColor} rounded-lg border 
      ${borderColor} ${hoverBgColor} focus:z-10 
      ${darkHoverTextColor} ${darkHoverBgColor}`}>
      {children}
      <svg className='w-3 h-3 ml-2' aria-hidden='true'
           xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
              strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
      </svg>
    </button>
  )
}

export default CustomButton
