import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const data = await prisma.component.findUnique({
      where: { id: Number(id) },
    });

    if (!data) {
      return NextResponse.json({ message: "Component tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error mengambil component", error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.component.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Component berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal menghapus component", error }, { status: 500 });
  }
}