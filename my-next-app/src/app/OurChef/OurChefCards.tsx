import React from 'react'
import Image from 'next/image'



interface ChefCardProps{
  image: string;
  name: string;
  designation: string;
}

const OurChefCards = (props: ChefCardProps) => {
  const {image, name, designation} = props

  return (
    <div className=''>
        <div>
            <Image src={image} alt='' width={400} height={400}></Image>
            <div className='bg-background h-[88px] justify-center items-center flex flex-col'>
                <p className='text-[#4F4F4F] font-helvetica font-bold text-xl text-center'>{name}</p>
                <p className='text-[#828282] font-helvetica text-center'>{designation}</p>
            </div>
        </div>
    </div>
  )
}

export default OurChefCards