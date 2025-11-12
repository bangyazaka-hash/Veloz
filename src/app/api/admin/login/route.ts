import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const admin = await prisma.admin.findUnique({
      where : { username },
    });

    if (!admin) {
      return NextResponse.json({ error: "Username tidak ditemukan" }, { status: 404 });
    }

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Password salah" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login berhasil", admin: admin.username });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Terjadi kesalahan di server" }, { status: 500 });
  }
}