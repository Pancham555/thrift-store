import React, { useState } from "react";

const PriceFilter = ({
  min = 0,
  max = 10,
  step = 0.1,
  title = "Income (in USD):",
  value = max / 2,
  setValue,
}) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium text-gray-300 mb-2">{title}</h3>
      <input
        type="range"
        min={min}
        step={step}
        max={max}
        value={value}
        onChange={handleChange}
        className="accent-green-700 active:accent-green-700
         w-full h-3.5 rounded-full appearance-none
          bg-green-200"
      />
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background-color: #15803d;
          border-radius: 50%;
          cursor: pointer;
        }
        .range-value {
          width: 5rem;
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: #374151;
          text-align: center;
          background-color: #f3f6f4;
          border-radius: 0.375rem;
          margin: 0 auto;
        }
      `}</style>
      <div className="flex justify-between items-center mt-2 w-full gap-5">
        <div className="text-xs font-medium text-gray-300 w-10 text-left">
          {min}
        </div>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          step={step}
          max={max}
          className="range-value mx-2 text-center w-10"
        />
        <div className="text-xs font-medium text-gray-300 w-10 text-right">
          {max}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 w-full">
        <div className="text-xs font-medium text-gray-300">Low</div>
        <div className="text-xs font-medium text-gray-300">Medium</div>
        <div className="text-xs font-medium text-gray-300">High</div>
      </div>
    </div>
  );
};

export default PriceFilter;
