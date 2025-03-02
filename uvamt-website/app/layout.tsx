import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UVAMT",
  description: "",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html className={geistSans.className}>
      <body className={geistSans.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="bg-gradient-to-r from-blue-500 to-blue-700  text-white p-4 shadow-xl border border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold cursor-pointer">UVA Math Tournament</span>
              </Link>
              <div className="space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/register" className="hover:underline">Register</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                {/* <Link href="/leaderboard" className="hover:underline">Leaderboard</Link>
                <Link href="/about" className="hover:underline">About</Link> */}
              </div>
            </div>
          </nav>
          
          {/* Main Content */}
          <main className="flex-1 container mx-auto p-6">{children}</main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <p>Contact: math_tournament@virginia.edu</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
