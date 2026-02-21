"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ParticleBackground() {
  const [particles, setParticles] = useState<{ 
    id: number; 
    x: number; 
    y: number; 
    size: number; 
    duration: number; 
    delay: number;
    drift: number;
  }[]>([]);

  useEffect(() => {
    let mounted = true;
    
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
      drift: Math.random() * 20 - 10,
    }));
    
    // Small timeout to prevent synchronous state update in effect
    setTimeout(() => {
      if (mounted) {
        setParticles(newParticles);
      }
    }, 0);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/5"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: ["0vh", "-100vh"],
            x: ["0vw", `${p.drift}vw`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
