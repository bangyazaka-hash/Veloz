import Image from "next/image";

export default function detail () {

    return (
            <div>
                <div className="flex flex-row justify-left flex-wrap"></div>
            <div className="relative justify-center w-50 h-50">
            <div className="bg-[#F0F0F0] w-100 h-120 rounded-2xl shadow-lg m-10 ml-30 p-5"></div>
                <div className="relative w-full h-[250px] mt-[-500] ml-55">
                <Image
                src="/dolan.png"
                alt="Detail"
                fill
                className="object-contain"
    />
    <h1 className="font-bold text-xl">Frameset Dolan</h1>
    <h1 className="font-bold text-red-500 text-xl mt-90 ml-[-70]">Rp.2.000.000</h1>
            </div>


             <div className="bg-[#F0F0F0] w-100 h-120 rounded-2xl shadow-lg ml-200 p-5"></div>

    </div>
    </div>



    );
};