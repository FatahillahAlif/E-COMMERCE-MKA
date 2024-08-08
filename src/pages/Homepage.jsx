import React from 'react';
import CarouselComp from '../components/Carousel';
import { Button } from 'flowbite-react';
import InformationComp from '../components/Information';
import CardInfoComp from '../components/CardInfo';
import CarouselKonsulComp from '../components/CarouselKonsul';
import CardUKMComp from '../components/CardUKM';
import CardGrafisComp from '../components/CardGrafis';
import CardMitraComp from '../components/CardMitra';
import CarouselFasilComp from '../components/CarouselFasil';
import CarouselKonsul2Comp from '../components/CarouselKonsul2';
import wave from '../assets/wave.svg'; 
import wave4 from '../assets/wave4.svg';


function Homepage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0">
        <img src={wave4} alt="Wave Background" className="hidden lg:flex absolute bottom-[1900px] right-0 w-full h-auto" />
        <img src={wave4} alt="Wave Background" className="absolute top-96 lg:hidden right-0 w-full h-auto" />
        <img src={wave} alt="Wave Background" className="lg:hidden absolute bottom-[2000px] md:bottom-[1550px] right-0 w-full h-auto" />
        <img src={wave4} alt="Wave Background" className="lg:hidden absolute top-[3000px] lg:top-0 right-0 w-full h-auto" />
        <img src={wave} alt="Wave Background" className="absolute bottom-[600px] md:hidden lg:flex lg:top-[1750px] right-0 w-full h-auto" />
      </div>

      {/* Main Content */}
      <div className='px-3 md:px-10 lg:px-20 relative z-10'>
        <div className='flex'>
          <div className='flex flex-col gap-3 py-3'>
            <h1 className='font-extrabold text-4xl md:text-6xl lg:text-7xl'>
              WELCOME TO<br />SOBAT UMKM<br />BALIKPAPAN
            </h1>
            <h1 className='text-sm md:text-base'>
              Sistem Informasi Belanja Terpadu UMKM Balikpapan Dengan mendukung dan membeli produk lokal, anda turut menggerakkan ekonomi demi kesejahteraan bersama.
            </h1>
            <div>
              <Button className="rounded-3xl w-[363px] bg-[#1D5C96] md:w-[700px] lg:w-[450px]">Shop Now</Button>
            </div>
            <div className='lg:flex'>
              <InformationComp />
            </div>
          </div>
          <div className='hidden lg:mt-6 lg:flex lg:shadow-xl'>
            <CarouselComp />
          </div>
        </div>
        <div className='lg:hidden py-3 flex items-center justify-center'>
          <CarouselComp />
        </div>
        <div className='pt-10 py-3 flex items-center justify-center'>
          <CardInfoComp />
        </div>
        <div className='py-3 flex flex-col justify-center items-center'>
          <h1 className='p-5 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            KONSULTAN
          </h1>
          <div className='hidden lg:flex'>
            <CarouselKonsul2Comp />
          </div>
          <div className='lg:hidden'>
            <CarouselKonsulComp />
          </div>
        </div>
        <div className='py-3'>
          <h1 className='p-5 flex flex-col items-center font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            FASILITAS
          </h1>
          <CarouselFasilComp />
        </div>
        <div className='py-3 flex flex-col justify-center items-center'>
          <h1 className='p-5 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            LAYANAN UKM
          </h1>
          <div className='sm:flex sm:gap-3'>
            <CardUKMComp />
          </div>
        </div>
        <div className='py-3 flex flex-col justify-center items-center'>
          <h1 className='p-5 font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            LAYANAN UKM
          </h1>
          <div className='sm:flex sm:gap-3'>
            <CardUKMComp />
          </div>
        </div>

        <div className='pt-10 py-3 flex items-center justify-center'>
          <CardGrafisComp />
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='pt-10 pb-3 flex items-center font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            MITRA PEMBINAAN
          </h1>
          <CardMitraComp />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
