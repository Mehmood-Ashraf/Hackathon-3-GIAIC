import React from 'react'

interface AboutMenuProps{
    dish: string;
    detail: string;
    price: string;
    cal: string
}

const AboutMenuCard = (props: AboutMenuProps) => {
    const {dish, detail, price, cal} = props

  return (
    <div className='flex gap-[121px]  xl:w-[648px] lg:w-[530px] justify-between cursor-pointer'>
                <div className='flex flex-col gap-2 font-helvetica text-[#333333]'>
                    <p className='font-bold md:text-2xl text-xl hover:text-primary '>{dish}</p>
                    <p className='text-[#4F4F4F]'>{detail}</p>
                    <p className='text-[#4F4F4F]'>{cal}</p>
                </div>
                <div className=''>
                    <p className='text-primary font-bold md:text-2xl text-xl'>{price}</p>
                </div>
            </div>
  )
}

export default AboutMenuCard