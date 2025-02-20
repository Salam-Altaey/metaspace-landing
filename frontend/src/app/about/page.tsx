"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-60 z-[-1]" />

      {/* About Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6">
        About <span className="text-blue-400">Metsaspace</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl text-center">
        We are a team of innovators, creators, and problem solvers, dedicated to
        building futuristic solutions that make a difference.
      </motion.p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <Image
            src="/innovation.svg"
            alt="Innovation"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Innovation</h2>
          <p className="text-gray-400 mt-2">
            We constantly push boundaries to bring fresh ideas to life.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <Image
            src="/creativity.svg"
            alt="Creativity"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Creativity</h2>
          <p className="text-gray-400 mt-2">
            Designing elegant solutions with aesthetic and function.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
          <Image
            src="/technology.svg"
            alt="Technology"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold">Technology</h2>
          <p className="text-gray-400 mt-2">
            Utilizing the latest tech to build scalable and efficient solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
