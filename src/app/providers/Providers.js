// src/app/providers/Providers.jsx
"use client";  // Essential for client context

import { SessionProvider } from "next-auth/react";
import AuthProvider from "./AuthProvider";

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SessionProvider>
  );
}