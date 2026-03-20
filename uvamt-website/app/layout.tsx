// app/layout.tsx
"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./globals.css";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/register", label: "Register" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/team", label: "Team" },
    { href: "/faq", label: "FAQ" },
    { href: "/competitions", label: "Competitions" },
    { href: "/archive", label: "Archive" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
    const [fillRatio, setFillRatio] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const pathname = usePathname();

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    useEffect(() => {
        const banner = document.getElementById("page-banner");
        const navEl = navRef.current;
        if (!banner || !navEl) return;

        const onScroll = () => {
            const scrollY = window.scrollY;
            setIsAtTop(scrollY === 0);

            const bannerHeight = window.innerHeight - 80;
            const navHeight = navEl.offsetHeight;
            const startScroll = bannerHeight - navHeight;

            const offset = scrollY - startScroll;
            const ratio = Math.min(Math.max(offset / navHeight, 0), 1);
            setFillRatio(ratio);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        onScroll();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
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
                {/* Logo */}
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

                {/* Desktop links */}
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
                                        ${isActive
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

                {/* Hamburger button — mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
                    onClick={() => setMobileOpen((o) => !o)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    <motion.span
                        className="block h-[2px] w-6 bg-white rounded-full origin-center"
                        animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                    <motion.span
                        className="block h-[2px] w-6 bg-white rounded-full"
                        animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="block h-[2px] w-6 bg-white rounded-full origin-center"
                        animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                </button>
            </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
            {mobileOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-40 bg-black/50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setMobileOpen(false)}
                    />

                    {/* Slide-in panel */}
                    <motion.div
                        className="fixed top-0 right-0 z-40 h-full w-72 md:hidden flex flex-col pt-24 pb-10 px-8"
                        style={{ backgroundColor: "oklch(.45 .214 259.815)" }}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 32 }}
                    >
                        {/* Decorative accent line */}
                        <div
                            className="absolute top-0 left-0 w-1 h-full rounded-r-sm"
                            style={{ backgroundColor: "oklch(.75 .18 259.815)" }}
                        />

                        <nav className="flex flex-col gap-1">
                            {navLinks.map(({ href, label }, i) => {
                                const isActive = pathname === href;
                                return (
                                    <motion.div
                                        key={href}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.1, duration: 0.3, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={href}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`
                                                block py-3 px-4 rounded-lg
                                                text-sm uppercase tracking-widest font-semibold
                                                transition-colors
                                                ${isActive
                                                ? "bg-white/15 text-white"
                                                : "text-white/70 hover:text-white hover:bg-white/10"
                                            }
                                            `}
                                        >
                                            {isActive && (
                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-300 mr-2 mb-0.5" />
                                            )}
                                            {label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        <div className="mt-auto text-white/30 text-xs tracking-widest uppercase">
                            UVAMT · 2026
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>

        <div className="flex-1">{children}</div>
        </body>
        </html>
    );
}