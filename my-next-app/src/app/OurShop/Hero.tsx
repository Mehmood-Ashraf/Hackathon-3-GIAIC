'use client';

import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import ShopButton1 from "../../../public/Images/OurShop/ShopButton1.png";
import ShopButton2 from "../../../public/Images/OurShop/ShopButton2.png";
import SideImage from "../../../public/Images/OurShop/Banner.png";
import IFoods from "@/types/foods";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  const [food, setFood] = useState<IFoods[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchProducts, setSearchProducts] = useState("");
  const itemsPerPage = 6;

  useEffect( () => {
    const fetchProducts = async () => {
      setLoading(true);

      try{
        const data = await client.fetch(
          `*[_type == "food"]{
        name,
        price,
        originalPrice,
        "image": image.asset->url,
        "slug": slug.current,
        }`
        );
        setFood(data);
      }catch(error){
        console.log("Error Fetching Food Data", error);
      }
      setLoading(false);
      
    }

    fetchProducts();
  }, []);


  const filteredProducts = food.filter( (item) => 
        item.name.toLowerCase().includes(searchProducts.toLowerCase())      
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1)* itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if(currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePreviousPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage - 1)
  }


  if (loading) {
    return <div className="flex justify-center items-center w-full h-screen">
      <p className="text-6xl text-primary">Loading......</p>
    </div>
  }

  return (
    <div className="max-w-[1320px] xl:my-[120px] my-20 mx-auto flex flex-col gap-6 px-4">
      <div className="flex gap-8">
        <div className="flex gap-4 items-center justify-center">
          <label
            htmlFor="sort"
            className="text-[#333333] text-[20px] font-normal leading-7"
          >
            Sort by:
          </label>
          <div className="relative flex">
            <select
              id="sort"
              className="border border-[#E0E0E0] text-[#BDBDBD] w-[236px] font-inter font-normal text-lg py-[10px] px-6"
            >
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center">
          <label
            htmlFor="sort"
            className="text-[#333333] text-[20px] font-normal leading-7"
          >
            Sort by:
          </label>
          <div className="relative flex">
            <select
              id="sort"
              className="border border-[#E0E0E0] text-[#BDBDBD] font-inter w-[236px] font-normal text-lg py-[10px] px-6"
            >
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </div>

      </div>

      <div className="flex mt-6 gap-6 justify-between">
        {/**Cards Portion */}
        <div className="w-full flex flex-col items-center justify-center gap-14">
          {filteredProducts.length === 0 ? (
            <div>
              <p className="text-6xl text-primary">Items not Found</p>
            </div>
          ) : (
            <>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-6">
            {currentItems.map((element: IFoods, index) => {
              console.log(element.slug);
              return (
                <ShopCard
                  key={index}
                  image={element.image || ""}
                  name={element.name}
                  OriginalPrice={element.originalPrice.toFixed(2)}
                  DiscountedPrice={element.price.toFixed(2)}
                  slug={element.slug}
                />
              );
            })}
          </div>

          <div className="flex gap-3">
            <button 
            className="border-2 border-[#F2F2F2] text-primary hover:text-background hover:bg-[#a19e99] cursor-pointer py-3 px-5"
            onClick={handlePreviousPage}
            disabled = {currentPage === 1}
            >
              <Image src={ShopButton1} alt=""></Image>
            </button>
            <button className="border-2 border-[#F2F2F2] text-primary  cursor-pointer py-3 px-5">
              {currentPage}
            </button>
            <button
             className="border-2 border-[#F2F2F2] text-primary hover:bg-[#a19e99] hover:text-background cursor-pointer py-3 px-5"
             onClick={handleNextPage}
             disabled = {currentPage === totalPages}
            >
              <Image src={ShopButton2} alt=""></Image>
            </button>
          </div>
          </>)}
        </div>

        {/**Category Portion */}
        <div className="md:flex flex-col gap-6 hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products"
              className="bg-pink-50 font-inter text-base font-normal py-3 px-4 outline-none"
              onChange={(e) => setSearchProducts(e.target.value)}
            />
            <button className="bg-primary w-12 h-12 absolute text-white flex justify-center items-center text-xl top-0 right-0">
              <CiSearch />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            <p className="font-helvetica font-bold text-xl">category</p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Sandwiches</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Burger</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Chicken Chup</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Drink</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Pizza</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Thi</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Non Veg</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  placeholder="kkkkk"
                  value={"Sandwiches"}
                />
                <p className="inline font-helvetica text-lg">Uncategorized</p>
              </div>
            </div>
          </div>

          <div>
            <Image src={SideImage} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



