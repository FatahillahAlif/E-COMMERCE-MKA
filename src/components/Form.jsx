import React from 'react'
import { Checkbox, Label, TextInput } from "flowbite-react";

function FormComp() {
  return (
    <form className="relative flex h-[327px] w-[483px] pb-6 justify-center items-center border border-black flex-col gap-4 rounded-lg">
      <div className="w-96">
        <div className="mb-2 block">
          <Label className='font-bold' htmlFor="email2" value="NIK" />
          <TextInput id="email2" type="number" placeholder="NIK" required shadow />
        </div>
      </div>
      <div className="w-96">
        <div className="mb-2 block">
          <Label className='font-bold' htmlFor="password2" value="Password" />
          <TextInput id="password2" type="password" placeholder="Password" required shadow />
        </div>
      </div>
      <div className="flex items-center gap-2 w-96">
        <Checkbox className='border-black rounded-none bg-transparent' id="agree" />
        <Label htmlFor="agree" className="flex">
          Ingat Saya
        </Label>
      </div>
      <div className='flex justify-center'>
        <button className='bg-[#1D5C96] w-[184px] h-[31px] flex items-center rounded-lg justify-center text-white font-semibold hover:bg-blue-900' type="submit">LOGIN</button>
      </div>
      <div className='absolute left-0 bottom-0 pl-4 pb-4'>
        <a href='#' className='underline'>Lupa Password?</a>
      </div>
      <div className='absolute right-0 bottom-0 pr-4 pb-4'>
        <a href='/register' className='underline'>Daftar Sekarang</a>
      </div>
    </form>
  );
}

export default FormComp;