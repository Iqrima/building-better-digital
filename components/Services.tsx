"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, PenTool } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Web Development",
        description: "High-performance web applications built with New Emerging Technologies.",
    },
    {
        icon: Cpu,
        title: "AI Integration",
        description: "Smart automation and AI features integrated directly into your business workflows.",
    },
    {
        icon: PenTool,
        title: "Product Design & Business Services",
        description: "Comprehensive business solutions including marketing, operations management, and strategic outsourcing.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-heading"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600"
                    >
                        We help you navigate the digital landscape with expert services tailored to your goals.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 20px 40px -15px rgba(37, 99, 235, 0.2)"
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors duration-300 group"
                            >
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-heading">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
