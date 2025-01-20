import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface menuCardProps{
    image: StaticImageData;
    name: string;
    detail: string;
    price:  string
}

const MenuCards = (props: menuCardProps) => {
const {image, name, detail, price} = props

  return (
    <div className='flex gap-1'>
        <div>
            <Image src={image} alt='' className='h-full'></Image>
        </div>
        <div className='font-inter flex flex-col gap-1 text-background'>
            <p className='text-xl font-bold'>{name}</p>
            <p className='lg:block hidden text-sm leading-[22px]'>{detail}</p>
            <p className='text-primary text-lg leading-[26px] font-bold'>{price}</p>
        </div>
    </div>
  )
}

export default MenuCards