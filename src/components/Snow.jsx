import React, { useMemo, useState, useEffect } from "react";

const MIN_DURATION = 5;
const MAX_DURATION = 15;
const MIN_SIZE = 2;
const MAX_SIZE = 5;

export const Snowfall = () => {
  const [snowflakeCount, setSnowflakeCount] = useState(50);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setSnowflakeCount(30);
      } else if (window.innerWidth < 1024) {
        setSnowflakeCount(40);
      } else {
        setSnowflakeCount(50);
      }
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const snowflakes = useMemo(
    () =>
      Array.from({ length: snowflakeCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        animationDuration: MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION),
        animationDelay: Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.7,
        size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
        drift: (Math.random() - 0.5) * 50,
      })),
    [snowflakeCount]
  );

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-fall"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            opacity: flake.opacity,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            transform: `translateX(${flake.drift}px)`,
          }}
          aria-hidden="true"
        >
          <div className="w-full h-full bg-white rounded-full shadow-lg blur-[0.5px]" />
        </div>
      ))}
    </div>
  );
};

