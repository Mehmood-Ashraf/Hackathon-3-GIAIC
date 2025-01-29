'use client'

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaRegHeart,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare, } from "react-icons/fa";
import Star from "../../../../public/Icons/star - Copy.png";
import { BsBag } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import IFoods from "@/types/foods";


const Product = ({product}: {product:IFoods}) => {

  const [quantity, setQuantity] = useState(1)

  const quantityIncrement = () => {
    setQuantity(quantity + 1)
  }

  const quantityDecrement = () => {
    if(quantity > 0){
      setQuantity(quantity - 1)
    }
  }


  const addToCart = () => {
    if (!product) {
     alert("Error: Product data not available");
      return;
    }
  
    const productId = product.id || product.slug;
  
    if (!productId) {
      alert("Error: Product ID is missing");
      return;
    }
  
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Existing Cart Items:", cartItems);
    
    const existingItem = cartItems.find((item: IFoods) => item.id === productId);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: productId, 
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));  
    alert("Product added to cart!");
  };
 

  return (
    <div>
      <div className="max-w-[1320px] mx-auto my-20 md:my-[120px] grid md:grid-cols-2 gap-[55px] px-3">
        <div className="flex gap-6 h-auto sm:h-[596px] justify-center">
          <div className="hidden sm:flex flex-col gap-6">
            <Image
              src={product.imageUrl || ""}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
            <Image
              src={product.imageUrl || ""}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
            <Image
              src={product.imageUrl || ""}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
            <Image
              src={product.imageUrl || ""}
              alt=""
              width={132}
              height={129}
              className="rounded-md h-[129px]"
            ></Image>
          </div>

          <div className="h-full">
            <Image
              src={product?.imageUrl || ""}
              alt=""
              width={491}
              height={596}
              className="rounded-md sm:h-full h-auto"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
            <h1 className="font-helvetica font-bold text-5xl leading-[56px]">
              {product?.name}
            </h1>
            <p className="text-lg font-normal leading-[26px] font-inter text-[#4F4F4F]">
              {product?.description}
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] font-bold leading-10 font-helvetica">
                ${product?.price.toFixed(2)}
              </h1>

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

              <div className="text-[#333333] font-inter font-normal text-lg">
                <p>Dictum/cursus/Risus</p>
              </div>

              <div className="flex gap-4">
                <div className="flex text-[#828282] ">
                  <button onClick={quantityDecrement} className="w-[50px] sm:w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]">-</button>
                  <button className="w-[50px] sm:w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]">{quantity}</button>
                  <button onClick={quantityIncrement} className="w-[50px] sm:w-16 h-[50px] text-2xl border border-gray-500 hover:bg-[#ffaf37]">+</button>
                </div>
                <div>
                  <button onClick={addToCart} className="bg-[#FF9F0D] px-6 py-2 text-[12px] md:text-lg hover:bg-[#ffaf37] text-white 
                                  flex justify-center items-center gap-2 h-[50px] transition-transform duration-200 ease-in transform hover:scale-105">
                                   <BsBag />
                                   Add to cart</button>
                </div>
              </div>
              <hr />

              <div>
              <h2 className="text-[#4F4F4F] text-[18px] font-normal flex flex-wrap items-center gap-4 cursor-pointer sm:text-[16px] md:text-[18px]">
          <span className="flex items-center">
            <FaRegHeart className="hover:text-red-600 cursor-pointer" />
            <span className="ml-1">Add to Wishlist</span>
          </span>
          <span className="flex items-center">
            <IoIosGitCompare />
            <span className="ml-1">Compare</span>
          </span>
        </h2>

        <h2 className="text-[#4F4F4F] text-[18px] font-normal mt-[8px]">
          <span className="text-[#333333]">Category:</span> Pizza
        </h2>
        <h2 className="text-[#4F4F4F] text-[18px] font-normal mt-[8px]">
          <span className="text-[#333333]">Tag:</span> Our Shop
        </h2>

        <div className="flex mt-[28px] items-center gap-3">
          <h2 className="text-[#333333] text-[18px] font-normal ">
            Share:
          </h2>
          <FaYoutube className="w-[23px] h-[23px]  text-[#4F4F4F]" />
          <FaFacebook className="w-[23px] h-[23px] text-[#4F4F4F]" />
          <FaTwitter className="w-[23px] h-[23px]  text-[#4F4F4F]" />
          <FaInstagramSquare className="w-[23px] h-[23px] text-[#4F4F4F]" />
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