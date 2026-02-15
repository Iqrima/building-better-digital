"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 bg-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20" />
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading"
                >
                    Let’s Build Something Amazing.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
                >
                    Your idea deserves world-class execution. We’re ready to bring it to life.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200">
                        Start Your Project
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
