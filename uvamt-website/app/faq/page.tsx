// app/faq/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqList = [
    {
        q: "When and where will the contest be hosted?",
        a: "The contest will be hosted in person at the University of Virginia on March 14, 2026 on UVA’s historic grounds.",
    },
    {
        q: "Who is eligible?",
        a: "All high school students (grades 9–12), public or private, are welcome to register. UVAMT problems are designed for a high school competition audience, but students in grades 7-8 with exceptional math ability may also register.",
    },
    {
        q: "How many people per team?",
        a: "Teams consist of up to 6 students. Smaller teams or individuals are welcome and will be grouped to form full teams.",
    },
    {
        q: "Are there prizes?",
        a: "Yes! Winners receive puzzles, books, and other fun math-themed prizes.",
    },
    {
        q: "Is there a registration fee?",
        a: "No—UVAMT is completely free for all participants.",
    },
    {
        q: "When is the registration deadline?",
        a: "Registration closes February 21, 2026. Late registration may be accepted if space remains.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            {/* Banner */}
            <div
                id="page-banner"
                className="relative w-full h-80 md:h-96 lg:h-[500px] bg-fixed bg-cover"
                style={{
                    backgroundImage: "url('/faq/uva.jpg')",
                    backgroundPosition: "50% 40%",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Got questions? We’ve got answers.
                    </motion.p>
                </div>
            </div>

            {/* Seamless header bar */}
            <div
                className="w-full h-[32px]"
                style={{ backgroundColor: "oklch(.623 .214 259.815)" }}
            />

            {/* FAQ Content */}
            <section
                id="faq"
                className="max-w-3xl mx-auto px-4 py-12 space-y-4"
            >
                {faqList.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : idx)
                                }
                                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
                                aria-expanded={isOpen}
                            >
                <span className="text-lg font-medium text-gray-900">
                  {item.q}
                </span>
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </motion.svg>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="px-6 pb-4 text-gray-700 overflow-hidden"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </section>
        </>
    );
}
