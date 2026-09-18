"use client";

import { useEffect, useRef, useState } from "react";
import StackedDeck, { type DeckMotion } from "@/components/stackedDeck";

const studies: { id: Exclude<DeckMotion, "none">; title: string; description: string }[] = [
  { id: "deal", title: "01 · Deck deal-in", description: "Cards rise in from below, back to front." },
  { id: "fan", title: "02 · Fan-to-stack", description: "Cards begin slightly spread, then settle into the final deck." },
  { id: "depth", title: "03 · Depth fade", description: "Layers appear through soft depth and opacity." },
  { id: "lift", title: "04 · Lift and settle", description: "The full stack makes one tactile rise into position." },
  { id: "front", title: "05 · Front-card reveal", description: "The front card arrives last over the visible deck layers." },
];

function DeckMotionPreview() {
  const [active, setActive] = useState<Record<Exclude<DeckMotion, "none">, boolean>>({ deal: false, fan: false, depth: false, lift: false, front: false });
  const cards = useRef<Record<Exclude<DeckMotion, "none">, HTMLElement | null>>({ deal: null, fan: null, depth: null, lift: null, front: null });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("data-deck-study") as Exclude<DeckMotion, "none">;
        setActive((current) => ({ ...current, [id]: true }));
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.35 });

    Object.values(cards.current).forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const replay = (id: Exclude<DeckMotion, "none">) => {
    setActive((current) => ({ ...current, [id]: false }));
    window.setTimeout(() => setActive((current) => ({ ...current, [id]: true })), 40);
  };

  return (
    <main className="min-h-screen bg-[#222121] px-5 py-16 text-background sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-sm font-medium text-brand">Five kinds of intelligence</p>
        <h1 className="mt-3 font-poppins text-3xl font-semibold sm:text-5xl">Stacked deck motion studies</h1>
        <p className="mt-4 max-w-2xl text-surface">All five options use the exact deck component from your live section.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {studies.map((study) => (
            <section key={study.id} ref={(element) => { cards.current[study.id] = element; }} data-deck-study={study.id} className="rounded-3xl border border-[#4a4a4a] bg-[#323232] p-6">
              <div className="flex items-start justify-between gap-4"><div><h2 className="font-poppins font-semibold">{study.title}</h2><p className="mt-1 text-sm text-surface">{study.description}</p></div><button type="button" onClick={() => replay(study.id)} className="rounded-full border border-white/30 px-3 py-2 text-xs hover:border-brand hover:text-brand">Replay</button></div>
              <div className="mt-6 overflow-hidden rounded-2xl bg-[url('/assets/images/orange-bg.png')] bg-cover"><StackedDeck motion={study.id} isActive={active[study.id]} /></div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default DeckMotionPreview;
