'use client';

import React from "react";
import Image from "next/image";
import face from "../../../public/Images/Hero8Face.png"
import Quotes from "../../../public/Images/Quotes.png"
import Star from "../../../public/Icons/star - Copy.png"

interface color{
  textColor: string;
}


const HeroSection8 = (props:color) => {
  const {textColor} = props

  return (
    <div className="max-w-[1273px] mx-auto mb-20 lg:mb-[120px] px-3 flex flex-col gap-[56px] ">
      <div className="flex flex-col gap-2 mb-[56px] ">
        <p className="font-greatVibes text-[32px] leading-10 text-primary">
          Testimonials
        </p>
        <p className={`font-helvetica font-bold text-5xl leading-[56px] ${textColor} text-background`}>
          What our client are saying
        </p>
      </div>
      <div className="flex relative items-center justify-center">
        <div className="absolute top-[-56px]">
            <Image src={face} alt="" ></Image>
        </div>

        <div className="w-[869px] h-[451px] pt-[100px] bg-background flex flex-col gap-8 justify-center items-center shadow-2xl">
                <div className="">
                    <Image src={Quotes} alt=""></Image>
                </div>
                <div>
                    <p className="font-helvetica text-lg font-normal text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                </div>

                <div className="flex flex-col gap-[15px] text-center">
                <div className="flex gap-2">
                    <Image src={Star} alt=""></Image>
                    <Image src={Star} alt=""></Image>
                    <Image src={Star} alt=""></Image>
                    <Image src={Star} alt=""></Image>
                    <Image src={Star} alt=""></Image>
                </div>
                <p className="font-helvetica font-bold text-2xl">Alamin Hasan</p>
                <p className="text-base font-helvetica font-normal">Food Specialist</p>
                </div>
        </div>
      </div>

      <div className="flex gap-[7px] items-center justify-center">
            <div className="w-3 rounded-full bg-primary h-3"></div>
            <div className="w-3 rounded-full bg-primary h-3 opacity-30"></div>
            <div className="w-3 rounded-full bg-primary h-3 opacity-30"></div>
            <div className="w-3 rounded-full bg-primary h-3 opacity-30"></div>
      </div>
    </div>
  );
};

export default HeroSection8;
