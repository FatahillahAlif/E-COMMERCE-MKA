import React from 'react';
import CardFoodComp from '../components/CardFood';
import PaginationComp from '../components/Pagination';
import { Button } from 'flowbite-react';

function Produkumkm() {
  return (
    <div className='flex flex-col mt-5 justify-center items-center gap-10'>
      <div className='border w-72 md:w-[550px] lg:w-[810px] xl:w-[1090px] border-black rounded-lg flex justify-between items-center p-4'>
        <div className='flex items-center'>
          <img className='w-14 h-14 mr-4 border-black rounded-lg' alt="foto umkm" src="/src/assets/image8.svg"/>
          <div className='flex flex-col'>
            <p className='font-bold text-base'>Pawon Bu Fatim</p>
            <Button className="mt-1 w-[150px] h-[25px] items-center bg-[#1D5C96]">Lihat Profile Toko</Button>
          </div>
        </div>
      </div>
      
      <div className='text-center'>
        <h1 className='font-bold text-2xl sm:text-4xl'>
          PRODUK UMKM
        </h1>
        <div className='h-1 bg-[#1D5C96] rounded-sm mx-auto w-24 mt-1' />
      </div>
      
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
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

export default Produkumkm;
