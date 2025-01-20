import React from "react";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../../../public/Images/About/AboutImage1.png";
import Image2 from "../../../public/Images/About/AboutImage2.png";
import Image3 from "../../../public/Images/About/AboutImage3.png";
import Play from "../../../public/Images/Play.png";
import WhyChooseImage from "../../../public/Images/About/AboutChooseUs.png";
import StudentIcon from "../../../public/Images/About/Student.png";
import CoffeeIcon from "../../../public/Images/About/Coffee.png";
import PersonIcon from "../../../public/Images/About/Person.png";
import AboutCards from "./AboutCards";
import CardImage from "../../../public/Images/About/AboutCard.png";
import HeroSection8 from "@/components/HomePage/HeroSection8";
import AboutMenuCard from "./AboutMenuCard";

const data = [
  {
    id: 1,
    image: CardImage,
    name: "Mark Henry",
    designation: "Owner",
  },
  {
    id: 2,
    image: CardImage,
    name: "Lucky Helen",
    designation: "Chef",
  },
  {
    id: 3,
    image: CardImage,
    name: "Moon Henry",
    designation: "Founder",
  },
  {
    id: 4,
    image: CardImage,
    name: "Tom Monrow",
    designation: "Specialist",
  },
];

const data1 = [
    {
        id: 1,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 2,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 3,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 4,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 5,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 6,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 7,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    },{
        id: 8,
        dish: "Alder Grilled Chinook Salmon",
        detail: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        cal: "560 CAL"
    }
]

const Hero = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto my-[120px] xl:my-20 flex flex-col gap-[120px] px-3">
        <div className="flex lg:gap-[125px] gap-20 justify-center items-center md:flex-row flex-col">
          {/* Cards Portion */}
          <div className="flex gap-6">
            <div>
              <Image src={Image1} alt=""></Image>
            </div>
            <div className="flex flex-col gap-6 mt-[54px]">
              <Image src={Image2} alt=""></Image>
              <Image src={Image3} alt=""></Image>
            </div>
          </div>

          <div className="flex flex-col lg:gap-8 gap-5 md:w-[526px]">
            <div className="flex flex-col gap-2">
              <p className="text-primary font-greatVibes text-lg">About us</p>
              <p className="text-[#333333] font-helvetica font-bold lg:text-5xl lg:leading-[56px] leading-[40px] text-4xl">
                Food is an important part Of a balanced Diet
              </p>
            </div>

            <p className="font-helvetica text-[#4F4F4F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>

            <div className="flex gap-6 items-center ">
              <div>
                <button className="border-primary rounded-md bg-primary text-background border lg:px-12 lg:py-[16px] whitespace-nowrap px-6 py-[8px]">
                  Show More
                </button>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Image
                  src={Play}
                  alt=""
                  className="h-[40px] w-[40px] md:w-[60px] md:h-[60px]"
                ></Image>
                <p className="">Watch Video</p>
              </div>
            </div>
          </div>
        </div>

        {/**Why Choose */}

        <div className="flex flex-col md:gap-[56px] gap-9 justify-center items-center">
          <div className="font-helvetica flex flex-col gap-2 text-center max-w-[569px]">
            <p className=" text-[#333333] font-bold md:text-5xl text-4xl leading-[56px]">
              Why Choose Us
            </p>
            <p className="text-center text-[#4F4F4F] md:text-base text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
            </p>
          </div>

          <div className="">
            <Image src={WhyChooseImage} alt=""></Image>
          </div>

          <div className="flex md:gap-[120px] gap-16 ">
            <div className="flex flex-col md:gap-6 gap-3 justify-center items-center">
              <Image src={StudentIcon} alt=""></Image>
              <p className="font-helvetica font-bold text-base md:text-2xl text-[#333333] text-center">
                Best Chef
              </p>
              <p className="font-helvetica text-center text-[#4F4F4F] md:text-base text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat{" "}
              </p>
            </div>
            <div className="flex flex-col md:gap-6 gap-3 items-center">
              <Image src={CoffeeIcon} alt=""></Image>
              <p className="font-helvetica font-bold md:text-2xl text-base text-[#333333] text-center">
                120 Item Food
              </p>
              <p className="font-helvetica text-center text-[#4F4F4F] md:text-base text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat{" "}
              </p>
            </div>
            <div className="flex flex-col md:gap-6 gap-3 items-center">
              <Image src={PersonIcon} alt=""></Image>
              <p className="font-helvetica font-bold text-base md:text-2xl text-[#333333] text-center">
                Clean Environment
              </p>
              <p className="font-helvetica text-center text-[#4F4F4F] md:text-base text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:mb-[120px] mb-20 relative h-[686px]">
        <div className="bg-primary h-[360px] md:h-[460px] flex justify-center items-center flex-col gap-2">
          <div className="w-[418px] text-center">
            <p className="font-helvetica text-background text-5xl leading-[56px] font-bold">
              Team Member
            </p>
            <p className="font-inter text-background text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue
            </p>
          </div>
        </div>

        <div className="md:flex hidden gap-6 px-3 max-w-[1320px] mx-auto absolute top-[400px] lg:top-[300px] right-[100px] left-[100px]">
          {data.map((element) => {
            return (
              <AboutCards
              key={element.id}
                image={element.image}
                name={element.name}
                designation={element.designation}
              />
            );
          })}
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto">
        <HeroSection8 
        textColor= "text-headingColor"
        />

        <div className="flex flex-col md:gap-[56px] gap-9 justify-center items-center mb-[120px] xl:px-0 px-3 max-w-[1320px]">
          <div className="font-helvetica flex flex-col gap-2 text-center max-w-[569px]">
            <p className=" text-[#333333] font-bold md:text-5xl text-4xl leading-[56px]">
              Our Food Menu
            </p>
            <p className="text-center text-[#4F4F4F] md:text-base text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
            </p>
          </div>

          <div className="flex sm:gap-11 gap-6 text-[#4F4F4F] font-normal sm:text-xl text-base flex-wrap justify-center">
            <Link href={"#"} className="cursor-pointer hover:text-primary hover:underline">BreakFast</Link>
            <Link href={"#"} className="cursor-pointer hover:text-primary hover:underline">Lunch</Link>
            <Link href={"#"} className="cursor-pointer hover:text-primary hover:underline">Dinner</Link>
            <Link href={"#"} className="cursor-pointer hover:text-primary hover:underline">Dessert</Link>
            <Link href={"#"} className="cursor-pointer hover:text-primary hover:underline">Drink</Link>
            <Link href={"#"} className="cursor-pointer hover:text-primary hover:underline">Snack</Link>
          </div>
          <div className="border border-[#E0E0E0] w-full"></div>

          <div className="grid md:grid-cols-2 gap-6">
          {data1.map((item) => {
            return(
                <AboutMenuCard 
                key={item.id}
                dish={item.dish}
                detail={item.detail}
                cal={item.cal}
                price={item.price}
                />
            )
          })}

          </div>

          <div>
            <button className="text-primary border border-primary py-[14px] px-8 cursor-pointer hover:bg-primary hover:text-background">View Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
