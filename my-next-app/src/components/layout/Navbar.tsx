"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Handbag from "../../../public/Icons/Handbag.png";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { useUser, useClerk } from "@clerk/nextjs";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  // const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { signOut } = useClerk();
  const { user, isLoaded } = useUser();

  const handleSearch = () => {
    if(searchQuery.trim() !== ""){
      router.push(`/OurShop?search=${encodeURIComponent(searchQuery)}`)
      
      setSearchQuery("")
    }
  }

  const handleSignOut = async () => {
    await signOut();
    router.push("/"); // Redirect to homepage after sign out
  };

  if (pathname === "/") {
    return (
      <div className="bg-[#0D0D0D]">
        <div className="max-w-[1320px] mx-auto flex-col md:justify-center justify-between lg:pt-[45px] pt-5 bg-[#0D0D0D]">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary font-helvetica">
              Food<span className="text-white">tuck</span>
            </p>
          </div>

          <div className="links-input flex items-center justify-between px-2 xl:px-0 sm:flex-row flex-col sm:gap-0 gap-2">
            <div className="links flex gap-4 lg:gap-8 font-inter font-normal sm:text-base text-[12px] text-background">
              <Link href={"/"} className="hover:text-primary relative group">Home
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link href={"/Menu" } className="hover:text-primary relative group">Menu
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link href={"/BlogList"} className="hover:text-primary relative group">Blog
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link href={"/OurChef"} className="hover:text-primary relative group">Chefs
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link href={"/About"} className="hover:text-primary relative group">About
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link href={"/OurShop"} className="hover:text-primary relative group">Shop
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
              <Link href={"/"} className="hover:text-primary relative group">Contact
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-1 h-1 bg-primary rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="input relative md:flex hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                  }}
                  placeholder="Search...."
                  className="rounded-[27px] bg-transparent border-2 border-primary px-[26px] py-[14px] outline-none text-white"
                />
                <CiSearch onClick={handleSearch} className="absolute w-6 h-6 text-background top-[14px] right-7" />
              </div>
              {isLoaded && !user ? (
                <Link href="/SignUp">
                  <AiOutlineUser className="w-6 h-6 text-background" />
                </Link>
              ) : (
                <button onClick={handleSignOut} className="text-background">
                  <AiOutlineLogout  className="w-6 h-6 text-background"/>
                </button>
              )}
              <Link href={"/SignUp"}>
              <CiSearch className=" w-6 h-6 text-background top-[14px] right-7 flex md:hidden" />
              </Link>
             <Link href={"/Cart"}>
             <Image
                src={Handbag}
                alt="HandBag Icon"
                className="w-6 h-6 cursor-pointer"
              ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0D0D]">
      <div className="max-w-[1320px] mx-auto flex justify-between lg:py-[22px] px-3 py-5 bg-[#0D0D0D]">
        <div className="text-center ">
          <p className="text-2xl font-bold text-primary font-helvetica">
            Food<span className="text-white">tuck</span>
          </p>
        </div>
        
        <div className="links-input hidden sm:flex items-center justify-between px-2 xl:px-0 ">
          <div className="links flex gap-4 lg:gap-8 font-inter font-normal sm:text-base text-[12px] text-background">
            <Link href={"/"} className="hover:text-primary">Home</Link>
            <Link href={"/Menu"} className="hover:text-primary">Menu</Link>
            <Link href={"/BlogList"} className="hover:text-primary">Blog</Link>
            <Link href={"/OurChef"} className="hover:text-primary">Chefs</Link>
            <Link href={"/About"} className="hover:text-primary">About</Link>
            <Link href={"/OurShop"} className="hover:text-primary">Shop
            </Link>
            <Link href={"/"} className="hover:text-primary">Contact</Link>
          </div>

        </div>
          <div className="flex items-center gap-2">
            <CiSearch className="w-6 h-6 text-background " />
            <Link href={"/SignUp"}>
              <AiOutlineUser className="w-6 h-6 text-background" />
            </Link>
            <Link href={"/Cart"}>
            <Image src={Handbag} alt="HandBag Icon" className="w-6 h-6"></Image>
            </Link>

          </div>
      </div>
    </div>
  );
};

export default Navbar;
