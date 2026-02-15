"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
    const codeSnippet = `// contact.ts

const project = {
  status: "Ready to launch",
  partner: "Building Better",
  result: "Market Leader",
};

await partner.build(project);
// Let’s make it happen.`;

    return (
        <section id="contact" className="py-24 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Contact Info */}
                <div className="max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 font-heading">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                            Have a project in mind? We’d love to hear from you. Let’s discuss how we can help your business grow.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=buildingbetterwork@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group p-4 border rounded-xl hover:border-blue-200 hover:bg-blue-50/50">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="font-semibold text-lg break-all">buildingbetterwork@gmail.com</span>
                            </a>

                            <div className="flex items-center gap-4 text-slate-400 group p-4 border rounded-xl bg-gray-50/50 cursor-not-allowed">
                                <div className="bg-gray-100 p-3 rounded-lg text-gray-400">
                                    <Linkedin size={24} />
                                </div>
                                <span className="font-semibold text-lg">LinkedIn</span>
                                <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Coming Soon</span>
                            </div>

                            <a href="https://wa.me/917058041019?text=Hi%2C%20I%27m%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group p-4 border rounded-xl hover:border-blue-200 hover:bg-blue-50/50">
                                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <MessageCircle size={24} />
                                </div>
                                <span className="font-semibold text-lg">WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Code Card */}
                <div className="hidden lg:block perspective-1000">
                    <TypingCodeBlock />
                </div>
            </div>
        </section>
    );
}

