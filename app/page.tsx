"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Optional: Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <main className="min-h-screen bg-[#f6f8fb] selection:bg-blue-200 selection:text-blue-900">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <HowWeWork />
      <Services />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
