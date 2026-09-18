"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react";

const howItWorksSteps = [
  {
    title: "Connect",
    description:
      "Link your shopping inbox, forward receipts, or snap a photo of what’s on the rail. Almari reads order confirmations and images.",
  },
  {
    title: "Understand",
    description:
      "Each item is identified and filed — brand, colour, size, price, season — into a structured, visual catalogue you can actually browse.",
  },
  {
    title: "Optimise",
    description:
      "Get daily outfits, honest gap analysis, and a check before every purchase — all explained, all under your control.",
  },
];

function HowItworks() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [imageParallax, setImageParallax] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;
    const updateParallax = () => {
      const frame = imageFrameRef.current;
      if (!frame) return;

      const rect = frame.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const frameCenter = rect.top + rect.height / 2;
      const offset = Math.max(-34, Math.min(34, (viewportCenter - frameCenter) * 0.08));
      setImageParallax(offset);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateParallax);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative px-4 py-20 sm:p-10 lg:p-14 xl:p-20 2xl:container 2xl:mx-auto bg-black space-y-10 md:space-y-7 xl:space-y-10">
      <Image
        src="/assets/images/how-it-works-bg.webp"
        alt=""
        fill
        className="pointer-events-none z-0 object-cover"
      />
      <div className={`relative z-10 how-it-works-header-animation max-w-100 space-y-2 lg:max-w-130 lg:space-y-2.5 xl:max-w-171.5 xl:space-y-4 ${hasEntered ? "is-visible" : ""}`}>
        <p className=" font-medium text-base lg:text-lg xl:text-2xl text-brand leading-6 lg:leading-6.5 xl:leading-9">
          How Almari works
        </p>
        <h2 className="how-it-works-header-animation__heading font-poppins font-semibold text-2xl lg:text-3xl xl:text-5xl leading-8 lg:leading-10 xl:leading-15 text-background">
          {["From", "receipts", "and", "photos", "to", "a", "wardrobe", "that", "thinks."].map((word) => (
            <span key={word}>{word}</span>
          ))}
        </h2>
        <p className="text-surface text-base lg:text-lg xl:text-2xl leading-6 md:leading-5 lg:leading-6.5 xl:leading-9">
          No manual data entry. Point Almari at where your clothes already live,
          and it does the cataloguing.
        </p>
      </div>

      <div className="relative z-10 bg-[#1b1a1a] p-1 md:p-1.5 xl:p-2 space-y-1.5 xl:space-y-2">
        <div ref={imageFrameRef} className="overflow-hidden bg-foreground p-1.5 xl:p-2">
          <Image
            src="/assets/images/howItWork/works.webp"
            alt="how it works"
            width={1246}
            height={565}
            className="h-[581px] w-full scale-[1.08] object-cover object-center will-change-transform md:h-auto"
            style={{ transform: `translateY(${imageParallax}px) scale(1.08)` }}
          />
        </div>

        <div className="grid gap-1 md:gap-1.5 xl:gap-2 bg-[#1b1a1a] grid-cols-1 md:grid-cols-3 ">
          {howItWorksSteps.map((step) => (
            <article key={step.title} className="bg-foreground p-6 md:p-2.5 lg:p-4 xl:p-6 space-y-2">
              <h3 className="text-xl md:text-base lg:text-lg xl:text-2xl font-semibold text-background">
                {step.title}
              </h3>
              <p className="text-sm md:text-xs lg:text-sm xl:text-base leading-5.5 md:leading-4 lg:leading-5 xl:leading-6.5 text-surface">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItworks;
