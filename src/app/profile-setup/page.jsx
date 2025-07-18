// src/app/profile-setup/page.jsx

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ProfileSetupPage() {
  const { data: session } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    gender: "",
    age: "",
    religion: "",
    maritalStatus: "",
    profession: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/profile-setup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/dashboard"); // send to home or dashboard
    }
  };

  if (!session?.user) return <p>Please log in first.</p>;

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="gender" placeholder="Gender" onChange={handleChange} className="w-full p-2 border" />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} className="w-full p-2 border" />
        <input name="religion" placeholder="Religion" onChange={handleChange} className="w-full p-2 border" />
        <input name="maritalStatus" placeholder="Marital Status" onChange={handleChange} className="w-full p-2 border" />
        <input name="profession" placeholder="Profession" onChange={handleChange} className="w-full p-2 border" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white">Save Profile</button>
      </form>
    </div>
  );
}
