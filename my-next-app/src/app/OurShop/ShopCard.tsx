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
    <div>
      <Link href={`/OurShop/${slug}`}>
        <div className="flex flex-col gap-2 cursor-pointer">
          <div className="card ">
            <Image src={image} alt="" width={400} height={400}></Image>
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
