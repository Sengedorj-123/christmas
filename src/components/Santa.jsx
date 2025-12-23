import React from "react";

export const Santa = () => {
  return (
    <div className="fixed top-1/3 left-0 z-30 pointer-events-none">
      <div className="relative animate-santa-fly">
        <img 
          src="/santa.png" 
          alt="Santa with Reindeer" 
          className="w-48 h-auto md:w-64 lg:w-80 xl:w-96"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
          }}
        />
      </div>
    </div>
  );
};

