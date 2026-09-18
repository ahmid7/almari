"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import NavBar from "@/components/navbar";

export default function HeroMotionPreview() {
  const [run, setRun] = useState(0);

  return (
    <main>
      <NavBar />
      <div className="fixed right-4 top-20 z-[60] sm:right-8">
        <button
          type="button"
          onClick={() => setRun((current) => current + 1)}
          className="rounded-full border border-white/40 bg-[#323232] px-4 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:border-brand hover:text-brand"
        >
          Replay hero motion
        </button>
      </div>
      <Hero key={run} animated />
    </main>
  );
}
