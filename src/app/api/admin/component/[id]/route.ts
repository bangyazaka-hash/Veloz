import { put, del } from "@vercel/blob";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const data = await prisma.component.findUnique({ where: { id: Number(id) } });

    if (!data) {
      return NextResponse.json({ message: "Component tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ message: "Error mengambil data", e }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const oldData = await prisma.component.findUnique({ where: { id: Number(id) } });

    if (!oldData) {
      return NextResponse.json({ message: "Component tidak ditemukan" }, { status: 404 });
    }

    const formData = await req.formData();
    const judul = formData.get("judul") as string;
    const harga = Number(formData.get("harga"));
    const deskripsi = formData.get("deskripsi") as string;
    const file = formData.get("gambar") as File | null;

    let imageUrl = oldData.gambar;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = Date.now() + "-" + file.name.replace(/\s+/g, "_");

      const blob = await put(filename, buffer, {
        access: "public",
        addRandomSuffix: true,
      });

      imageUrl = blob.url;

      if (oldData.gambar.includes(".blob.vercel-storage.com")) {
        await del(oldData.gambar);
      }
    }

    const updated = await prisma.component.update({
      where: { id: Number(id) },
      data: {
        judul,
        harga,
        deskripsi,
        gambar: imageUrl,
      },
    });

    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ message: "Gagal update data", e }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const data = await prisma.component.findUnique({ where: { id: Number(id) } });

    if (!data) {
      return NextResponse.json({ message: "Component tidak ditemukan" }, { status: 404 });
    }

    if (data.gambar.includes(".blob.vercel-storage.com")) {
      await del(data.gambar);
    }

    await prisma.component.delete({ where: { id: Number(id) } });

    return NextResponse.json({ message: "Berhasil menghapus component" });
  } catch (e) {
    return NextResponse.json({ message: "Gagal menghapus component", e }, { status: 500 });
  }
}
