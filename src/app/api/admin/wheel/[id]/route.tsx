import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const data = await prisma.wheel.findUnique({
      where: { id: Number(id) },
    });

    if (!data) {
      return NextResponse.json({ message: "Wheel tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error mengambil wheel", error }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const formData = await req.formData();

    const judul = formData.get("judul") as string;
    const harga = Number(formData.get("harga"));
    const deskripsi = formData.get("deskripsi") as string;
    const file = formData.get("gambar") as File | null;

    let gambarPath: string | undefined = undefined;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

      const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");
      const filepath = path.join(uploadDir, filename);

      fs.writeFileSync(filepath, buffer);

      gambarPath = "/uploads/" + filename;
    }

    const updated = await prisma.wheel.update({
      where: { id: Number(id) },
      data: {
        judul,
        harga,
        deskripsi,
        ...(gambarPath && { gambar: gambarPath }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal mengupdate wheel", error }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.wheel.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Wheel berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal menghapus wheel", error }, { status: 500 });
  }
}