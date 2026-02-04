// app/sponsors/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Sponsor, sponsors } from "@/data/sponsors";

const collapseVariants: Variants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
};

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <button
                onClick={() => setIsOpen((o) => !o)}
                className="w-full focus:outline-none"
                aria-expanded={isOpen}
            >
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Image
                        src={sponsor.logoSrc}
                        alt={`${sponsor.name} logo`}
                        width={320}
                        height={160}
                        className="object-contain w-full h-40 p-6"
                        priority
                    />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={collapseVariants}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="px-6 pb-6 text-center"
                    >
                        <p className="text-gray-700 leading-relaxed">
                            {sponsor.blurb}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function SponsorsPage() {
    return (
        <>
            {/* Banner */}
            <div
                id="page-banner"
                className="relative w-full h-80 h-screen bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('/sponsors/uva.jpg')",
                    backgroundPosition: "center 79%",
                }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        Our Sponsors
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white"
                        initial={{clipPath: "inset(0 100% 0 0)"}}
                        whileInView={{clipPath: "inset(0 0% 0 0)"}}
                        transition={{duration: 1, ease: "easeInOut", delay: 0.2}}
                        viewport={{once: true}}
                    >
                        Click logos to learn more.
                    </motion.p>
                </div>
            </div>

            {/* Seamless header bar */}
            <div
                className="w-full h-[32px]"
                style={{backgroundColor: "oklch(.623 .214 259.815)"}}
            />
            <motion.section
                id="about"
                className="w-full"
                style={{backgroundColor: "oklch(.673 .214 259.815)"}}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                variants={{
                    hidden: {},
                    visible: {transition: {staggerChildren: 0.2}},
                }}
            >
                <div className="text-center max-w-4xl mx-auto py-12 px-4">
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-white"
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            visible: {opacity: 1, y: 0},
                        }}
                        transition={{duration: 0.6}}
                    >
                        Thank you to all of our sponsors.
                    </motion.h2>
                    <motion.p
                        className="text-gray-200 leading-relaxed"
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            visible: {opacity: 1, y: 0},
                        }}
                        transition={{duration: 0.6}}
                    >
                        The University of Virginia Math Tournament (UVAMT) is only possible thanks to the
                        contributions of our sponsors. We&apos;d like to give a shout-out to everyone who makes UVAMT a reality.
                    </motion.p>
                </div>
            </motion.section>
            {/* Sponsors List */}
            <div className="max-w-5xl mx-auto px-4 py-12">
                <div className="flex flex-wrap justify-center gap-8">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="w-full sm:w-1/2">
                            <SponsorCard sponsor={sponsor}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
