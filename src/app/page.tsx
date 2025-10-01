import Image from "next/image";

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
        <div className="w-[500] items-start justify-between p-5">
            <h1 className="flex font-[kadwa] m-20 text-6xl text-justify">HOT SALE!</h1>
            
        </div>
        </div>
    );
};