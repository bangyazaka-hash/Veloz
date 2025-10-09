import { NextResponse } from "next/server";

const ADMIN_EMAIL = "admin@veloz.id";
const ADMIN_PASSWORD = "velo2025!";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set({
        name: "isAdmin",
        value: "true",
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 60 * 60,
      });
      return response;
    }
  } catch (error) {
    console.error("Admin login error:", error);
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
