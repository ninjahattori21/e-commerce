import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap mx-40 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-3xl tracking-tight">sneakers</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <span className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            Collection
          </span>
          <span className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            Men
          </span>
          <span className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            Women
          </span>
          <span className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-500 hover:text-black mr-4">
            All
          </span>
          <span className="block mt-4 text-lg lg:inline-block lg:mt-0 text-gray-500 hover:text-black">
            Contact
          </span>
        </div>
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-gray-500 mr-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4M8 11v9a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-9m-4 0a4 4 0 1 1 8 0"
            ></path>
          </svg>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
