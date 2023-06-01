"use client";
import CardItem from "@components/components/card";
import FilterList from "@components/components/filterList";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Product() {
  const [items, setItems] = useState([
    {
      id: 1,
      attributes: {
        title: "Bracelet",
        desc: "This is a bracelet.",
        createdAt: "2023-05-23T07:36:26.762Z",
        updatedAt: "2023-05-28T11:51:38.096Z",
        publishedAt: "2023-05-23T07:36:34.986Z",
        type: "bracelets",
        currentprice: 249,
        originalprice: 699,
        image: {
          data: [
            {
              id: 15,
              attributes: {
                name: "71Pzqic+ArL._UL1500_.jpg",
                alternativeText: null,
                caption: null,
                width: 1499,
                height: 1500,
                formats: {
                  thumbnail: {
                    name: "thumbnail_71Pzqic+ArL._UL1500_.jpg",
                    hash: "thumbnail_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 156,
                    height: 156,
                    size: 4.01,
                    url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/thumbnail_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d.jpg",
                    provider_metadata: {
                      public_id:
                        "dripvault/thumbnail_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                      resource_type: "image",
                    },
                  },
                  small: {
                    name: "small_71Pzqic+ArL._UL1500_.jpg",
                    hash: "small_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 499,
                    height: 500,
                    size: 25.57,
                    url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/small_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d.jpg",
                    provider_metadata: {
                      public_id:
                        "dripvault/small_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                      resource_type: "image",
                    },
                  },
                  medium: {
                    name: "medium_71Pzqic+ArL._UL1500_.jpg",
                    hash: "medium_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 750,
                    height: 750,
                    size: 46.18,
                    url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/medium_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d.jpg",
                    provider_metadata: {
                      public_id:
                        "dripvault/medium_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                      resource_type: "image",
                    },
                  },
                  large: {
                    name: "large_71Pzqic+ArL._UL1500_.jpg",
                    hash: "large_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 999,
                    height: 1000,
                    size: 69.4,
                    url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/large_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d.jpg",
                    provider_metadata: {
                      public_id:
                        "dripvault/large_71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                      resource_type: "image",
                    },
                  },
                },
                hash: "71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 85.82,
                url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/71_Pzqic_Ar_L_UL_1500_1ebbd21a6d.jpg",
                previewUrl: null,
                provider: "cloudinary",
                provider_metadata: {
                  public_id: "dripvault/71_Pzqic_Ar_L_UL_1500_1ebbd21a6d",
                  resource_type: "image",
                },
                createdAt: "2023-05-28T11:47:11.503Z",
                updatedAt: "2023-05-28T11:47:11.503Z",
              },
            },
          ],
        },
      },
    },
  ]);
  // const [selectedTags, setSelectedTags] = useState([]);
  const [open, seOpen] = useSidebar();
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const getItems = async () => {
    setLoading(true);
    try {
      const baseurl = process.env.STRAPI_URL;
      const url =
        baseurl +
        `/api/products?${
          sort.length > 2 ? "sort[0]=" + sort + "&" : ""
        }populate=*`;

      const data = await axios.get(url);
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
  };
  useEffect(() => {
    getItems();
  }, [sort, category, price]);
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
              max={1800}
              min={0}
            />
          </div>
        </div>
        <div className="md:w-[75%] w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
          {/* px-4 sm:px-6 lg:px-8 */}
          <div className="flex justify-end z-50">
            <div className="relative">
              <select
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none border text-gray-300 bg-gray-900 border-gray-300 rounded-md py-2 pl-3 pr-10 sm:pr-16 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option selected>Sort By</option>
                <option value="updatedAt:desc">Newest First</option>
                <option value="currentprice:asc">Price (Low to High)</option>
                <option value="currentprice:desc">Price (High to Low)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-300">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className=" my-4">
            {loading && (
              <div className="flex justify-center w-full">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            )}
            <div className="w-full gap-6 lg:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-30">
              {!loading &&
                items.map((data, index) => {
                  return (
                    <div key={index} className="w-full flex justify-center">
                      <CardItem {...data} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
