"use client";
import Sidebar from "@components/components/sidebar";
import { useSidebar } from "@components/components/sidebarContext";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { addItemToCart } from "../../../redux/cart";
import { useDispatch } from "react-redux";
const ProductItem = () => {
  const [itemInfo, setItemInfo] = useState({
    id: 4,
    attributes: {
      title: "Golden Bracelet",
      desc: "This is a golden bracelet.",
      createdAt: "2023-05-28T10:30:51.023Z",
      updatedAt: "2023-05-28T11:51:25.037Z",
      publishedAt: "2023-05-28T10:30:52.223Z",
      type: "bracelets",
      currentprice: 199,
      originalprice: 799,
      image: {
        data: [
          {
            id: 14,
            attributes: {
              name: "photo-1611591437281-460bfbe1220a.webp",
              alternativeText: null,
              caption: null,
              width: 870,
              height: 580,
              formats: {
                small: {
                  name: "small_photo-1611591437281-460bfbe1220a.webp",
                  hash: "small_photo_1611591437281_460bfbe1220a_0605c38456",
                  ext: ".webp",
                  mime: "image/webp",
                  path: null,
                  width: 500,
                  height: 333,
                  size: 9.08,
                  url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/small_photo_1611591437281_460bfbe1220a_0605c38456.webp",
                  provider_metadata: {
                    public_id:
                      "dripvault/small_photo_1611591437281_460bfbe1220a_0605c38456",
                    resource_type: "image",
                  },
                },
                medium: {
                  name: "medium_photo-1611591437281-460bfbe1220a.webp",
                  hash: "medium_photo_1611591437281_460bfbe1220a_0605c38456",
                  ext: ".webp",
                  mime: "image/webp",
                  path: null,
                  width: 750,
                  height: 500,
                  size: 16.09,
                  url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/medium_photo_1611591437281_460bfbe1220a_0605c38456.webp",
                  provider_metadata: {
                    public_id:
                      "dripvault/medium_photo_1611591437281_460bfbe1220a_0605c38456",
                    resource_type: "image",
                  },
                },
                thumbnail: {
                  name: "thumbnail_photo-1611591437281-460bfbe1220a.webp",
                  hash: "thumbnail_photo_1611591437281_460bfbe1220a_0605c38456",
                  ext: ".webp",
                  mime: "image/webp",
                  path: null,
                  width: 234,
                  height: 156,
                  size: 2.84,
                  url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/thumbnail_photo_1611591437281_460bfbe1220a_0605c38456.webp",
                  provider_metadata: {
                    public_id:
                      "dripvault/thumbnail_photo_1611591437281_460bfbe1220a_0605c38456",
                    resource_type: "image",
                  },
                },
              },
              hash: "photo_1611591437281_460bfbe1220a_0605c38456",
              ext: ".webp",
              mime: "image/webp",
              size: 24,
              url: "https://res.cloudinary.com/dc4zxxnuj/image/upload/v1685274431/dripvault/photo_1611591437281_460bfbe1220a_0605c38456.webp",
              previewUrl: null,
              provider: "cloudinary",
              provider_metadata: {
                public_id:
                  "dripvault/photo_1611591437281_460bfbe1220a_0605c38456",
                resource_type: "image",
              },
              createdAt: "2023-05-28T11:47:11.256Z",
              updatedAt: "2023-05-28T11:47:11.256Z",
            },
          },
        ],
      },
    },
    quantity: 1,
  });
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
  const getItem = async () => {
    try {
      const baseurl = process.env.STRAPI_URL;
      const url = baseurl + `/api/products/${id}?populate=*`;
      const item = await axios.get(url);
      setItemInfo(item.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const isNumber = (str) => {
    return (
      /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(str) ||
      !isNaN(parseFloat(str))
    );
  };
  useEffect(() => {
    getItem();
    if (!isNumber(id)) {
      router.back();
    }
  }, [id]);
  return (
    <div className="bg-black">
      <Sidebar open={open} setOpen={setOpen} />
      <div className="py-6">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className="hover:underline hover:text-gray-600">
              Electronics
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>Headphones</span>
          </div>
        </div> */}
        <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:w-[60%] h-full w-full px-4">
              <div className="w-full h-full">
                <div className="h-64 md:h-96 rounded-lg bg-gray-100 mb-4">
                  <Image
                    src={imageUrl}
                    width={800}
                    height={600}
                    className="object-cover h-full w-full rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  />
                  {/* h-64 md:h-80 */}
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
                    Save{" "}
                    {Math.round(
                      ((itemInfo?.attributes?.originalprice -
                        itemInfo?.attributes?.currentprice) *
                        100) /
                        itemInfo?.attributes?.originalprice
                    )}
                    %
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
                {/* <div className="relative my-auto">
                  <div className="text-center pt-2 block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <div className="custom-number-input h-10 w-32 my-auto">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        onClick={() =>
                          dispatch(reduceItemToCart({ ...itemInfo }))
                        }
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="border-transparent focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value={cart[findIndexByTypeId(cart, id)]?.quantity}
                      />
                      <button
                        data-action="increment"
                        id
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div> */}
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
                  {/* <button
                    onClick={() => dispatch(addItemToCart({ ...itemInfo }))}
                    type="button"
                    className="h-14 my-auto px-6 py-2 font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Add to Cart
                  </button> */}
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
