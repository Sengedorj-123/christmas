"use client";
import Head from "next/head";
 import { Header } from "@/components/Header";
import { Snowfall } from "@/components/Snow";
import { ChristmasBox } from "@/components/Box";
import { Music } from "@/components/Music";
export default function page() {
  return (
    <> 
    <Head>
        <title>Special Gift</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Discover our special gift collection, crafted with unparalleled attention to detail and timeless sophistication." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-b from-[#050a15] via-[#0a0e1a] to-[#0f1419] pointer-events-none"></div>
        <Snowfall />
        <Header />
        <ChristmasBox />
        <Music />
      </div>
    </>
  );
}
