"use client";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import GoogleImage from "../../../public/Images/Our Chef/Google.png";
import AppleImage from "../../../public/Images/Our Chef/Apple.png";
import Image from "next/image";
import Swal from 'sweetalert2';


const SignUpPage = () => {
  const { signUp, isLoaded } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  // Make sure Clerk is loaded before interacting with signUp
  if (!isLoaded) {
    return <div>Loading...</div>; // Or any loading state you'd like to show
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!signUp) {
      console.error("Sign-up functionality is not available.");
      return;
    }

    try {
      // Create the sign-up request
      const signUpResponse = await signUp.create({
        emailAddress: email,
        password: password,
      });

      // Proceed with email verification
      await signUpResponse.prepareEmailAddressVerification();

      const verificationCode = prompt(
        "Enter the verification code sent to your email"
      );
      if (verificationCode) {
        await signUpResponse.attemptEmailAddressVerification({
          code: verificationCode,
        });
      }

      Swal.fire({
        title: 'Sign Up Successfull!',
        text: 'You have successfully signed up. Please verify your email.',
        icon: 'success',
        confirmButtonText: 'OK',
      })

      // Redirect after successful sign-up
      router.push("/");
    } catch (error) {
      if(error instanceof Error){    
      if (error?.message.includes('already')) {
        Swal.fire({
          title: 'Error!',
          text: 'This email is already registered. Please try logging in.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      } else {
        // For other errors
        Swal.fire({
          title: 'Sign Up Failed!',
          text: 'There was an error with the sign-up process. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
      console.error("Sign-up error:", error);
    }
  }
};

  return (
    <div>
      <Header name="Sign Up Page" linkName="Sign Up" />

      <div className="flex justify-center items-center">
        <div className="xl:my-[120px] my-20 flex flex-col gap-8 shadow justify-center items-center px-8 py-8 w-[424px]">
          <div className="w-full text-left">
            <p className="text-[#333333] font-helvetica font-bold text-xl">
              Sign Up
            </p>
          </div>

          <form onSubmit={handleSignUp} className="w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="relative w-full border border-[#E0E0E0] flex items-center gap-3 pl-3 py-[10px]">
                <AiOutlineUser className="w-6 h-6 text-[#4F4F4F]" />
                <input
                  type="text"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="focus:outline-none"
                />
              </div>

              <div className="relative w-full border border-[#E0E0E0] flex items-center gap-3 pl-3 py-[10px]">
                <AiOutlineMail className="w-6 h-6 text-[#4F4F4F]" />
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="focus:outline-none"
                />
              </div>

              <div className="relative w-full border border-[#E0E0E0] flex items-center gap-3 pl-3 py-[10px]">
                <RiLockPasswordLine className="w-6 h-6 text-[#4F4F4F]" />
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
              <div id="clerk-captcha"></div> {/* Ensure this is rendered */}
              <button
                type="submit"
                className="bg-primary text-background w-full py-3 font-helvetica text-base"
              >
                Sign Up
              </button>
              <p className="font-helvetica text-sm leading-[22px] text-[#333333] text-right cursor-pointer">
                Forget password?
              </p>
            </div>
          </form>

          <div className="flex flex-col w-full gap-4">
            <div className="line border border-[#E0E0E0] w-full"></div>

            <div className="flex border border-[#E0E0E0] py-[10px] items-center cursor-pointer">
              <Image
                src={GoogleImage}
                alt=""
                className="w-5 h-5 mr-[72px] ml-4"
              ></Image>
              <p className="text-[#4F4F4F] text-base font-normal">
                Sign up with Google
              </p>
            </div>

            <div className="flex border border-[#E0E0E0] py-[10px] items-center cursor-pointer">
              <Image
                src={AppleImage}
                alt=""
                className="w-5 h-5 mr-[72px] ml-4"
              ></Image>
              <p className="text-[#4F4F4F] text-base font-normal">
                Sign up with Apple
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SignUpPage;
