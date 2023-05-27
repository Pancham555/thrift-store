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
    "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=99",
    "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=99",
    "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=99",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=99",
  ],
  height = "slider",
  slidesPerView = 1,
}) => {
  const [swiper, setSwiper] = useState();
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={
        height === "slider"
          ? { delay: 4000, disableOnInteraction: false }
          : false
      }
      loop
      centerInsufficientSlides
      breakpoints={{
        768: { slidesPerView: slidesPerView },
      }}
      pagination={{ clickable: true }}
      onSwiper={setSwiper}
      className={`relative
      ${
        height === "slider" ? "h-[21rem] lg:h-[calc(100vh-12rem)]" : "h-[29rem]"
      }
       w-full cursor-grab active:cursor-grabbing`}
    >
      <div
        className={`${
          height === "slider" ? "hidden" : "block"
        } px-2 sm:px-6 lg:px-8 w-full absolute inset-0 items-center flex justify-between`}
      >
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
            className={`items-center h-full w-full justify-center flex-col cursor-grab active:cursor-grabbing`}
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
              <div className="w-full flex justify-center">
                <CardItem />
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
