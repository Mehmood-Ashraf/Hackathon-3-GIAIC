import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from "../../../public/Images/Hero6Image1.png"
import Image2 from "../../../public/Images/Hero6Image.png"
import MenuCards from '../MenuCards'
import MenuImage1 from "../../../public/Images/Hero6Menu1.png"
import MenuImage2 from "../../../public/Images/Hero6Menu2.png"
import MenuImage3 from "../../../public/Images/Hero6Menu3.png"
import MenuImage4 from "../../../public/Images/Hero6Menu4.png"
import MenuImage5 from "../../../public/Images/Hero6Menu5.png"
import MenuImage6 from "../../../public/Images/Hero6Menu6.png"
import MenuImage7 from "../../../public/Images/Hero6Menu7.png"
import MenuImage8 from "../../../public/Images/Hero6Menu8.png"

const MenuCardData = [
    {
        id: 1,
        image: MenuImage1,
        name: "Lettuce Leaf",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },{
        id: 2,
        image: MenuImage2,
        name: "Fresh Breakfast",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "14.5$"
    },{
        id: 3,
        image: MenuImage3,
        name: "Mild Butter",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },{
        id: 4,
        image: MenuImage4,
        name: "Fresh Bread",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },{
        id: 5,
        image: MenuImage5,
        name: "Glow Cheese",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },{
        id: 6,
        image: MenuImage6,
        name: "Glow Cheese",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },{
        id: 7,
        image: MenuImage7,
        name: "Glow Cheese",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },{
        id: 8,
        image: MenuImage8,
        name: "Glow Cheese",
        detail: "Lacus nisi, et ac dapibus velit in consequat.",
        price: "12.5$"
    },
]



const HeroSection6 = () => {
  return (
    <div className='lg:mb-[120px] mb-20 max-w-[1320px] mx-auto flex flex-col gap-[56px] lg:px-0 px-3'>
        <div className='flex flex-col gap-2 text-center'>
            <p className='font-greatVibes text-[32px] leading-10 text-primary'>Choose & pick</p>
            <p className='font-helvetica font-bold text-5xl leading-[56px] text-primary'>Fr<span className='text-background'>om Our Menu</span></p>
        </div>
        <div className='flex gap-[50px] lg:gap-[100px] font-inter text-xl text-background flex-wrap justify-center'>
            <Link href={"#"} className='hover:text-primary'>BreakFast</Link>
            <Link href={"#"} className='hover:text-primary'>Lunch</Link>
            <Link href={"#"} className='hover:text-primary'>Dinner</Link>
            <Link href={"#"} className='hover:text-primary'>Desert</Link>
            <Link href={"#"} className='hover:text-primary'>Drink</Link>
            <Link href={"#"} className='hover:text-primary'>Snock</Link>
            <Link href={"#"} className='hover:text-primary'>Suops</Link>
        </div>

        <div className='flex flex-row gap-[21px] justify-around'>
            <div className='relative lg:block hidden'>
                <Image src={Image1} alt=''></Image>
                <Image src={Image2} alt='' className='absolute top-0 left-[85px]'></Image>
            </div>

            <div className='grid grid-cols-2 gap-4'>
                    {MenuCardData.map((element) => {
                        return(
                            <MenuCards 
                            key={element.id}
                            image={element.image}
                            name={element.name}
                            detail={element.detail}
                            price={element.price}
                            />
                        )
                    })}
            </div>
        </div>
    </div>
  )
}

export default HeroSection6