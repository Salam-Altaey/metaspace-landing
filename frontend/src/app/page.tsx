"use client";

import React from "react";
import AuroraBackground from "../components/AuroraBackground";
import FlipWords from "../components/FlipWords";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Background */}
      <AuroraBackground />

      {/* Page Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to Metsaspace 🚀
        </h1>

        {/* FlipWords Below the Title */}
        <div className="mt-4 text-2xl md:text-4xl font-semibold">
          <FlipWords />
        </div>
      </div>
    </div>
  );
};

export default Home;
