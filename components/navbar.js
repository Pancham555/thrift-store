import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import links from "./links";
import { useSidebar } from "./sidebarContext";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@components/redux/search";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [_, setOpen] = useSidebar();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="bg-gray-800 shadow-sm shadow-gray-500 sticky w-full top-0 z-[100]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-4 md:pt-4">
          <div className="flex items-center justify-between md:justify-start">
            <button
              type="button"
              aria-label="Sidebar Opener"
              onClick={() => setOpen(true)}
              className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
            >
              <svg
                className="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link
              href="/"
              aria-label="Home"
              className="font-bold text-gray-700 text-2xl"
            >
              {/* DripVault.store */}
              <Image
                src="/logo.svg"
                width={800}
                height={300}
                alt="Logo"
                priority
                className="w-full h-12"
              />
            </Link>

            <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
              {links.map((data, index) => {
                return (
                  <Link
                    aria-label={data.name}
                    href={data.href}
                    key={index}
                    className="px-2 py-2 text-lg hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(setSearchQuery(query));
                  router.push("/products/search");
                }}
                className="relative hidden lg:block"
              >
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10 text-white bg-gray-900 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                  placeholder="Search"
                />
                <svg
                  className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>

              <Link
                href="/cart"
                aria-label="Cart"
                className="relative flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
              >
                <svg
                  className="h-6 w-6 leading-none text-gray-300 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {cart.length >= 1 ? (
                  <span
                    className="ml-1 font-medium rounded-full w-5 h-5 text-center flex flex-col justify-center 
                     bg-red-500 text-md text-white"
                  >
                    {cart.length}
                  </span>
                ) : null}
              </Link>

              {/* <button
                type="button"
                className=" md:block w-10 h-10 rounded-lg bg-gray-900 border border-gray-200 flex justify-center items-center"
              >
                <Image
                  src="https://avatars.dicebear.com/api/bottts/2.svg"
                  alt="bottts"
                  width="28"
                  height="28"
                  className="rounded-lg mx-auto"
                />
              </button> */}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(setSearchQuery(query));
              router.push("/products/search");
            }}
            className="relative lg:hidden"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-1 w-full pl-10 pr-2 text-white bg-gray-900 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />

            <svg
              className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
