import { imageProfile } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'

const ImageProfile = () => {
  return (
    <div className='w-[250px] h-[250px] lg:mt-0 lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full'>
      <Image
        width={300}
        height={300}
        src={imageProfile}
        alt='Profile image'
        layout='responsive'
      />
    </div>
  )
}

export default ImageProfile


