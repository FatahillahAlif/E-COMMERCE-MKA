import React from 'react'

function CardCart() {
  return (
    <div>
    <a href="#" className="flex items-center w-80 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-28 pl-4 rounded-t-lg h-auto md:h-auto md:w-32 md:rounded-none md:rounded-s-lg" src="src/assets/food.svg" alt="Produk"/> 
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Telur Balado</h5>
            <div className='flex gap-1'>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Variasi</p>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">:</p>
            <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Pedas</p>
            </div>
            <p className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">RP. 15.000</p>

        </div>
    </a>

    </div>
  )
}

export default CardCart
