import React, { useState } from 'react';

export function FillMPComp() {
  const [dropdownStates, setDropdownStates] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
  });

  const toggleDropdown = (dropdownKey) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [dropdownKey]: !prevStates[dropdownKey],
    }));
  };

  const handleApplyFilter = () => {
    // Logika untuk menerapkan filter bisa ditambahkan di sini
    console.log('Filters applied!');
  };

  return (
    <div className="w-full max-w-xs sm:max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 relative">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg sm:text-xl font-bold leading-none text-gray-900 dark:text-white flex items-center">
          Filters
          <img className='ml-3 hidden sm:block' src='/src/assets/Vector.svg' alt="Icon" />
        </h5>
      </div>
      <hr className="border-gray-300 mt-7" /> {/* Garis abu-abu di bawah judul Filters */}
      <div className="flow-root">
        {['Aksesoris', 'Makanan', 'Pakaian', 'Kesehatan', 'Furnitur'].map((item, index) => (
          <div className="flex flex-col items-start mb-2" key={index}>
            <button
              className="text-gray-600 font-medium rounded-lg text-xs sm:text-sm px-4 py-2.5 text-center inline-flex items-center w-full justify-between"
              type="button"
              onClick={() => toggleDropdown(`dropdown${index + 1}`)}
            >
              <span className="flex-1 text-left">{item}</span>
              <svg
                className="w-2 h-2 ml-3" // Ukuran untuk panah
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
            {dropdownStates[`dropdown${index + 1}`] && (
              <div className="z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full sm:w-[150px] dark:bg-gray-700">
                <ul className="py-2 text-xs sm:text-sm text-gray-700 dark:text-gray-200">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></li>
                </ul>
              </div>
            )}
          </div>
        ))}
        <hr className="border-gray-300 mt-1" /> {/* Garis abu-abu di bawah dropdown kelima */}
        <div className="mt-4">
          <button
            className="w-full sm:w-[180px] text-white bg-[#1D5D96] hover:bg-[#2D689D] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-medium rounded-full text-xs px-4 py-2.5 text-center"
            type="button"
            onClick={handleApplyFilter}
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FillMPComp;
