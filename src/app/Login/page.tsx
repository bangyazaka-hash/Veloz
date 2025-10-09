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

    <div className="w-15 h-15">
                <Image
                src="/veloz.png"
                alt="Login"
                fill
                className="w-15 h-15 mt-20 ml-50"
                />
            </div>
            </div>
        )
    }
