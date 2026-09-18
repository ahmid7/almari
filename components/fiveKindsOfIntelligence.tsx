"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import StackedDeck from "@/components/stackedDeck";

const plannerOutfitImages = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
];


const intelligenceCards = [
  {
    eyebrow: "Your digital wardrobe",
    title: "A catalogue, not a camera roll.",
    description:
      "Every garment becomes a record — with the data that tells you whether it was worth it.",
    points: [
      "Brand, colour, size, price and season, filled in automatically",
      "Wear count and cost-per-wear on every item",
      "Search and filter the way you actually think — “navy”, “winter”, “unworn”",
    ],
    visual: "wardrobe",
  },
  {
    eyebrow: "AI outfit planning",
    title: "An outfit ready before you open your eyes.",
    description:
      "Almari reads tomorrow’s calendar and weather, then styles a look from what’s already yours — and tells you why.",
    points: [
      "Built from your calendar, the forecast, occasion and personal style",
      "Accept, tweak a piece, or regenerate the whole look",
      "Quietly rotates in pieces you’ve been neglecting",
    ],
    visual: "planner",
  },
  {
    eyebrow: "Wardrobe gap intelligence",
    title: "The one thing missing — not ten things to buy.",
    description:
      "Almari finds the piece that would unlock the most outfits you already almost have. Genuine gaps only.",
    points: [
      "Ranked by how many existing outfits each gap completes",
      "Framed as a need, never a nudge to spend",
      "Filters out anything you already own or something close to",
    ],
    visual: "jacket",
  },
];

function ProductVisual({ type }: { type: string }) {
  if (type === "planner") {
    return (
      <div className="px-3 xl:px-4.75 flex items-center  h-full min-h-[400px] sm:min-h-[405px] xl:min-h-[445px] ">
        <div className="rounded-2xl p-3 xl:p-4 space-y-4.5 xl:space-y-6  bg-muted/24 w-full sm:w-[60%] mx-auto lg:w-full">
          <div className="space-y-2.5 xl:space-y-4.5">
            <div className="font-medium space-y-1 xl:space-y-2">
              <div className="flex justify-between text-sm xl:text-base">
                <span>Tomorrow 8:30</span>
                <span>22°C</span>
              </div>
              <div className="flex justify-between text-lg xl:text-xl">
                <span>Board Meeting</span>
                <span>Sunny</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-md bg-[#f2f2f2]">
              <div className="planner-outfit-carousel">
                {[0, 1].map((group) => (
                  <div key={group} className="planner-outfit-carousel__group grid grid-cols-4 gap-px">
                    {plannerOutfitImages.map((image) => (
                      <div key={`${group}-${image}`} className="relative h-[72px] w-full overflow-hidden rounded-md xl:h-[81.34px]">
                        <Image
                          src={`/assets/images/${image}`}
                          alt=""
                          fill
                          className="size-full object-center object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-1.5 xl:space-y-2 text-sm xl:text-base">
            <span className=" inline-block px-1.75 py-0.75 rounded-full text-white  font-medium bg-white/24">
              Why this?
            </span>
            <p className="text-surface leading-5 xl:leading-6">
              Matches the rain, reads sharp for a 10 AM pitch, and pulls two
              pieces you haven&apos;t worn in 12 days.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "jacket") {
    return (
      <div className="flex h-full  rounded-[20px] overflow-hidden  min-h-[400px] items-center justify-center sm:min-h-[405px] xl:min-h-[445px]">
        <div className="relative h-[320px] xl:h-[358px] w-[240px] xl:w-[270px] rounded-[20px] overflow-hidden ">
          <Image
            src="/assets/images/fki/coat.png"
            alt="Neutral mid-weight jacket"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden md:block absolute bottom-5 w-[50%] lg:w-[85%] mx-auto p-3 xl:p-4 bg-muted/40 rounded-2xl backdrop-blur-lg">
          <h4 className="text-lg xl:text-xl font-medium">A neutral mid-weight jacket</h4>
          <p className="text-sm xl:text-base ">
            {" "}
            Bridges your shirts and knits for spring
          </p>
        </div>
      </div>
    );
  }

  return (
    <StackedDeck motion="deal" animateOnView />
  );
}

function FiveKindsOfIntelligence() {
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
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-foreground text-background px-4 py-20 sm:p-10 lg:p-14 xl:p-20 2xl:mx-auto 2xl:container "
    >
      <div className=" space-y-7 xl:space-y-10">
        <div
          className={`intelligence-header-animation space-y-2 lg:space-y-3 xl:space-y-4 ${hasEntered ? "is-visible" : ""}`}
        >
          <p className="text-base lg:text-lg xl:text-2xl font-medium text-brand leading-4.5 xl:leading-6">
            Five kinds of intelligence
          </p>
          <h2 className="intelligence-header-animation__heading font-poppins text-2xl lg:text-3xl xl:text-5xl font-semibold leading-8 xl:leading-15">
            {["Everything", "you", "own,", "working", "harder."].map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-4.5 xl:gap-6">
          {intelligenceCards.map((card) => (
            <article
              key={card.eyebrow}
              className="grid overflow-hidden outline-8 outline-muted lg:grid-cols-[38%_1fr] xl:grid-cols-[32%_1fr] mb-4.5 xl:mb-6 last:mb-0"
            >
              <div className="border-6 xl:border-8 border-foreground">
                <div className="relative min-h-[400px] overflow-hidden sm:min-h-[405px] xl:min-h-[445px]">
                  <Image
                    src="/assets/images/orange-bg.png"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="relative z-10 h-full">
                    <ProductVisual type={card.visual} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4 xl:space-y-6 pl-4.5 lg:pl-8.25 xl:pl-11.25 bg-foreground border-t-4 lg:border-t-0 lg:border-l-6 xl:border-l-8 border-muted pt-10 pb-21">
                <div className="space-y-3 lg:space-y-4 xl:space-y-4">
                  <div className="space-y-1 xl:space-y-2">
                    <p className="text-base text-brand font-medium">
                      {card.eyebrow}
                    </p>
                    <h3 className="font-poppins font-semibold text-base lg:text-lg xl:text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-surface leading-5 xl:leading-6">
                    {card.description}
                  </p>
                </div>

                <ul className="space-y-1.5 xl:space-y-2 text-sm xl:text-base leading-4.5 xl:leading-6 text-surface">
                  {card.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-1.5 xl:gap-2"
                    >
                      <span className="text-brand">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M-6.63996e-05 4.06412H10.0639L9.87193 4.41612L6.04793 0.816121L6.87993 0.000120163L11.5199 4.65612L6.87993 9.29612L6.04793 8.48012L9.87193 4.89612L10.0639 5.24812H-6.63996e-05V4.06412Z"
                            fill="#DA4403"
                          />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FiveKindsOfIntelligence;
