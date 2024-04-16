import React from "react";
import { Link, createBrowserRouter } from "react-router-dom";
import Head from "./Head";
import Footer from "./footer";

const Card2 = ({connected}) => {
  return (
    <div class="bg-gradient-to-bl from-blue-50 to-violet-50  items-center justify-center lg:h-screen">
 
     
      <div class="container mx-auto mx-auto p-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 
                md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
        >
          <div class="bg-white rounded-lg border p-4">
            <img
              src="img6.jpeg"
              alt="Placeholder Image"
              class="w-full h-48 rounded-md object-cover"
            />
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">Blog Title</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can
                replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">
                voir plus
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4">
            <img
              src="img2.jpeg"
              alt="Placeholder Image"
              class="w-full h-48 rounded-md object-cover"
            />
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">Blog Title</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can
                replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">
                voir plus
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4">
            <img
              src="img3.jpeg"
              alt="Placeholder Image"
              class="w-full h-48 rounded-md object-cover"
            />
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">Blog Title</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can
                replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">
                voir plus
              </a>
            </div>
          </div>
          <div class="bg-white rounded-lg border p-4">
            <img
              src="img4.webp"
              alt="Placeholder Image"
              class="w-full h-48 rounded-md object-cover"
            />
            <div class="px-1 py-4">
              <div class="font-bold text-xl mb-2">Blog Title</div>
              <p class="text-gray-700 text-base">
                This is a simple blog card example using Tailwind CSS. You can
                replace this text with your own blog content.
              </p>
            </div>
            <div class="px-1 py-4">
              <a href="#" class="text-blue-500 hover:underline">
                voir plus
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}

      {/* <div class="bg-gradient-to-r from-violet-100 to-indigo-100 flex items-center justify-center h-screen"> */}
      <div class="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div class="flex justify-end">
          <nav class="flex space-x-2" aria-label="Pagination">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm bg-[#127CE5] from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              Precedent
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              1
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              2
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              3
            </a>
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 text-sm bg-blue-600 from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
            >
              Suivant
            </a>
          </nav>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default Card2;
