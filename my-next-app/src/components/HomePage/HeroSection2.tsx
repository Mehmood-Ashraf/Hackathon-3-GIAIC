import React from "react";
import { FaCheck } from "react-icons/fa";
import card1 from "../../../public/Images/Hero2 card1.png"
import card2 from "../../../public/Images/Hero2 card2.png"
import card3 from "../../../public/Images/Hero2 Card3.png"
import Image from "next/image";

const HeroSection2 = () => {
  return (
    <div className="md:my-[120px] my-20 max-w-[1320px] mx-auto flex xl:gap-[98px] gap-8 px-3 xl:px-0 lg:flex-row flex-col">
      <div className="flex flex-col xl:gap-8 gap-6 lg:w-[562px] lg:h-[562px] w-auto text-center ">
        <div className="flex flex-col gap-2">
          <p className="font-greatVibes text-[32px] leading-10 font-normal text-primary">
            About us
          </p>
          <p className="text-5xl leading-[56px] font-bold font-helvetica text-primary">
            We
            <span className="text-background">
              Create the best foody product
            </span>
          </p>
        </div>
        <div className="flex flex-col xl:gap-6 gap-4 font-inter text-background">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.flex-col
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <p className="text-[18px] leading-[26px]">
            <FaCheck className="inline" /> Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <p className="text-[18px] leading-[26px]">
             <FaCheck className="inline" /> Quisque diam pellentesque bibendum
            non dui volutpat fringilla{" "}
          </p>
          <p className="text-[18px] leading-[26px]">
            <FaCheck className="inline" /> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit
          </p>
        </div>
        <div>
          <button className="bg-primary rounded-[30px] font-inter text-base font-normal md:py-[18px] md:px-[57px] py-[14px] px-[40px]">
            Read More
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-auto w-full">
            <div>
                <Image src={card1} alt="" className="w-full"></Image>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
                <Image src={card2} alt="" className="w-full"></Image>
                <Image src={card3} alt="" className="w-full"></Image>
            </div>
      </div>
    </div>
  );
};

export default HeroSection2;
