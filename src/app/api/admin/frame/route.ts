import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.frame.findMany();
    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: "Failed GET" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const judul = formData.get("judul") as string;
    const harga = Number(formData.get("harga"));
    const deskripsi = formData.get("deskripsi") as string;
    const file = formData.get("gambar") as File;

    if (!file)
      return NextResponse.json({ error: "File wajib" }, { status: 400 });
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const blob = await put(
      `${Date.now()}-${file.name.replace(/\s+/g, "_")}`,
      buffer,
      {
        access: "public",
        addRandomSuffix: true,
      }
    );

    const newData = await prisma.frame.create({
      data: {
        judul,
        harga,
        deskripsi,
        gambar: blob.url,
      },
    });

    return NextResponse.json(newData);
  } catch (e) {
    console.error("POST Error:", e);
    return NextResponse.json({ error: "Gagal POST" }, { status: 500 });
  }
}
