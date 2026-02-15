"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(100);
            setTimeout(onComplete, 800); // Trigger exit shortly after full
        }, 100);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Fade out entire screen
        >
            <div className="relative">
                {/* Text Reveal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl font-bold tracking-[0.2em] text-slate-900 font-heading uppercase text-center"
                >
                    BUILDING BETTER
                </motion.h1>

                {/* Progress Bar Container */}
                <div className="w-full h-[2px] mt-6 bg-slate-100 relative overflow-hidden rounded-full">
                    {/* Filling Bar */}
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-slate-900 shadow-[0_0_20px_rgba(15,23,42,0.5)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    />

                    {/* Traveling Glow Scanner */}
                    <motion.div
                        className="absolute top-0 left-0 h-full w-[100px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
                        initial={{ x: "-100%" }}
                        animate={{ x: "400%" }} // Move across well past visual area
                        transition={{ duration: 2, ease: "easeInOut", delay: 0.2, repeat: 0 }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
