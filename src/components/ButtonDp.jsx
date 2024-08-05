import React, { useState } from 'react';

export function ButtonDpComp() {
  const [activeButton, setActiveButton] = useState('Pedas');

  const handleButtonClick = (value) => {
    setActiveButton(value);
  };

  return (
    <div className='mr-40'>
      <label htmlFor="variasi" className="block text-sm font-medium leading-8 lg:text-base text-gray-900">
        Variasi:
      </label>
      <div className="inline-flex gap-3 rounded-md shadow-sm" role="group">
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium lg:text-base ${activeButton === 'Pedas' ? 'text-white bg-[#1D5D96]' : 'text-black bg-[#F0F0F0]'} border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
          onClick={() => handleButtonClick('Pedas')}
        >
          Pedas
        </button>
        <button
          type="button"
          className={`px-4 py-2 text-sm font-medium lg:text-base ${activeButton === 'Tidak Pedas' ? 'text-white bg-[#1D5D96]' : 'text-black bg-[#F0F0F0]'} border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700`}
          onClick={() => handleButtonClick('Tidak Pedas')}
        >
          Tidak Pedas
        </button>
      </div>
    </div>
  );
}

export default ButtonDpComp;
