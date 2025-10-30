import Image from "next/image";
import Link from "next/link";
export default function Home() {

    return (
        <div>
            <div className="relative w-full h-[250px]">
                
                <Image
                src="/gng.png"
                alt="Home"
                fill
                className="object-cover"
/>
<p className="absolute bottom-4 left-x15 -translate-x p-3 m-20 text-white  px-4 py-2 rounded text-centre">
    Bersepeda bukanlah sekedar berolahraga <br />
    namun bisa juga untuk mengekspresikan suasana hati kita.<br />
    ~yazaka
  </p>
  </div>

        <div className="bg-[#FFFFFF] w-70 h-20 shadow-lg rounded-2xl mt-10 ml-10">
            <p className="font-semibold text-2xl ml-6 py-5">Lihatlah koleksi kami</p>
            <p className="w-90 ml-6 py-5">Kami menjual berbagai kelengkapan sepeda mulai dari frame, wheel, dll</p>
        </div>
    
           <div className="flex flex-row justify-center flex-wrap mt-35 gap-20">
            <div className="bg-[#FFFFFF] w-60 h-70 shadow-lg rounded-2xl z-10">
                 <Image
                    src="/dolan.png"
                    alt="Detail"
                    width={250}
                    height={250}
                    />
                <div className="bg-[#f3c623] w-50 h-10 ml-5 mt-15 shadow-lg rounded-2xl z-10">
                    <Link href="/Frame">
                      <p className="text-center font-semibold py-2">Lihat Koleksi </p>
                    </Link>                
                </div>
            </div>

             <div className="bg-[#FFFFFF] w-60 h-70 shadow-lg rounded-2xl z-10">
                 <Image
                    src="/mavic.png"
                    alt="Detail"
                    width={250}
                    height={250}
                    />
                <div className="bg-[#f3c623] w-50 h-10 ml-5 mt-10 shadow-lg rounded-2xl z-10">
                    <Link href="/Wheel">
                      <p className="text-center font-semibold py-2">Lihat Koleksi</p>
                    </Link>
                </div>
            </div>

             <div className="bg-[#FFFFFF] w-60 h-70 shadow-lg rounded-2xl z-10">
                 <Image
                    src="/chain.png"
                    alt="Detail"
                    width={250}
                    height={250}
                    />
                <div className="bg-[#f3c623] w-50 h-10 ml-5 mt-5 shadow-lg rounded-2xl z-10">
                    <Link href="/Component">
                    <p className="text-center font-semibold py-2">Lihat Koleksi</p>
                    </Link>
                </div>
            </div>
           </div>
            

            </div>
    );
};