"use client";

import { useEffect, useRef, useState } from "react";

const previews = [
  { id: "stagger", label: "01 · Staggered reveal", description: "Eyebrow, headline and paragraph enter in a calm sequence." },
  { id: "mask", label: "02 · Mask reveal", description: "The headline rises out of a clipped editorial mask." },
  { id: "sweep", label: "03 · Orange accent sweep", description: "A brand line leads a restrained text reveal." },
  { id: "drift", label: "04 · Split-word drift", description: "Words meet in the centre before the supporting copy arrives." },
] as const;

type PreviewId = (typeof previews)[number]["id"];

function PricingMotionPreview() {
  const [active, setActive] = useState<Record<PreviewId, boolean>>({
    stagger: false,
    mask: false,
    sweep: false,
    drift: false,
  });
  const cards = useRef<Record<PreviewId, HTMLElement | null>>({ stagger: null, mask: null, sweep: null, drift: null });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-preview") as PreviewId;
          setActive((current) => ({ ...current, [id]: true }));
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.35 },
    );

    Object.values(cards.current).forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const replay = (id: PreviewId) => {
    setActive((current) => ({ ...current, [id]: false }));
    window.setTimeout(() => setActive((current) => ({ ...current, [id]: true })), 40);
  };

  return (
    <main className="min-h-screen bg-[#222121] px-5 py-16 text-[#fef7ff] sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-sm font-medium text-brand">Pricing motion studies</p>
        <h1 className="mt-3 font-poppins text-3xl font-semibold sm:text-5xl">Choose the feeling before we commit.</h1>
        <p className="mt-4 max-w-2xl text-surface">Each preview triggers when it enters your viewport. Use Replay to compare the timing and movement.</p>

        <div className="mt-12 space-y-8">
          {previews.map((preview) => {
            const isActive = active[preview.id];
            return (
              <section
                key={preview.id}
                ref={(element) => { cards.current[preview.id] = element; }}
                data-preview={preview.id}
                className="overflow-hidden rounded-3xl border border-[#4a4a4a] bg-[#323232] p-6 sm:p-10"
              >
                <div className="mb-12 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-poppins text-lg font-semibold">{preview.label}</p>
                    <p className="mt-1 max-w-lg text-sm text-surface">{preview.description}</p>
                  </div>
                  <button type="button" onClick={() => replay(preview.id)} className="rounded-full border border-[#e6e5e6]/30 px-4 py-2 text-xs font-medium hover:border-brand hover:text-brand">Replay</button>
                </div>

                <div className={`pricing-motion pricing-motion--${preview.id} ${isActive ? "is-active" : ""}`}>
                  <p className="pricing-motion__eyebrow">Pricing</p>
                  {preview.id === "drift" ? (
                    <h2 className="pricing-motion__heading pricing-motion__heading--words">
                      {['Simple', 'Pricing,', 'No', 'Surprises.'].map((word) => <span key={word}>{word}</span>)}
                    </h2>
                  ) : (
                    <h2 className="pricing-motion__heading">Simple Pricing, No Surprises.</h2>
                  )}
                  {preview.id === "sweep" && <span className="pricing-motion__line" />}
                  <p className="pricing-motion__copy">Every plan pays for itself the first time it talks you out of a purchase you&apos;d regret.</p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default PricingMotionPreview;
