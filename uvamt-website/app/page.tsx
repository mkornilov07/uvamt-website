// app/page.tsx (HomePage)
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { schedule } from "@/data/schedule";
import { sponsors } from "@/data/sponsors";


export default function HomePage() {
    return (
        <div className="overflow-x-hidden">
            {/* Banner with parallax background */}
            <div
                id="page-banner"
                className="
          relative
          w-full
          h-[calc(100vh-80px)]
          bg-fixed bg-center bg-cover
        "
                style={{ backgroundImage: "url('/home/uva.jpg')" }}
            >
                <div
                    className="
            absolute inset-0
            bg-gradient-to-b
            from-transparent
            via-black/10
            to-black/60
            flex flex-col justify-center items-center text-center px-4
          "
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        UVA Math Tournament
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold uppercase tracking-wider text-white"
                        initial={{ clipPath: "inset(0 100% 0 0)" }}
                        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Collaborate. Learn. Compete.
                    </motion.p>
                </div>
            </div>

            {/* Narrow colored bar for seamless header transition */}
            <div
                className="w-full h-[32px]"
                style={{ backgroundColor: "oklch(.623 .214 259.815)" }}
            />

            {/* About Section */}
            <motion.section
                id="about"
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
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        About the Tournament
                    </motion.h2>
                    <motion.p
                        className="text-gray-200"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        The UVA Math Tournament brings together high school teams from across the region
                        to compete in a variety of challenging rounds, including team, individual, and
                        fast-paced game-style competitions. Participants will test their problem-solving
                        skills, collaborate with peers, and enjoy a day of intellectual excitement on
                        UVA&apos;s historic grounds.
                    </motion.p>
                </div>
            </motion.section>


            {/* Highlights (zippered layout: image-right, image-left, image-right) */}
            <section id="highlights" className="py-12 px-4">
                {[
                    {
                        title: "Collaborate",
                        desc: "Work together with peers to solve complex, multi-step problems, fostering communication and teamwork in a collaborative setting.",
                        img: "/home/collaboration.png",
                    },
                    {
                        title: "Learn",
                        desc: "Deepen your mathematical knowledge through challenging individual questions and insightful feedback from expert proctors.",
                        img: "/home/teaching.png",
                    },
                    {
                        title: "Compete",
                        desc: "Put your skills to the test in an exciting, fast-paced environment that rewards both speed and precision.",
                        img: "/home/winners.png",
                    },
                ].map((item, idx) => (
                    <div
                        key={item.title}
                        className="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
                    >
                        {idx % 2 === 0 ? (
                            <>
                                {/* Text on left */}
                                <motion.div
                                    className="px-4 md:px-8"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative inline-block mb-3 px-4 py-2">
                                        <motion.svg
                                            width="100%"
                                            height="100%"
                                            className="absolute inset-0"
                                        >
                                            <motion.rect
                                                x="0"
                                                y="0"
                                                width="100%"
                                                height="100%"
                                                fill="none"
                                                stroke="#1E40AF"
                                                strokeWidth={3}
                                                vectorEffect="non-scaling-stroke"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                                viewport={{ once: true }}
                                            />
                                        </motion.svg>
                                        <h3 className="relative text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                                {/* Image on right */}
                                <motion.div
                                    className="w-full h-64 md:h-80 lg:h-[400px] overflow-hidden rounded-lg shadow-lg"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            </>
                        ) : (
                            <>
                                {/* Image on left */}
                                <motion.div
                                    className="w-full h-64 md:h-80 lg:h-[400px] overflow-hidden rounded-lg shadow-lg"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                                {/* Text on right */}
                                <motion.div
                                    className="px-4 md:px-8"
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative inline-block mb-3 px-4 py-2">
                                        <motion.svg
                                            width="100%"
                                            height="100%"
                                            className="absolute inset-0"
                                        >
                                            <motion.rect
                                                x="0"
                                                y="0"
                                                width="100%"
                                                height="100%"
                                                fill="none"
                                                stroke="#1E40AF"
                                                strokeWidth={3}
                                                vectorEffect="non-scaling-stroke"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                                viewport={{ once: true }}
                                            />
                                        </motion.svg>
                                        <h3 className="relative text-3xl md:text-4xl font-semibold text-gray-900 tracking-wide">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </>
                        )}
                    </div>
                ))}
            </section>

            {/* Schedule */}
            <section
                id="schedule"
                className="relative py-12 px-4 bg-blue-50 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />
                <div className="max-w-2xl mx-auto">
                    <motion.h2
                        className="text-3xl font-semibold mb-6 text-center text-gray-900 relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Event Schedule
                    </motion.h2>

                    <motion.div
                        className="bg-white shadow-lg rounded-lg overflow-hidden divide-y divide-gray-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {schedule.map(({ time, activity }, idx) => (
                            <motion.div
                                key={time}
                                className={`flex items-center gap-x-4 px-6 py-4 ${
                                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 + 0.2 }}
                                viewport={{ once: true }}
                            >
          <span className="w-24 flex-shrink-0 font-medium text-blue-600">
            {time}
          </span>
                                <span className="text-gray-800">{activity}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>



            {/* Secure Your Spot */}
            <section id="register" className="py-12 bg-gray-50 px-4">
                <motion.div
                    className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl font-semibold text-center text-gray-900"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Secure Your Spot
                    </motion.h2>
                    <motion.p
                        className="text-gray-700 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Registration is now open! Sign up by February 21, 2026.
                    </motion.p>
                    <motion.div
                        className="text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                    >

                        <a
                            href="https://forms.gle/9zDSLsvp2Hu9XgFWA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition"
                        >
                            Register Now
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Sponsors */}
            <section id="sponsors" className="py-12 bg-white px-4">
                <motion.h2
                    className="text-3xl font-semibold mb-6 text-center text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Our Sponsors
                </motion.h2>
                <motion.div
                    className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                    viewport={{ once: true }}
                >
                    {sponsors.map(({ name, logoSrc }) => (
                        <motion.div
                            key={name}
                            className="flex justify-center"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link href="/sponsors" className="block transform hover:scale-105 transition">
                                <Image
                                    src={logoSrc}
                                    alt={`${name} logo`}
                                    width={150}
                                    height={80}
                                    className="object-contain"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>


            {/* Contact */}
            <section id="contact" className="max-w-lg mx-auto text-center py-12 px-4">
                <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
                <p className="text-gray-700">
                    For inquiries, please email us at {" "}
                    <a href="mailto:math_tournament@virginia.edu" className="text-blue-600 hover:underline">
                        math_tournament@virginia.edu
                    </a>
                    .
                </p>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-6 text-center px-4">
                <p>&copy; 2026 University of Virginia Math Tournament</p>
            </footer>
        </div>
    );
}