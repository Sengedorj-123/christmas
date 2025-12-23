import React from "react";

export const Mountains = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 pointer-events-none">
      {/* Mountain Range - Back Layer */}
      <svg
        className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back Mountains */}
        <path
          d="M0,400 L0,250 L200,180 L400,200 L600,150 L800,170 L1000,140 L1200,160 L1440,120 L1440,400 Z"
          fill="url(#mountainGradient1)"
          opacity="0.4"
        />
        
        {/* Middle Mountains */}
        <path
          d="M0,400 L0,280 L150,220 L350,240 L550,190 L750,210 L950,180 L1150,200 L1440,150 L1440,400 Z"
          fill="url(#mountainGradient2)"
          opacity="0.6"
        />
        
        {/* Front Mountains */}
        <path
          d="M0,400 L0,320 L100,280 L300,300 L500,260 L700,290 L900,270 L1100,310 L1300,280 L1440,300 L1440,400 Z"
          fill="url(#mountainGradient3)"
          opacity="0.8"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="mountainGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1f2e" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a0e1a" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="mountainGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#252a3a" stopOpacity="1" />
            <stop offset="100%" stopColor="#0f1419" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="mountainGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2d3344" stopOpacity="1" />
            <stop offset="100%" stopColor="#151a25" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Mountain Silhouette Details - Snow Caps */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-auto"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Snow on peaks */}
        <path
          d="M200,180 L220,190 L240,180 L260,185 L280,180 L200,180 Z"
          fill="rgba(255,255,255,0.1)"
        />
        <path
          d="M600,150 L620,160 L640,150 L660,155 L680,150 L600,150 Z"
          fill="rgba(255,255,255,0.1)"
        />
        <path
          d="M1000,140 L1020,150 L1040,140 L1060,145 L1080,140 L1000,140 Z"
          fill="rgba(255,255,255,0.1)"
        />
        <path
          d="M350,240 L370,250 L390,240 L410,245 L430,240 L350,240 Z"
          fill="rgba(255,255,255,0.08)"
        />
        <path
          d="M750,210 L770,220 L790,210 L810,215 L830,210 L750,210 Z"
          fill="rgba(255,255,255,0.08)"
        />
      </svg>
    </div>
  );
};

