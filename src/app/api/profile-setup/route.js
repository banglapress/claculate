//src/app/api/profile-setup/route.js

import { getServerSession } from "next-auth";
import { authOptions } from "@/auth"; // adjust if needed
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) return new Response("User not found", { status: 404 });

  await prisma.profile.create({
    data: {
      userId: user.id,
      gender: body.gender,
      age: parseInt(body.age),
      religion: body.religion,
      maritalStatus: body.maritalStatus,
      profession: body.profession,
    },
  });

  return new Response(JSON.stringify({ success: true }));
}
