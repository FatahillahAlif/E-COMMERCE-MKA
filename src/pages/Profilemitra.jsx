import React from 'react';
import CardComp from '../components/Card';

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
        <div className='border border-black w-64 h-1 bg-[#1D5C96] rounded-sm'/>
      </div>
      <div className='flex w-full px-20 justify-between'>
        <div className='self-start'>
          <img className='w-[600px] h-[350px] border rounded-lg shadow-lg' alt="foto umkm" src="/src/assets/image8.svg"/>
        </div>
        <div className='border w-[750px] h-[350] border-black rounded-lg  flex flex-col gap-3 justify-start items-start'>
            <div className='p-10 flex flex-col gap-3 text-xl'>
            <p>Nama Usaha : Pawon Bu Fatim</p>
            <p>Jenis Usaha : Makanan</p>
            <p>Kecamatan : Balikpapan Utara</p>
            <p>Kelurahan : Karang Joang</p>
            <p>Alamat : Jl. Soekarno Hatta KM 15</p>
            <p>Nama Pemilik : Fatim</p>
            <p>Nomor HP : 081234526783</p>
            </div>
        
        </div>
      </div>
    </div>
  );
}

export default Profilemitra;
