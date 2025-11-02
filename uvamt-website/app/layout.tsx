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
    { href: "/tournament", label: "Tournament" },
    { href: "/register", label: "Register" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/faq", label: "FAQ" },
    { href: "/archive", label: "Archive" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
    const [fillRatio, setFillRatio] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);
    const pathname = usePathname();

    // Existing scroll logic (unchanged)
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

    // Close mobile menu on route change
    useEffect(() => {
        if (mobileOpen) setMobileOpen(false);
    }, [pathname]);

    // Escape key + body scroll lock for mobile menu
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        document.addEventListener("keydown", onKey);
        if (mobileOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            // focus first link for accessibility
            setTimeout(() => firstLinkRef.current?.focus(), 0);
            return () => {
                document.body.style.overflow = prev;
                document.removeEventListener("keydown", onKey);
            };
        }
        return () => document.removeEventListener("keydown", onKey);
    }, [mobileOpen]);

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
            aria-label="Primary"
        >
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo side */}
                <motion.div
                    initial={false}
                    animate={
                        isAtTop
                            ? { scale: 1.5, x: "2.5%", y: "2.5%" }
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

                {/* Desktop links (unchanged) */}
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
                                    className={`px-3 py-2 text-sm uppercase tracking-wide transition-colors ${
                                        isActive
                                            ? "text-white border-b-2 border-blue-400"
                                            : "text-white/75 hover:text-white hover:border-b-2 hover:border-blue-400"
                                    }`}
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Mobile hamburger (only on mobile) */}
                <button
                    type="button"
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
                    aria-label="Open menu"
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {!mobileOpen ? (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    ) : (
                        // Close icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu portal area */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                        />
                        {/* Sheet */}
                        <motion.aside
                            id="mobile-menu"
                            className="md:hidden fixed top-0 inset-x-0 z-50 pt-[68px]"
                            initial={{ y: -24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -24, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl">
                                <nav className="flex flex-col divide-y divide-white/10">
                                    {navLinks.map(({ href, label }, idx) => {
                                        const isActive = pathname === href;
                                        return (
                                            <Link
                                                key={href}
                                                href={href}
                                                ref={idx === 0 ? firstLinkRef : undefined}
                                                className={`px-4 py-4 text-base uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-400/60 ${
                                                    isActive ? "text-white" : "text-white/80 hover:text-white"
                                                }`}
                                            >
                                                {label}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </nav>

        <div className="flex-1">{children}</div>
        </body>
        </html>
    );
}
