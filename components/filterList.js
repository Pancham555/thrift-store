import React, { useState } from "react";
import PriceFilter from "./priceFilter";

const FilterList = () => {
  const [priceValue, setPriceValue] = useState();
  return (
    <div className="text-gray-300 ">
      <div className="text-2xl">Filters</div>
      <div className="h-full sticky left-0 z-[80] ">
        <div className="mt-4">
          <label
            for="category"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Select a Category
          </label>
          <select
            id="category"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose Item Type</option>
            <option value="Rings">Rings</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Sunglasses">Sunglasses</option>
            <option value="Masks">Masks</option>
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <PriceFilter
            title="Price"
            min={100}
            max={2000}
            step={10}
            value={priceValue}
            setValue={setPriceValue}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterList;
