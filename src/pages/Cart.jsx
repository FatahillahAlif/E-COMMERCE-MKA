import React from 'react';
import CardFoodComp from '../components/CardFood';
import PaginationComp from '../components/Pagination';
import { Button } from 'flowbite-react';
import FormComp from '../components/Form';
import CardCart from '../components/CardCart';

function Cart() {
  return (
    <div className='flex flex-col mt-5 justify-start items-center gap-10'>
        <div className='flex justify-start w-screen pl-4'>
        <h1 className='font-bold text-4xl'>YOUR CART</h1>
        </div>
        <div className='flex flex-col gap-1 border p-5 rounded-xl'>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        </div>
        <div className='flex flex-col border p-5 rounded-xl'>
          <div className='mr-36 gap-4 flex flex-col'>
          <h1 className='font-bold text-xl '>
          Ringkasan Pesanan
          </h1>
          <p>Subtotal</p>
          <p>Diskon</p>
          </div>
        </div>
    </div>
  );
}

export default Cart;
