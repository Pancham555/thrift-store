import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import { addItemToCart } from "../../../redux/cart";
import product from "../../../components/json_types/product.json";

const ProductItem = () => {
  const [itemInfo, setItemInfo] = useState(product);
  const imageUrl =
    itemInfo?.attributes?.image?.data?.[0]?.attributes?.formats?.medium?.url ??
    itemInfo?.attributes?.image?.data?.[0]?.attributes?.formats?.small?.url ??
    itemInfo?.attributes?.image?.data?.[0]?.attributes?.formats?.thumbnail
      ?.url ??
    itemInfo?.attributes.image[0].formats?.medium?.url ??
    itemInfo?.attributes.image[0].formats?.thumbnail?.url;
  const [expandDesc, setExpandDesc] = useState(false);
  const [open, setOpen] = useSidebar();
  const router = useRouter();
  const id = router.query.product;
  const dispatch = useDispatch();
  const getItem = useCallback(async () => {
    try {
      const baseurl = process.env.STRAPI_URL;
      const url = baseurl + `/api/products/${id}?populate=*`;
      const item = await axios.get(url);
      setItemInfo(item.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const isNumber = (str) => {
    return (
      /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(str) ||
      !isNaN(parseFloat(str))
    );
  };

  const discountPercentage = Math.round(
    ((itemInfo?.attributes?.originalprice -
      itemInfo?.attributes?.currentprice) *
      100) /
      itemInfo?.attributes?.originalprice
  );

  useEffect(() => {
    getItem();
    if (!isNumber(id)) {
      router.back();
    }
  }, [id, getItem, router]);
  return (
    <div className="bg-black">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:w-[60%] h-full w-full px-4">
              <div className="w-full h-full">
                <div className="h-64 md:h-96 rounded-lg bg-gray-100 mb-4">
                  <Image
                    src={imageUrl}
                    width={800}
                    height={600}
                    alt="Product"
                    className="object-cover h-full w-full rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 my-auto">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-300 text-2xl md:text-3xl">
                {itemInfo?.attributes?.title}
              </h2>
              {/* <p className="text-gray-300 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p> */}

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">₹</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {itemInfo?.attributes?.currentprice}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save {discountPercentage ? discountPercentage : 0}%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>
              <p className="text-gray-300">
                <p
                  className={`${
                    expandDesc ? "" : "text-ellipsis line-clamp-4"
                  }`}
                >
                  {itemInfo?.attributes?.desc}
                </p>
                <span
                  className="cursor-pointer"
                  onClick={() => setExpandDesc(!expandDesc)}
                >
                  Read {expandDesc ? "Less" : "More"}
                </span>
              </p>
              <div className="flex py-4 align-middle gap-5">
                <div className="my-auto">
                  <button
                    onClick={() => dispatch(addItemToCart({ ...itemInfo }))}
                    className="w-full px-6 py-2.5 text-lg flex items-center justify-center rounded-md bg-green-500 text-center font-medium text-white hover:bg-green-600 duration-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
