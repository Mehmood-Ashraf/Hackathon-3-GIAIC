import React from 'react'
import ShopCard from './ShopCard'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import ShopButton1 from "../../../public/Images/OurShop/ShopButton1.png"
import ShopButton2 from "../../../public/Images/OurShop/ShopButton2.png"
import SideImage from "../../../public/Images/OurShop/Banner.png"


const Hero = async () => {

    const food = await client.fetch(
        `*[_type == "food"]{
        name,
        price,
        originalPrice,
        "image": image.asset->url,
        "slug": slug.current,
        }`
    )
  return (
    <div className='max-w-[1320px] xl:my-[120px] my-20 mx-auto flex gap-6 px-4'>
        {/**Cards Portion */}
        <div className='flex flex-col items-center justify-center gap-14'>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-6'>
                {food.map((element: any, index) => {
                    return(
                        <ShopCard
                        key={index} 
                        image={element.image}
                        name={element.name}
                        OriginalPrice={element.originalPrice}
                        DiscountedPrice={element.price}
                        slug={element.slug}
                        />
                    )
                })}
            </div>

            <div className='flex gap-3'>
                <button className='border-2 border-[#F2F2F2] text-primary hover:text-background cursor-pointer py-3 px-5'>
                    <Image src={ShopButton1} alt=''></Image>
                </button>
                <button className='border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5'>1</button>
                <button className='border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5'>2</button>
                <button className='border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5'>3</button>
                <button className='border-2 border-[#F2F2F2] text-primary  hover:text-background cursor-pointer py-3 px-5'> <Image src={ShopButton2} alt=''></Image></button>
            </div>
        </div>


        {/**Category Portion */}
        <div className='md:flex flex-col gap-6 hidden'>
            <div className='relative'>
                <input type="text" placeholder='Search Products' className='bg-pink-50 font-inter text-base font-normal py-3 px-4' />
                <button className='bg-primary w-12 h-12 absolute'></button>
            </div>

            <div className='flex flex-col gap-6'>
                <p className='font-helvetica font-bold text-xl'>category</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Sandwiches</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Burger</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Chicken Chup</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Drink</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Pizza</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Thi</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Non Veg</p>
                    </div>
                    <div className='flex gap-2'>
                    <input type="checkbox" placeholder='kkkkk'value={"Sandwiches"}/>
                    <p className='inline font-helvetica text-lg'>Uncategorized</p>
                    </div>
                    
                </div>
            </div>

            <div>
                <Image src={SideImage} alt=''></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero