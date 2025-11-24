import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function GET() {
  try {
    const data = await prisma.wheel.findMany();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "GET error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const judul = form.get("judul") as string;
    const harga = Number(form.get("harga"));
    const deskripsi = form.get("deskripsi") as string;
    const file = form.get("gambar") as File;

    if (!file)
      return NextResponse.json({ error: "File wajib" }, { status: 400 });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const blob = await put(
      `${Date.now()}-${file.name.replace(/\s+/g, "_")}`,
      buffer,
      { access: "public", addRandomSuffix: true }
    );

    const created = await prisma.wheel.create({
      data: { judul, harga, deskripsi, gambar: blob.url },
    });

    return NextResponse.json(created);
  } catch (err) {
    console.error("POST /wheel error:", err);
    return NextResponse.json({ error: "Gagal POST" }, { status: 500 });
  }
}
