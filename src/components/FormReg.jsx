import React from 'react';
import { Button, Dropdown, Radio, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import  DropdownRegComp from './DropdownReg';
import DropdownReg2Comp from './DropdownReg2';

function FormRegComp() {
  return (
    <form className="flex flex-col gap-4 p-4 max-w-md w-full mx-auto sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl lg:grid lg:grid-cols-2 lg:gap-6">
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="nama2" value="Nama" />
        </div>
        <TextInput id="nama2" type="text" placeholder="Nama" required shadow className="w-full" />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email" />
        </div>
        <TextInput id="email2" type="email" placeholder="Email" required shadow className="w-full" />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="nik2" value="NIK" />
        </div>
        <TextInput id="nik2" type="number" placeholder="NIK" required shadow className="w-full" />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="kecamatan2" value="Kecamatan" />
        </div>
        <DropdownRegComp />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="kelurahan2" value="Kelurahan" />
        </div>
        <DropdownReg2Comp />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="jeniskelamin2" value="Jenis Kelamin" />
        </div>
        <div className="flex items-center gap-4">
          <Radio id="laki-laki" name="jeniskelamin" value="laki-laki" />
          <Label className='font-normal' htmlFor="laki-laki">Pria</Label>
          <Radio id="perempuan" name="jeniskelamin" value="perempuan" />
          <Label className='font-normal' htmlFor="perempuan">Wanita</Label>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Password" />
        </div>
        <TextInput id="password2" type="password" placeholder="Password" required shadow className="w-full" />
      </div>
      <div className="w-full">
        <div className="mb-2 block">
          <Label htmlFor="confirmPassword2" value="Konfirmasi Password" />
        </div>
        <TextInput id="confirmPassword2" type="password" placeholder="Konfirmasi Password" required shadow className="w-full" />
      </div>
      <div className="flex items-center gap-2 w-full col-span-2">
        <Checkbox id="agree" className="h-4" />
        <Label htmlFor="agree" className="font-semibold text-xs">
          Saya telah membaca syarat dan kondisi untuk aplikasi Sobat UMKM
        </Label>
      </div>
      <div className="flex justify-center items-center w-full col-span-2">
        <Button type="submit" className="bg-[#1D5C96] w-96 sm:w-80 text-white">Register</Button>
      </div>
    </form>
  );
}

export default FormRegComp;
