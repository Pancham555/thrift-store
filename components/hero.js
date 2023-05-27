import CarouselComponent from "./carousel";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full shadow-sm shadow-slate-500 bg-black">
      {/* <Image
        src="/logo.svg"
        width={1000}
        height={500}
        quality={100}
        className="w-full h-full object-contain"
      /> */}
      <CarouselComponent slidesPerView={1} height="slider" />
    </div>
  );
};

export default Hero;
