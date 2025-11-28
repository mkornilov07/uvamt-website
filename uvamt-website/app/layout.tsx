// app/layout.tsx
"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/register", label: "Register" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/faq", label: "FAQ" },
    { href: "/archive", label: "Archive" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
    const [fillRatio, setFillRatio] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const banner = document.getElementById("page-banner");
        const navEl = navRef.current;
        if (!banner || !navEl) return;

        const bannerHeight = banner.offsetHeight;
        const navHeight = navEl.offsetHeight;
        const startScroll = bannerHeight - navHeight;

        const onScroll = () => {
            const scrollY = window.scrollY;
            setIsAtTop(scrollY === 0);

            const offset = scrollY - startScroll;
            const ratio = Math.min(Math.max(offset / navHeight, 0), 1);
            setFillRatio(ratio);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const stopPct = fillRatio * 100;
    const navStyle: React.CSSProperties = {
        backgroundImage: `linear-gradient(
      to top,
      oklch(.623 .214 259.815) ${stopPct}%,
      transparent ${stopPct}%
    )`,
    };

    return (
        <html lang="en">
        <body className="flex flex-col min-h-screen antialiased">
        <nav
            ref={navRef}
            style={navStyle}
            className="fixed inset-x-0 top-0 z-50"
        >
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo side */}
                <motion.div
                    initial={false}
                    animate={
                        isAtTop
                            ? { scale: 1.50, x: "2.5%", y: "2.5%" }
                            : { scale: 1, x: "0%", y: "0%" }
                    }
                    style={{ transformOrigin: "center" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/layout/uva_math.png"
                            alt="UVA Math Tournament"
                            width={45}
                            height={45}
                            className="object-contain"
                            priority
                        />
                    </Link>
                </motion.div>

                {/* Links side */}
                <motion.div
                    initial={false}
                    animate={
                        isAtTop
                            ? { scale: 1.07, x: "-2.5%", y: "-2.5%" }
                            : { scale: 1, x: "0%", y: "0%" }
                    }
                    style={{ transformOrigin: "center" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`
                        px-3 py-2
                        text-sm uppercase tracking-wide
                        transition-colors
                        ${
                                        isActive
                                            ? "text-white border-b-2 border-blue-400"
                                            : "text-white/75 hover:text-white hover:border-b-2 hover:border-blue-400"
                                    }
                      `}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </nav>

        <div className="flex-1">{children}</div>
        </body>
        </html>
    );
}
