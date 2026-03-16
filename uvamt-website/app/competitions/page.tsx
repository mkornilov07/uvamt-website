// app/competitions/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { competitions } from "@/data/competitions";

function CompetitionCard({ comp, index }: { comp: (typeof competitions)[0]; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className="overflow-hidden rounded-2xl shadow-xl bg-white"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.05 }}
        >
            <div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                    isEven ? "" : "md:[direction:rtl]"
                }`}
            >
                {/* Image */}
                <div className="relative w-full h-64 md:h-80 md:[direction:ltr]">
                    <Image
                        src={comp.imageSrc}
                        alt={`${comp.name} competition`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                    {/* Gradient overlay for the short-name badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-5xl font-extrabold text-white/90 tracking-tight drop-shadow-lg leading-none">
                        {comp.shortName}
                    </span>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center px-8 py-8 bg-white md:[direction:ltr]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-1">
                        {comp.location}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
                        {comp.fullName}
                    </h3>

                    <div className="h-[3px] w-16 bg-blue-600 mb-4 rounded-full" />

                    <p className="text-gray-700 leading-relaxed text-base mb-5">
                        {comp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {comp.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={comp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
                    >
                        Visit Website
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 3h7m0 0v7m0-7L10 14M5 5H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-2"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default function CompetitionsPage() {
    return (
        <>
            {/* Banner with parallax background */}
            <div
                id="page-banner"
                className="relative w-full h-[calc(100vh-80px)] bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('/competitions/uva.jpg')",
                    backgroundPosition: "center 0%",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Other Competitions
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white mt-2"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Want more? Explore other math competitions for high schoolers.
                    </motion.p>
                </div>
            </div>

            {/* Narrow colored bar for seamless header transition */}
            <div
                className="w-full h-[32px]"
                style={{ backgroundColor: "oklch(.623 .214 259.815)" }}
            />

            {/* Intro section */}
            <motion.section
                className="w-full"
                style={{ backgroundColor: "oklch(.673 .214 259.815)" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
            >
                <div className="text-center max-w-3xl mx-auto py-12 px-4">
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-white"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        Keep Competing Beyond UVAMT
                    </motion.h2>
                    <motion.p
                        className="text-gray-200 leading-relaxed"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        UVAMT is just one of many amazing opportunities to learn math and compete with other students. Whether you&apos;re looking
                        for national prestige, collaborative team formats, or regional favorites, there&apos;s a
                        tournament out there for every math enthusiast.
                    </motion.p>
                </div>
            </motion.section>

            {/* Competition Cards */}
            <div className="max-w-5xl mx-auto px-4 py-14 space-y-10 pb-24">
                {competitions.map((comp, index) => (
                    <CompetitionCard key={comp.name} comp={comp} index={index} />
                ))}
            </div>

            {/* Footer nudge */}
            <section className="max-w-lg mx-auto text-center py-10 px-4 pb-24">
                <p className="text-gray-500 text-sm">
                    Know a competition we should add?{" "}
                    <a
                        href="mailto:math_tournament@virginia.edu"
                        className="text-blue-600 hover:underline"
                    >
                        Let us know.
                    </a>
                </p>
            </section>
        </>
    );
}