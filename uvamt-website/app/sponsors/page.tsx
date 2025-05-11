'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {JSX, useState} from "react";
import React from "react";

interface Sponsor {
    name: string;
    logoSrc: string;
    blurb: string;
}

const sponsors: Sponsor[] = [
    {
        name: "MathDash",
        logoSrc: "/sponsors/mathdash_logo_black.png",
        blurb:
            "MathDash is a personalized math training platform that meets students where they are at, while keeping them motivated through rating, gamified streaks, and small prizes. The most common feedback they get from parents is \"Thank you for making my child excited about math.\"",
    },
];

const collapseVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
};

function SponsorRow({ sponsor }: { sponsor: Sponsor }) {
    const [open, setOpen] = useState(false);

    let content: JSX.Element;
    if (open) {
        content = (
            <motion.div
                key="content"
                initial="closed"
                animate="open"
                exit="closed"
                variants={collapseVariants as any}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden text-center px-6"
            >
                <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl">
                    {sponsor.blurb}
                </p>
            </motion.div>
        );
    }

    return (
        <div className="w-full mb-10 flex flex-col items-center">
            <motion.button
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.05 }}
                className="focus:outline-none"
            >
                <Image
                    src={sponsor.logoSrc}
                    alt={`${sponsor.name} logo`}
                    width={320}
                    height={320}
                    priority
                    className="object-contain"
                />
            </motion.button>

            <AnimatePresence initial={false}>{content}</AnimatePresence>
        </div>
    );
}

export default function SponsorsPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-2">Our Sponsors</h1>
                <p className="text-lg text-gray-600">
                    Thank you to all of our sponsors who make UVAMT possible!
                </p>
                <p className="text-lg text-gray-600">
                    Click on their logos to learn more.
                </p>
            </header>

            {sponsors.map((s) => (
                <React.Fragment key={s.name}>
                    <SponsorRow sponsor={s} />
                </React.Fragment>
            ))}
        </div>
    );
}
