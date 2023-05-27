import Link from "next/link";
import React from "react";
import links from "./links";
import { useSidebar } from "./sidebarContext";

const Sidebar = ({ open, setOpen, children }) => {
  const [_, setOpensidebar] = useSidebar();
  return (
    <div
      className={`fixed top-0 right-0 z-[10000] h-screen p-4 overflow-y-auto
        transition-transform bg-black w-full duration-200
         ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="relative flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
      </div>
      <div className="lg:ml-8">
        {links.map((data, index) => {
          return (
            <Link
              key={index}
              href={data.href}
              onClick={() => setOpensidebar(false)}
            >
              <div className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                {data.name}
              </div>
            </Link>
          );
        })}
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
