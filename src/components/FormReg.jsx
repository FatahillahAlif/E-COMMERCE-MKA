import React from 'react'
import { Button,Dropdown,Radio, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

function FormRegComp() {
  return (
    <form className="flex max-w-md flex-col gap-4 rounded-xl w-96">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Nama" />
        </div>
        <TextInput id="email2" type="email" placeholder="Nama" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Email" />
        </div>
        <TextInput id="email2" type="email" placeholder="Email" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="NIK" />
        </div>
        <TextInput className='w-200' id="email2" type="email" placeholder="NIK" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Kecamatan" />
        </div>
        <Dropdown label="Pilih Kecamatan" dismissOnClick={false} style={{ backgroundColor: 'white', color: 'GrayText',borderColor: 'darkgray',width:'385px', display:'flex', justifyContent:'space-between' }}>
         <Dropdown.Item>Dashboard</Dropdown.Item>
         <Dropdown.Item>Settings</Dropdown.Item>
         <Dropdown.Item>Earnings</Dropdown.Item>
         <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Kelurahan" />
        </div>
        <Dropdown label="Pilih Kelurahan" dismissOnClick={false} style={{ backgroundColor: 'white', color: 'GrayText',borderColor: 'darkgray',width:'385px',display:'flex',justifyContent:'space-between'}}>
         <Dropdown.Item>Dashboard</Dropdown.Item>
         <Dropdown.Item>Settings</Dropdown.Item>
         <Dropdown.Item>Earnings</Dropdown.Item>
         <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Jenis Kelamin" />
        </div>
            <div className="flex items-center gap-2">
             <Radio id="laki-laki" name="jeniskelamin" value="laki-laki" style={{borderColor:'black'}}/>
             <Label className='font-normal' htmlFor="laki-laki">Laki-Laki</Label>
             <Radio id="perempuan" name="jeniskelamin" value="perempuan" style={{borderColor:'black'}}/>
             <Label className='font-normal' htmlFor="perempuan">Perempuan</Label>
             
      </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Konfirmasi Password" />
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox className='border-black rounded-none bg-transparent h-4' id="agree" />
        <Label htmlFor="agree" className="flex font-semibold text-[10px]">
          Saya telah membaca syarat dan kondisi untuk aplikasi Sobat UMKM
        </Label>
      </div>
      <div className='flex justify-center items-center'>
        <Button className='bg-[#1D5C96] items-center w-[250px]' type="submit">Register</Button>
      </div>
    </form>
  );
}


export default FormRegComp