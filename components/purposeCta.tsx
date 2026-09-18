"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function PurposeCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

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
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[linear-gradient(to_bottom,#323232_0%,#252525_58%,#161616_100%)]"
    >
      <div className="2xl:mx-auto 2xl:container px-4 py-20 sm:p-10 lg:p-14 xl:p-20">
        <div className="relative isolate overflow-hidden rounded-[30px] lg:rounded-[40px] bg-brand text-center text-background py-23 lg:py-28 xl:py-36.25">
          <div className={`purpose-cta-animation mx-auto space-y-2 px-6.75 py-10 sm:max-w-150 sm:p-0 lg:max-w-200 lg:space-y-3 xl:max-w-249 xl:space-y-4 ${hasEntered ? "is-visible" : ""}`}>
            <h2 className="purpose-cta-animation__heading font-poppins text-center text-2xl font-semibold leading-8 lg:text-3xl xl:text-4xl xl:leading-12">
              {['Master', 'your', 'closet,', 'buy', 'with', 'purpose.'].map((word) => (
                <span key={word}>{word}</span>
              ))}
            </h2>

            <p className="text-base lg:text-lg xl:text-2xl leading-6 lg:leading-6.5 xl:leading-9 text-surface">
              Most apps want you in a checkout. Almari is measured by how little
              you need to buy — because the best wardrobe is usually the one
              already in your closet.
            </p>
          </div>

          <div className="absolute inset-0 -z-10 size-full">
            <Image
              src="/assets/images/purpose-cta-bg.png"
              alt="Purpose CTA Background"
              className="size-full object-center object-cover"
              fill
              quality={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurposeCta;
