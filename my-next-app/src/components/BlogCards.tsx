import React from 'react'
import Image from 'next/image'
import Image1 from "../../public/Images/Image Placeholder.png"
import Image2 from "../../public/Images/Image Placeholder (1).png"
import Image3 from "../../public/Images/Image Placeholder (2).png"
import icon1 from "../../public/Icons/ThumbsUp.png"
import icon2 from "../../public/Icons/ChatDots.png"
import icon3 from "../../public/Icons/ShareNetwork.png"

const BlogCards = () => {
  return (
    
    <div className='flex gap-6 justify-center flex-wrap'>
        <div className='border border-background md:w-[423px] w-[323px] '>
        <div className=''>
            <Image src={Image1} alt=''></Image>
        </div>
        <div className='flex flex-col gap-8 py-[30px] px-[43px]'>
            <div className='flex flex-col gap-4'>
                <p className='font-inter text-base font-normal text-primary'>10 February 2022 </p>
                <p className='text-background font-helvetica text-2xl font-bold'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-inter text-background'>Learn More</p>
                <div className='flex gap-2'>
                    <Image src={icon1} alt='' className='w-5 h-5'></Image>
                    <Image src={icon2} alt='' className='w-5 h-5'></Image>
                    <Image src={icon3} alt='' className='w-5 h-5'></Image>
                </div>
            </div>
        </div>
    </div>

    <div className='border border-background md:w-[423px] w-[323px]'>
        <div className=''>
            <Image src={Image2} alt=''></Image>
        </div>
        <div className='flex flex-col gap-8 py-[30px] px-[43px]'>
            <div className='flex flex-col gap-4'>
                <p className='font-inter text-base font-normal text-primary'>10 February 2022 </p>
                <p className='text-background font-helvetica text-2xl font-bold'>Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-inter text-background'>Learn More</p>
                <div className='flex gap-2'>
                    <Image src={icon1} alt='' className='w-5 h-5'></Image>
                    <Image src={icon2} alt='' className='w-5 h-5'></Image>
                    <Image src={icon3} alt='' className='w-5 h-5'></Image>
                </div>
            </div>
        </div>
    </div>

    <div className='border border-background md:w-[423px] w-[323px]'>
        <div className=''>
            <Image src={Image3} alt=''></Image>
        </div>
        <div className='flex flex-col gap-8 py-[30px] px-[43px]'>
            <div className='flex flex-col gap-4'>
                <p className='font-inter text-base font-normal text-primary'>10 February 2022 </p>
                <p className='text-background font-helvetica text-2xl font-bold'>Curabitur rutrum velit ac congue malesuada</p>
            </div>
            <div className='flex justify-between'>
                <p className='font-inter text-background'>Learn More</p>
                <div className='flex gap-2'>
                    <Image src={icon1} alt='' className='w-5 h-5'></Image>
                    <Image src={icon2} alt='' className='w-5 h-5'></Image>
                    <Image src={icon3} alt='' className='w-5 h-5'></Image>
                </div>
            </div>
        </div>
    </div>
    </div>

    
  )
}

export default BlogCards