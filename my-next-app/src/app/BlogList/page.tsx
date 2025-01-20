import React from "react";
import Header from "@/components/layout/Header";
import BlogCards from "./BlogCards";
import Image from "next/image";
import Image1 from "../../../public/Images/BlogList/BlogCard1.png";
import Image2 from "../../../public/Images/BlogList/BlogImage2.png";
import Image3 from "../../../public/Images/BlogList/BlogImage3.png";
import Image4 from "../../../public/Images/BlogList/BlogImage4.png";
import ShopButton1 from "../../../public/Images/OurShop/ShopButton1.png";
import ShopButton2 from "../../../public/Images/OurShop/ShopButton2.png";

const BlogData = [
  {
    id: 1,
    image: Image1,
    heading: "10 Reasons To Do A Digital Detox Challenge",
    content:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 2,
    image: Image2,
    heading: "Traditional Soft Pretzels with Sweet Beer Cheese",
    content:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 3,
    image: Image3,
    heading: "The Ultimate Hangover Burger: Egg in a Hole Burger",
    content:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
  {
    id: 4,
    image: Image4,
    heading: "My Favorite Easy Black Pizza Toast Recipe",
    content:
      "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
  },
];

const page = () => {
  return (
    <div>
      <Header
      name="Blog List"
      linkName="Blog" />
      
      <div className="max-w-[1320px] mx-auto xl:my-[120px] my-20 flex gap-6 px-3">
        {/**Left Side */}
        <div className="flex flex-col gap-[56px] items-center">
          {BlogData.map((elements) => {
            return (
              <BlogCards
                key={elements.id}
                image={elements.image}
                heading={elements.heading}
                content={elements.content}
              />
            );
          })}

          <div className="flex gap-3">
            <button className="border-2 border-[#F2F2F2] text-primary hover:text-background cursor-pointer py-3 px-5">
              <Image src={ShopButton1} alt=""></Image>
            </button>
            <button className="border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5">
              1
            </button>
            <button className="border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5">
              2
            </button>
            <button className="border-2 border-[#F2F2F2] text-primary hover:bg-primary hover:text-background cursor-pointer py-3 px-5">
              3
            </button>
            <button className="border-2 border-[#F2F2F2] text-primary  hover:text-background cursor-pointer py-3 px-5">
              {" "}
              <Image src={ShopButton2} alt=""></Image>
            </button>
          </div>
        </div>

        {/**Right Side */}
        <div></div>
      </div>
    </div>
  );
};

export default page;
