import React from 'react';

export function ButtonCartComp() {
  const handleClick = () => {
    console.log('Add to Cart button clicked');
  };

  return (
    <div className="flex mt-1 items-center">
      <button
        type="button"
        className="text-white bg-[#1D5D96] hover:bg-[#2065A2] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-[139px] py-3 me-2 mb-2 lg:text-base lg:w-96 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ButtonCartComp;
