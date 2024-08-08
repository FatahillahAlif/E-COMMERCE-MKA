import React from 'react'

function TabelProduk() {
  return (
    <div>
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                  <tr>
                      <th scope="col" className="border-b-2 px-6 py-3">
                          Nama Produk
                      </th>
                      <th scope="col" className="border-b-2 px-6 py-3">
                          Harga
                      </th>
                      <th scope="col" className="border-b-2 px-6 py-3">
                          Terjual
                      </th>
                      <th scope="col" className="border-b-2 px-6 py-3">
                          Status
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                      <th scope="row" className="flex gap-1 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img className='w-10' src='src/assets/food.svg'/>
                          <p className='text-wrap'>Bakwan Jagung</p>
                      </th>
                      <td className="px-6 py-4">
                          RP. 10.000
                      </td>
                      <td className="px-6 py-4">
                          100 pcs
                      </td>
                      <td className="px-6 py-4">
                          <p className='text-red-500'>Sold Out</p>
                      </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                      <th scope="row" className="flex gap-1 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <img className='w-10' src='src/assets/food.svg'/>
                          <p className='text-wrap'>Telur Balado</p>
                      </th>
                      <td className="px-6 py-4">
                          RP. 15.000
                      </td>
                      <td className="px-6 py-4">
                          99 pcs
                      </td>
                      <td className="px-6 py-4">
                        <p className='text-green-500'>Ready</p>
                      </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                      <th scope="row" className="flex gap-1 items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img className='w-10' src='src/assets/food.svg'/>
                          <p className='text-wrap'>Ayam Sambal Hijau</p>
                      </th>
                      <td className="px-6 py-4">
                          RP. 20.000
                      </td>
                      <td className="px-6 py-4">
                          98 pcs
                      </td>
                      <td className="px-6 py-4">
                        <p className='text-green-500'>Ready</p>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default TabelProduk


























// import React from 'react';

// const products = [
//   {
//     name: 'Bakwan Jagung',
//     price: 'RP. 10.000',
//     sold: '2343 pcs',
//     status: 'In Stock',
//     image: 'src/assets/food.svg', // replace with the actual image link
//   },
//   {
//     name: 'Telur Balado',
//     price: 'RP. 15.000',
//     sold: '1243 pcs',
//     status: 'In Stock',
//     image: 'src/assets/food.svg', // replace with the actual image link
//   },
//   {
//     name: 'Ayam Sambal Hijau',
//     price: 'RP. 20.000',
//     sold: '433 pcs',
//     status: 'In Stock',
//     image: 'src/assets/food.svg', // replace with the actual image link
//   },
// ];

// const ProductTable = () => {
//   return (
//     <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200">
//       <div className="p-4 bg-white">
//         <h2 className="text-lg font-bold">PRODUK TERLARIS</h2>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-3 px-4 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-700">Nama Produk</th>
//               <th className="py-3 px-4 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-700">Harga</th>
//               <th className="py-3 px-4 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-700">Terjual</th>
//               <th className="py-3 px-4 border-b-2 border-gray-200  text-left text-sm font-semibold text-gray-700">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index} className="border-b border-gray-200">
//                 <td className="py-3 px-4 flex items-center">
//                   <img src={product.image} alt={product.name} className="w-12 h-12 mr-4 object-cover rounded" />
//                   <span className="text-sm">{product.name}</span>
//                 </td>
//                 <td className="py-3 px-4 text-sm">{product.price}</td>
//                 <td className="py-3 px-4 text-sm">{product.sold}</td>
//                 <td className="py-3 px-4 text-sm flex items-center">
//                   <span className="h-2 w-2 mr-2 rounded-full bg-green-500 inline-block"></span>
//                   {product.status}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ProductTable;
