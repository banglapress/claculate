// src/app/api/profile/route.js
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const userId = session.user.id;
  const data = await req.json();

  const existing = await prisma.profile.findUnique({ where: { userId } });

  const profile = existing
    ? await prisma.profile.update({ where: { userId }, data })
    : await prisma.profile.create({ data: { ...data, userId } });

  return Response.json(profile);
}

export async function GET(req) {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });

  const userId = session.user.id;
  const profile = await prisma.profile.findUnique({ where: { userId } });

  return Response.json(profile);
}
