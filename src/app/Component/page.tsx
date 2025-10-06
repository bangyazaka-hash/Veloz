import Image from "next/image";

export default function Component() {

    return (
        <div>
            <div className="relative w-full h-[250px]">
                
                <Image
                src="/scot.jpg"
                alt="Component"
                fill
                className="object-cover"
/>

            </div>
        <div className="w-[500] items-start justify-between p-5">
            
        </div>
        </div>
    );
};