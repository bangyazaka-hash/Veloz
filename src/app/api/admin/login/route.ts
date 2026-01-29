import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, error: "Username tidak ditemukan" },
        { status: 401 }
      );
    }

    const passwordMatch = bcrypt.compareSync(password, admin.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, error: "Password salah" },
        { status: 401 }
      );
    }

    // ✅ Login sukses + set cookie untuk middleware
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin_session", String(admin.id), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 hari
    });

    return res;
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
