"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, TrendingUp } from "lucide-react";

const steps = [
    {
        title: "Idea",
        description: "We start by understanding your vision and market needs. Strategy is everything.",
        icon: Lightbulb,
        phase: "Phase 1"
    },
    {
        title: "Build",
        description: "Our engineering team constructs scalable, high-performance software with modern tech.",
        icon: Code2,
        phase: "Phase 2"
    },
    {
        title: "Scale",
        description: "We optimize for growth, ensuring your product can scale with you.",
        icon: TrendingUp,
        phase: "Phase 3"
    }
];

export default function HowWeWork() {
    return (
        <section id="work" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Process</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3 text-slate-900 font-heading">How We Work</h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative flex flex-col gap-12">
                    {/* Vertical Timeline Line with Premium Energy Beam */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 md:-translate-x-1/2 overflow-hidden">
                        {/* Glowing Blue Traveling Energy Beam */}
                        <motion.div
                            className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[160px] rounded-full z-10"
                            style={{
                                background: "linear-gradient(to bottom, transparent 0%, #1d4ed8 50%, transparent 100%)", // Rich visible blue
                                boxShadow: "0 0 15px rgba(37, 99, 235, 0.9)", // Vibrant blue glow
                                filter: "blur(0px)"
                            }}
                            animate={{
                                top: ["-250px", "100%"]
                            }}
                            transition={{
                                duration: 3,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.15,
                                ease: [0.4, 0, 0.2, 1]
                            }}
                        >
                            {/* Empty spacer for desktop */}
                            <div className="hidden md:block w-5/12" />

                            {/* Animated Icon Container */}
                            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10">
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shadow-md relative"
                                    animate={
                                        index === 1
                                            ? {
                                                y: [-4, 4],
                                                scale: [1, 1.06, 1]
                                            }
                                            : {
                                                y: [-4, 4]
                                            }
                                    }
                                    transition={
                                        index === 1
                                            ? {
                                                y: {
                                                    duration: 5,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    repeatType: "mirror",
                                                    delay: 0.5
                                                },
                                                scale: {
                                                    duration: 1.2,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }
                                            }
                                            : {
                                                duration: 5,
                                                ease: "easeInOut",
                                                repeat: Infinity,
                                                repeatType: "mirror",
                                                delay: index * 0.5
                                            }
                                    }
                                >
                                    {/* Enhanced Premium Glow for Build Icon with WiFi Range Effect */}
                                    {index === 1 ? (
                                        <>
                                            {/* WiFi Signal Ring 1 - Midsize Smooth */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border-2 border-blue-500/60 z-[-1]"
                                                initial={{ width: "100%", height: "100%", opacity: 0 }}
                                                animate={{
                                                    scale: [1, 1.8],
                                                    opacity: [0.8, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 0
                                                }}
                                            />
                                            {/* WiFi Signal Ring 2 */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border-2 border-blue-500/40 z-[-1]"
                                                initial={{ width: "100%", height: "100%", opacity: 0 }}
                                                animate={{
                                                    scale: [1, 1.8],
                                                    opacity: [0.6, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 1
                                                }}
                                            />
                                            {/* WiFi Signal Ring 3 */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border-2 border-blue-500/20 z-[-1]"
                                                initial={{ width: "100%", height: "100%", opacity: 0 }}
                                                animate={{
                                                    scale: [1, 1.8],
                                                    opacity: [0.4, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    ease: "easeInOut",
                                                    repeat: Infinity,
                                                    delay: 2
                                                }}
                                            />

                                            {/* Deep Blue Radial Glow Base */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl z-[-1]"
                                                style={{
                                                    background: "radial-gradient(circle at center, rgba(30, 64, 175, 0.45) 0%, transparent 70%)",
                                                    filter: "blur(10px)"
                                                }}
                                                animate={{
                                                    opacity: [0.4, 0.6, 0.4]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    ease: "easeInOut",
                                                    repeat: Infinity
                                                }}
                                            />

                                            {/* Base Glow Layer */}
                                            <div
                                                className="absolute inset-0 rounded-xl z-[-1]"
                                                style={{
                                                    background: "radial-gradient(circle at center, rgba(37, 99, 235, 0.2) 0%, transparent 70%)"
                                                }}
                                            />
                                        </>
                                    ) : (
                                        /* Subtle radial glow for other icons */
                                        <div
                                            className="absolute inset-0 rounded-xl"
                                            style={{
                                                background: "radial-gradient(circle at center, rgba(96, 165, 250, 0.15) 0%, transparent 70%)"
                                            }}
                                        />
                                    )}
                                    <step.icon className="w-6 h-6 text-blue-600 relative z-10" strokeWidth={2} />
                                </motion.div>
                            </div>

                            {/* Content Card */}
                            <motion.div
                                className="pl-16 md:pl-0 w-full md:w-5/12"
                                whileHover={{
                                    y: -4,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                            >
                                <div className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 transition-all duration-250 relative group ${index % 2 !== 0 && 'md:text-right'}`}>
                                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 bg-blue-50 text-blue-600">
                                        {step.phase}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-neutral-900 mb-3 font-heading">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
