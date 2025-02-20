"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-[1200px] z-50 transition-all duration-500">
      <div
        className={`flex items-center justify-between px-6 py-4 rounded-xl border border-white/10 shadow-lg backdrop-blur-lg transition-all duration-500 ${
          scrolling ? "bg-black/60" : "bg-white/10"
        }`}>
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold text-white tracking-wide">
          Metsaspace 🚀
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="relative text-white/80 hover:text-white transition-all duration-300">
              {item}
              <motion.div
                className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-1/2 transform -translate-x-1/2 w-[92%] max-w-[1200px] bg-black/80 backdrop-blur-lg py-6 flex flex-col items-center space-y-6 rounded-xl border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}>
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-white/80 hover:text-white text-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
