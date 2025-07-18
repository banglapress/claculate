// src/app/api/register/route.js


import { prisma } from "@/lib/prisma"; // adjust if your path differs
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Check if user already exists
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (userExists) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await hash(password, 10);

    // Create user
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Registration error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
