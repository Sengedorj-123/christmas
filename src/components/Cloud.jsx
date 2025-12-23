import React from "react";

export const Cloud = ({ top = "20", left = "1/4", scale = 0.6 }) => {
  const scaleStyle = { transform: `scale(${scale})` };
  
  return (
    <div className="fixed z-[15] pointer-events-none" style={{ top: `${top}%`, left: `${left}%` }}>
      {/* Main Cloud Group */}
      <div className="relative w-[400px] h-[200px] sm:w-[500px] sm:h-[250px] md:w-[600px] md:h-[300px]" style={scaleStyle}>
        {/* Cloud Base - Large bottom circle */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[120px] sm:w-[380px] sm:h-[150px] md:w-[450px] md:h-[180px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[110px] sm:w-[360px] sm:h-[140px] md:w-[430px] md:h-[170px] bg-white/25 rounded-full blur-lg"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[260px] h-[100px] sm:w-[340px] sm:h-[130px] md:w-[410px] md:h-[160px] bg-white/30 rounded-full blur-md"></div>
        
        {/* Left puff */}
        <div className="absolute bottom-8 left-0 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-8 left-0 w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px] bg-white/25 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 left-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] bg-white/30 rounded-full blur-md"></div>
        
        {/* Center-left puff */}
        <div className="absolute bottom-12 left-1/4 -translate-x-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-12 left-1/4 -translate-x-1/2 w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] md:w-[230px] md:h-[230px] bg-white/25 rounded-full blur-lg"></div>
        <div className="absolute bottom-12 left-1/4 -translate-x-1/2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] bg-white/30 rounded-full blur-md"></div>
        
        {/* Center puff */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] bg-white/25 rounded-full blur-lg"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] bg-white/30 rounded-full blur-md"></div>
        
        {/* Center-right puff */}
        <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] md:w-[230px] md:h-[230px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] bg-white/25 rounded-full blur-lg"></div>
        <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px] bg-white/30 rounded-full blur-md"></div>
        
        {/* Right puff */}
        <div className="absolute bottom-6 right-0 w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[210px] md:h-[210px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-6 right-0 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] bg-white/25 rounded-full blur-lg"></div>
        <div className="absolute bottom-6 right-0 w-[110px] h-[110px] sm:w-[150px] sm:h-[150px] md:w-[190px] md:h-[190px] bg-white/30 rounded-full blur-md"></div>
        
        {/* Top accent puff */}
        <div className="absolute top-4 left-1/3 -translate-x-1/2 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[160px] md:h-[160px] bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute top-4 left-1/3 -translate-x-1/2 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] bg-white/25 rounded-full blur-lg"></div>
        
        {/* Subtle shadow underneath */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[350px] h-[40px] sm:w-[450px] sm:h-[50px] md:w-[550px] md:h-[60px] bg-black/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

