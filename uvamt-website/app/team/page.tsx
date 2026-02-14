"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { team, TeamMember } from "@/data/team";

function TeamRow({ member }: { member: TeamMember }) {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-[420px_1fr]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            {/* LEFT: IMAGE (prominent, edge-to-edge vertically) */}
            <motion.div
                className="relative w-full h-[340px] md:h-[340px]"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
            >
                <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                />
            </motion.div>

            {/* RIGHT: TEXT PANEL (NOT WHITE) */}
            <motion.div
                className="
          flex flex-col justify-center
          px-8 py-6
          bg-gray-100
        "
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                    {member.name}
                </h3>

                <p className="mt-2 text-lg md:text-xl font-semibold text-blue-700">
                    {member.role}
                </p>

                <div className="mt-5 h-[3px] w-20 bg-blue-600" />

                {member.bio && (
                    <p className="mt-5 text-base text-gray-700 leading-relaxed">
                        {member.bio}
                    </p>
                )}
            </motion.div>
        </motion.div>
    );
}



export default function TeamPage() {
    return (
        <>
            <div
                id="page-banner"
                className="relative w-full h-[calc(100vh-80px)] bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('/team/uva.jpg')",
                    backgroundPosition: "50% 100%",
                }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        Meet the Team
                    </motion.h1>

                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white"
                        initial={{clipPath: "inset(0 100% 0 0)"}}
                        whileInView={{clipPath: "inset(0 0% 0 0)"}}
                        transition={{duration: 1, ease: "easeInOut", delay: 0.2}}
                        viewport={{once: true}}
                    >
                        The organizers and volunteers behind UVAMT.
                    </motion.p>
                </div>
            </div>

            <div
                className="w-full h-[32px]"
                style={{backgroundColor: "oklch(.623 .214 259.815)"}}
            />

            <motion.section
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
                        These are the people who make UVAMT possible.
                    </motion.h2>

                    <motion.p
                        className="text-gray-200 leading-relaxed"
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            visible: {opacity: 1, y: 0},
                        }}
                        transition={{duration: 0.6}}
                    >
                        UVAMT is lead by a group of passionate UVA Math students who are dedicated to providing a fun and competitive experience to high school students interested in mathematics.
                    </motion.p>
                </div>
            </motion.section>

            <section className="bg-white">
                <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                        variants={{
                            hidden: {},
                            visible: {transition: {staggerChildren: 0.08}},
                        }}
                        className="space-y-6"
                    >
                        {team.map((m) => (
                            <TeamRow key={m.name} member={m}/>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}