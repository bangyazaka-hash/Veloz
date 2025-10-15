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

             <div className="flex flex-row justify-left flex-wrap gap-20 p-10">
                         <div className="relative justify-center w-50 h-50">
                        <div className="bg-[#F0F0F0] w-60 h-65 rounded-2xl shadow-lg m-10 ml-30 p-5">
                         <Image
                                                src="/dolan.png"
                                                alt="Datail"
                                                fill
                                                className="object-contain mt-10 ml-35"
                                />
                        </div>  
                        </div>
            
                       <div className="relative justify-center w-50 h-50">
                        <div className="bg-[#F0F0F0] w-60 h-65 rounded-2xl shadow-lg m-10 ml-30 p-5">
                         <Image
                                                src="/dolan.png"
                                                alt="Datail"
                                                fill
                                                className="object-contain mt-10 ml-35"
                                />
                        </div>  
                        </div>
            
                          <div className="relative justify-center w-50 h-50">
                        <div className="bg-[#F0F0F0] w-60 h-65 rounded-2xl shadow-lg m-10 ml-30 p-5">
                         <Image
                                                src="/dolan.png"
                                                alt="Datail"
                                                fill
                                                className="object-contain mt-10 ml-35"
                                />
                        </div>  
                        </div>
            
                              <div className="relative justify-center w-50 h-50">
                        <div className="bg-[#F0F0F0] w-60 h-65 rounded-2xl shadow-lg m-10 ml-30 p-5">
                         <Image
                                                src="/dolan.png"
                                                alt="Datail"
                                                fill
                                                className="object-contain mt-10 ml-35"
                                />
                        </div>  
                        </div>
            
            
                    <div className="w-[500] items-start justify-between p-5">
                        
                    </div>
                    </div>
                    
        <div className="w-[500] items-start justify-between p-5">
            
        </div>
        </div>
    );
};