"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Building Better Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                    <span className="text-xl font-bold tracking-tight text-slate-900 font-heading">
                        BUILDING BETTER
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: "HOW WE WORK", href: "/#work" },
                        { name: "SERVICES", href: "/#services" },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative group text-sm font-bold text-slate-600 transition-colors hover:text-slate-900 py-1 tracking-wide"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-slate-900 shadow-[0_0_12px_rgba(15,23,42,0.8)] transition-all duration-300 ease-out group-hover:w-full" />
                        </Link>
                    ))}

                    <Link
                        href="/#contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all hover:scale-[1.02] tracking-wide"
                    >
                        CONTACT
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {[
                                { name: "HOW WE WORK", href: "/#work" },
                                { name: "SERVICES", href: "/#services" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-bold text-slate-600 hover:text-blue-600 py-2 tracking-wide block border-b border-slate-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-bold text-sm shadow-lg shadow-blue-600/20 active:scale-95 transition-transform tracking-wide block"
                            >
                                CONTACT
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    );
}
