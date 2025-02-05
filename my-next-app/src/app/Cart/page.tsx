"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import IFoods from "@/types/foods";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const [cartItems, setCartItems] = useState<IFoods[]>([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, [])

  useEffect(() => {
    if(isClient){
      const items = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(items);
    }
  }, [isClient]);

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update the state
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkoutHandler = () => {
    
      router.push("/checkout");
    
  };

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Header name={"Shopping Cart"} linkName={"Shopping Cart"} />

      <div className="max-w-[1320px] mx-auto xl:my-[120px] my-20 flex flex-col gap-[56px] px-3">

        {cartItems.length === 0 ? (
          <div className="text-center text-5xl font-bold text-primary">
          Your cart is empty
        </div>
        ) : (
        <div className="grid  grid-cols-5 gap-8 font-inter text-lg font-bold text-[#333333]">
          <div className="col-span-1">Product</div>
          <div className="col-span-1">Price</div>
          <div className="col-span-1">Quantity</div>
          <div className="col-span-1">Total</div>
          <div className="col-span-1">Remove</div>
        </div>
        )}

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-5 gap-8 items-center font-inter text-lg text-[#333333]"
          >
            <div className="col-span-1 gap-1 flex items-center">
              <Image
              src={item.imageUrl as string}
              alt={item.name}
              width={50}
              height={50}
              ></Image>
              {/* <img
                src={item.imageUrl}
                alt={item.name}
                className="w-[50px] h-[50px] object-cover rounded-md"
              /> */}
              <div className="col-span-1">{item.name}</div>
            </div>
            <div className="col-span-1">${item.price.toFixed(2)}</div>
            <div className="col-span-1">{item.quantity}</div>
            <div className="col-span-1">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <div className="col-span-1">
              <button
                onClick={() => removeFromCart(item.id as string )}
                className="text-red-500"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row max-w-[1320px]  justify-between items-start md:items-center gap-6 p-6 mx-auto rounded-lg">
      {/* Coupon Code Section */}
      <div className="w-full md:w-1/2 p-4 rounded-lg ">
        <h3 className="text-xl font-semibold mb-4">Coupon Code</h3>
        <div className='border px-[20px] py-[20px]'>
        <p className="text-gray-400 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          diam pellentesque bibendum non.
        </p>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <input
            type="text"
            placeholder="Enter Here code"
            className="flex-grow p-2 border border-gray-700 rounded-lg   placeholder-gray-500"
          />
          <button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg">
            Apply
          </button>
          </div>
        </div>
      </div>

      {/* Total Bill Section */}
      <div className="w-full md:w-1/2 p-4  rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Total Bill</h3>
        <div className='border py-5 px-5 rounded'>
        <div className="space-y-2 ">
          <div className="flex justify-between ">
            <span className="text-[20px] font-bold   text-[#333333]">Cart Subtotal</span>
            <span className="text-[18px] font-bold   text-[#333333]">${(totalAmount).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Shipping Charge</span>
            <span className="font-semibold">$0.00</span>
          </div>
            <hr className='w-full border mt-[24px]' />
          <div className="flex justify-between">
            <span className="text-[20px] font-bold   text-[#333333]">Total Amount</span>
            <span className="text-[18px] font-bold   text-[#333333]">${(totalAmount).toFixed(2)}</span>
          </div>
        </div>
      </div>
      
        <button 
        onClick={checkoutHandler}
        className="mt-4 w-full bg-primary  text-white font-semibold py-2 rounded-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
    </div>
  );
};

export default Page;
