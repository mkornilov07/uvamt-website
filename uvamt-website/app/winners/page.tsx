// app/winners/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { winners, YearResults, TeamResult, IndividualResult } from "@/data/winners";

// ─── Medal config ─────────────────────────────────────────────────────────────

const MEDAL: Record<number, { label: string; border: string; badgeBg: string; badgeText: string; bar: string }> = {
    1: { label: "1st Place", border: "border-yellow-400", badgeBg: "bg-yellow-400",  badgeText: "text-yellow-900", bar: "bg-yellow-400"  },
    2: { label: "2nd Place", border: "border-gray-400",   badgeBg: "bg-gray-300",    badgeText: "text-gray-800",   bar: "bg-gray-300"    },
    3: { label: "3rd Place", border: "border-amber-600",  badgeBg: "bg-amber-600",   badgeText: "text-white",      bar: "bg-amber-600"   },
};
const EMOJI: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function medal(place: number) {
    return MEDAL[place] ?? {
        label: `${place}th Place`,
        border: "border-blue-300",
        badgeBg: "bg-blue-100",
        badgeText: "text-blue-800",
        bar: "bg-blue-300",
    };
}

// ─── Individual card ──────────────────────────────────────────────────────────
// Has photo → portrait card. No photo (or load error) → compact row.

