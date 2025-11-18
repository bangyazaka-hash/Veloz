import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[lexend]">
      <div className="relative w-full h-[250px]">
        <Image
          src="/black.jpg"
          alt="Home"
          fill
          className="object-cover"
        />

        <p className="absolute mt-15 left-10 text-white text-lg leading-relaxed">
          Bersepeda bukanlah sekedar berolahraga <br />
          namun bisa juga untuk mengekspresikan suasana hati kita.
        </p>

        <Link href="/Catalog">
          <div className="absolute left-10 top-10">
            <div className="bg-white w-28 h-10 mt-25 rounded-full shadow-lg flex items-center justify-center">
              <p className="font-semibold">Catalog</p>
            </div>
          </div>
        </Link>
      </div>

      <div className="p-10">
        <div className="flex items-start justify-between gap-10">
          <p className="text-6xl font-semibold font-[lexend] mt-10 min-w-[200px]">
            HOT <br /> 
            SALE!
          </p>

          <div className="flex gap-12">
            <div className="relative w-72 h-60 bg-white shadow-xl rounded-2xl">
              <Image
                src="/first.png"
                alt="Frame 1"
                fill
                className="object-contain p-3"
              />
            </div>

            <div className="relative w-72 h-60 bg-white shadow-xl rounded-2xl">
              <Image
                src="/sworks.png"
                alt="Frame 2"
                fill
                className="object-contain p-3"
              />
            </div>

            <div className="relative w-72 h-60 bg-white shadow-xl rounded-2xl">
              <Image
                src="/giant.png"
                alt="Frame 3"
                fill
                className="object-contain p-3"
              />
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
