import Image from "next/image";

export default function Frame() {

    return (
        <div>
            <div className="relative w-full h-[250px]">
                
                <Image
                src="/rb.jpg"
                alt="Frame"
                fill
                className="object-cover"
/>

            </div>

             <div className="relative w-55 h-55 ">
            <div className="flex w-65 h-70 ml-25 mt-20 shadow-lg bg-[#F0F0F0] rounded-xl"></div>
                                    <Image
                                    src="/time.png"
                                    alt="Datail"
                                    fill
                                    className="obtain-object ml-30 mt-[-10]"
                    />
                    <h2 className="mt-[-80] ml-30 z-10 w-40 leading-relaxed">2022 Time Scylon Frameset</h2>
                    <h1 className="mt-[-5] ml-30 font-bold z-10">Rp.2.500.000</h1>
                    </div>

             <div className="relative w-55 h-40 ">
            <div className="flex w-65 h-70 ml-25 mt-20 shadow-lg bg-[#F0F0F0] rounded-xl"></div>
                                    <Image
                                    src="/sworks.png"
                                    alt="Detail"
                                    fill
                                    className="obtain-object ml-125 mt-[-290]"
                    />
                    <h2 className="mt-[-80] ml-30 z-10 w-40 leading-relaxed">2022 Time Scylon Frameset</h2>
                    <h1 className="mt-[-5] ml-30 font-bold z-10">Rp.2.500.000</h1>
                    </div>


        <div className="w-[500] items-start justify-between p-5">
            
        </div>
        </div>
    );
};