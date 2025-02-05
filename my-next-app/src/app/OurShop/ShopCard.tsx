import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ShopCardProps {
  image: string;
  name: string;
  OriginalPrice?: string;
  DiscountedPrice: string;
  slug: string;
}

const ShopCard = (props: ShopCardProps) => {
  const { image, name, OriginalPrice, DiscountedPrice, slug } = props;

  return (
    <div className="w-full max-w-[312px]">
      <Link href={`/OurShop/${slug}`}>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="card w-[312px] h-[267px] sm:w-full sm:h-auto ">
            <Image src={image} alt="" width={312} height={267} className="w-full h-full sm:h-auto object-cover"></Image>
          </div>
          <div className="font-inter">
            <p className="font-bold text-lg underline">{name}</p>
            <div className="flex gap-2">
              <p className="text-primary">${DiscountedPrice}</p>
              <p className="text-[#828282] line-through">${OriginalPrice}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ShopCard;
