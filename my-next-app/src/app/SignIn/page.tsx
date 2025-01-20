import React from 'react'
import Header from '@/components/layout/Header';
import Image from 'next/image'
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import GoogleImage from "../../../public/Images/Our Chef/Google.png"
import AppleImage from "../../../public/Images/Our Chef/Apple.png"


const page = () => {
  return (
    <div>
        <Header
        name={'Sign In Page'}
        linkName='Sign In'
        />

        <div className="flex justify-center items-center">
        <div className="xl:my-[120px] my-20 flex flex-col gap-8 shadow justify-center items-center px-8 py-8 w-[424px]">
          
            <div className="w-full text-left">
              <p className="text-[#333333] font-helvetica font-bold text-xl">
                Sign In
              </p>
            </div>
          

          <div className="flex flex-col gap-4 w-full">

            <div className="relative w-full border border-[#E0E0E0] flex items-center gap-3 pl-3 py-[10px]">
              <AiOutlineMail className="w-6 h-6 text-[#4F4F4F]" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Email"
                className="focus:outline-none"
              />
            </div>

            <div className="relative w-full border border-[#E0E0E0] flex items-center gap-3 pl-3 py-[10px]">
              <RiLockPasswordLine className="w-6 h-6 text-[#4F4F4F]" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Password"
                className="focus:outline-none"
              />
            </div>

            <div className="flex gap-2">
              <input type="checkbox" className="w-5 h-5 bg-primary" />
              <p className="text-[#333333] font-helvetica text-sm leading-[22px]">
                Remeber me?
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <button className="bg-primary text-background w-full py-3 font-helvetica text-base">Sign In</button>
            <p className="font-helvetica text-sm leading-[22px] text-[#333333] text-right cursor-pointer">Forget password?</p>
          </div>

          <div className="flex flex-col w-full gap-4">
            
            <div className="line border border-[#E0E0E0] w-full"></div>

            <div className="flex border border-[#E0E0E0] py-[10px] items-center cursor-pointer">
                <Image src={GoogleImage} alt="" className="w-5 h-5 mr-[72px] ml-4"></Image>
                <p className="text-[#4F4F4F] text-base font-normal">Sign up with Google</p>
            </div>

            <div className="flex border border-[#E0E0E0] py-[10px] items-center cursor-pointer">
                <Image src={AppleImage} alt="" className="w-5 h-5 mr-[72px] ml-4"></Image>
                <p className="text-[#4F4F4F] text-base font-normal">Sign up with Apple</p>
            </div>
            <div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page