function IndividualCard({ result, delay = 0 }: { result: IndividualResult; delay?: number }) {
    const [imgFailed, setImgFailed] = useState(false);
    const m = medal(result.place);
    const emoji = EMOJI[result.place] ?? "";
    const showPhoto = !!result.imageSrc && !imgFailed;

    if (showPhoto) {
        return (
            <motion.div
                className={`bg-white rounded-2xl shadow-md overflow-hidden border-t-4 ${m.border} flex flex-col`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
            >
                <div className="relative w-full h-52">
                    <Image
                        src={result.imageSrc!}
                        alt={result.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover object-top"
                        onError={() => setImgFailed(true)}
                    />
                </div>
                <div className="px-4 py-4 flex flex-col gap-2">
                    <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full ${m.badgeBg} ${m.badgeText}`}>
                        {emoji && `${emoji} `}{m.label}
                    </span>
                    <p className="text-base font-bold text-gray-900 leading-snug">{result.name}</p>
                </div>
            </motion.div>
        );
    }

    // No image / load failed — compact horizontal row
    return (
        <motion.div
            className={`bg-white rounded-xl shadow-sm border-l-4 ${m.border} px-4 py-3 flex items-center gap-3`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay, ease: "easeOut" }}
        >
            <span className={`shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${m.badgeBg} ${m.badgeText} whitespace-nowrap`}>
                {emoji && `${emoji} `}{m.label}
            </span>
            <p className="text-sm font-semibold text-gray-900">{result.name}</p>
        </motion.div>
    );
}

// ─── Team card ────────────────────────────────────────────────────────────────
// Has photo → photo left, list right. No photo (or load error) → list only.

function TeamCard({ result, delay = 0 }: { result: TeamResult; delay?: number }) {
    const [imgFailed, setImgFailed] = useState(false);
    const m = medal(result.place);
    const emoji = EMOJI[result.place] ?? "";
    const showPhoto = !!result.imageSrc && !imgFailed;

    return (
        <motion.div
            className={`bg-white rounded-2xl shadow-md overflow-hidden border-l-4 ${m.border}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            <div className={showPhoto ? "grid grid-cols-1 md:grid-cols-[260px_1fr]" : ""}>
                {showPhoto && (
                    <div className="relative w-full h-52 md:h-full min-h-[180px]">
                        <Image
                            src={result.imageSrc!}
                            alt={`${m.label} team`}
                            fill
                            sizes="(max-width: 768px) 100vw, 260px"
                            className="object-cover"
                            onError={() => setImgFailed(true)}
                        />
                    </div>
                )}
                <div className="px-6 py-5 flex flex-col justify-center gap-3">
                    <span className={`self-start text-xs font-bold px-3 py-1 rounded-full ${m.badgeBg} ${m.badgeText}`}>
                        {emoji && `${emoji} `}{m.label}
                    </span>
                    <div className={`h-[3px] w-10 rounded-full ${m.bar}`} />
                    <ul className="flex flex-wrap gap-x-6 gap-y-1">
                        {result.members.map((name) => (
                            <li key={name} className="text-gray-800 font-medium text-sm">{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

// ─── Year section ─────────────────────────────────────────────────────────────

function IndividualResultsList({ individuals }: { individuals: IndividualResult[] }) {
    // We don't know at render time which images will fail, so we track failures here
    // and choose the layout after the first render. Simplest: always render the list
    // layout if no image is provided; use grid only if imageSrc is set (failures handled per-card).
    const anyHasImage = individuals.some((r) => r.imageSrc);

    if (anyHasImage) {
        // Mixed: photo cards will use portrait, failed/missing will use row.
        // Use a responsive grid that works for both widths.
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {individuals.map((ind, i) => (
                    <IndividualCard key={ind.place} result={ind} delay={i * 0.07} />
                ))}
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-3">
            {individuals.map((ind, i) => (
                <IndividualCard key={ind.place} result={ind} delay={i * 0.06} />
            ))}
        </div>
    );
}

function YearSection({ entry }: { entry: YearResults }) {
    const sortedTeam = [...entry.team].sort((a, b) => a.place - b.place);
    const sortedIndividual = [...entry.individual].sort((a, b) => a.place - b.place);

    return (
        <section className="max-w-5xl mx-auto px-4 py-14">
            {/* Year banner — gradient, no image */}
            <motion.div
                className="relative mb-10 rounded-2xl overflow-hidden shadow-lg"
                style={{ background: "linear-gradient(135deg, oklch(.45 .214 259.815) 0%, oklch(.623 .214 259.815) 60%, oklch(.55 .18 240) 100%)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,.4) 39px, rgba(255,255,255,.4) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,.4) 39px, rgba(255,255,255,.4) 40px)",
                    }}
                />
                <div className="relative z-10 px-8 py-8 flex items-end justify-between">
                    <div>
                        <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">UVAMT</p>
                        <h2 className="text-6xl md:text-7xl font-extrabold text-white leading-none">{entry.year}</h2>
                    </div>
                    <p className="hidden md:block text-white/50 text-sm font-medium pb-1">
                        {entry.team.length} team result{entry.team.length !== 1 ? "s" : ""}&nbsp;·&nbsp;{entry.individual.length} individual result{entry.individual.length !== 1 ? "s" : ""}
                    </p>
                </div>
            </motion.div>

            {/* Team Results */}
            <div className="mb-12">
                <motion.h3
                    className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                >
                    <span className="inline-block w-1 h-6 bg-blue-600 rounded-full" />
                    Team Results
                </motion.h3>
                <div className="space-y-4">
                    {sortedTeam.map((t, i) => (
                        <TeamCard key={t.place} result={t} delay={i * 0.07} />
                    ))}
                </div>
            </div>

            {/* Individual Results */}
            <div>
                <motion.h3
                    className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                >
                    <span className="inline-block w-1 h-6 bg-blue-600 rounded-full" />
                    Individual Results
                </motion.h3>
                <IndividualResultsList individuals={sortedIndividual} />
            </div>
        </section>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WinnersPage() {
    const years = [...winners].sort((a, b) => b.year - a.year);

    return (
        <>
            <div
                id="page-banner"
                className="relative w-full h-[calc(100vh-80px)] bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/winners/banner.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Winners
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white mt-2"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Celebrating the top teams and individuals from every UVAMT.
                    </motion.p>
                </div>
            </div>

            <div className="w-full h-[32px]" style={{ backgroundColor: "oklch(.623 .214 259.815)" }} />

            <motion.section
                className="w-full"
                style={{ backgroundColor: "oklch(.673 .214 259.815)" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
            >
                <div className="text-center max-w-3xl mx-auto py-12 px-4">
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-white"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        Congratulations to the winners of UVAMT!
                    </motion.h2>
                    <motion.p
                        className="text-gray-200 leading-relaxed"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        Every year, some of the brightest mathematical minds from high schools across the region come together at UVA to compete. Here we honor the teams and individuals who rose to the top.
                    </motion.p>
                </div>
            </motion.section>

            <div className="bg-gray-50 pb-24">
                {years.map((entry, i) => (
                    <React.Fragment key={entry.year}>
                        <YearSection entry={entry} />
                        {i < years.length - 1 && (
                            <div className="max-w-5xl mx-auto px-4">
                                <div className="border-t-2 border-dashed border-gray-200" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}