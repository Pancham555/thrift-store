// import Image from "next/image";
// import { useRouter } from "next/navigation";
// export default function CardItem({
//   image = "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//   title = "Product Name",
//   desc = "Product description goes here.",
//   currentprice = "$20.00",
//   originalprice = "$25.00",
//   discount = "20% off",
// }) {
//   const router = useRouter();
//   return (
//     <div
//       onClick={() => router.push("/products/2")}
//       className="shadow-gray-700 my-5 w-full cursor-pointer transform overflow-hidden rounded-lg bg-gray-900  shadow-md duration-300 z-0"
//     >
//       {/* hover:shadow-lg */}
//       {/* dark:bg-slate-800 */}
//       {/* hover:scale-105 */}
//       <Image
//         width={360}
//         height={360}
//         className="lg:h-60 h-56 w-full object-cover object-center"
//         src={image}
//         alt="Product Image"
//       />
//       <div className="p-4 text-gray-300">
//         <h2 className="mb-2 text-lg font-medium">
//           {/* dark:text-white */}
//           {title}
//         </h2>
//         {/* dark:text-gray-300 */}
//         {/* <p className="mb-2 text-base text-gray-700">{desc}</p> */}
//         <div className="flex items-center">
//           <p className="mr-2 text-lg font-semibold">
//             {/* dark:text-white */}
//             {currentprice}
//           </p>
//           <p className="text-base  font-medium text-gray-500 line-through">
//             {/* dark:text-gray-300 */}
//             {originalprice}
//           </p>
//           <p className="ml-auto text-base font-medium text-green-500">
//             {discount}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
  image = "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=65",
  title = "Product Name",
  desc = "Product description goes here.",
  currentprice = "449",
  originalprice = "699",
  discount = "20%",
}) => {
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border-gray-600 bg-gray-800 shadow-gray-700 shadow-md">
      <Link
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="/products/2"
      >
        <Image
          width={300}
          height={300}
          className="object-cover"
          src={image}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discount} OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5 text-gray-300">
        <Link href="/products/2">
          <h5 className="text-xl tracking-tight">
            Nike Air MX Super 2500 - Red
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold">₹{currentprice}</span>{" "}
            <span className="text-sm line-through">₹{originalprice}</span>
          </p>
          <div className="flex items-center"></div>
        </div>
        <Link
          href="/products/2"
          className="flex items-center justify-center rounded-md bg-green-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 duration-100 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
        </Link>
      </div>
    </div>
  );
};

export default Card;
