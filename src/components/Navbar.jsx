import React from 'react'
import { Button, Navbar, NavbarCollapse } from "flowbite-react";

export function NavbarComp() {
  return (
    <div className='drop-shadow-md'>
      <Navbar fluid rounded>
        
        <Navbar.Brand href="https://flowbite-react.com">
        <img src="/src/assets/DKUMKMP.svg" className="mr-3 h-6 sm:h-20" alt="Logo Dinas UMKM" />
      </Navbar.Brand>
      
      <Navbar.Collapse className='pr-[126px]'>
        <Navbar.Link href="#">Data UMKM</Navbar.Link>
        <Navbar.Link href="#">Marketplace</Navbar.Link>
        <Navbar.Link href="#">Pelatihan</Navbar.Link>
        <Navbar.Link href="#">Konsultasi</Navbar.Link>
        <Navbar.Link href="#">Fasiliitas</Navbar.Link>
      </Navbar.Collapse>

      <div className="flex md:order-2">
      <Navbar.Collapse>
        <Navbar.Link href="#"><img src ="/src/assets/Cartsvg.svg "/></Navbar.Link>
        <Navbar.Link href="#"><img src ="/src/assets/profile.svg "/></Navbar.Link>
        <Navbar.Toggle />
      </Navbar.Collapse>
      </div>
    </Navbar>
    </div>
  );
}


export default NavbarComp
