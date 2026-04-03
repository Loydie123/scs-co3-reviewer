"use client";

import { useEffect, useState } from "react";

interface ConfettiProps {
  show: boolean;
}

export function Confetti({ show }: ConfettiProps) {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; duration: number; color: string }>>([]);

  useEffect(() => {
    if (show) {
      const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
      
      Promise.resolve().then(() => {
        setParticles(newParticles);
      });

      const timer = setTimeout(() => {
        setParticles([]);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-0 w-2 h-2 rounded-full animate-confetti"
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
