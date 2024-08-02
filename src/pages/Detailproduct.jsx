import React from 'react';
import { Dropdown, Rating } from 'flowbite-react';
import QuantityComp from '../components/Quantity';
import { ButtonDpComp } from '../components/ButtonDp';
import { ButtonCartComp } from '../components/ButtonCart';
import DropdownCartComp from '../components/DropdownCart';
import CardFoodComp from '../components/CardFood';

function Detailproduct() {
  return (
    <div className='flex flex-col mt-3 gap-2 items-center'>
      <div className='lg:flex lg:flex-row-reverse'>        
      <img className='h-[350px] w-[400px] lg:w-[500px] lg:h-[475px] lg:mr-36' src='/src/assets/food.svg'/>
      <div className='mr-60 gap-2 flex h-28 w-28 lg:flex lg:flex-col lg:w-44 lg:h-44'>
        <img src='/src/assets/food.svg'/>
        <img src='/src/assets/food.svg'/>
        <img src='/src/assets/food.svg'/>
      </div>
      </div>
      <h1 className='mr-60 text-xl font-bold'>
        Telor Balado
      </h1>
      <div className="flex mr-[235px]">
        <Rating>
          <Rating.Star className="w-4 h-4" />
          <Rating.Star className="w-4 h-4" />
          <Rating.Star className="w-4 h-4" />
          <Rating.Star className="w-4 h-4" />
          <Rating.Star filled={false} className="w-4 h-4" />
        </Rating>
        <p className="text-xs ml-2 font-medium text-gray-500 dark:text-gray-400">
          4.95/5
        </p>
      </div>
      <h1 className='flex text-xl font-bold mt-2 w-full pl-5 justify-between'>
        Rp.15.000
        <div className='pr-5'>
        <QuantityComp />
        </div>
      </h1>
      <div className='w-full border-t mt-2' />
      <ButtonDpComp/>
      <div className='w-full border-t mt-2' />
      <ButtonCartComp />
      <DropdownCartComp />
      <div className='flex flex-col items-center gap-3'>
        <h1 className='font-bold text-xl mt-8'>
          You Might Also Like
        </h1>
        <div className='flex flex-col items-center gap-3 lg:flex lg:flex-row lg:w-full xl:flex xl:flex-row xl:w-full'>
        <CardFoodComp />
        <CardFoodComp />
        </div>
      </div>
    </div>
  );
}

export default Detailproduct;
