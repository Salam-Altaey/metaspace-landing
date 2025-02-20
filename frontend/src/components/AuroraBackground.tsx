"use client";

import { motion } from "framer-motion";
import React from "react";

const AuroraBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden bg-[#0d1b2a]">
      {/* Subtle Base Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b263b] via-[#0d1b2a] to-black opacity-70" />

      {/* Aurora Light Beams */}
      <motion.div
        className="absolute w-[80vw] h-[70vh] rounded-full bg-blue-400/20 blur-[120px]"
        initial={{ x: "-50%", y: "-50%", opacity: 0.4 }}
        animate={{
          x: ["-40%", "40%", "-40%"],
          y: ["-20%", "20%", "-20%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[70vw] h-[65vh] rounded-full bg-purple-500/30 blur-[150px]"
        initial={{ x: "50%", y: "50%", opacity: 0.3 }}
        animate={{
          x: ["40%", "-40%", "40%"],
          y: ["30%", "-30%", "30%"],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute w-[60vw] h-[60vh] rounded-full bg-pink-400/25 blur-[160px]"
        initial={{ x: "0%", y: "50%", opacity: 0.2 }}
        animate={{
          x: ["10%", "-10%", "10%"],
          y: ["-10%", "10%", "-10%"],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Subtle Streaks for Extra Detail */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay opacity-15"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
