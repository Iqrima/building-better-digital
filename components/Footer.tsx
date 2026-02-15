"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-2xl font-bold text-white font-heading tracking-tight mb-6 block">
                        BUILDING BETTER.
                    </span>
                    <p className="text-slate-400 max-w-sm mb-8">
                        We build premium digital products for ambitious brands.
                        Strategy, design, and development for the modern web.
                    </p>
                    <div className="flex gap-4">
                        {/* Social icons removed */}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Company</h4>
                    <ul className="space-y-4 text-sm">
                        <li><a href="/#services" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="/#work" className="hover:text-white transition-colors">Work</a></li>
                        <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex justify-between items-center text-xs text-slate-600">
                <p>© {new Date().getFullYear()} Building Better. All rights reserved.</p>
                <p>Designed in India.</p>
            </div>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/917058041019?text=Hi%2C%20I%27m%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-white text-slate-900 px-5 py-3 rounded-full font-bold shadow-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-3 border border-slate-100 group"
            >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                    <MessageCircle size={18} fill="currentColor" strokeWidth={2.5} />
                </div>
                Message us
            </a>
        </footer>
    );
}
