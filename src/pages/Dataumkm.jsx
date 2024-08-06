import React from 'react';
import CardComp from '../components/Card';
import ButtonFilComp from '../components/ButtonFil';
import PaginationComp from '../components/Pagination';

function Dataumkm() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-4'>
      <h1 className='font-bold text-3xl text-center'>
        Data UMKM
      </h1>
      <div className='w-full max-w-md'>
        <ButtonFilComp />
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>
      <PaginationComp />
    </div>
  );
}

export default Dataumkm;
