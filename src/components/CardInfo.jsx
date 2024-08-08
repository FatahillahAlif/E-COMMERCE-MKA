function CardInfoComp() {
    return (
        <div className="bg-[#1D5D96] w-[376px] md:w-[690px] lg:w-[1200px] p-3 sm:p-5 rounded-xl shadow-md">
            <h2 className="text-white text-center text-sm sm:text-lg font-bold mb-2 sm:mb-4">PENDAFTAR BARU SOBAT UMKM</h2>
            <table className="w-full text-xs sm:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-[10px] sm:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-2 sm:px-6 py-1 sm:py-3">
                            ID SobatUMKM
                        </th>
                        <th scope="col" className="px-2 sm:px-6 py-1 sm:py-3">
                            Nama UMKM
                        </th>
                        <th scope="col" className="px-2 sm:px-6 py-1 sm:py-3">
                            Nama Pendaftar
                        </th>
                        <th scope="col" className="px-2 sm:px-6 py-1 sm:py-3">
                            Kabupaten
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 sm:px-6 py-2 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1233084
                        </th>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Pawon
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Rendi
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Balikpapan Utara
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 sm:px-6 py-2 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1233084
                        </th>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Lalapan Mas Andru
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Andru
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Balikpapan Utara
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 sm:px-6 py-2 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1233084
                        </th>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Bebek Hitam Goreng
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Andi
                        </td>
                        <td className="px-2 sm:px-6 py-2 sm:py-4">
                            Balikpapan Selatan
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CardInfoComp;