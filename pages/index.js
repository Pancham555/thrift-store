import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "@components/components/hero";
import CarouselComponent from "@components/components/carousel";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import Spinner from "@components/components/spinner";
// import home from "../components/json_types/home.js";
import NoResults from "@components/components/noResults.js";
import Head from "next/head";
export default function Home() {
  const [open, setOpen] = useSidebar();
  const [trending, setTrending] = useState([]);
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
      <Head>
        <title>
          Drip Vault: Unveiling the Ultimate Thrift Treasure Trove - Shop
          Vintage Gems Online
        </title>
      </Head>
      <Sidebar open={open} setOpen={setOpen} />
      <Hero />
      <>
        <div className="pt-8 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-3xl font-semibold text-white">
            Trending items
          </div>
        </div>
        <div className="pb-8 px-2 sm:px-6 lg:px-8 w-full mt-4">
          {loading && <Spinner />}
          {!loading && trending.length !== 0 ? (
            <CarouselComponent array={trending} />
          ) : (
            !loading && <NoResults />
          )}
        </div>
      </>
    </main>
  );
}
