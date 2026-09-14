import Image from "next/image";
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
  return (
    <section className="relative p-20 2xl:container 2xl:mx-auto bg-black space-y-10">
      <div className="max-w-[686px] space-y-4">
        <p className=" font-medium text-2xl text-brand leading-9">
          How Almari works
        </p>
        <h2 className="font-poppins font-semibold text-5xl leading-15 text-background">
          From receipts and photos to a wardrobe that thinks.
        </h2>
        <p className="text-surface text-2xl leading-9">
          No manual data entry. Point Almari at where your clothes already live,
          and it does the cataloguing.
        </p>
      </div>

      <div className="bg-[#1b1a1a] p-2 space-y-2">
        <div className="p-2 bg-foreground">
          <Image
            src="/assets/images/howItWork/works.png"
            alt="how it works"
            width={1246}
            height={565}
            className="w-full h-auto"
          />
        </div>

        <div className="grid gap-2 bg-[#1b1a1a] grid-cols-3 ">
          {howItWorksSteps.map((step) => (
            <article key={step.title} className="bg-foreground p-6 space-y-2">
              <h3 className="text-2xl font-semibold text-background">
                {step.title}
              </h3>
              <p className="text-base leading-6.5 text-surface">
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
