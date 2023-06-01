import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
const ImageCarousel = ({
  array = [
    {
      id: 16,
      attributes: {
        name: "349257175_614417924075301_7619742449270862667_n.jpg",
        alternativeText: null,
        caption: null,
        width: 640,
        height: 632,
        formats: {
          thumbnail: {
            name: "thumbnail_349257175_614417924075301_7619742449270862667_n.jpg",
            hash: "thumbnail_349257175_614417924075301_7619742449270862667_n_d76ba967cd",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 158,
            height: 156,
            size: 6,
            url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274622/dripvault/thumbnail_349257175_614417924075301_7619742449270862667_n_d76ba967cd.jpg",
            provider_metadata: {
              public_id:
                "dripvault/thumbnail_349257175_614417924075301_7619742449270862667_n_d76ba967cd",
              resource_type: "image",
            },
          },
          small: {
            name: "small_349257175_614417924075301_7619742449270862667_n.jpg",
            hash: "small_349257175_614417924075301_7619742449270862667_n_d76ba967cd",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 500,
            height: 494,
            size: 32.82,
            url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274622/dripvault/small_349257175_614417924075301_7619742449270862667_n_d76ba967cd.jpg",
            provider_metadata: {
              public_id:
                "dripvault/small_349257175_614417924075301_7619742449270862667_n_d76ba967cd",
              resource_type: "image",
            },
          },
        },
        hash: "349257175_614417924075301_7619742449270862667_n_d76ba967cd",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 45.63,
        url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274622/dripvault/349257175_614417924075301_7619742449270862667_n_d76ba967cd.jpg",
        previewUrl: null,
        provider: "cloudinary",
        provider_metadata: {
          public_id:
            "dripvault/349257175_614417924075301_7619742449270862667_n_d76ba967cd",
          resource_type: "image",
        },
        createdAt: "2023-05-28T11:50:22.740Z",
        updatedAt: "2023-05-28T11:50:22.740Z",
      },
    },
  ],
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop={true}
      centerInsufficientSlides
      pagination={{ clickable: true }}
      className={`relative h-[21rem] lg:h-[calc(100vh-12rem)] w-full cursor-grab active:cursor-grabbing`}
    >
      {array?.map((data, index) => {
        const imageUrl =
          data?.attributes?.formats?.medium?.url ??
          data?.attributes?.formats?.small?.url ??
          data?.attributes?.formats?.thumbnail?.url;
        return (
          <SwiperSlide
            key={index}
            className={`items-center h-full w-full justify-center flex-col cursor-grab active:cursor-grabbing`}
          >
            <Image
              priority
              src={imageUrl}
              alt="slider images"
              width={2000}
              height={1500}
              placeholder="blur"
              blurDataURL={imageUrl}
              className={`object-cover w-full h-full bg-slate-700`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageCarousel;
