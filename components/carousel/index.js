// import { Carousel } from "@material-tailwind/react";

// export default function CarouselComponent() {
//   return (
//     <Carousel className="h-96">
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// }
// import { Carousel } from "flowbite-react";
// import React from "react";

// const CarouselComponent = () => {
//   return (
//     <div className="h-[70vh] rounded-none">
//       <Carousel slideInterval={5000} className="rounded-none" slide>
//         <img
//           src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//           alt="..."
//         />
//         <img
//           src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//           alt="..."
//         />
//         <img
//           src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//           alt="..."
//         />
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselComponent;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
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
  slidesPerView = 4,
}) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={height === "slider" ? true : false}
      pagination={height === "slider" ? true : false}
      breakpoints={{ 768: { slidesPerView } }}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      className={`w-full ${
        height === "slider" ? "h-[28rem] rounded-none" : "h-auto rounded-md"
      } overflow-hidden bg-white`}
    >
      {array.map((data, index) => {
        return (
          <SwiperSlide
            key={index}
            className={`h-full w-full justify-center cursor-grab active:cursor-grabbing`}
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
