"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/backend")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to fetch backend"));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Metsaspace 🚀</h1>
      <p className="text-lg text-gray-400 mb-6">{message}</p>
    </div>
  );
}
