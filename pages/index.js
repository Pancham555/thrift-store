import Hero from "@components/components/hero";
import CarouselComponent from "@components/components/carousel";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import axios from "axios";
import { useEffect, useState } from "react";
import "dotenv/config";
export default function Home() {
  const [open, setOpen] = useSidebar();
  const [trending, setTrending] = useState([
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
                    url: "/uploads/thumbnail_349257175_614417924075301_7619742449270862667_n_9904e55c84.jpg",
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
                    url: "/uploads/small_349257175_614417924075301_7619742449270862667_n_9904e55c84.jpg",
                  },
                },
                hash: "349257175_614417924075301_7619742449270862667_n_9904e55c84",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 45.63,
                url: "/uploads/349257175_614417924075301_7619742449270862667_n_9904e55c84.jpg",
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
  ]);
  const [loading, setLoading] = useState(false);
  const getTrendingData = async () => {
    setLoading(true);
    try {
      const baseurl = process.env.STRAPI_URL;
      const url = baseurl + `/api/trending?populate=products,products.image`;
      const data = await axios.get(url);
      setTrending(data.data?.data?.attributes?.products?.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    getTrendingData();
  }, []);
  return (
    <main className="bg-gray-800">
      <Sidebar open={open} setOpen={setOpen} />
      <Hero />
      <>
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-3xl font-semibold text-white">
            Trending items
          </div>
        </div>
        <div className="pb-8 px-2 sm:px-6 lg:px-8 w-full mt-4">
          {loading && (
            <div className="flex justify-center w-full">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          {!loading && <CarouselComponent array={trending} />}
        </div>
      </>
    </main>
  );
}
