import React from "react";

import Image, { StaticImageData } from "next/image";
import { BsCalendar2DateFill } from "react-icons/bs";
import { PiChatsBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";

interface CardProps{
    image: StaticImageData;
    heading: string;
    content: string;   
}

const BlogCards = (props: CardProps) => {
    const {image, heading, content} = props;

  return (
    <div className="flex flex-col gap-6 lg:w-[871px] w-auto">
      <div className="flex flex-col gap-4 w-full">
        <div>
          <Image src={image} alt="" className=""></Image>
        </div>
        <div className="flex gap-2 items-center">
          <BsCalendar2DateFill className="text-primary w-6 h-6" />
          <div className="flex gap-2">
            <p className="font-inter font-normal text-base text-[#000000]">
              DEC 12, 2024 /
            </p>
            <PiChatsBold className="text-primary w-6 h-6" />
            <p className="font-inter font-normal text-base text-[#000000]">
              3 /
            </p>
          </div>
          <div className="flex gap-2">
          <FaRegUserCircle className="text-primary w-6 h-6"/>
          <p className="font-inter font-normal text-base text-[#000000]">Admin</p>
          </div>
        </div>

        <div>
            <p className="text-[#333333] font-helvetica font-bold text-2xl">{heading}</p>
        </div>
      </div>

      <div className="line w-full border border-[#828282]"></div>

      <div className="xl:w-[648px]">
        <p className="font-inter text-base font-normal text-[#4F4F4F]">{content}</p>
      </div>

      <div>
        <button className="border border-primary text-primary py-[14px] px-8 rounded hover:bg-primary hover:text-white">Raed More</button>
      </div>
    </div>
  );
};

export default BlogCards;
