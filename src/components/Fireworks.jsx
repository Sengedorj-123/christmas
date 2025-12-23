import React, { useEffect, useState } from "react";

export const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  useEffect(() => {
    const createFirework = (side) => {
      const colors = [
        '#FFD700', // Gold
        '#FF6B6B', // Red
        '#4ECDC4', // Cyan
        '#45B7D1', // Blue
        '#FFA07A', // Light Salmon
        '#98D8C8', // Mint
        '#F7DC6F', // Yellow
        '#BB8FCE', // Purple
      ];

      const color = colors[Math.floor(Math.random() * colors.length)];
      const particles = 16;
      const particleArray = [];

      // Create explosion particles
      for (let i = 0; i < particles; i++) {
        const angle = (360 / particles) * i;
        const angleRad = (angle * Math.PI) / 180;
        const distance = 60 + Math.random() * 120;
        const x = Math.cos(angleRad) * distance;
        const y = Math.sin(angleRad) * distance;
        
        particleArray.push({
          id: `${side}-${Date.now()}-${i}`,
          x,
          y,
          color,
          delay: Math.random() * 0.2,
        });
      }

      // Explosion height (random between 20% and 50% from top)
      const explodeHeight = 20 + Math.random() * 30;

      return {
        id: `${side}-${Date.now()}`,
        side,
        particles: particleArray,
        x: side === 'left' ? '15%' : '85%',
        explodeHeight: `${explodeHeight}%`,
        color,
      };
    };

    // Create initial fireworks
    const initialFireworks = [
      createFirework('left'),
      createFirework('right'),
    ];
    setFireworks(initialFireworks);

    // Create new fireworks periodically
    const interval = setInterval(() => {
      const side = Math.random() > 0.5 ? 'left' : 'right';
      const newFirework = createFirework(side);
      
      setFireworks((prev) => {
        // Keep only recent fireworks (last 6)
        const updated = [...prev, newFirework].slice(-6);
        return updated;
      });
    }, 2500 + Math.random() * 2000); // Every 2.5-4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
      {fireworks.map((firework) => (
        <React.Fragment key={firework.id}>
          {/* Shooting Rocket */}
          <div
            className="absolute"
            style={{
              left: firework.x,
              bottom: '10%',
            }}
          >
            <div
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: firework.color,
                boxShadow: `0 0 8px ${firework.color}, 0 0 15px ${firework.color}`,
                animation: `firework-shoot ${1.2}s ease-out forwards`,
                '--explode-height': firework.explodeHeight,
              }}
            />
            {/* Rocket trail */}
            <div
              className="absolute w-0.5 h-8 bg-gradient-to-t"
              style={{
                background: `linear-gradient(to top, ${firework.color}, transparent)`,
                animation: `firework-trail ${1.2}s ease-out forwards`,
                '--explode-height': firework.explodeHeight,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>

          {/* Explosion Particles */}
          <div
            className="absolute"
            style={{
              left: firework.x,
              top: firework.explodeHeight,
            }}
          >
            {firework.particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: particle.color,
                  boxShadow: `0 0 10px ${particle.color}, 0 0 20px ${particle.color}`,
                  animation: `firework-explode ${1.5 + Math.random() * 0.5}s ease-out forwards`,
                  animationDelay: `${1.2 + particle.delay}s`,
                  transformOrigin: 'center',
                  '--x': `${particle.x}px`,
                  '--y': `${particle.y}px`,
                }}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
      
      <style jsx>{`
        @keyframes firework-shoot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(-100vh + var(--explode-height) + 10%));
            opacity: 0;
          }
        }
        
        @keyframes firework-trail {
          0% {
            height: 0;
            opacity: 0.8;
          }
          100% {
            height: 100px;
            opacity: 0;
            transform: translateX(-50%) translateY(calc(-100vh + var(--explode-height) + 10% - 100px));
          }
        }
        
        @keyframes firework-explode {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--x), var(--y)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

