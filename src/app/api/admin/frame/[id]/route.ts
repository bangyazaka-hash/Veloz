import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await prisma.frame.findUnique({
      where: { id: Number(id) },
    });

    if (!data) {
      return NextResponse.json({ message: "Frame tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error mengambil frame", error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.frame.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Frame berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal menghapus frame", error }, { status: 500 });
  }
}