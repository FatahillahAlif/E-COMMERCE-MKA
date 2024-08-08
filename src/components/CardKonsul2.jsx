import React from 'react';

function CardKonsul2Comp() {
    return (
        <div className='relative overflow-x-auto bg-white w-[700px] h-[500px] p-3 sm:p-5 rounded-xl shadow-xl'>
            <div className="cursor-pointer">
                <div className='flex flex-row font-bold justify-between'>
                    <h1>Rendi</h1>
                    <h1>Bidang Teknologi</h1>
                </div>
                <div className='flex items-center'>
                    <img className='w-[320px]' src="/src/assets/konsultan.svg" />
                    <h1>
                    1.WPA/ Workplace Asessment (Sertifikasi Asesor) <br/>2.Training Pelatihan KKNI Level 3 <br/>3.Instruktur Penyelia (Level 4) <br/>4.Konsultan Perkoperasian <br/>5.Pelaksana Ekspor <br/>6.Pendamping UMKM <br/>7.Kewirausahaan Industri <br/>8.Digital Marketing <br/>9.Customer Service <br/>10.Sertifikasi Kompetensi Metodologi Instruktur
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default CardKonsul2Comp;
