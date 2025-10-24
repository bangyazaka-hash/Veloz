import Image from "next/image";

export default function detail () {

    return (
            <div>
            <div className="relative justify-center w-50 h-50">
            <div className="bg-[#FFFFFF] w-100 h-80 rounded-2xl shadow-lg m-10 ml-30 p-5"></div>
                <div className="relative w-full h-[250px] mt-[-500] ml-55">
                <Image
                src="/dolan.png"
                alt="Detail"
                fill
                className="object-contain mt-[-250]"
    />
    <h1 className="font-bold text-xl mt-105 ml-[-70]">Frameset Dolan</h1>                                           
    <h1 className="font-bold text-red-500 text-xl ml-[-70]">Rp.2.000.000</h1>
            </div>
            <div>
            <h1 className="text-xl ml-200 mt-[-480]">Detail</h1>
            <p className="flex text-justify w-100 ml-200 m-5">Frameset Tsunami SNM 100 dibekali dengan frame dan fork berbahan alloy yang ringan dan tahan karat. 
                Dengan design yang ekegan, frameset SNM100 ini cocok untuk kalangan remaja dan dewasa. Sudah termasuk seatclamp. 
                Frame ini dapat dijadikan pilihan yang tepat untuk anda yang mencari frame sepeda fixie yang ramah dikantong dan performa yang sudah termasuk bagus. 
                </p>
                <p className=" ml-200 w-32 m-5">Ukuran : 700c Bahan : Alloy Geometri : Flat</p>

            </div>

</div>
    </div>




    );
};