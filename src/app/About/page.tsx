import Image from "next/image";

export default function about() {

    return (
        <div className="object-top-right">
            <div className="relative w-[300] h-[300]">
                
                <Image 
                src="/bar.png"
                alt="About"
                fill
                className="size-24 object-right"
/>
<p className="w-[500] m-50 p-5 text-lg leading-relaxed text-justify p-5 space-y-3">
    Veloz terlahir untuk menjadi temanmu dijalanan,
    Veloz memberikan sensasi kebebasan dan kamu bisa mengekspresikan suasana hati-mu saat bersepeda.
    Veloz dibuat pada tahun 2025 oleh orang yang bernama Arka Putra Yazaka dari negara Indonesia.
    Veloz mengimport kebutuhan bersepedamu dari berbagai Negara untuk kenyamananmu.
  </p>
            </div>
        </div>
    );
};