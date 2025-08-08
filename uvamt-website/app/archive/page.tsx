// app/archive/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ArchiveEntry {
    year: number;
    files: { name: string; href: string }[];
}

const archive: ArchiveEntry[] = [
    {
        year: 2025,
        files: [
            { name: "Individual Round Problems", href: "/archive/2025/individual_problems_2025.pdf" },
            { name: "Individual Round Solutions", href: "/archive/2025/individual_solutions_2025.pdf" },
            { name: "Team Round Problems", href: "/archive/2025/team_problems_2025.pdf" },
            { name: "Team Round Solutions", href: "/archive/2025/team_solutions_2025.pdf" },
            { name: "Optimization Round Problems", href: "/archive/2025/optimization_2025.pdf" },
            { name: "Game Round Problems & Solutions", href: "/archive/2025/game_2025.pdf" },
            { name: "Opening/Closing Ceremony Slides", href: "/archive/2025/opening_closing_ceremony_2025.pptx" },
        ],
    },
];

const collapseVariants: Variants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
};

function YearArchive({ entry }: { entry: ArchiveEntry }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <button
                onClick={() => setIsOpen((o) => !o)}
                className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className="text-xl font-semibold text-gray-800">{entry.year}</span>
                <motion.span
                    className="text-gray-500 text-2xl leading-none"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    +
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={collapseVariants}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="px-6 pb-6 bg-white"
                    >
                        <ul className="space-y-2">
                            {entry.files.map(({ name, href }) => (
                                <li key={name}>
                                    <Link
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function ArchivePage() {
    return (
        <>
            {/* Banner with parallax background */}
            <div
                id="page-banner"
                className="relative w-full h-80 md:h-96 lg:h-[500px] bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/archive/uva.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        UVAMT Archive
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white mt-2"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Discover the history of UVAMT.
                    </motion.p>
                </div>
            </div>

            {/* Narrow colored bar for seamless header transition */}
            <div
                className="w-full h-[32px]"
                style={{ backgroundColor: "oklch(.623 .214 259.815)" }}
            />

            {/* Archive Entries */}
            <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
                {archive.map((entry) => (
                    <YearArchive key={entry.year} entry={entry} />
                ))}
            </div>
        </>
    );
}
