function CardMitraComp() {
    return (
        <div className="gap-3 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex justify-center w-[350px] p-3 rounded-xl sm:p-5 border-4 border-[#1D5D96]">
                    <img className="w-40" src="/src/assets/grab.svg"/>
            </div>
            <div className="flex justify-center w-[350px] lg:w-[550px] p-3 rounded-xl sm:p-5 border-4 border-[#1D5D96]">
                    <img className="w-40" src="/src/assets/posindo.svg"/>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex justify-center w-[350px] lg:w-[550px] p-3 rounded-xl sm:p-5 border-4 border-[#1D5D96]">
                    <img className="w-40" src="/src/assets/gojek.svg"/>
            </div>
            <div className="flex justify-center w-[350px] p-3 rounded-xl sm:p-5 border-4 border-[#1D5D96]">
                    <img className="w-40" src="/src/assets/shoppe.svg"/>
            </div>
        </div>
        </div>
    );
}

export default CardMitraComp;   