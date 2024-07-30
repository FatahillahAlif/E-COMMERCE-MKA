import React from 'react';
import CardFoodComp from '../components/CardFood';
import PaginationComp from '../components/Pagination';
import DropdownMPComp from '../components/DropdownMP';
import FillMPComp from '../components/FillMP';

function Marketplace() {
  return (
    <div className='flex flex-col mt-5 items-center'>
      <div className='flex flex-wrap w-full justify-between items-center px-4 sm:px-8 md:px-24'> 
        {/* Menghapus bagian yang tidak diperlukan */}
        <div className='flex-grow' /> {/* Membantu memisahkan konten */}
        <div className='flex items-center w-full sm:w-auto justify-end'> {/* Mengatur elemen ke kanan */}
          <h1 className='text-xs mr-2'>Sort by:</h1>
          <DropdownMPComp />
        </div>
      </div>
      <div className='flex w-full flex-col sm:flex-row mt-4 items-start justify-start'>
        <div className='flex-shrink-0 mb-4 sm:mb-0 sm:mr-7 sm:ml-10'>
          <FillMPComp />
        </div>
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-7'>
          <CardFoodComp />
          <CardFoodComp />
          <CardFoodComp />
          <CardFoodComp />
          <CardFoodComp />
          <CardFoodComp />
          <CardFoodComp />
          <CardFoodComp />
        </div>
      </div>
      <div className='mt-10 w-full'>
        <PaginationComp />
      </div>
    </div>
  );
}

export default Marketplace;
