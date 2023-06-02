import React, { useState } from "react";
import PriceFilter from "./priceFilter";

const FilterList = ({
  category,
  setCategory,
  price,
  setPrice,
  min = 0,
  max = 1000,
}) => {
  // const [priceValue, setPriceValue] = useState();
  return (
    <div className="text-gray-300 ">
      <div className="text-2xl">Filters</div>
      <div className="h-full sticky left-0 z-[80] ">
        <div className="my-4">
          <label
            for="category"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Select a Category
          </label>
          <div className="relative w-full">
            <select
              onChange={(e) => setCategory(e.target.value)}
              id="category"
              className="appearance-none w-full border text-gray-300 bg-gray-900 border-gray-300 rounded-md py-2 pl-3 pr-10 sm:pr-16 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option selected value="">
                Choose Item Type
              </option>
              <option value="rings">Rings</option>
              <option value="bracelets">Bracelets</option>
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
        <div className="flex justify-center mt-4">
          <PriceFilter
            title="Price"
            min={min}
            max={max}
            step={10}
            value={price}
            setValue={setPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
