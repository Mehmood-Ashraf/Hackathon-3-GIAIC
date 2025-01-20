import React from "react";
import Card from "../card";
import Card1 from "../../../public/Images/Hero7Card 1.png"
import Card2 from "../../../public/Images/Hero7Card 2.png"
import Card3 from "../../../public/Images/Hero7Card 3.png"
import Card4 from "../../../public/Images/Hero7Card 4.png"


const data = [{
    id: 1,
    image: Card1,
    cardWidth: 312,
    cardHeight: 391
},{
    id: 2,
    image: Card2,
},{
    id: 3,
    image: Card3,
},{
    id: 4,
    image: Card4
}
]

const HeroSection7 = () => {
  return (
    <div className="max-w-[1170px] mx-auto lg:mb-[120px] mb-20 flex flex-col gap-[56px] justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-greatVibes text-[32px] leading-10 text-primary">
          Chefs
        </p>
        <p className="font-helvetica font-bold text-5xl leading-[56px] text-primary">
          Me<span className="text-background">et Our Chef</span>
        </p>
      </div>

      <div className="flex gap-6 flex-wrap xl:flex-nowrap justify-center">
      {data.map((element) => {
                return(
                    <Card 
                    key={element.id}
                    image={element.image}
                    cardHeight={element.cardHeight}
                    cardWidth={element.cardWidth}
                    />
                )
            })}
      </div>

      <div className="">
        <button className="border border-primary hover:bg-primary rounded-[25px] text-background py-[13px] px-[41px]">See More</button>
      </div>
    </div>
  );
};

export default HeroSection7;
