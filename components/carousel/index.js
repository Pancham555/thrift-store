import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardItem from "../card";
const Slider = ({
  array = [
    {
      id: 1,
      attributes: {
        title: "Owl ring",
        desc: "This is an owl ring",
        currentprice: 250,
        originalprice: 250,
        discount: "12%",
        createdAt: "2023-05-28T10:27:55.523Z",
        updatedAt: "2023-05-28T10:28:02.179Z",
        publishedAt: "2023-05-28T10:28:02.174Z",
        type: "rings",
        image: {
          data: [
            {
              id: 2,
              attributes: {
                name: "349257175_614417924075301_7619742449270862667_n.jpg",
                alternativeText: null,
                caption: null,
                width: 640,
                height: 632,
                formats: {
                  thumbnail: {
                    name: "thumbnail_349257175_614417924075301_7619742449270862667_n.jpg",
                    hash: "thumbnail_349257175_614417924075301_7619742449270862667_n_9904e55c84",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 158,
                    height: 156,
                    size: 6,
                    url: "http://localhost:1337/uploads/thumbnail_349257175_614417924075301_7619742449270862667_n_9904e55c84.jpg",
                  },
                  small: {
                    name: "small_349257175_614417924075301_7619742449270862667_n.jpg",
                    hash: "small_349257175_614417924075301_7619742449270862667_n_9904e55c84",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 500,
                    height: 494,
                    size: 32.82,
                    url: "http://localhost:1337/uploads/small_349257175_614417924075301_7619742449270862667_n_9904e55c84.jpg",
                  },
                },
                hash: "349257175_614417924075301_7619742449270862667_n_9904e55c84",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 45.63,
                url: "http://localhost:1337/uploads/349257175_614417924075301_7619742449270862667_n_9904e55c84.jpg",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2023-05-28T10:23:35.598Z",
                updatedAt: "2023-05-28T10:23:35.598Z",
              },
            },
          ],
        },
      },
    },
  ],
}) => {
  const [swiper, setSwiper] = useState();
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      centerInsufficientSlides
      breakpoints={{
        768: { slidesPerView: 3.5 },
      }}
      pagination={{ clickable: true }}
      onSwiper={setSwiper}
      className={`relative h-[31rem] w-full cursor-grab active:cursor-grabbing`}
    >
      <div
        className={`w-full absolute inset-0 items-center flex justify-between`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="100%"
          height="100%"
          fill="currentColor"
          className="md:w-10 w-8 md:h-10 h-8 z-40 text-green-500 cursor-pointer bg-white rounded-full"
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
          className="md:w-10 w-8 md:h-10 h-8 z-40 text-green-500 cursor-pointer bg-white rounded-full"
          onClick={() => swiper.slideNext()}
        >
          <path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z" />
        </svg>
      </div>
      {array?.map((data, index) => {
        return (
          <SwiperSlide
            key={index}
            className={`
             flex h-full w-full justify-center cursor-grab
             active:cursor-grabbing`}
          >
            <div className="w-full max-w-xs mx-auto flex justify-center">
              <CardItem {...data} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
