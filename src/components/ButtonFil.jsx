import { Button, Dropdown } from "flowbite-react";

export function ButtonFilComp() {
  return (
    <div>
      <div className="flex justify-center items-center gap-[167px] mt-1">
        <div>
          <Dropdown 
            label="Semua Jenis Usaha" 
            dismissOnClick={false} 
            style={{ 
              backgroundColor: 'white', 
              color: 'GrayText',
              borderColor: 'darkgray',
              width: '300px', 
              display: 'flex', 
              justifyContent: 'space-between' 
            }}
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Dropdown 
            label="Semua Kecamatan" 
            dismissOnClick={false} 
            style={{ 
              backgroundColor: 'white', 
              color: 'GrayText',
              borderColor: 'darkgray',
              width: '300px', 
              display: 'flex', 
              justifyContent: 'space-between' 
            }}
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <form className="flex items-center max-w-sm mx-auto">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-[258px] flex items-center pl-3 pointer-events-none">
                <svg 
                  className="w-5 h-5 text-gray-500 dark:text-gray-400" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input 
                type="text" 
                id="simple-search" 
                className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] pl-4 p-2.5 font-semibold dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Cari UMKM" 
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mt-5">
        <Button className="w-[1235px] bg-[#1D5C96]">Reset Filter Pencarian</Button>
      </div>
    </div>
  );
}

export default ButtonFilComp;