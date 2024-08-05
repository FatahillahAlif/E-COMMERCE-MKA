import React, { useState } from 'react';
import CardRatingComp from './CardRating';
import ProdukDesComp from './ProdukDes';

export function ButtonCart2Comp() {
  const [selectedView, setSelectedView] = useState('Detail Produk');

  return (
    <div className="flex flex-col items-center">
      <div className="inline-flex rounded-md shadow-sm gap-5 mb-4 mr-[140px] lg:mr-[404px]" role="group">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${
            selectedView === 'Detail Produk' ? 'bg-gray-200' : 'bg-white'
          }`}
          onClick={() => setSelectedView('Detail Produk')}
        >
          Detail Produk
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ${
            selectedView === 'Review' ? 'bg-gray-200' : 'bg-white'
          }`}
          onClick={() => setSelectedView('Review')}
        >
          Review
        </button>
      </div>

      {/* Render the corresponding component based on selected view */}
      <div className="w-full lg:w-[700px]">
        {selectedView === 'Detail Produk' ? (
            <ProdukDesComp />
        ) : (
            <CardRatingComp />
        )}
      </div>
    </div>
  );
}

export default ButtonCart2Comp;
