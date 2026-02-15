"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Code, Bot, Database, Globe, Zap, Settings2, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

// Orbital positioning configuration
const centerX = 50; // Visual center X (%)
const centerY = 50; // Visual center Y (%)
const radius = 180; // Orbital radius in pixels

const icons = [
    { icon: Code, label: "Development", delay: 0 },
    { icon: Bot, label: "AI Integration", delay: 0.5 },
    { icon: Database, label: "Scalable DB", delay: 1.0 },
    { icon: Globe, label: "Global CDN", delay: 1.5 },
    { icon: Zap, label: "Performance", delay: 2.0 },
    { icon: Settings2, label: "Automation", delay: 2.5 },
];

// Calculate orbital positions
const getOrbitalPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    const offsetX = radius * Math.cos(angle);
    const offsetY = radius * Math.sin(angle);
    return { offsetX, offsetY };
};

export default function Hero() {
    const [showContact, setShowContact] = useState(false);

    // Mouse parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 50, damping: 20 };
    const rotateX = useSpring(mouseY, springConfig);
    const rotateY = useSpring(mouseX, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Calculate normalized position (-0.5 to 0.5)
            const x = (clientX / width) - 0.5;
            const y = (clientY / height) - 0.5;

            // Apply rotation based on mouse position (max 10 degrees)
            mouseX.set(x * 20);
            mouseY.set(-y * 20);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f8fbff] to-[#eef4ff] pt-20">

            {/* 1. LAYER 0: Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* 2. LAYER 1: Animated Diagonal Glass Panel */}
            <div className="absolute right-[-10%] top-[-20%] w-[60%] h-[140%] z-[1] hidden lg:block pointer-events-none">
                <motion.div
                    className="w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-[30px] rounded-[3rem] border border-white/20 will-change-transform"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{ transformOrigin: "center", backfaceVisibility: "hidden" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-[3] w-full h-full">

                {/* 3. LAYER 3: Text Content */}
                <div className="max-w-2xl relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-[42px] md:text-[66px] lg:text-[94px] tracking-[-0.015em] leading-[1.02] font-sans" style={{ fontWeight: 750 }}>
                            <span
                                className="text-transparent bg-clip-text"
                                style={{
                                    backgroundImage: "linear-gradient(180deg, #111827 0%, #1f2937 45%, #374151 100%)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    textShadow: "0 6px 30px rgba(17, 24, 39, 0.08)"
                                }}
                            >
                                Building Better
                            </span>
                            <br />
                            <span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#93c5fd] via-[#3b82f6] to-[#1d4ed8] font-bold text-[39px] md:text-[60px] lg:text-[82px]"
                                style={{
                                    textShadow: "0 8px 40px rgba(59, 130, 246, 0.15)"
                                }}
                            >
                                Digital Products
                            </span>
                        </h1>

                        <p className="text-xl text-[#475569] mt-7 max-w-[520px] leading-[1.6] font-normal">
                            Web. AI. Automation. Growth. <br />
                            We build premium Software for Ambitious Oganizations.
                        </p>

                        <div className="flex flex-wrap gap-5 mt-10 items-center h-[72px]">
                            <motion.a
                                href="/#services"
                                whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-blue-600/20 transition-all duration-300 inline-block"
                            >
                                Explore Services
                            </motion.a>

                            {showContact ? (
                                <div className="flex gap-4">
                                    <motion.a
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "#f1f5f9" }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=buildingbetterwork@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[60px] h-[60px] bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 shadow-lg"
                                    >
                                        <Mail size={24} />
                                    </motion.a>
                                    <motion.a
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "#f0fdf4" }}
                                        whileTap={{ scale: 0.95 }}
                                        href="https://wa.me/917058041019?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-[60px] h-[60px] bg-white border border-green-100 rounded-full flex items-center justify-center text-green-500 shadow-lg"
                                    >
                                        <MessageCircle size={24} />
                                    </motion.a>
                                </div>
                            ) : (
                                <motion.button
                                    onClick={() => setShowContact(true)}
                                    layoutId="contact-btn"
                                    whileHover={{ y: -4, borderColor: "#cbd5e1", backgroundColor: "#ffffff" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-lg"
                                >
                                    Get in Touch
                                </motion.button>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* 4. LAYER 2: Floating Feature Cards */}
                <div
                    className="relative h-[600px] w-full hidden lg:block z-[2]"
                    style={{ perspective: "1400px" }}
                >
                    {icons.map((item, index) => {
                        const { offsetX, offsetY } = getOrbitalPosition(index, icons.length);

                        return (
                            <motion.div
                                key={index}
                                className="absolute"
                                style={{
                                    left: `${centerX}%`,
                                    top: `${centerY}%`,
                                    translateX: "-50%",
                                    translateY: "-50%",
                                    rotateX,
                                    rotateY
                                }}
                                initial={{
                                    x: offsetX,
                                    y: offsetY,
                                    opacity: 0,
                                    scale: 0.8
                                }}
                                animate={{
                                    x: offsetX,
                                    y: offsetY,
                                    opacity: 1,
                                    scale: 1
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.2 + (index * 0.1),
                                    ease: "easeOut"
                                }}
                            >
                                <motion.div
                                    animate={{
                                        // Removed rotation to avoid conflict with mouse-move parallax
                                        y: [-8, 8],
                                        x: [-4, 4]
                                    }}
                                    transition={{
                                        duration: 6,
                                        ease: [0.4, 0, 0.2, 1],
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        delay: item.delay
                                    }}
                                    // Rotation moved to parent to avoid vibration
                                    style={{
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    <motion.div
                                        className="bg-white px-6 py-[18px] rounded-[20px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-[14px] cursor-default"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.15)",
                                            borderColor: "rgba(37, 99, 235, 0.2)"
                                        }}
                                    >
                                        <div className="relative w-10 h-10 flex items-center justify-center">
                                            {/* Static Base Glow (Square) */}
                                            <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md z-0" />

                                            {/* Continuous Square Ripple 1 */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border border-blue-400/60 z-0"
                                                initial={{ opacity: 0, scale: 1 }}
                                                animate={{
                                                    scale: [1, 1.8],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    delay: item.delay,
                                                    ease: "easeInOut",
                                                    times: [0, 0.5, 1]
                                                }}
                                            />

                                            {/* Continuous Square Ripple 2 (Offset to remove pause) */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl border border-blue-400/40 z-0"
                                                initial={{ opacity: 0, scale: 1 }}
                                                animate={{
                                                    scale: [1, 1.8],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    delay: item.delay + 2,
                                                    ease: "easeInOut",
                                                    times: [0, 0.5, 1]
                                                }}
                                            />
                                            <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-xl text-blue-600 shadow-[0_0_18px_rgba(59,130,246,0.15)] relative z-10">
                                                <item.icon size={20} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                        <span className="font-bold text-slate-700 text-base whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
