import React, { useState } from 'react';

function CardKonsulComp() {
    const [showCompetencies, setShowCompetencies] = useState(false);

    const toggleCompetencies = () => {
        setShowCompetencies(!showCompetencies);
    };

    return (
        <div className='relative overflow-x-auto bg-white w-[325px] md:w-[375px] h-auto p-3 sm:p-5 rounded-xl shadow-xl'>
            <div className="cursor-pointer">
                <div className='flex flex-row font-bold justify-between'>
                    <h1>Masreza</h1>
                    <h1>Bidang Kelembagaan</h1>
                </div>
                <img className='w-[258px]' src="/src/assets/konsultan.svg" alt="Konsultan" />
            </div>
            <div className='items-center flex justify-center mt-4'>
                <button
                    onClick={toggleCompetencies}
                    className='bg-[#1D5C96] text-white px-4 py-2 rounded-lg'>
                    {showCompetencies ? 'Kompetensi' : 'Kompetensi'}
                </button>
            </div>
            {showCompetencies && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Kompetensi</h3>
                    <p className="text-base leading-relaxed text-gray-500 mt-2">
                        1. WPA/ Workplace Asessment (Sertifikasi Asesor) <br/>
                        2. Training Pelatihan KKNI Level 3 <br/>
                        3. Instruktur Penyelia (Level 4) <br/>
                        4. Konsultan Perkoperasian <br/>
                        5. Pelaksana Ekspor <br/>
                        6. Pendamping UMKM <br/>
                        7. Kewirausahaan Industri <br/>
                        8. Digital Marketing <br/>
                        9. Customer Service <br/>
                        10. Sertifikasi Kompetensi Metodologi Instruktur
                    </p>
                </div>
            )}
        </div>
    );
}

export default CardKonsulComp;
