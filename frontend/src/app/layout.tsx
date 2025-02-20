import React from "react";
import AuroraBackground from "../components/AuroraBackground";

import BackgroundBeams from "../components/BackgroundBeams";
import "../styles/globals.css"; // Ensure Tailwind is applied

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Metsaspace",
  description: "Welcome to Metsaspace, where innovation meets creativity.",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="relative bg-black text-white">
        {/* Background Effects */}
        <Navbar />
        <AuroraBackground />
        <BackgroundBeams />

        {/* Page Content */}
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
