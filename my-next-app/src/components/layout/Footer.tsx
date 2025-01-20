import React from "react";
import Image from "next/image";
import Link from "next/link";

import footer1 from "../../../public/Images/Mask Group.png";
import footer2 from "../../../public/Images/Mask Group (1).png";
import footer3 from "../../../public/Images/Mask Group (2).png";



import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D]">

        <div className="flex flex-col md:flex-row justify-between items-center px-3  py-[50px] max-w-[1170px] mx-auto border-b border-primary">
          <div className="text-center md:text-start text-white md:w-[50%] w-[100%]">
              <h2 className="text-[32px] leading-[40px] font-bold font-helvetica"><span className="text-[#FF9F0D]">St</span>ill Need Our Support</h2>
              <p className="text-base font-normal mt-[17px] font-inter">Don&#39;t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>

          <div className="flex md:mt-0 mt-[20px]">
            <input type="text" placeholder="Enter Your Email"
              className="bg-[#FF9F0D] text-background py-[5px] px-[10px] md:py-[10px] md:px-[20px] rounded-l"
            />
            <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded">Subscribe Now</button>
          </div>

          
        </div>


      <div className="  max-w-[1170px] mx-auto">
        <div className="max-w-[1170px] mx-aut0 grid grid-cols-2 pl-3 md:gap-[50px]  px-3 py-6 lg:py-8 gap-4 lg:grid-cols-4">
          <div>
            <h2 className="md:mb-6 mb-3 text-[24px] font-semibold text-background">
              About Us
            </h2>
            <ul className="text-background font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] sm:text-[16px] text-xs font-normal hover:underline">
                  orporate clients and leisure travelers has been relying on
                  Groundlink for dependab safe, and professional chauffeured car
                  service in major cities across World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>

                <div className="ml-1">
                  <h2 className="sm:text-[16px] text-xs text-[#FFFFFF] font-normal">
                    Opening Hours
                  </h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat(8.00 - 6.00)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday - Closed
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="md:mb-6 mb-3 text-[24px] font-semibold text-background">
            Useful Links
            </h2>
            <ul className="text-background font-medium sm:text-base text-xs">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Team 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Menu
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Contact
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="md:mb-6 mb-3 text-[24px] font-semibold  text-background">
            Help?
            </h2>
            <ul className="text-background dark:text-gray-400 font-medium sm:text-base text-xs">
              <li className="mb-4">
                <Link href={"/FAQ"} className="hover:underline">FAQ</Link>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Term & conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Reporting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                Documentation 
                </a>
              </li>

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Support Policy
                </a>
              </li> 

              <li className="mb-4">
                <a href="#" className="hover:underline">
                Privacy
                </a>
              </li> 
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="md:mb-6 mb-3 text-[24px] font-semibold  text-background">
              Recent Post
            </h2>
            <ul className="text-background font-medium gap-[14px]">
              <li className="flex gap-[16.5px]">
                <Image src={footer1} alt="Fod" />

                <div className="ml-1">
                  <h2 className="sm:text-[12px] text-[10px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="sm:text-[14px] text-[12px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={footer2} alt="Fod" />

                <div className="ml-1">
                  <h2 className="sm:text-[12px] text-[10px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="sm:text-[14px] text-[12px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>

              <li className="flex gap-[16.5px] mt-[14px]">
                <Image src={footer3} alt="Fod" />

                <div className="ml-1">
                  <h2 className="sm:text-[12px] text-[10px] text-[#FFFFFF] font-normal">
                    20 Feb 2022
                  </h2>
                  <h3 className="sm:text-[14px] text-[12px] font-normal text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
        <div className="bg-[#4F4F4F] ">
          <div className="max-w-[1170px] mx-auto px-4 py-6 bg-[#4F4F4F] gap-3 flex flex-col md:flex-row items-center md:justify-between justify-center" >
          <span className="text-sm text-background sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
            Reserved.
          </span>

          <div className="flex justify-center gap-[14px] text-[#4F4F4F]">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <a href="https://www.facebook.com" target="blank"><FaFacebookF /></a>
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <a href="https://twitter.com" target="blank"><FaTwitter /></a>
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <a href="https://www.instagram.com" target="blank"><FaInstagram /></a>
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <a href="https://www.youtube.com" target="blank"><FaYoutube /></a>
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rou nded">
              <a href="https://www.pinterest.com" target="blank"><FaPinterest /></a>
            </div>
          </div>
          </div>
         
        </div>
    </footer>
  );
};

export default Footer;