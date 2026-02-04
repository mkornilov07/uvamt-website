// app/tournament/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { schedule } from "@/data/schedule";

export default function RegisterPage() {
    return (
        <>
            {/* Banner */}
            <div
                id="page-banner"
                className="relative w-full h-80 h-screen bg-fixed bg-center bg-cover"
                style={{ backgroundImage: "url('/register/uva.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 flex flex-col justify-center items-center text-center px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        2nd UVA Math Tournament
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white mt-2"
                        initial={{clipPath: "inset(0 100% 0 0)"}}
                        whileInView={{clipPath: "inset(0 0% 0 0)"}}
                        transition={{duration: 1, ease: "easeInOut", delay: 0.2}}
                        viewport={{once: true}}
                    >
                        Saturday, March 14, 2026
                    </motion.p>
                </div>
            </div>

            {/* Narrow colored bar for seamless header transition */}
            <div
                className="w-full h-[32px]"
                style={{backgroundColor: "oklch(.623 .214 259.815)"}}
            />

            {/* About Section (blue bar like homepage) */}
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
                <div className="text-center max-w-4xl mx-auto py-12 px-4">
                    <motion.h2
                        className="text-3xl font-semibold mb-4 text-white"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        About this year&apos;s UVAMT
                    </motion.h2>
                    <motion.p
                        className="text-gray-200 leading-relaxed"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6 }}
                    >
                        The 2nd annual University of Virginia Math Tournament (UVAMT) will be
                        held on March 14, 2026 on UVA’s historic grounds. 
                        Students from across the
                        region will compete in team and individual rounds to solve challenging
                        problems, collaborate with peers, and showcase their mathematical
                        talents.
                    </motion.p>
                </div>
            </motion.section>

            {/* Page Content */}
            <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                {/* Register Section */}
                <motion.section
                    id="register"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                            Register
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Registration is open! Sign up by February 21, 2026 to secure your spot.
                        </p>
                        <a
                            href="https://forms.gle/9zDSLsvp2Hu9XgFWA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition"
                        >
                            Register Now
                        </a>
                    </div>
                </motion.section>

                {/* Schedule Section */}
                <motion.section
                    id="schedule"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="relative bg-blue-50 rounded-lg overflow-hidden">
                        {/* Accent bar */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-blue-600" />
                        <div className="p-8 pt-6">
                            <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                                Schedule Outline
                            </h2>
                            <div className="bg-white shadow rounded divide-y divide-gray-200">
                                {schedule.map(({ time, activity }, idx) => (
                                    <div
                                        key={time}
                                        className={`flex items-center gap-x-4 px-6 py-4 ${
                                            idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                                        }`}
                                    >
                                        <span className="w-24 font-medium text-blue-600">{time}</span>
                                        <span className="text-gray-800">{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </>
    );
}

// app/register/page.tsx
// "use client";

// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { isMobile } from "../mobileDetector";

// export default function RegisterPage() {
//     const router = useRouter();

//     useEffect(() => {
//         if (typeof window !== "undefined" && isMobile(window)) {
//             router.replace(
//                 "https://forms.gle/ZEnddU9pbfjHEpEq8"
//             );
//         }
//     }, [router]);

//     return (
//         <>
//             {/* Hero Banner */}
//             <div
//                 id="page-banner"
//                 className="
//           relative
//           w-full
//           h-80 md:h-96 lg:h-[500px]
//           bg-fixed bg-center bg-cover
//         "
//                 style={{ backgroundImage: "url('/register/uva.jpg')",
//                     backgroundPosition: "center 70%",}}
//             >
//                 <div
//                     className="
//             absolute inset-0
//             bg-gradient-to-b
//             from-transparent
//             via-black/10
//             to-black/60
//             flex flex-col justify-center items-center text-center px-4
//           "
//                 >
//                     <motion.h1
//                         className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
//                         initial={{opacity: 0, y: 20}}
//                         whileInView={{opacity: 1, y: 0}}
//                         transition={{duration: 0.8}}
//                         viewport={{once: true}}
//                     >
//                         Register Now
//                     </motion.h1>
//                     <motion.p
//                         className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white mt-2"
//                         initial={{clipPath: "inset(0 100% 0 0)"}}
//                         whileInView={{clipPath: "inset(0 0% 0 0)"}}
//                         transition={{duration: 1, ease: "easeInOut", delay: 0.2}}
//                         viewport={{once: true}}
//                     >
//                         Secure your spot for the 2nd UVA Math Tournament.
//                     </motion.p>
//                 </div>
//             </div>

//             {/* Narrow colored bar for seamless header transition */}
//             <div
//                 className="w-full h-[32px]"
//                 style={{backgroundColor: "oklch(.623 .214 259.815)"}}
//             />

//             {/* Registration Form */}
//             <div className="max-w-3xl mx-auto px-4 py-12">
//                 <motion.div
//                     initial={{opacity: 0, y: 20}}
//                     whileInView={{opacity: 1, y: 0}}
//                     transition={{duration: 0.8}}
//                     viewport={{ once: true }}
//                 >
//                     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                         <iframe
//                             src="https://forms.gle/ZEnddU9pbfjHEpEq8"
//                             width="100%"
//                             height={2700}
//                             frameBorder="0"
//                             className="block"
//                             title="UVA Math Tournament Registration"
//                         />
//                     </div>
//                 </motion.div>
//             </div>
//         </>
//     );
// }
