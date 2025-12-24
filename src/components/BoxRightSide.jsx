import { memo } from "react";

const sizeClassesMap = {
  small: "w-[100px] h-[200px]",
  medium: "w-[140px] h-[280px] sm:w-[175px] sm:h-[350px]",
  large: "w-[200px] h-[400px] sm:w-[280px] sm:h-[560px]"
};

export const BoxRightSide = memo(({ size = "medium" }) => {
  const sizeClasses = sizeClassesMap[size] || sizeClassesMap.medium;

  return (
    <div className={`relative ${sizeClasses[size] || sizeClasses.medium}`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-amber-500/20 to-green-500/20 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] blur-2xl sm:blur-3xl transition-all duration-700 animate-pulse" />

      {/* Right Side Panel */}
      <div className="absolute inset-0 bg-gradient-to-bl from-red-700 via-red-800 to-red-900 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] shadow-2xl transform perspective-1000 -rotate-y-12">
        {/* 3D depth effect */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-white/10 rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem]" />
        <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-white/10 rounded-xl sm:rounded-[1.5rem] md:rounded-[2rem]" />
        
        {/* Vertical ribbon on right side */}
        <div className="absolute top-0 right-1/4 translate-x-1/2 w-6 sm:w-8 md:w-10 h-full">
          <div className="w-full h-full bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-[0_2px_10px_rgba(0,0,0,0.3)] sm:shadow-[0_4px_20px_rgba(0,0,0,0.3)]" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-transparent" />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-transparent rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem]" />
        <div className="absolute top-0 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white/15 rounded-full blur-2xl sm:blur-3xl" />
      </div>
    </div>
  );
});

BoxRightSide.displayName = "BoxRightSide";

