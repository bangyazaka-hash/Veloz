import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const session = req.cookies.get("admin_session")?.value;
  console.log("MIDDLEWARE HIT:", pathname, "| session:", session);

  const isAdminRoute = pathname.startsWith("/Admin");
  const isLoginRoute = pathname.startsWith("/Login");

  if (isAdminRoute && !session) {
    console.log("REDIRECT -> /Login (no session)");
    const url = req.nextUrl.clone();
    url.pathname = "/Login";
    return NextResponse.redirect(url);
  }

  if (isLoginRoute && session) {
    console.log("REDIRECT -> /Admin (has session)");
    const url = req.nextUrl.clone();
    url.pathname = "/Admin";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Admin/:path*", "/Login"],
};
