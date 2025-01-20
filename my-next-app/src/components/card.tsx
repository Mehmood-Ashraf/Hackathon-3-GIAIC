import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface cardProps{
    image: StaticImageData;
    discount?: string;
    dish?: string;
    cardWidth?: number;
    cardHeight?: number;
}

const card = (props: cardProps) => {
    const {image, discount, dish, cardHeight, cardWidth} = props

  return (
    <div className='relative '>
        <Image src={image} alt='' width={cardWidth} height={cardHeight}></Image>
        <div className='flex flex-col gap-5 absolute top-1/2 left-5'>
            {discount && <div className='py-[7px] px-5 bg-white text-primary rounded-[6px]'>
                <p className='text-[18px] leading-[26px] font-inter font-bold'>{discount}</p>
            </div>}
            {dish && <div className='bg-primary text-white py-[9px] px-8 rounded-[6px]'>
                <p className='font-inter font-bold text-xl'>{dish}</p>
            </div>}
        </div>
    </div>
  )
}

export default card