// app/register/page.tsx
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { isMobile } from "../mobileDetector";

export default function RegisterPage() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined" && isMobile(window)) {
            router.replace(
                "https://docs.google.com/forms/d/e/1FAIpQLSd3O9TIiDp9xYY81jq9Fh86agvUkTHri8VnhWV8TXtixMbugQ/viewform"
            );
        }
    }, [router]);

    return (
        <>
            {/* Hero Banner */}
            <div
                id="page-banner"
                className="
          relative
          w-full
          h-80 md:h-96 lg:h-[500px]
          bg-fixed bg-center bg-cover
        "
                style={{ backgroundImage: "url('/register/uva.jpg')",
                    backgroundPosition: "center 70%",}}
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
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        Register Now
                    </motion.h1>
                    <motion.p
                        className="relative inline-block overflow-hidden text-lg md:text-xl font-semibold tracking-wide text-white mt-2"
                        initial={{clipPath: "inset(0 100% 0 0)"}}
                        whileInView={{clipPath: "inset(0 0% 0 0)"}}
                        transition={{duration: 1, ease: "easeInOut", delay: 0.2}}
                        viewport={{once: true}}
                    >
                        Secure your spot for the 2nd UVA Math Tournament.
                    </motion.p>
                </div>
            </div>

            {/* Narrow colored bar for seamless header transition */}
            <div
                className="w-full h-[32px]"
                style={{backgroundColor: "oklch(.623 .214 259.815)"}}
            />

            {/* Registration Form */}
            <div className="max-w-3xl mx-auto px-4 py-12">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{ once: true }}
                >
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src="https://forms.gle/DFKqJPgp5PNjjW4T6"
                            width="100%"
                            height={2700}
                            frameBorder="0"
                            className="block"
                            title="UVA Math Tournament Registration"
                        />
                    </div>
                </motion.div>
            </div>
        </>
    );
}
