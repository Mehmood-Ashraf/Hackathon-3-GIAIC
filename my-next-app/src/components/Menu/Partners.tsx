import React from 'react'
import Image from 'next/image'
import Partner1 from "../../../public/Icons/PartnersImage1.png" 
import Partner2 from "../../../public/Icons/PartnersImage2.png" 
import Partner3 from "../../../public/Icons/PartnersImage3.png" 
import Partner4 from "../../../public/Icons/PartnersImage4.png" 
import Partner5 from "../../../public/Icons/PartnersImage5.png" 
import Partner6 from "../../../public/Icons/PartnerImage6.png" 

const Partners = () => {
  return (
    <div className='max-w-[1320px] mx-auto flex flex-col gap-14 lg:mb-[120px] mb-20'>
            <div className='flex flex-col gap-2 text-[#333333] text-center'>
                <p className='font-inter font-normal text-[26px] leading-[26px]'>Partners & Clients</p>
                <p className='font-helvetica font-bold text-5xl leading-[56px]'>We work with the best pepole</p>
            </div>

            <div className='flex gap-[70px] flex-wrap justify-center'>
                <Image src={Partner1} alt=''></Image>
                <Image src={Partner2} alt=''></Image>
                <Image src={Partner3} alt=''></Image>
                <Image src={Partner4} alt=''></Image>
                <Image src={Partner5} alt=''></Image>
                <Image src={Partner6} alt=''></Image>
            </div>
    </div>
  )
}

export default Partners