import React from "react";
import Link from "next/link";

export const SpecialGift = () => {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-30 pointer-events-none bottom-[calc(50%+12rem)] sm:bottom-[calc(50%+14rem)] md:bottom-[calc(50%+13rem)] lg:bottom-[calc(50%+14rem)] xl:bottom-[calc(50%+15rem)]">
      <div className="relative flex flex-col items-center">
        {/* Arrow pointing down to the text */}
        <div className="mb-2 animate-bounce">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-amber-300 drop-shadow-lg"
          >
            <path 
              d="M12 4L12 20M12 20L6 14M12 20L18 14" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        <Link href="/special" className="pointer-events-auto cursor-pointer">
          <div className="text-center ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text animate-fadeIn hover:opacity-80 transition-opacity" style={{fontFamily: "'Great Vibes', cursive"}}>
             -Special Gift-
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

