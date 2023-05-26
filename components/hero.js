import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[26rem] border-b">
      <Image
        src="/hero-design.jpg"
        width={1000}
        height={500}
        quality={100}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
