"use client";

import Lenis from "lenis";
import { type ReactNode, useEffect } from "react";

function SmoothScroll({ children }: Readonly<{ children: ReactNode }>) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      anchors: { offset: -72 },
    });

    let frameId = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return children;
}

export default SmoothScroll;
