import React from "react";

export const Moon = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
      {/* Moon Glow */}
      <div className="absolute inset-0 w-[800px] h-[800px] md:w-[900px] md:h-[900px] lg:w-[950px] lg:h-[950px] xl:w-[1000px] xl:h-[1000px] bg-amber-100/10 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></div>
      
      {/* Moon */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] xl:w-[26rem] xl:h-[26rem]">
        {/* Main Moon Circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-white rounded-full shadow-2xl shadow-amber-200/50">
          {/* Moon Craters/Details */}
          <div className="absolute top-1/4 left-1/4 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-13 lg:h-13 bg-amber-200/30 rounded-full blur-sm"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-11 lg:h-11 bg-amber-200/40 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/4 left-1/3 w-9 h-9 sm:w-11 sm:h-11 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-amber-200/25 rounded-full blur-sm"></div>
          <div className="absolute bottom-1/3 right-1/3 w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-amber-200/35 rounded-full blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-amber-200/20 rounded-full blur-sm"></div>
        </div>
        
        {/* Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

