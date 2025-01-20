import React from 'react'
import Card from '../card'
import card1 from "../../../public/Images/Hero3 card1.png"
import card2 from "../../../public/Images/Hero3 card2.png"
import card3 from "../../../public/Images/Hero3 card3.png"
import card4 from "../../../public/Images/Hero3 card4.png"


const data = [{
    id: 1,
    image: card1,
    discount: "Save 30%",
    dish: "Fast Food Dish",
    cardWidth: 305,
    cardHeight: 328
},{
    id: 2,
    image: card2,
},{
    id: 3,
    image: card3,
},{
    id: 4,
    image: card4
}
]

const HeroSection3 = () => {
  return (
    <div className='max-w-[1320px] mx-auto flex gap-[56px] flex-col lg:px-0 px-3 md:mb-[120px] mb-20'>
        <div className='flex flex-col gap-2 text-center'>
            <p className='font-greatVibes text-[32px] leading-10 text-primary'>Food Category</p>
            <p className='font-helvetica font-bold text-5xl leading-[56px] text-primary'>Ch<span className='text-background'>oose Food Item</span></p>
        </div>

        <div className='flex gap-8 flex-wrap justify-center'>
            {data.map((element) => {
                return(
                    <Card 
                    key={element.id}
                    image={element.image}
                    discount={element.discount}
                    dish={element.dish}
                    cardHeight={element.cardHeight}
                    cardWidth={element.cardWidth}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default HeroSection3