import React from 'react'

function CardDashboard() {
  return (
    <div>
        <div className='lg:w-fit w-[360px] h-[130px] border rounded-lg p-2 flex flex-col gap-1'>
            <img className='w-7' src='src/assets/Penjualan.svg'/>
            <p className='text-sm'>Total penjualan</p>
            <p className='font-bold'>RP. 8.000.000</p>
            <div className='flex gap-1'>
                <div className='flex gap-1'>
                <img className='w-4' src='src/assets/UP.svg'/>
                <p className='text-[#16C098]'>7%</p>
                </div>
                <p>vs Last Month</p>
            </div>
        </div>
    </div>
  )
}

export default CardDashboard
