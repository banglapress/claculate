// src/app/register/page.js

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-xl mb-4">Register to Protishruti</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          className="w-full p-2 border mb-4"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          className="w-full p-2 border mb-4"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border mb-4"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button className="w-full bg-green-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}



