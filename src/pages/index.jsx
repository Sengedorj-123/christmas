import Head from "next/head";
import { Header } from "@/components/Header";
import { Snowfall } from "@/components/Snow";
import { Moon } from "@/components/Moon";
import { SpecialGift } from "@/components/SpecialGift";
import { Mountains } from "@/components/Mountains";
import { Santa } from "@/components/Santa";
import { BackgroundMusic } from "@/components/BackgroundMusic";
import { Fireworks } from "@/components/Fireworks";
import { Cloud } from "@/components/Cloud";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Gift</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover our exquisite collection of premium gifts, crafted with unparalleled attention to detail and timeless sophistication." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
        {/* Background Gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-[#050a15] via-[#0a0e1a] to-[#0f1419] pointer-events-none"></div>
        
        {/* Snowfall Animation */}
        <Snowfall />
        
       
        
        
        {/* Special Gift Text */}
        <SpecialGift />
        
        {/* Moon */}
        <Moon />
        
        {/* Santa with Reindeer Animation */}
        <Santa />
        
        {/* Mountains */}
        <Mountains />
        
        {/* Fireworks */}
        <Fireworks />
        
        {/* Header */}
        <Header />
        
        {/* Background Music Controls */}
        <BackgroundMusic />
        

      </div>
    </>
  );
}
