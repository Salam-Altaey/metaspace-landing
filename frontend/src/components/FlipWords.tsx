"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Innovate", "Create", "Inspire", "Transform", "Elevate"];

const FlipWords: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block ml-4 align-middle">
      <AnimatePresence mode="wait">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default FlipWords;
