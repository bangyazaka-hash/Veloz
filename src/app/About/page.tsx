import Image from "next/image";

export default function about() {

    return (
        <div className="flex items-start justify-between p-5">
            <div className="m-10">
            <h1 className="font-bold m-15 mt-20 text-2xl">Tentang Kita</h1>
<p className="absolute w-[700] m-10 p-7 opacity-60 text-justify leading-relaxed mt-55 inset-y-0 left-15 w-16 text-2xl">
    Veloz terlahir untuk menjadi temanmu dijalanan,
    Veloz memberikan sensasi kebebasan dan kamu bisa mengekspresikan suasana hati-mu saat bersepeda.
    Veloz dibuat pada tahun 2025 oleh orang yang bernama Arka Putra Yazaka dari negara Indonesia.
    Veloz mengutamakan kenyamananmu.
  </p>

  </div>
            <div className="w-100">
                
                <Image 
                src="/contact.png"
                alt="About"
                width={280}
                height={280}
                className="object-contain h-130"
/>

        </div>
        </div>

        
    );
};