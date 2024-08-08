import React from 'react'
import ChartComp from '../../components/mitra/Chart'
import ProductTable from '../../components/mitra/TabelProduk'
import CardDashboard from '../../components/mitra/CardDashboard'

function Dashboard() {
  return (
    <div>
      <div className='lg:flex lg:justify-end  gap-2 lg:pr-14'>
        <div className="mt-5 ml-1">
          <ChartComp/>
        </div>
          <div className='mt-5 w-full lg:w-[350px] items-center justify-center flex flex-col gap-4 lg:flex lg:flex-row lg:flex-wrap'>  
            <CardDashboard/>
            <CardDashboard/>
            <CardDashboard/>
            <CardDashboard/>
          </div>
      </div>
      <div className='mt-5 flex justify-center'>
        <div className='w-11/12 justify-center border p-4 rounded-lg'>
          <ProductTable/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
