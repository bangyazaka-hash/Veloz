import Image from "next/image";
import Link from "next/link";

export default function about() {

    return (
        <div className="flex items-start justify-between p-5">
            <div className="m-10">
            <h1 className="absolute font-bold m-15 mt-20 text-2xl">Customor Service</h1>
<p className="absolute w-[700] m-10 p-7 opacity-60 text-justify leading-relaxed mt-55 inset-y-0 left-15 w-16 text-xl">
   Pelayanan dari Veloz Dimulai dari pukul 10.00-17.00 
   scan barcode yang ada disisi kanan untuk ke whatsapp kami 
   atau bisa menghubungi lewat media sosial kami dibawah ini Terimakasih.
  </p>

  </div>
  
            <div className="relative">
                <div className="bg-[#FFFFFF] shadow-lg w-50 h-60 ml-230 mt-30 rounded-xl"></div>
                <Image 
                src="/bar.png"
                alt="Contact"
                width="200"
                height="200"
                className="ml-230 mt-[-250]"
/>
        </div>

        <div className="w-240">
  <Image 
                src="/gmail.png"
                alt="Contact"
                width={40}
                height={40}
                className="absolute inset-y-0 left-29 w-11 mt-95"
/> 

<h3 className="absolute inset-y-0 left-45 w-11 mt-98">Velozstore@gmail.com</h3>

</div>

 <div className="w-240 ">
  <Image 
                src="/ig.png"
                alt="Contact"
                width={40}
                height={40}
                className="absolute inset-y-0 left-28 w-13 mt-108"
/> 

  <h3 className="absolute inset-y-0 left-45 w-11 mt-112"><Link href="https://www.instagram.com/yzakaa_?igsh=bW15YXVvdGJwY21o">@yzakaa_</Link></h3>

</div>

    <div className="w-240 ">
  <Image 
                src="/tiktok.png"
                alt="Contact"
                width={40}
                height={40}
                className="absolute inset-y-0 left-30 mt-125"
/> 

<h3 className="absolute inset-y-0 left-45 w-11 mt-128"><Link href="https://www.tiktok.com/@yazaka37?_r=1&_t=ZS-91No59d2nma">@Yazaka.</Link></h3>

</div>
</div>
        
    );
};