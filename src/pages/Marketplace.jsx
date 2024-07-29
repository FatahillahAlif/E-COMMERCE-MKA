import React from 'react';
import CardFoodComp from '../components/CardFood';
import PaginationComp from '../components/Pagination';
import { Button } from 'flowbite-react';

function Marketplace() {
  return (
    <div className='flex flex-col mt-5 items-center gap-10'>
      <h1 className='mr-[1130px] font-semibold text-3xl'>
        Semua
      </h1>
      <div className='mb-1 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
      </div>
      <div>
        <PaginationComp />
      </div>
    </div>
  );
}

export default Marketplace;
