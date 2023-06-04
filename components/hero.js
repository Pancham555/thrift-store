import axios from "axios";
import CarouselComponent from "./carousel/imageCarousel";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [carouselData, setCarouselData] = useState([]);
  const getCarouselData = async () => {
    try {
      const baseurl = process.env.STRAPI_URL;
      const url = baseurl + `/api/carousel?populate=*`;
      const data = await axios.get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      setCarouselData(data.data?.data?.attributes?.image?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarouselData();
  }, []);
  return (
    <div className="w-full shadow-sm shadow-slate-500 bg-black">
      {/* <Image
        src="/logo.svg"
        width={1000}
        height={500}
        quality={100}
        className="w-full h-full object-contain"
      /> */}
      <CarouselComponent array={carouselData} />
    </div>
  );
};

export default Hero;
