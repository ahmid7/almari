"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export type DeckMotion = "none" | "deal" | "fan" | "depth" | "lift" | "front";

const deckCards = [
  { image: "1.png", x: 33, y: 55, zIndex: 1 },
  { image: "2.png", x: 23, y: 20, zIndex: 2 },
  { image: "1.png", x: 13, y: 10, zIndex: 3 },
];

function StackedDeck({ motion = "none", isActive = true, animateOnView = false }: { motion?: DeckMotion; isActive?: boolean; animateOnView?: boolean }) {
  const deckRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(!animateOnView);

  useEffect(() => {
    if (!animateOnView) return;

    const deck = deckRef.current;
    if (!deck) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.7 },
    );

    observer.observe(deck);
    return () => observer.disconnect();
  }, [animateOnView]);

  return (
    <div ref={deckRef} className={`stacked-deck stacked-deck--${motion} ${isActive && hasEntered ? "is-active" : ""}`}>
      <div className="stacked-deck__cards">
        {deckCards.map((card, index) => (
          <div
            key={`${card.image}-${index}`}
            className="stacked-deck__card"
            style={{
              "--deck-x": `${card.x}px`,
              "--deck-y": `${card.y}px`,
              zIndex: card.zIndex,
            } as CSSProperties}
          >
            <Image src={`/assets/images/fki/${card.image}`} alt="" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackedDeck;
