import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
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

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.wheel.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Wheel berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal menghapus wheel", error }, { status: 500 });
  }
}