function TypingCodeBlock() {
    const [activeLineIndex, setActiveLineIndex] = React.useState(0);
    const [activeCharIndex, setActiveCharIndex] = React.useState(0);
    const [phase, setPhase] = React.useState<'typing' | 'pausing' | 'deleting'>('typing');

    // Code structure with syntax highlighting tokens
    const lines = React.useMemo(() => [
        [
            { text: "const", color: "text-purple-400" },
            { text: " project", color: "text-blue-400" },
            { text: " = ", color: "text-slate-400" },
            { text: "{", color: "text-slate-400" },
        ],
        [
            { text: "  status", color: "text-sky-300" },
            { text: ": ", color: "text-slate-400" },
            { text: '"Ready to launch"', color: "text-emerald-400" },
            { text: ",", color: "text-slate-600" },
        ],
        [
            { text: "  partner", color: "text-sky-300" },
            { text: ": ", color: "text-slate-400" },
            { text: '"Building Better"', color: "text-emerald-400" },
            { text: ",", color: "text-slate-600" },
        ],
        [
            { text: "  result", color: "text-sky-300" },
            { text: ": ", color: "text-slate-400" },
            { text: '"Market Leader"', color: "text-emerald-400" },
            { text: ",", color: "text-slate-600" },
        ],
        [
            { text: "};", color: "text-slate-400" },
        ],
        [], // Empty line
        [
            { text: "await", color: "text-purple-400" },
            { text: " partner", color: "text-blue-400" },
            { text: ".", color: "text-slate-400" },
            { text: "build", color: "text-yellow-200" },
            { text: "(", color: "text-slate-400" },
            { text: "project", color: "text-blue-400" },
            { text: ");", color: "text-slate-400" },
        ],
        [
            { text: "// Let’s make it happen.", color: "text-slate-500 italic" },
        ]
    ], []);

    React.useEffect(() => {
        let timeout: NodeJS.Timeout;

        // 1. Handle Pause Phase
        if (phase === 'pausing') {
            timeout = setTimeout(() => {
                setPhase('deleting');
            }, 2700); // 2.7s pause before deleting
            return () => clearTimeout(timeout);
        }

        const currentLineTokens = lines[activeLineIndex];
        const currentLineText = currentLineTokens.map(t => t.text).join("");

        // 2. Handle Typing Phase
        if (phase === 'typing') {
            // Check if end of current line
            if (activeCharIndex >= currentLineText.length) {
                // Check if last line
                if (activeLineIndex >= lines.length - 1) {
                    setPhase('pausing');
                    return;
                }

                // Move to next line (Delay based on context)
                timeout = setTimeout(() => {
                    setActiveLineIndex(prev => prev + 1);
                    setActiveCharIndex(0);
                }, 150);
            } else {
                // Type next char
                const speed = Math.random() * 15 + 35; // 35-50ms
                timeout = setTimeout(() => {
                    setActiveCharIndex(prev => prev + 1);
                }, speed);
            }
        }
        // 3. Handle Deleting Phase
        else if (phase === 'deleting') {
            // Check if start of current line
            if (activeCharIndex <= 0) {
                // Check if first line
                if (activeLineIndex <= 0) {
                    // Fully deleted, restart loop
                    setPhase('typing');
                    // Small pause before typing starts again?
                    return;
                }

                // Move to prev line (start deleting from end of it)
                const prevLineIndex = activeLineIndex - 1;
                const prevLine = lines[prevLineIndex];
                const prevLen = prevLine.map(t => t.text).join("").length;

                setActiveLineIndex(prevLineIndex);
                setActiveCharIndex(prevLen);
            } else {
                // Delete char
                timeout = setTimeout(() => {
                    setActiveCharIndex(prev => prev - 1);
                }, 20); // Fast delete
            }
        }

        return () => clearTimeout(timeout);
    }, [activeLineIndex, activeCharIndex, phase, lines]);

    // Helper to render visible tokens for a line
    const renderLine = (lineIndex: number, tokens: { text: string, color: string }[]) => {
        // If line is in future (during typing phase) or deleted (during delete phase)
        // logic: if lineIndex > activeLineIndex, it's not visible.
        if (lineIndex > activeLineIndex) return <span key={lineIndex} className="inline-block h-6">&nbsp;</span>;

        // If line is fully past (lineIndex < activeLineIndex), it is fully visible.
        if (lineIndex < activeLineIndex) {
            return (
                <div key={lineIndex} className="whitespace-pre">
                    {tokens.length === 0 ? <span className="inline-block h-6">&nbsp;</span> :
                        tokens.map((token, i) => (
                            <span key={i} className={token.color}>{token.text}</span>
                        ))
                    }
                </div>
            );
        }

        // Current active line: calculate split
        let charCount = 0;
        return (
            <div key={lineIndex} className="whitespace-pre flex">
                {tokens.map((token, i) => {
                    if (charCount >= activeCharIndex) return null; // Token completely future

                    const remainingNeeded = activeCharIndex - charCount;
                    const tokenText = token.text;

                    if (remainingNeeded >= tokenText.length) {
                        // Full token visible
                        charCount += tokenText.length;
                        return <span key={i} className={token.color}>{tokenText}</span>;
                    } else {
                        // Partial token visible
                        const slice = tokenText.slice(0, remainingNeeded);
                        charCount += tokenText.length;
                        return <span key={i} className={token.color}>{slice}</span>;
                    }
                })}
                {/* Block Cursor at end of active typing line */}
                <motion.span
                    animate={{ opacity: phase === 'pausing' ? [1, 0] : 1 }}
                    transition={phase === 'pausing' ? { duration: 0.8, repeat: Infinity } : { duration: 0 }}
                    className="inline-block w-2.5 h-5 bg-blue-500 ml-1 align-middle rounded-[1px]"
                />
            </div>
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={{
                y: [0, -4, 0],
                boxShadow: phase === 'typing'
                    ? [
                        "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
                        "0 25px 50px -12px rgba(37, 99, 235, 0.2)",
                        "0 20px 40px -10px rgba(0, 0, 0, 0.5)"
                    ]
                    : "0 20px 40px -10px rgba(0, 0, 0, 0.5)"
            }}
            transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{
                scale: 1.01,
                rotateX: 1,
                rotateY: -1,
                boxShadow: "0 30px 60px -12px rgba(37, 99, 235, 0.3)",
            }}
            className="relative bg-[#0f172a] rounded-2xl p-8 shadow-2xl border border-slate-800/50 transform-gpu overflow-hidden min-h-[360px]"
        >
            {/* Header Dots */}
            <div className="flex gap-2 mb-6">
                <motion.div whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(239, 68, 68, 0.6)" }} className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" />
                <motion.div whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(234, 179, 8, 0.6)" }} className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer" />
                <motion.div whileHover={{ scale: 1.2, boxShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }} className="w-3 h-3 rounded-full bg-green-500 cursor-pointer" />
            </div>

            {/* Code Content */}
            <div className="font-mono text-sm md:text-base leading-relaxed tracking-tight min-h-[220px]">
                <div className="text-slate-500 mb-4 font-medium italic">// contact.ts</div>

                <div className="flex flex-col gap-1">
                    {lines.map((tokens, idx) => renderLine(idx, tokens))}
                </div>
            </div>

            {/* Lighting/Glow Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent transition-opacity duration-1000 ${phase === 'typing' ? "opacity-100" : "opacity-30"}`} />

            {/* Blurred Glow Behind */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600 blur-[100px] opacity-20 rounded-full pointer-events-none" />
        </motion.div>
    );
}
