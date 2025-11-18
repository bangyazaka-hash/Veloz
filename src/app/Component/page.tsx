"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

function Component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/admin/component");
      const json = await res.json();
      setData(json);
    }
    load();
  }, []);

  return (
    <div className="font-[lexend]">
      <div className="relative w-full h-[250px]">
        <Image src="/rb.jpg" alt="Component" fill className="object-cover" />
      </div>

      <div className="flex flex-row flex-wrap gap-20 p-10">
        {data.map((item: any) => (
          <Link key={item.id} href={`/Component/${item.id}`}>
            <div className="bg-white w-60 rounded-2xl shadow-lg p-5">
              <div className="relative w-full h-40">
                <Image
                  src={item.gambar}
                  alt={item.judul}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-xl mt-5">{item.judul}</div>
              <div className="font-bold text-red-500 text-xl mt-2">
                Rp. {item.harga.toLocaleString()}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Component.getLayout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Component;