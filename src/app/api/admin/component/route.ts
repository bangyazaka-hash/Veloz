import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

export async function GET() {
  const data = await prisma.component.findMany();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const judul = formData.get("judul") as string;
  const harga = Number(formData.get("harga"));
  const deskripsi = formData.get("deskripsi") as string;
  const file = formData.get("gambar") as File;

  if (!file) return NextResponse.json({ error: "Gambar wajib" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");
  const filepath = path.join(uploadDir, filename);

  fs.writeFileSync(filepath, buffer);

  const newData = await prisma.component.create({
    data: {
      judul,
      harga,
      deskripsi,
      gambar: "/uploads/" + filename,
    },
  });

  return NextResponse.json(newData);
}
