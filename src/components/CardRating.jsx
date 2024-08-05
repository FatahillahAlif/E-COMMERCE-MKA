import React from 'react';
import { Rating } from 'flowbite-react'; // Import Rating component from Flowbite

export function CardRatingComp() {
  return (
    <div className="w-[350px] p-6 lg:ml-14 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <a href="#" className="block">
        {/* Rating moved to the top */}
        <Rating>
          <Rating.Star className="w-5 h-5" />
          <Rating.Star className="w-5 h-5" />
          <Rating.Star className="w-5 h-5" />
          <Rating.Star className="w-5 h-5" />
          <Rating.Star filled={false} className="w-5 h-5" />
        </Rating>
        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Review by John Doe
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mt-2">
          "I recently purchased this product, and I must say it exceeded my expectations! The quality is fantastic, and it arrived on time. Highly recommend to anyone looking for a reliable option."
        </p>
      </a>
    </div>
  );
}

export default CardRatingComp;
