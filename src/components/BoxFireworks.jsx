import React, { useEffect, useState } from "react";
import styles from "./BoxFireworks.module.css";

export const BoxFireworks = ({ trigger }) => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    if (trigger === 0) return;

    const createFirework = (x, y) => {
      const colors = [
        '#FFD700', // Gold
        '#FF6B6B', // Red
        '#4ECDC4', // Cyan
        '#45B7D1', // Blue
        '#FFA07A', // Light Salmon
        '#98D8C8', // Mint
        '#F7DC6F', // Yellow
        '#BB8FCE', // Purple
        '#FF1493', // Deep Pink
        '#00FF00', // Green
      ];

      const color = colors[Math.floor(Math.random() * colors.length)];
      const particles = 20;
      const particleArray = [];

      // Create explosion particles
      for (let i = 0; i < particles; i++) {
        const angle = (360 / particles) * i;
        const angleRad = (angle * Math.PI) / 180;
        const distance = 80 + Math.random() * 150;
        const xOffset = Math.cos(angleRad) * distance;
        const yOffset = Math.sin(angleRad) * distance;
        
        particleArray.push({
          id: `${Date.now()}-${i}-${Math.random()}`,
          x: xOffset,
          y: yOffset,
          color,
          delay: Math.random() * 0.3,
        });
      }

      return {
        id: `firework-${Date.now()}-${Math.random()}`,
        x: `${x}%`,
        y: `${y}%`,
        particles: particleArray,
        color,
      };
    };

    // Create multiple fireworks at different positions
    const positions = [
      { x: 20, y: 30 },
      { x: 50, y: 25 },
      { x: 80, y: 30 },
      { x: 30, y: 50 },
      { x: 70, y: 50 },
      { x: 50, y: 40 },
    ];

    const newFireworks = positions.map(pos => createFirework(pos.x, pos.y));
    setFireworks(newFireworks);

    // Clear fireworks after animation
    const timeout = setTimeout(() => {
      setFireworks([]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [trigger]);

  if (fireworks.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30" aria-hidden="true">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute"
          style={{
            left: firework.x,
            top: firework.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Center burst */}
          <div
            className={`absolute w-4 h-4 rounded-full ${styles.centerBurst}`}
            style={{
              backgroundColor: firework.color,
              boxShadow: `0 0 20px ${firework.color}, 0 0 40px ${firework.color}`,
            }}
          />
          
          {/* Explosion Particles */}
          {firework.particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute w-3 h-3 rounded-full ${styles.particle}`}
              style={{
                backgroundColor: particle.color,
                boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
                animationDelay: `${particle.delay}s`,
                left: '50%',
                top: '50%',
                '--x': `${particle.x}px`,
                '--y': `${particle.y}px`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

