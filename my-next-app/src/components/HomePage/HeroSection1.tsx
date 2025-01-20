import React from "react";
import Image from "next/image";
import HeroImage1 from "../../../public/Images/Hero1.png";


const HeroSection1 = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto flex items-center pt-[66px] pb-[82px] gap-[93px] bg-cover bg-center bg-[url('/Images/unsplash_qom5MPOER-I.png')] relative px-3 lg-px-0 lg:flex-row flex-col">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="flex flex-col gap-2 w-auto sm:w-[472px] h-[356px] relative z-10 text-center sm:text-left">
          <div>
            <p
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="md:text-[32px] text-[28px] leading-10 font-normal text-primary font-greatVibes"
            >
              Its Quick & Amusing!
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <p className="text-primary font-helvetica md:text-6xl text-5xl leading-[68px] font-bold ]">
              Th<span className="text-white">e Art of speed food Quality</span>
            </p>
            <p className="text-base font-normal font-inter text-background">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varis sed
              pharetra dictum neque massa congue
            </p>
            <div>
            <button className="bg-primary rounded-[30px] font-inter text-base font-normal md:py-[18px] md:px-[57px] py-[14px] px-[40px]">
                See Menu
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[878px] lg:h-[670px] relative w-auto h-auto">
          <Image
            src={HeroImage1}
            alt="HeroImage1"
            className="lg:h-[633px] h-full"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
