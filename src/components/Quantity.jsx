import React, { useState } from 'react';

export function QuantityComp() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center bg-[#F0F0F0] rounded-xl">
        <button
          className="text-sm lg:text-base lg:font-bold px-2 py-1 text-black"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="text-sm lg:text-base lg:font-bold mx-2 text-gray-900">{quantity}</span>
        <button
          className="text-sm lg:text-base lg:font-bold px-2 py-1 text-black"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityComp;