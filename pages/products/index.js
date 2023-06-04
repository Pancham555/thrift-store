import CardItem from "@components/components/card";
import FilterList from "@components/components/filterList";
import NoResults from "@components/components/noResults";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import SortFilter from "@components/components/sortFilter";
import Spinner from "@components/components/spinner";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Product() {
  const [items, setItems] = useState([]);

  const [open, seOpen] = useSidebar();
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const getItems = useCallback(async () => {
    setLoading(true);
    try {
      const baseurl = process.env.STRAPI_URL;
      const url =
        baseurl +
        `/api/products?${
          sort.length > 2 ? "sort[0]=" + sort + "&" : ""
        }populate=*`;

      const data = await axios.get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });

      const filteredItemByCategory =
        category.length > 2
          ? data.data.data.filter((item) => item.attributes.type === category)
          : data.data.data;
      const filteredItemByPrice =
        price !== 0
          ? filteredItemByCategory.filter(
              (item) => item.attributes.currentprice <= price
            )
          : filteredItemByCategory;
      setItems(filteredItemByPrice);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [sort, category, price]);

  useEffect(() => {
    getItems();
  }, [sort, category, price, getItems]);

  return (
    <main className="bg-gray-800">
      <Sidebar open={open} setOpen={seOpen}>
        <FilterList
          price={price}
          setPrice={setPrice}
          category={category}
          setCategory={setCategory}
          max={1800}
          min={0}
        />
      </Sidebar>
      <div className="flex pt-8 lg:flex-nowrap flex-wrap">
        <div className="md:w-[25%] pt-0 overflow-hidden w-0 sticky top-0 z-[60] text-gray-300">
          <div className="pl-4 sm:pl-6 lg:pl-8">
            <FilterList
              price={price}
              setPrice={setPrice}
              category={category}
              setCategory={setCategory}
              max={500}
              min={0}
            />
          </div>
        </div>
        <div className="md:w-[75%] w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end z-50">
            <SortFilter setSort={setSort} />
          </div>
          <div className="my-4">
            {loading && <Spinner />}
            <div className="w-full gap-6 lg:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30">
              {!loading && items.length !== 0
                ? items.map((data, index) => {
                    return (
                      <div key={index} className="w-full flex justify-center">
                        <CardItem {...data} />
                      </div>
                    );
                  })
                : !loading && <NoResults />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
