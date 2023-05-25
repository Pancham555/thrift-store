import CardItem from "@components/components/card";
import CarouselComponent from "@components/components/carousel";
import Fliters from "@components/components/fliters";
import Navbar from "@components/components/navbar";
import TagFilter from "@components/components/tagFilter";
import { useState } from "react";
export default function Home() {
  const [selectedTags, setSelectedTags] = useState([]);
  return (
    <main>
      <Navbar />
      <CarouselComponent slidesPerView={1} height="slider" />
      <div className="py-8 px-4 sm:px-6 lg:px-8 w-full">
        <Fliters>
          <TagFilter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagsList={["Trending", "Recently added", "Best Sellers"]}
          />
        </Fliters>
        <div className="text-3xl pb-5 font-semibold">Trending items</div>
        <CarouselComponent slidesPerView={3.5} height="card" />
        {/* <div className="flex gap-8 py-5 w-full justify-center lg:justify-normal md:overflow-x-scroll h-full flex-wrap md:flex-nowrap">
          {["", "", "", "", ""].map((data, index) => {
            return <CardItem />;
          })}
        </div> */}
      </div>
    </main>
  );
}
