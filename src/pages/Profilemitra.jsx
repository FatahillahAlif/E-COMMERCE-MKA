import React from 'react';
import CardFoodComp from '../components/CardFood';
import { Link } from 'react-router-dom';

function Profilemitra() {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-4'>
      <h1 className='font-bold text-3xl pt-8 text-center'>
        PROFILE MITRA
      </h1>
      <div className='flex-col flex justify-center items-center'>
        <p className='text-center'>
          ID Mitra Sobat UMKM : SU00001
        </p>
        <div className='w-64 h-1 bg-[#1D5C96] rounded-sm'/>
      </div>
      <div className='flex flex-col md:flex-row w-full max-w-6xl px-4 justify-between lg:gap-3'>
        <div className='self-start mb-4 md:mb-0'>
          <img className='w-full h-auto border rounded-lg shadow-md' alt="foto umkm" src="/src/assets/image8.svg"/>
        </div>
        <div className='border w-full md:w-[700px] h-auto rounded-lg shadow-md p-10'>
          <table className='w-full text-xl'>
            <tbody>
              {[
                ['Nama Usaha', 'Pawon Bu Fatim'],
                ['Jenis Usaha', 'Makanan'],
                ['Kecamatan', 'Balikpapan Utara'],
                ['Kelurahan', 'Karang Joang'],
                ['Alamat', 'Jl. Soekarno Hatta KM 15'],
                ['Nama Pemilik', 'Fatim'],
                ['Nomor HP', '081234526783'],
              ].map(([label, value], index) => (
                <tr key={index} className='border-b border-gray-400'>
                  <td>{label}</td>
                  <td>:</td>
                  <td className='pl-5'>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className='border border-gray-400 w-full max-w-6xl h-fit px-10 py-4 gap-5 flex flex-col rounded-xl shadow-md'>
        <h3 className='font-bold text-xl'>Profil Usaha</h3>
        <p className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl pt-8 text-center'>
          PRODUK UMKM
        </h1>
        <div className='w-64 h-1 bg-[#1D5C96] rounded-sm'/>
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
        <CardFoodComp />
      </div>
      <div className='flex flex-row gap-3 md:gap-5 justify-center'>
        <Link to="/produkumkm">
          <button className='bg-[#1D5C96]  w-44 md:w-[320px] h-[52px] flex items-center rounded-lg justify-center text-white text-sm md:text-base font-medium hover:bg-blue-900' type="button">
            Lihat Selengkapnya
          </button>
        </Link>
        <Link to="/marketplace">
          <button className='bg-[#1D5C96] w-44 md:w-[320px] h-[52px] flex items-center rounded-lg justify-center text-white text-sm md:text-base font-medium hover:bg-blue-900' type="button">
            Kunjungi Marketplace
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profilemitra;
