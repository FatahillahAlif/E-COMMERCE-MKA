import React from "react";
import { Card, Rating } from "flowbite-react";

export function CardComp() {
  return (
    <Card
      className="max-w-sm"
      imgAlt="foto umkm"
      imgSrc="/src/assets/image8.svg"
    >
      <div className="p-0">
        <h5 className="text-s font-bold tracking-tight text-gray-900 dark:text-white mt-2">
          Bengkel Satria Motor
        </h5>
        <div className="flex items-center mt-1.5">
          <img 
            src="/src/assets/arcticons_mapsgeobookmarks.svg" 
            alt="Geo Bookmark Icon" 
            className="mt-1 w-3 h-3 mr-1"
          />
        <p className="text-[13px] font-normal text-gray-700 dark:text-gray-400 mt-1">
          Balikpapan Utara
        </p>
        </div>
        <Rating className="mt-2">
          <Rating.Star className="w-4 h-4" />
          <Rating.Star className="w-4 h-4" />
          <Rating.Star className="w-4 h-4" />
          <Rating.Star className="w-4 h-4" />
          <Rating.Star filled={false} className="w-4 h-4" />
          <p className="text-xs ml-2 font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
      </div>
    </Card>
  );
}

export default CardComp;
