"use client";
import Head from "next/head";
import Link from "next/link";
import { MinimalistTree } from "@/components/MinimalistTree";
import { GiftQuestion } from "@/components/GiftQuestion";
import styles from "./index.module.css";
import { Next } from "@/components/Next";

export default function page() {
  return (
    <> 
    <Head>
        <title>KK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="KK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="relative min-h-screen bg-[#0a0e1a] overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-b from-[#050a15] via-[#0a0e1a] to-[#0f1419] pointer-events-none"></div>
        <Link href="/special" className={styles.backButton}>
          ← Back
        </Link>
        <GiftQuestion />
     
      </div>
    </>
  );
}