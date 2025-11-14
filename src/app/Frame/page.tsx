import Image from "next/image";
import Link from "next/link";

export default function Frame() {

    return (
        <div className="font-[lexend]">
            <div className="relative w-full h-[250px]">
                
                <Image
                src="/rb.jpg"
                alt="Frame"
                fill
                className="object-cover"
/>

            </div>

            <div className="flex flex-row justify-left flex-wrap gap-20 p-10"> 
            <Link href="Detail">
             <div className="relative justify-center w-50 h-50">
            <div className="bg-[#FFFFFF] w-60 h-70 rounded-2xl shadow-lg m-10 ml-30 p-5">
             <Image
                                    src="/dolan.png"
                                    alt="Detail"
                                    fill
                                    className="object-contain ml-35"
                    />
                    <div className="text-xl mt-40">Frameset Dolan</div>
                    <div className="font-bold text-red-500 text-xl mt-7">Rp.2.000.000</div>
            </div>  
            </div>
            </Link>

           <div className="relative justify-center w-50 h-50">
            <div className="bg-[#FFFFFF] w-60 h-70 rounded-2xl shadow-lg m-10 ml-30 p-5">
             <Image
                                    src="/tsunamisnm100.png"
                                    alt="Detail"
                                    fill
                                    className="object-contain mt-10 ml-35"
                    />
                      <div className="text-xl mt-40">Frameset Tsunami</div>
                      <div className="font-bold text-red-500 text-xl mt-7">Rp.2.000.000</div>
            </div>  
            </div>

              <div className="relative justify-center w-50 h-50">
            <div className="bg-[#FFFFFF] w-60 h-70 rounded-2xl shadow-lg m-10 ml-30 p-5">
             <Image
                                    src="/time.png"
                                    alt="Detail"
                                    fill
                                    className="object-contain mt-10 ml-35"
                    />
                      <div className="text-xl mt-40">Frameset Time</div>
                      <div className="font-bold text-red-500 text-xl mt-7">Rp.2.000.000</div>
            </div>  
            </div>

                  <div className="relative justify-center w-50 h-50">
            <div className="bg-[#FFFFFF] w-60 h-70 rounded-2xl shadow-lg m-10 ml-30 p-5">
             <Image
                                    src="/sworks.png"
                                    alt="Detail"
                                    fill
                                    className="object-contain mt-10 ml-35"
                    />
                      <div className="text-xl mt-40">Frameset S-works</div>
                      <div className="font-bold text-red-500 text-xl mt-7">Rp.2.000.000</div>
            </div>  
            </div>

               <div className="relative justify-center w-50 h-50">
            <div className="bg-[#FFFFFF] w-60 h-70 rounded-2xl shadow-lg m-10 ml-30 p-5">
             <Image
                                    src="/giant.png"
                                    alt="Detail"
                                    fill
                                    className="object-contain mt-10 ml-35"
                    />
                      <div className="text-xl mt-40">Frameset giant</div>
                      <div className="font-bold text-red-500 text-xl mt-7">Rp.2.000.000</div>
            </div>  
            </div>


        <div className="w-[500] items-start justify-between p-5">
            
        </div>
        </div>
        </div>
    );
};