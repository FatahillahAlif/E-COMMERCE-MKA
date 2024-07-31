import React from 'react'
import { Button, Navbar, NavbarCollapse } from "flowbite-react";

export function NavbarComp() {
  return (
    <div className='drop-shadow-md'>
      <Navbar fluid rounded>

       <div className='lg:pl-20'> 
      <Navbar.Brand href="/">
        <img src="/src/assets/DKUMKMP.svg" className="mr-3 h-6 sm:h-20" alt="Logo Dinas UMKM" />
      </Navbar.Brand>
      </div>

      <Navbar.Collapse className='pr-[126px]'>
        <Navbar.Link href="/dataumkm">Data UMKM</Navbar.Link>
        <Navbar.Link href="/marketplace">Marketplace</Navbar.Link>
        <Navbar.Link href="#">Pelatihan</Navbar.Link>
        <Navbar.Link href="#">Konsultasi</Navbar.Link>
        <Navbar.Link href="#">Fasiliitas</Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2 list-none justify-end lg:gap-5 lg:pr-20">
        <Navbar.Link href="#"><img src ="/src/assets/Cartsvg.svg "/></Navbar.Link>
        <Navbar.Link href="#"><img src ="/src/assets/profile.svg "/></Navbar.Link>
      </div>
      <Navbar.Toggle className='flex justify-end' />
    </Navbar>
    </div>
  );
}


export default NavbarComp
