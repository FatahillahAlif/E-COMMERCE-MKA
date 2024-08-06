import React, { useState } from 'react';

function DropdownReg2Comp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="w-full text-gray-500 bg-white focus:ring-2 border border-gray-300 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Pilih Kelurahan
        <svg
          className="w-2.5 h-2.5 ms-[198px] sm:ms-[398px] lg:ms-[158px] xl:ms-[213px]"
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

      {isOpen && (
        <div className="absolute w-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Balikpapan Timur
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Balikpapan Barat
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Balikpapan Utara
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Balikpapan Tengah
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Balikpapan Selatan
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownReg2Comp;
