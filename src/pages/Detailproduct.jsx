import React from 'react';
import { Rating } from 'flowbite-react';
import QuantityComp from '../components/Quantity';
import { ButtonDpComp } from '../components/ButtonDp';
import { ButtonCartComp } from '../components/ButtonCart';
import DropdownCartComp from '../components/DropdownCart';
import CardFoodComp from '../components/CardFood';
import ButtonCart2Comp from '../components/ButtonCart2';

function DetailProduct() {
  return (
    <div className='flex flex-col pt-5 gap-2 items-center'>
      <div className='flex flex-col items-center lg:gap-4'>
        <div className='lg:flex lg:flex-row lg:items-start lg:gap-4 lg:w-full'>
          <div className='lg:flex lg:flex-row-reverse flex flex-col items-center lg:ml-10 lg:max-w-lg lg:gap-2'>
            <img
              className='h-[350px] w-[400px] sm:w-[650px] sm:h-[650px] lg:w-96 lg:h-96'
              src='/src/assets/food.svg'
              alt='Telor Balado'
            />
            <div className='gap-2 p-1 mr-58 flex sm:gap-2 sm:p-0 lg:flex-col lg:gap-0 lg:w-full lg:max-w-md'>
              <img className='h-28 w-28 sm:w-52 sm:h-52 lg:w-32 lg:h-32' src='/src/assets/food.svg' alt='Telor Balado' />
              <img className='h-28 w-28 sm:w-52 sm:h-52 lg:w-32 lg:h-32' src='/src/assets/food.svg' alt='Telor Balado' />
              <img className='h-28 w-28 sm:w-52 sm:h-52 lg:w-32 lg:h-32' src='/src/assets/food.svg' alt='Telor Balado' />
            </div>
          </div>
          <div className='flex flex-col gap-2 lg:w-full lg:max-w-md lg:ml-4'>
            <h1 className='hidden lg:flex font-bold text-4xl'>
              Telor Balado
            </h1>
            <div className="hidden lg:flex items-center gap-2">
              <Rating>
                <Rating.Star className="w-5 h-5" />
                <Rating.Star className="w-5 h-5" />
                <Rating.Star className="w-5 h-5" />
                <Rating.Star className="w-5 h-5" />
                <Rating.Star filled={false} className="w-5 h-5" />
              </Rating>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95/5
              </p>
            </div>
            <h1 className='hidden lg:flex lg:text-3xl lg:font-bold'>
              Rp.15.000
            </h1>
            <p className='hidden lg:flex'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='w-full border-t mt-2 hidden lg:flex' />
            <div className='hidden lg:flex'>
              <ButtonDpComp />
            </div>
            <div className='w-full border-t mt-2 hidden lg:flex' />
            <div className='hidden lg:flex lg:gap-4 lg:items-center lg:mt-2'>
              <QuantityComp />
              <ButtonCartComp />
            </div>
          </div>
        </div>
        <div className='hidden lg:flex lg:mt-2 lg:w-full'>
          <ButtonCart2Comp />
        </div>
      </div>
      <h1 className='pr-60 text-xl font-bold md:pr-[528px] lg:hidden'>
        Telor Balado
      </h1>
      <div className='flex mr-[235px] md:mr-[525px] lg:hidden'>
        <Rating>
          <Rating.Star className='w-4 h-4' />
          <Rating.Star className='w-4 h-4' />
          <Rating.Star className='w-4 h-4' />
          <Rating.Star className='w-4 h-4' />
          <Rating.Star filled={false} className='w-4 h-4' />
        </Rating>
        <p className='text-xs ml-2 font-medium text-gray-500 dark:text-gray-400'>
          4.95/5
        </p>
      </div>
      <h1 className='flex text-xl font-bold mt-2 w-full pl-5 justify-between md:pl-16 lg:hidden'>
        Rp.15.000
        <div className='pr-5 md:pr-16 md:hidden'>
          <QuantityComp />
        </div>
      </h1>
      <div className='w-full border-t mt-2 lg:hidden' />
      <div className='md:mr-72 lg:hidden'>
        <ButtonDpComp />
      </div>
      <div className='w-full border-t mt-2 md:hidden' />
      <div className='flex md:justify-between md:gap-44 md:items-center lg:hidden'>
        <div className='md:mr-8'>
          <ButtonCartComp />
        </div>
        <div className='hidden md:font-bold md:flex'>
          <QuantityComp />
        </div>
      </div>
      <div className='md:hidden'>
        <DropdownCartComp />
      </div>
      <div className='w-full border-t mt-2 hidden md:flex' />
      <div className='hidden md:flex md:mr-72 lg:hidden'>
        <ButtonCart2Comp />
      </div>
      <div className='flex flex-col items-center gap-3'>
        <h1 className='font-bold text-xl mt-8'>
          You Might Also Like
        </h1>
        <div className='flex flex-col items-center gap-3 lg:flex lg:flex-row lg:w-full'>
          <CardFoodComp />
          <CardFoodComp />
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
