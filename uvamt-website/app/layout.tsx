import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
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
    <html><body>
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold cursor-pointer">Math Competition</span>
          </Link>
          <div className="space-x-4">
            <Link href="/apply" className="hover:underline">Apply</Link>
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
    </body></html>
  );
}

