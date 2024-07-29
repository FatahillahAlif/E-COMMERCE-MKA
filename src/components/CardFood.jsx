import React from "react";
import { Card, Rating } from "flowbite-react";

export function CardFoodComp() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="foto umkm"
      imgSrc="/src/assets/food.svg"
      href="#"
    >
      <div>
        <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          Telur Balado
        </h5>
        <Rating className="mt-1">
          <Rating.Star className="w-3 h-3" />
          <Rating.Star className="w-3 h-3" />
          <Rating.Star className="w-3 h-3" />
          <Rating.Star className="w-3 h-3" />
          <Rating.Star filled={false} className="w-3 h-3" />
          <p className="text-[10px] ml-2 font-medium text-gray-500 dark:text-gray-400">
            4.95/5
          </p>
        </Rating>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Rp.15.000
        </h5>
      </div>
    </Card>
  );
}

export default CardFoodComp;
