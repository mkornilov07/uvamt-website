import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { Analytics } from '@vercel/analytics/next';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
          <nav className="bg-gradient-to-r from-blue-500 to-blue-400 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link href="/">
                <span className="text-2xl font-bold cursor-pointer">UVA Math Tournament</span>
              </Link>
              <div className="space-x-4">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/register" className="hover:underline">Register</Link>
                <Link href="/sponsors" className="hover:underline">Sponsors</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/archive" className="hover:underline">Archive</Link>
                {/* <Link href="/leaderboard" className="hover:underline">Leaderboard</Link>
                <Link href="/about" className="hover:underline">About</Link> */}
              </div>
            </div>
          </nav>

          {/* Banner */}
          <div className="relative w-full h-64">
            <Image 
              src="/uva_temp.jpg" // Update with your image path
              alt="Banner Image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          
          {/* Main Content */}
          <main className="flex-1 container mx-auto p-6">{children}
            <Analytics/>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            <p>Contact: <a href="mailto:math_tournament@virginia.edu"><u>math_tournament@virginia.edu</u></a></p>
            <p>&copy; 2025 University of Virginia Math Tournament</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
