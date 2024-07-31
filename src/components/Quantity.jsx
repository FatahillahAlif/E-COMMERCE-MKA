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
    <div className="flex ml-48 items-center">
      <div className="flex items-center bg-[#F0F0F0] rounded-xl">
        <button
          className="text-sm px-2 py-1 text-black"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="text-sm mx-2 text-gray-900">{quantity}</span>
        <button
          className="text-sm px-2 py-1 text-black"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityComp;
