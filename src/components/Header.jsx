import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
   <header className="w-full h-16 sm:h-20  from-black/40 via-black/20 to-transparent flex items-center justify-between px-4 sm:px-6 md:px-8 backdrop-blur-md border-b border-white/10">
   <div className="flex items-center gap-2 sm:gap-3">
  
   <img src="kk.png" alt="" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2" />
   
   
   <Link href="/" className="text-white text-2xl sm:text-3xl md:text-4xl tracking-wider" style={{fontFamily: "'Great Vibes', cursive"}}>
   <h1 className="text-white text-2xl sm:text-3xl md:text-4xl tracking-wider" style={{fontFamily: "'Great Vibes', cursive"}}>Happy Christmas</h1>
   </Link>
   </div>
<div className=" mr-[100px]">
  
<Link href="/special" className="text-white text-lg sm:text-xl md:text-2xl hover:text-yellow-300 transition-colors duration-300 cursor-pointer" style={{fontFamily: "'Great Vibes', cursive"}}>
     Special Gift//
   </Link>  
   
</div>


   </header>
  );
};
