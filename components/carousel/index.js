import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import CardItem from "../card";
const Slider = ({
  array = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=99",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=99",
    "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=99",
    "https://images.unsplash.com/photo-1551135049-8a33b5883817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=99",
  ],
  height = "slider",
  slidesPerView = 1,
}) => {
  const [swiper, setSwiper] = useState();
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      breakpoints={{
        768: { slidesPerView: slidesPerView },
      }}
      pagination={{ clickable: true }}
      onSwiper={setSwiper}
      className={`relative ${
        height === "slider" ? "h-[26rem]" : "h-[32rem]"
      } w-full`}
    >
      <div className="px-2 sm:px-6 lg:px-8 w-full absolute inset-0 items-center flex justify-between">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="100%"
          height="100%"
          fill="currentColor"
          className=" w-10 h-10 z-40 text-green-500 cursor-pointer bg-white rounded-full"
          onClick={() => swiper.slidePrev()}
        >
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="100%"
          height="100%"
          fill="currentColor"
          className=" w-10 h-10 z-40 text-green-500 cursor-pointer bg-white rounded-full"
          onClick={() => swiper.slideNext()}
        >
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
        </svg>
      </div>
      {array.map((data, index) => {
        return (
          <SwiperSlide
            key={index}
            className={`h-full w-full justify-center flex-col cursor-grab active:cursor-grabbing`}
          >
            {height === "slider" ? (
              <Image
                src={data}
                alt="slider images"
                width={height === "slider" ? 2000 : 350}
                height={height === "slider" ? 1500 : 350}
                className={`object-cover w-full h-full ${
                  height === "slider" ? "" : "rounded-md"
                } bg-slate-700`}
              />
            ) : (
              <CardItem />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
