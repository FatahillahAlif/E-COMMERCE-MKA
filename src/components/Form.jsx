import React from 'react';
import { Checkbox, Label, TextInput } from "flowbite-react";

function FormComp() {
  return (
    <form className="relative flex flex-col items-center justify-center p-4 sm:p-6 border border-black rounded-lg max-w-sm sm:max-w-md w-full mx-auto gap-4">
      <div className="w-full">
        <div className="mb-2 block">
          <Label className='font-bold' htmlFor="nik" value="NIK" />
          <TextInput id="nik" type="number" placeholder="NIK" required shadow className="w-full" />
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label className='font-bold' htmlFor="password" value="Password" />
          <TextInput id="password" type="password" placeholder="Password" required shadow className="w-full" />
        </div>
      </div>
      <div className="flex items-center gap-2 w-full">
        <Checkbox className='border-black rounded-none bg-transparent' id="remember" />
        <Label htmlFor="remember" className="flex">
          Ingat Saya
        </Label>
      </div>
      <div className='flex justify-center w-full'>
        <button className='bg-[#1D5C96] w-full sm:w-[200px] h-[40px] flex items-center rounded-lg justify-center text-white font-semibold hover:bg-blue-900' type="submit">LOGIN</button>
      </div>
      <div className='flex justify-between w-full mt-4'>
        <a href='#' className='underline text-sm'>Lupa Password?</a>
        <a href='/register' className='underline text-sm'>Daftar Sekarang</a>
      </div>
    </form>
  );
}

export default FormComp;
