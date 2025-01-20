import React from 'react'
import Image from 'next/image'
import icon1 from "../../../public/Icons/Hero5Icon1.png"
import icon2 from "../../../public/Icons/Hero5Icon2.png"
import icon3 from "../../../public/Icons/Hero5Icon3.png"
import icon4 from "../../../public/Icons/Hero5Icon4.png"

const HeroSection5 = () => {
  return (
    <div className="bg-[url('/Images/Hero5Background.png')] bg-cover bg-center xl:h-[469px] relative flex items-center md:mb-[120px] mb-20 h-auto">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className='max-w-[1320px] mx-auto relative flex md:gap-[100px] z-10 flex-wrap justify-center gap-10 p-3'>
            <div className='flex flex-col gap-6 items-center'>
                <Image src={icon1} alt=''></Image>
                <p className='text-2xl font-helvetica font-bold text-background whitespace-nowrap'>Professional Chefs</p>
                <p className='font-helvetica text-[40px] leading-[48px] font-bold text-background'>420</p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
                <Image src={icon2} alt=''></Image>
                <p className='text-2xl font-helvetica font-bold text-background whitespace-nowrap'>Items Of Food</p>
                <p className='font-helvetica text-[40px] leading-[48px] font-bold text-background'>320</p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
                <Image src={icon3} alt=''></Image>
                <p className='text-2xl font-helvetica font-bold text-background whitespace-nowrap'>Years Of Experienced</p>
                <p className='font-helvetica text-[40px] leading-[48px] font-bold text-background'>30+</p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
                <Image src={icon4} alt=''></Image>
                <p className='text-2xl font-helvetica font-bold text-background whitespace-nowrap'>Happy Customers</p>
                <p className='font-helvetica text-[40px] leading-[48px] font-bold text-background'>220</p>
            </div>
            
        </div>
    </div>
  )
}

export default HeroSection5