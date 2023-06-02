import Image from "next/image";
import React, { useState } from "react";
import { addItemToCart } from "../redux/cart";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { id, attributes } from "./json_types/card";

const idcard = id;
const attributescard = attributes;

const Card = ({ id = idcard, attributes = attributescard }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const imageUrl =
    attributes?.image?.data?.[0]?.attributes?.formats?.medium?.url ??
    attributes?.image?.data?.[0]?.attributes?.formats?.small?.url ??
    attributes?.image?.data?.[0]?.attributes?.formats?.thumbnail?.url ??
    attributes.image[0].formats?.medium?.url ??
    attributes.image[0].formats?.thumbnail?.url;
  return (
    <div className=" max-w-xs relative flex w-full flex-col overflow-hidden rounded-lg border-gray-600 bg-gray-900 shadow-gray-700 shadow-md">
      {/* {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="popup absolute inset-0
            bg-white rounded-xl shadow-lg z-10 h-80"
        >
          <div className="rounded-xl w-full h-full">
            <Image
              src={imageUrl}
              alt="Popup Image"
              width={800}
              height={800}
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      )} */}
      <Link href={`/products/${id}`}>
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <Image
            width={500}
            height={500}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="object-cover w-full"
            src={imageUrl}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {Math.round(
              ((attributes?.originalprice - attributes?.currentprice) * 100) /
                attributes?.originalprice
            )}
            % OFF
          </span>
        </div>
      </Link>
      <div className="mt-4 px-5 pb-5 text-gray-300">
        <Link href={`/products/${id}`}>
          <h5 className="tracking-tight w-full overflow-hidden text-xl line-clamp-2 text-ellipsis">
            {attributes.title}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold">
              ₹{attributes.currentprice}
            </span>{" "}
            <span className="text-sm line-through">
              ₹{attributes.originalprice}
            </span>
          </p>
          <div className="flex items-center"></div>
        </div>
        <button
          onClick={() => dispatch(addItemToCart({ id, attributes }))}
          className="w-full flex items-center justify-center rounded-md bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 duration-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
