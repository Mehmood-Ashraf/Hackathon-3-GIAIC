import React from "react";
import Image from "next/image";
import Card1 from "../../../public/Images/Hero4Card1.png";
import Card2 from "../../../public/Images/Hero4Card2.png";
import Card3 from "../../../public/Images/Hero4Card3.png";
import Card4 from "../../../public/Images/Hero4Card4.png";
import Card5 from "../../../public/Images/Hero4Card5.png";
import Card6 from "../../../public/Images/Hero4Card6.png";
import Icon1 from "../../../public/Icons/Hamburger.png"
import Icon2 from "../../../public/Icons/Cookie.png"
import Icon3 from "../../../public/Icons/Wine.png"

const HeroSection4 = () => {
  return (
    <div className="max-w-[1320px] mx-auto flex xl:px-0 px-3 gap-[135px] items-center flex-col lg:flex-row md:mb-[120px] mb-20">
      <div className="cards flex flex-col gap-4">
        <div className="flex items-baseline gap-4">
          <div className="">
            <Image src={Card1} alt="" width={362} height={356}></Image>
          </div>
          <div>
            <Image src={Card2} alt="" width={281} height={231}></Image>
          </div>
        </div>

        <div className="flex gap-4">
            <div>
                <Image src={Card3} alt="" width={244} height={306}></Image>
            </div>
            <div>
                <Image src={Card4} alt="" width={221} height={226}></Image>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    <Image src={Card5} alt="" width={161} height={168}></Image>
                </div>
                <div>
                    <Image src={Card6} alt="" width={161} height={166}></Image>
                </div>
            </div>
        </div>

      </div>

      <div className="content flex flex-col gap-8 w-1/2 items-center lg:items-start">
      <div className='flex flex-col gap-2 lg:text-left text-center'>
            <p className='font-greatVibes text-[32px] leading-10 text-primary'>Why Choose us</p>
            <p className='font-helvetica font-bold text-5xl leading-[56px] text-primary'>Ex<span className='text-background'>tra ordinary taste And Experienced </span></p>
        </div>

        <div>
        <p className="font-inter text-base text-background text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.flex-col
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
        </div>

        <div className="icons flex gap-[33px]">
            <div className="flex flex-col gap-2">
                <div className="bg-primary rounded-md md:p-[22px]">
                    <Image src={Icon1} alt=""></Image>
                </div>
                <p className="text-background font-inter md:text-[18px] width-[50px] h-[50px]  leading-[26px]">Fast Food</p>
            </div>
            
            <div className="flex flex-col gap-2">
                <div className="bg-primary rounded-md md:p-[22px]">
                    <Image src={Icon2} alt=""></Image>
                </div>
                <p className="text-background font-inter md:text-[18px] md:leading-[26px]">Lunch</p>
            </div>

            <div className="flex flex-col gap-2">
                <div className="bg-primary rounded-md md:p-[22px]">
                    <Image src={Icon3} alt=""></Image>
                </div>
                <p className="text-background font-inter md:text-[18px] leading-[26px]">Dinner</p>
            </div>
        </div>

        <div className="bg-background border-l-8 border-primary flex rounded-md md:px-10 md:py-5 gap-12 lg:w-[374px] lg:h-[93px] w-auto h-auto ">
            <p className="text-primary font-helvetica text-5xl font-bold leading-[56px]">30+</p>
            <div>
            <p className="font-inter text-lg ">Years of</p>
            <p className="font-helvetica text-2xl font-bold">Experienced</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection4;
