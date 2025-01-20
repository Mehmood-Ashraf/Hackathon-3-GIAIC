import React from "react";
import Image from "next/image";
import Image1 from "../../../../public/Images/OurShop/ShopCard2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Star from "../../../../public/Icons/star - Copy.png"

const Product = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto my-[120px] flex gap-[55px] px-3">
        <div className="flex gap-6 h-[596px]">
          <div className="flex flex-col gap-6">
            <Image
              src={Image1}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
            <Image
              src={Image1}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
            <Image
              src={Image1}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
            <Image
              src={Image1}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
          </div>
          <div className="h-full">
            <Image
              src={Image1}
              alt=""
              width={491}
              height={596}
              className="rounded-md h-full"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col w-1/2 gap-4">
          <div className="flex justify-between">
            <div>
              <button className="rounded-md bg-primary font-inter font-normal text-sm text-white leading-[22px] px-4 py-1">
                In Stock
              </button>
            </div>
            <div>
              <div className="flex justify-center items-center gap-4 text-[#828282] text-lg font-normal">
                <button className="flex items-center">
                  <FaArrowLeft /> Prev
                </button>
                <button className="flex items-center">
                    Next <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-helvetica font-bold text-5xl leading-[56px]">Yummy Chicken Chup</h1>
            <p className="text-lg font-normal leading-[26px] font-inter text-[#4F4F4F]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
            <hr />
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                <h1 className="text-[32px] font-bold leading-10 font-helvetica">54.00$</h1>
                <div className="flex gap-4 items-center">
                    <div className="flex gap-1 h-5">
                        <Image src={Star} alt="" width={20} height={20}></Image>
                        <Image src={Star} alt="" width={20} height={20}></Image>
                        <Image src={Star} alt="" width={20} height={20}></Image>
                        <Image src={Star} alt="" width={20} height={20}></Image>
                        <Image src={Star} alt="" width={20} height={20}></Image>
                    </div>
                    <div className="text-[#A9A9A9] flex gap-4 font-inter font-normal text-base">
                        <p>|</p>
                        <p>5.0 Rating</p>
                        <p>|</p>
                        <p>22 Review</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
