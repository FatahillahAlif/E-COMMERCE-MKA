import React from 'react';
import FormComp from '../components/Form';
import CardComp from '../components/Card';

function Dataumkm() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-3xl pt-8'>
        Data UMKM
      </h1>
      <div className='grid grid-cols-1 gap-3 p-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
        <CardComp />
      </div>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
    </div>
    </div>
  );
}

export default Dataumkm;
