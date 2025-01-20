import React from "react";
import Image from "next/image";
import Image1 from "../../../public/Images/Hero9 Image.png";
import Play from "../../../public/Images/Play.png"

const HeroSection10 = () => {
  return (
    <div className="lg:mb-[120px] mb-20 h-auto md:h-[558px] relative">
      <div className="w-full h-full">
        <Image src={Image1} alt="" className="w-full h-full"></Image>
      </div>

      <div className="flex flex-col lg:gap-8 md:gap-6 gap-4 absolute w-auto lg:w-2/5 text-right right-[50px] lg:right-[155px] top-0 md:top-[100px]">
        <div className="flex flex-col gap-2 text-right">
          <p className="font-greatVibes md:text-[32px] text-2xl lg:leading-10 leading-7 text-primary">
            Restaurant Active Process
          </p>
          <p className="font-helvetica font-bold lg:text-5xl hidden sm:flex md:text-4xl text-3xl md:leading-[56px] text-primary leading-8">
            We
            <span className="text-background">
              Document Every Food Bean Process untile it is saved
            </span>
          </p>
        </div>

        <div className="hidden md:flex">
          <p className="font-inter text-base font-normal text-background">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna,{" "}
          </p>
        </div>

        <div className="flex gap-6 items-center md:justify-end justify-center">
            <div>
                <button className="border-primary rounded-[30px] bg-transparent text-background border md:px-10 md:py-[16px] px-6 py-[8px]">Read More</button>
            </div>
            <div className="flex gap-3 items-center justify-center">
                <Image src={Play} alt="" className="h-[40px] w-[40px] md:w-full md:h-full"></Image>
                <p className="text-background">Play Video</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection10;
