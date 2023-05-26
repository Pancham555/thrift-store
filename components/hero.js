import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[26rem] py-10 px-4 sm:px-6 lg:px-8 shadow-sm shadow-slate-500 bg-black">
      <Image
        src="/logo.svg"
        width={1000}
        height={500}
        quality={100}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Hero;
