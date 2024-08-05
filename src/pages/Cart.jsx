import React from 'react';
import CardFoodComp from '../components/CardFood';
import PaginationComp from '../components/Pagination';
import { Button } from 'flowbite-react';
import FormComp from '../components/Form';
import CardCart from '../components/CardCart';

function Cart() {
  return (
    <div className='mt-5'>
        <div className='flex justify-center w-screen'>
        <h1 className='font-bold text-4xl'>YOUR CART</h1>
        </div>
      <div className='flex flex-col justify-center items-center pt-10 gap-10 lg:flex-row lg:p-10'>
        <div className='flex flex-col gap-1 border p-5 rounded-xl w-11/12'>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        </div>
        <div className='flex flex-col border p-5 rounded-xl w-11/12'>
          <div className='mr-36 gap-4 flex flex-col w-full'>
          <h1 className='font-bold text-xl '>
          Ringkasan Pesanan
          </h1>
          <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>Rp. 45.000</p>
          </div>
          <div className='flex justify-between'>
          <div className='flex gap-1'>
          <p>Diskon</p>
          <p>(-20%)</p>
          </div>
          <p className='text-red-600'>-Rp. 10.000</p>
          </div>
          <div className='border'/>
          <div className='flex justify-between font-bold'>
          <p>Total</p>
          <p>Rp. 35.000</p>
          </div>
          <div className='flex justify-between'>
          <form className="w-44 mx-auto ml-0">
            <div className="relative flex items-center">
              <img className="absolute left-3 w-4" src="src/assets/promo.svg" alt="promo icon"/>
              <input
                type="text"
                id="small-input"
                placeholder="Masukkan Kode Promo"
                className="block w-full pl-10 p-2 text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </form>
          <button className='border p-2 rounded-2xl w-28 text-xs bg-[#1D5C96] hover:bg-blue-900 text-white'>
            <p>Apply</p>
          </button>
          </div>
          <button className='border p-2 rounded-2xl w-full text-xs bg-[#1D5C96] hover:bg-blue-900'>
            <div className='flex gap-2 text-white justify-center'>
            <p>Checkout</p>
            </div>
          </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Cart;
