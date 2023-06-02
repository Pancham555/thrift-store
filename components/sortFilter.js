import React from "react";

const SortFilter = ({ setSort }) => {
  return (
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
  );
};

export default SortFilter;
