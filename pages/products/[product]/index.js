import Navbar from "@components/components/navbar";
import React, { useEffect, useState } from "react";

const ProductItem = () => {
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
  }, [quantity]);
  return (
    <div className="bg-black">
      <Navbar />
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
            <div className="md:w-[60%] w-full px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    x-show="image === 1"
                    className="h-64 md:h-80 w-full rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  >
                    <span className="text-5xl">1</span>
                  </div>
                </div>

                <div className="flex mb-4 gap-5 justify-between">
                  <div className="w-48 h-20 lg:h-32 rounded-md bg-slate-500"></div>
                  <div className="w-48 h-20 lg:h-32 rounded-md bg-slate-500"></div>
                  <div className="w-48 h-20 lg:h-32 rounded-md bg-slate-500"></div>
                  <div className="w-48 h-20 lg:h-32 rounded-md bg-slate-500"></div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 my-auto">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-300 text-2xl md:text-3xl">
                Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
              </h2>
              <p className="text-gray-300 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">₹</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      234
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-300">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>
              <div className="flex py-4 align-middle gap-5">
                <div className="relative my-auto">
                  <div className="text-center pt-2 block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <div className="custom-number-input h-10 w-32 my-auto">
                    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                      <button
                        data-action="decrement"
                        onClick={() => setQuantity(quantity - 1)}
                        className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="border-transparent focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number"
                        value={quantity}
                      />
                      <button
                        data-action="increment"
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="my-auto">
                  <div className=" pt-2 block text-xs uppercase invisible">
                    Cart
                  </div>
                  <button
                    type="button"
                    className="h-14 my-auto px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Add to Cart
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
