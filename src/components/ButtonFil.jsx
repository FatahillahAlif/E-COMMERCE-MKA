import { Button } from "flowbite-react";
import React, { useState } from 'react';

export function ButtonFilComp() {
  const [isKecamatanOpen, setIsKecamatanOpen] = useState(false);
  const [isUsahaOpen, setIsUsahaOpen] = useState(false);

  const toggleKecamatanDropdown = () => {
    setIsKecamatanOpen((prev) => !prev);
  };

  const toggleUsahaDropdown = () => {
    setIsUsahaOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center flex-col">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-6 xl:gap-44 mt-1">
        <div className="relative w-full sm:w-48 lg:w-72">
          <button
            id="dropdownKecamatanButton"
            onClick={toggleKecamatanDropdown}
            className="w-full text-gray-500 bg-white focus:ring-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Semua Kecamatan
            <svg
              className="w-2.5 h-2.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isKecamatanOpen && (
            <div className="absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownKecamatanButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Balikpapan Timur</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Balikpapan Barat</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Balikpapan Utara</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Balikpapan Tengah</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Balikpapan Selatan</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative w-full sm:w-48 lg:w-72">
          <button
            id="dropdownUsahaButton"
            onClick={toggleUsahaDropdown}
            className="w-full text-gray-500 bg-white focus:ring-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Semua Jenis Usaha
            <svg
              className="w-2.5 h-2.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {isUsahaOpen && (
            <div className="absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownUsahaButton">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Usaha 1</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Usaha 2</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Usaha 3</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Usaha 4</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Usaha 5</a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative w-full sm:w-48 lg:w-72">
          <form className="flex items-center w-full">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg 
                  className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input 
                type="text" 
                id="simple-search" 
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 font-semibold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Cari UMKM" 
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5">
        <Button className="w-56 md:w-[600px] lg:w-[910px] xl:w-[1215px] bg-[#1D5C96]">Reset Filter Pencarian</Button>
      </div>
    </div>
  );
}

export default ButtonFilComp;
