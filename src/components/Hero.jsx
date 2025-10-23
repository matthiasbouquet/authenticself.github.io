import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="relative h-screen max-h-[820px] w-full">
        <div className="absolute inset-0" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" />
              </filter>
            </defs>

            {/* Orb 1 */}
            <motion.circle
              cx="20%"
              cy="35%"
              r="18"
              filter="url(#softBlur)"
              initial={{ opacity: 0.95 }}
              animate={{
                cy: ["35%", "30%", "35%"],
                fill: ["#c7d2fe", "#bfdbfe", "#99f6e4", "#a7f3d0", "#c7d2fe"],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orb 2 */}
            <motion.circle
              cx="70%"
              cy="55%"
              r="22"
              filter="url(#softBlur)"
              initial={{ opacity: 0.85 }}
              animate={{
                cy: ["55%", "48%", "55%"],
                fill: ["#fecdd3", "#fde68a", "#bbf7d0", "#bfdbfe", "#fecdd3"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orb 3 */}
            <motion.circle
              cx="45%"
              cy="25%"
              r="14"
              filter="url(#softBlur)"
              initial={{ opacity: 0.65 }}
              animate={{
                cy: ["25%", "22%", "25%"],
                fill: ["#ddd6fe", "#a5b4fc", "#93c5fd", "#a7f3d0", "#ddd6fe"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orb 4 */}
            <motion.circle
              cx="85%"
              cy="20%"
              r="10"
              filter="url(#softBlur)"
              initial={{ opacity: 0.4 }}
              animate={{
                cy: ["20%", "16%", "20%"],
                fill: ["#bae6fd", "#e9d5ff", "#fecaca", "#bbf7d0", "#bae6fd"],
              }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Orb 5 */}
            <motion.circle
              cx="15%"
              cy="75%"
              r="26"
              filter="url(#softBlur)"
              initial={{ opacity: 0.35 }}
              animate={{
                cy: ["75%", "68%", "75%"],
                fill: ["#fde68a", "#fca5a5", "#a5b4fc", "#99f6e4", "#fde68a"],
              }}
              transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/70" />

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Hypnotherapy for busy professionals
            </h1>
            <RotatingHeroLines />

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
              >
                Book a free 30‑minute consultation
              </a>

              <a
                href="#learn"
                className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/80 text-indigo-700 font-semibold shadow hover:bg-white transition"
              >
                Learn how it works
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-600">Matthias Bouquet, PhD — Student Trainee at the UK College of Hypnosis & Hypnotherapy.</p>
          </motion.div>

          
        </div>
      </div>
    </header>
  );
}


function RotatingHeroLines() {
  const lines = [
    "Calm your mind.",
    "Sleep deeper.",
    "Get more done.",
    "Be more assertive.",
    "Connect with others.",
    "Be more authentic.",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % lines.length), 4000);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div className="mt-4 h-[3rem] md:h-[3.5rem]">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0 }}
          className="text-2xl md:text-3xl text-gray-700"
        >
          {lines[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}


