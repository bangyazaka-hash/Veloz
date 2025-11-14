import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (
        <div>
            <div className="relative w-full h-[250px]">
                
                <Image
                src="/black.jpg"
                alt="Home"
                fill
                className="object-cover"
/>

          <div className="relative w-70 h-50">
            
                        <Image
                        src="/first.png"
                        alt="Detail"
                        fill
                        className="bg-[#FFFFFF] shadow-lg ml-85 mt-79 rounded-2xl"
        />
        </div>

          <div className="relative w-70 h-50">
                        
                        <Image
                        src="/sworks.png"
                        alt="Datail"
                        fill
                        className="bg-[#FFFFFF] shadow-lg ml-167 mt-29 rounded-2xl"
        />
        </div>

        <div className="relative w-70 h-50">
        
                        <Image
                        src="/giant.png"
                        alt="Datail"
                        fill
                        className="bg-[#FFFFFF] hover:bg-gray-100 shadow-lg ml-250 mt-[-85] rounded-xl"
        />
        </div>

<p className="absolute font-[lexend] bottom-4 left-x15 -translate-x p-3 m-20 text-white px-4 py-2 text-centre">
    Bersepeda bukanlah sekedar berolahraga <br />
    namun bisa juga untuk mengekspresikan suasana hati kita.
  </p>
<Link href="/Catalog">
  <div className="absolute ml-25 mt-[-445]">
    <div className="bg-white w-25 h-8 rounded-full shadow-lg">
            <p className="font-[lexend] font-semibold text-center py-1">Catalog</p>
        </div>
        </div>
        </Link>
            </div>

        <div className="w-[500] items-start justify-between p-5">
            <h1 className="flex font-[lexend] ml-10 mt-25 text-6xl text-justify">HOT<br />
            SALE!</h1>
            
        </div>
        </div>
    );
};