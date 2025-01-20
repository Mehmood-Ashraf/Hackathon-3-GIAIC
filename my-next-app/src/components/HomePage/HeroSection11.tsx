import React from "react";
import BlogCards from "../BlogCards";

const HeroSection11 = () => {
  return (
    <div className="max-w-[1320px] mx-auto text-background flex flex-col gap-[59px] lg:mb-[120px] mv-20">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-greatVibes text-[32px] leading-10 text-primary">
          Blog Post
        </p>
        <p className="font-helvetica font-bold text-5xl leading-[56px] text-primary">
          La<span className="text-background">test News & Blog</span>
        </p>
      </div>

      <div>
        <BlogCards />

      </div>
    </div>
  );
};

export default HeroSection11;
