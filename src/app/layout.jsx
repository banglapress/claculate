// src/app/layout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers/Providers";

// ✅ Remove: import Head from "next/head"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Define favicon via metadata properly
export const metadata = {
  title: "Protishruti.com",
  description: "Solution for everyone",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
