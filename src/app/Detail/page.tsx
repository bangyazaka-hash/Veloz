import Image from "next/image";

export default function detail () {

    return (
            <div>
            <div className="relative justify-center w-50 h-50">
            <div className="bg-[#F0F0F0] w-60 h-65 rounded-2xl shadow-lg m-10 ml-30 p-5"></div>
                <div className="relative w-full h-[250px]">
                <Image
                src="/dolan.png"
                alt="Detail"
                fill
                className="object-contain"
    />
            </div>
    </div>
    </div>



    );
};