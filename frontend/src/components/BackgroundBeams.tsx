"use client";

import React, { useEffect, useRef } from "react";

const BackgroundBeams: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Create falling beams
    const beams = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * -1, // Start above screen
      speed: Math.random() * 5 + 2, // Random speed
      length: Math.random() * 50 + 50, // Random length
      color: `hsla(${Math.random() * 360}, 100%, 75%, 0.8)`,
      exploded: false,
      explosionParticles: [] as {
        x: number;
        y: number;
        vx: number;
        vy: number;
        alpha: number;
      }[], // Explosion particles
    }));

    const drawBeams = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      beams.forEach((beam, index) => {
        if (!beam.exploded) {
          // Draw falling beam
          ctx.beginPath();
          ctx.moveTo(beam.x, beam.y);
          ctx.lineTo(beam.x, beam.y + beam.length);
          ctx.strokeStyle = beam.color;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Move beam down
          beam.y += beam.speed;

          // Check for explosion at bottom
          if (beam.y + beam.length >= canvas.height) {
            beam.exploded = true;
            beam.explosionParticles = createExplosion(
              beam.x,
              canvas.height - 5
            );

            setTimeout(() => {
              // Reset beam after explosion
              beams[index] = {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height * -1,
                speed: Math.random() * 5 + 2,
                length: Math.random() * 50 + 50,
                color: `hsla(${Math.random() * 360}, 100%, 75%, 0.8)`,
                exploded: false,
                explosionParticles: [],
              };
            }, 500);
          }
        }
      });

      // Draw explosion particles
      beams.forEach((beam) => {
        if (beam.exploded) {
          beam.explosionParticles.forEach((particle) => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${Math.random() * 360}, 100%, 70%, ${
              particle.alpha
            })`;
            ctx.fill();

            // Update explosion particle movement
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.alpha -= 0.02;
          });

          // Remove faded particles
          beam.explosionParticles = beam.explosionParticles.filter(
            (p) => p.alpha > 0
          );
        }
      });
    };

    // Explosion effect function
    const createExplosion = (x: number, y: number) => {
      let particles = [];
      for (let i = 0; i < 12; i++) {
        particles.push({
          x,
          y,
          vx: Math.random() * 6 - 3, // Random velocity X
          vy: Math.random() * -6 - 1, // Random velocity Y (upwards)
          alpha: 1, // Initial opacity
        });
      }
      return particles;
    };

    // Animation loop
    const animate = () => {
      drawBeams();
      requestAnimationFrame(animate);
    };

    animate();

    // Handle screen resizing
    window.addEventListener("resize", setCanvasSize);
    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-5] pointer-events-none"
    />
  );
};

export default BackgroundBeams;
