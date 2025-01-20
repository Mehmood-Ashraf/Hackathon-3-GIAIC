
import HeroSection1 from "@/components/HomePage/HeroSection1";
import HeroSection2 from "@/components/HomePage/HeroSection2";
import HeroSection3 from "@/components/HomePage/HeroSection3";
import HeroSection4 from "@/components/HomePage/HeroSection4";
import HeroSection5 from "@/components/HomePage/HeroSection5";
import HeroSection6 from "@/components/HomePage/HeroSection6";
import HeroSection7 from "@/components/HomePage/HeroSection7";
import HeroSection8 from "@/components/HomePage/HeroSection8";
import HeroSection10 from "@/components/HomePage/HeroSection10";
import HeroSection11 from "@/components/HomePage/HeroSection11";



export default function Home() {
  return (
    <div className="max-w-[1920px] bg-[#0D0D0D] md:pb-[120px] pb-20">
      {/* <Navbar /> */}

      <HeroSection1 />

      <HeroSection2 />

      <HeroSection3 />

      <HeroSection4 />
      
      <HeroSection5 />

      <HeroSection6 />

      <HeroSection7 />

      <HeroSection8 
      textColor = "text-background"
      />

      <HeroSection10 />

      <HeroSection11 />


    </div>
  );
}
