import Image from "next/image";

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
                        className="bg-[#F7F7F7] ml-85 mt-79 bg-[F7F7F7] rounded-2xl"
        />
        </div>

          <div className="relative w-70 h-50">
                        
                        <Image
                        src="/sworks.png"
                        alt="Datail"
                        fill
                        className="ml-185 mt-29 bg-[F7F7F7] rounded-xl card"
        />
        </div>

        <div className="relative w-80 h-80">
                        
                        <Image
                        src="/time.png"
                        alt="Datail"
                        fill
                        className="flex ml-290 bg-[F7F7F7] rounded-xl mt-[-130]"
        />
        </div>

<p className="absolute bottom-4 left-x15 -translate-x p-3 m-20 text-white  px-4 py-2 text-centre">
    Bersepeda bukanlah sekedar berolahraga <br />
    namun bisa juga untuk mengekspresikan suasana hati kita.<br />
    ~yazaka
  </p>
            </div>
        <div className="w-[500] items-start justify-between p-5">
            <h1 className="flex font-[kadwa] m-20 text-6xl text-justify">HOT SALE!</h1>
            
        </div>
        </div>
    );
};