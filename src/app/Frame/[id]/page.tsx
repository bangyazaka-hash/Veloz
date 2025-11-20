import { put, del } from "@vercel/blob";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await prisma.frame.findUnique({
      where: { id: Number(params.id) },
    });

    if (!data) {
      return NextResponse.json({ message: "Frame tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: "Error mengambil data", e }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const oldData = await prisma.frame.findUnique({
      where: { id: Number(params.id) },
    });

    if (!oldData) {
      return NextResponse.json({ message: "Frame tidak ditemukan" }, { status: 404 });
    }

    const formData = await req.formData();
    const judul = formData.get("judul") as string;
    const harga = Number(formData.get("harga"));
    const deskripsi = formData.get("deskripsi") as string;
    const file = formData.get("gambar") as File | null;

    let imageUrl: string | undefined = undefined;

    if (file && file.size > 0) {
      const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");
      const upload = await put(filename, file, { access: "public" });
      imageUrl = upload.url;
      
      if (oldData.gambar && oldData.gambar.startsWith("https://blob")) {
        await del(oldData.gambar);
      }
    }

    const updated = await prisma.frame.update({
      where: { id: Number(params.id) },
      data: {
        judul,
        harga,
        deskripsi,
        ...(imageUrl && { gambar: imageUrl }),
      },
    });

    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ message: "Gagal update data", e }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const data = await prisma.frame.findUnique({
      where: { id: Number(params.id) },
    });

    if (!data) {
      return NextResponse.json({ message: "Frame tidak ditemukan" }, { status: 404 });
    }

    if (data.gambar && data.gambar.startsWith("https://blob")) {
      await del(data.gambar);
    }

    await prisma.frame.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({ message: "Berhasil menghapus frame" });
  } catch (e) {
    return NextResponse.json({ message: "Gagal menghapus frame", e }, { status: 500 });
  }
}