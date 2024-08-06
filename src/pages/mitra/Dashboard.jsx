import React from 'react'
import ChartComp from '../../components/mitra/Chart'

function Dashboard() {
  return (
    <div>
      <div className="mt-5">
        <ChartComp/>
      </div>
      <div className='w-full flex justify-center'>  
        <div className='w-11/12 border mt-5 justify-center flex flex-col items-center rounded-lg shadow-md'>
          <div className='w-full p-2 flex flex-col gap-1'>
              <img className='w-7' src='src/assets/Penjualan.svg'/>
            <p className='text-sm'>Total penjualan</p>
            <p className='font-bold'>RP. 8.000.000</p>
            <div className='flex gap-1'>
              <div className='flex gap-1'>
                <img className='w-4' src='src/assets/UP.svg'/>
                <p className='text text-[#16C098]'>7%</p>
              </div>
              <p className='text'>vs Last Month</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>  
        <div className='w-11/12 border mt-5 justify-center flex flex-col items-center rounded-lg shadow-md'>
          <div className='w-full p-2 flex flex-col gap-1'>
              <img className='w-7' src='src/assets/Penjualan.svg'/>
            <p className='text-sm'>Pesanan Selesai</p>
            <p className='font-bold'>RP. 8.000.000</p>
            <div className='flex gap-1'>
              <div className='flex gap-1'>
                <img className='w-4' src='src/assets/UP.svg'/>
                <p className='text text-[#16C098]'>7%</p>
              </div>
              <p className='text'>vs Last Month</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>  
        <div className='w-11/12 border mt-5 justify-center flex flex-col items-center rounded-lg shadow-md'>
          <div className='w-full p-2 flex flex-col gap-1'>
              <img className='w-7 flex justify-center items-center' src='src/assets/Pelanggan.svg'/>
            <p className='text-sm'>Pelanggan</p>
            <p className='font-bold'>RP. 8.000.000</p>
            <div className='flex gap-1'>
              <div className='flex gap-1'>
                <img className='w-4' src='src/assets/UP.svg'/>
                <p className='text text-[#16C098]'>7%</p>
              </div>
              <p className='text'>vs Last Month</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center'>  
        <div className='w-11/12 border mt-5 justify-center flex flex-col items-center rounded-lg shadow-md'>
          <div className='w-full p-2 flex flex-col gap-1'>
              <img className='w-7' src='src/assets/Penjualan.svg'/>
            <p className='text-sm'>Total Pesanan</p>
            <p className='font-bold'>RP. 8.000.000</p>
            <div className='flex gap-1'>
              <div className='flex gap-1'>
                <img className='w-4' src='src/assets/UP.svg'/>
                <p className='text text-[#16C098]'>7%</p>
              </div>
              <p className='text'>vs Last Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
