import Image from "next/image" ; 

    export default function login() {


        return(
            <div>
            <div className="w-full h-[250px]">
                <Image
                src="/Login.png"
                alt="Login"
                fill
                className="object-cover"
                />
                
            </div>

    <div className="relative w-[100px] h-[100px]">
                <Image
                src="/veloz.png"
                alt="Login"
                fill
                className="object-contain ml-70 mt-[-100]"
                />
                <div className="font-bold text-2xl ml-64 w-200">Ride To Work</div>
                <div className="text-xl ml-32 text-center mt-3 w-100">Ini adalah halaman login khusus admin jika kamu user mohon kembalilah ke halaman home</div>
                
            
            </div>
            </div>
        )
    }
