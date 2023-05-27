import CardItem from "@components/components/card";
import FilterList from "@components/components/filterList";
import FilterDropdown from "@components/components/fliters";
import Navbar from "@components/components/navbar";
import PriceFilter from "@components/components/priceFilter";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import TagFilter from "@components/components/tagFilter";
import { useState } from "react";

export default function Product() {
  const items = ["", "", "", "", "", "", ""];
  const [selectedTags, setSelectedTags] = useState([]);
  const [open, seOpen] = useSidebar();
  return (
    <main className="bg-black">
      <Sidebar open={open} setOpen={seOpen}>
        <FilterList />
      </Sidebar>
      <Navbar />
      <div className="flex pt-8 lg:flex-nowrap flex-wrap">
        <div className="lg:w-[25%] overflow-hidden w-0 sticky top-0 z-[60] text-gray-300">
          <FilterList />
        </div>
        <div className="lg:w-[75%] w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
          {/* px-4 sm:px-6 lg:px-8 */}
          <div className="flex justify-end z-50">
            <TagFilter
              tagsList={[
                "Sort By",
                "Newest First",
                "Price (Low to High)",
                "Price (High to Low)",
              ]}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />
          </div>
          <div className="w-full my-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30">
            {items.map((data, index) => {
              return (
                <div key={index} className="w-full flex justify-center">
                  <CardItem />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
