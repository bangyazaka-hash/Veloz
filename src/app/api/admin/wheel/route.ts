import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { put } from "@vercel/blob";

export async function GET() {
  const data = await prisma.wheel.findMany();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const judul = formData.get("judul") as string;
  const harga = Number(formData.get("harga"));
  const deskripsi = formData.get("deskripsi") as string;
  const file = formData.get("gambar") as File;

  if (!file)
    return NextResponse.json({ error: "Gambar wajib" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const blob = await put(
    Date.now() + "-" + file.name.replace(/\s+/g, "_"),
    buffer,
    {
      access: "public",
      addRandomSuffix: true,
    }
  );

  const newData = await prisma.wheel.create({
    data: {
      judul,
      harga,
      deskripsi,
      gambar: blob.url,
    },
  });

  return NextResponse.json(newData);
}
