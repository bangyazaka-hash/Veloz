import Image from "next/image";

export default function about() {

    return (
        <div className="flex items-start justify-between p-5">
            <div className="m-10">
            <h1 className="font-bold m-15 mt-20 text-2xl">Tentang Kita</h1>
<p className="absolute w-[700] m-10 p-7 opacity-60 text-justify leading-relaxed mt-55 inset-y-0 left-15 w-16 text-xl">
    Veloz terlahir untuk menjadi temanmu dijalanan,
    Veloz memberikan sensasi kebebasan dan kamu bisa mengekspresikan suasana hati-mu saat bersepeda.
    Veloz dibuat pada tahun 2025 oleh orang yang bernama Arka Putra Yazaka dari negara Indonesia.
    Veloz mengutamakan kenyamananmu.
  </p>

  </div>


        <div className="bg-[#FFFFFF] shadow-lg w-70 h-20 mt-120 ml-[-500] rounded-xl"></div>
        <h1 className="font-bold text-2xl ml-[-500] mt-100">Perjalanan Kami</h1>
        <div className="bg-[#FFFFFF] shadow-lg w-70 h-20 mt-120 ml-[-100] rounded-xl"></div>
              <div className="relative justify-center w-90 h-90">
                       <div className="bg-[#f3c623] w-70 h-90 shadow-lg ml-[-120] mt-25 p-5">
                        <Image
                                src="/contact.png"
                                alt="Detail"
                                fill
                                className="object-contain mt-20 ml-[-120]"
                               />
        </div>
        </div>
        </div>

        
    );
};