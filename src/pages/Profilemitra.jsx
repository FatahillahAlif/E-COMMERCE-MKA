import React from 'react';
import CardComp from '../components/Card';
import CardFoodComp from '../components/CardFood';
import { Link } from 'react-router-dom';

function Profilemitra() {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-3xl pt-8'>
        PROFILE MITRA
      </h1>
      <div className='flex-col flex justify-center items-center'>
        <p>
          ID Mitra Sobat UMKM : SU00001
        </p>
        <div className=' w-64 h-1 bg-[#1D5C96] rounded-sm'/>
      </div>
      <div className='flex w-full px-20 justify-between'>
        <div className='self-start'>
          <img className='w-[640px] h-[390px] border rounded-lg shadow-md' alt="foto umkm" src="/src/assets/image8.svg"/>
        </div>
        <div className='border w-[700px] h-[390px] rounded-lg shadow-md p-10'>
          <table className='w-full h-full text-xl'>
            <tbody>
              <tr className='border-b border-gray-400'>
                <td>Nama Usaha</td>
                <td>:</td>
                <td className='pl-5'>Pawon Bu Fatim</td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td>Jenis Usaha</td>
                <td>:</td>
                <td className='pl-5'>Makanan</td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td>Kecamatan</td>
                <td>:</td>
                <td className='pl-5'>Balikpapan Utara</td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td>Kelurahan</td>
                <td>:</td>
                <td className='pl-5'>Karang Joang</td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td>Alamat</td>
                <td>:</td>
                <td className='pl-5'>Jl. Soekarno Hatta KM 15</td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td>Nama Pemilik</td>
                <td>:</td>
                <td className='pl-5'>Fatim</td>
              </tr>
              <tr className='border-b border-gray-400'>
                <td>Nomor HP</td>
                <td>:</td>
                <td className='pl-5'>081234526783</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='border border-gray-400 w-[1360px] h-fit px-10 py-4 gap-5 flex flex-col rounded-xl shadow-md'>
        <h3 className='font-bold text-xl'>Profil Usaha</h3>
        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className='border border-gray-400 w-[1360px]'></div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl pt-8'>
          PRODUK UMKM
        </h1>
        <div className='w-64 h-1 bg-[#1D5C96] rounded-sm'/>
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardFoodComp/>
        <CardFoodComp/>
        <CardFoodComp/>
        <CardFoodComp/>
      </div>
      <div className='flex gap-32'>
        <Link to="/produkumkm">
          <button className='bg-[#1D5C96] w-[423px] h-[52px] flex items-center rounded-lg justify-center text-white font-semibold hover:bg-blue-900' type="button">Lihat Selengkapnya</button>
        </Link>
        <Link to="/marketplace">
          <button className='bg-[#1D5C96] w-[423px] h-[52px] flex items-center rounded-lg justify-center text-white font-semibold hover:bg-blue-900' type="button">Kunjungi Marketplace</button>
        </Link>
      </div>
    </div>
  );
}

export default Profilemitra;