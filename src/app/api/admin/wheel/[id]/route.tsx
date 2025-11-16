import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: any) {
  const data = await prisma.wheel.findUnique({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(data);
}
