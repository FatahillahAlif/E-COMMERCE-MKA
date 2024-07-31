import React, { useState } from 'react';
import ProductDescomp from './ProdukDes';
import CardRatingComp from './CardRating';

export function DropdownCartComp() {
  const [selectedOption, setSelectedOption] = useState('Detail Produk');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Detail Produk', 'Review'];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-[350px]">
      <button
        type="button"
        className="mt-3 h-10 w-full rounded-md border-2 border-gray-400 bg-white text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-400 rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
      
      {/* Render the corresponding component based on selected option */}
      <div className="mt-4">
        {selectedOption === 'Detail Produk' ? (
          <ProductDescomp />
        ) : (
          <CardRatingComp />
        )}
      </div>
    </div>
  );
}

export default DropdownCartComp;
