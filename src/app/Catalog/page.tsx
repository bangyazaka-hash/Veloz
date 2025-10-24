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
    
            <div className="relative w-70 h-50">
                                    
                                    <Image
                                    src="/sworks.png"
                                    alt="Datail"
                                    fill
                                    className="bg-[#FFFFFF] w-50 h-90 shadow-lg ml-167 mt-29 rounded-2xl"
                    />
                    </div>
            
        </div>
            </div>
    );
};