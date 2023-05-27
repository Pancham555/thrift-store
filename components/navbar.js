import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About us", href: "/aboutus" },
    { name: "More", href: "/more" },
  ];
  return (
    <>
      <div className="bg-black shadow-sm shadow-gray-500 sticky w-full top-0 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-4 md:py-4">
          <div className="flex items-center justify-between md:justify-start">
            <button
              type="button"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link href="/" className="font-bold text-gray-700 text-2xl">
              {/* DripVault.store */}
              <Image
                src="/logo.svg"
                width={800}
                height={300}
                alt="Logo"
                className="w-full h-12"
              />
            </Link>

            <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
              {links.map((data, index) => {
                return (
                  <Link
                    href={data.href}
                    key={index}
                    className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden lg:block">
                <input
                  type="search"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <Link
                href="/cart"
                className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
              >
                <svg
                  className="h-6 w-6 leading-none text-gray-300 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="pl-1 text-gray-500 text-md">5</span>
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

          <div className="relative lg:hidden">
            <input
              type="search"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
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
              <Link key={index} href={data.href}>
                <div className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                  {data.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
