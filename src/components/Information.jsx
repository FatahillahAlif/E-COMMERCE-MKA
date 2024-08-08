function InformationComp() {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex flex-row items-center justify-center gap-6 md:gap-44 lg:gap-3">
                <div className="text-start">
                    <h1 className="text-xl md:text-2xl font-semibold">200+</h1>
                    <h2 className="text-sm md:text-base">UMKM Terdaftar</h2>
                </div>
                <div className="h-12 w-[2px] bg-gray-400 mx-4"></div>
                <div className="text-start">
                    <h1 className="text-xl md:text-2xl font-semibold">2000+</h1>
                    <h2 className="text-sm md:text-base">Jenis Produk Tersedia</h2>
                </div>
                <div className="hidden lg:flex h-12 w-[2px] bg-gray-400 mx-4"></div>
                <div className="hidden lg:flex flex-col items-start mt-2">
                    <h1 className="text-xl md:text-2xl font-semibold">30000+</h1>
                    <h2 className="text-sm md:text-base">Happy Customer</h2>
                </div>
            </div>
            <div className="lg:hidden flex flex-col items-start mt-2">
                <h1 className="text-xl md:text-2xl font-semibold">30000+</h1>
                <h2 className="text-sm md:text-base">Happy Customer</h2>
            </div>
        </div>
    );
}

export default InformationComp;
