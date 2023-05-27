import React, { useEffect, useRef, useState } from "react";

const TagFilter = ({
  tagsList = ["Trending", "Recently added", "Best Sellers"],
  selectedTags,
  setSelectedTags,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropdownToggle() {
    setIsOpen(!isOpen);
  }
  const dropdownRef = useRef(null);
  function handleTagSelect(tag) {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([tag.trim()]);
    }
  }

  function handleTagRemove(tag) {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div
      className="relative inline-block text-left w-auto z-50 justify-end"
      ref={dropdownRef}
    >
      <button
        type="button"
        className="inline-flex w-[11rem] justify-between rounded-md border border-gray-300 min-w-max shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-gray-300 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-900 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={handleDropdownToggle}
      >
        {selectedTags.length === 0 ? tagsList[0] : selectedTags[0]}
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 14l5-5H5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {tagsList.map((tag) => (
              <button
                key={tag}
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 w-full text-left"
                role="menuitem"
                onClick={() => handleTagSelect(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* {selectedTags.length > 0 && (
        <div className="flex flex-wrap mt-3" id="selected-tags">
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="w-full text-center items-center cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2"
              onClick={() => handleTagRemove(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default TagFilter;
