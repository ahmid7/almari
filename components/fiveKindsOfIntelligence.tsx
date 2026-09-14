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
      <div className="absolute inset-x-[9%] top-[14%] rounded-xl bg-[#bd4316] p-3 text-[9px] text-white shadow-xl">
        <div className="flex justify-between">
          <span>Tomorrow 8:30</span>
          <span>22°C</span>
        </div>
        <div className="mt-1 flex justify-between text-sm">
          <span>Board Meeting</span>
          <span>Sunny</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-px overflow-hidden rounded bg-white text-center text-lg">
          <span className="bg-[#f2f2f2] py-3">♟</span>
          <span className="bg-[#f2f2f2] py-3">♜</span>
          <span className="bg-[#f2f2f2] py-3">◒</span>
          <span className="bg-[#f2f2f2] py-3">♛</span>
        </div>
        <span className="mt-3 inline-block rounded bg-white/20 px-1.5 py-0.5">
          Why this?
        </span>
        <p className="mt-2 leading-relaxed">
          Matches the rain, reads sharp for a 10 AM pitch, and pulls two pieces
          you haven&apos;t worn in 12 days.
        </p>
      </div>
    );
  }

  if (type === "jacket") {
    return (
      <>
        <div className="absolute left-[22%] top-[12%] h-[65%] w-[56%] rounded-t-2xl bg-[#d7d4ce] shadow-xl" />
        <div className="absolute left-[29%] top-[34%] h-[44%] w-[42%] rounded-[45%_45%_18%_18%] bg-[#b8a88d] shadow-lg" />
        <div className="absolute bottom-[5%] left-[17%] right-[12%] rounded-xl bg-[#9f3d18] p-3 text-xs text-white shadow-lg">
          <strong>A neutral mid-weight jacket</strong>
          <br />
          <span className="text-[10px]">
            Bridges your shirts and knits for spring
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="absolute bottom-0 left-[17%] h-[77%] w-[48%] rounded-t-[44%] border-x-4 border-white bg-[#bdbdbd] shadow-[7px_0_0_#d5d5d5,14px_0_0_#f2f2f2]" />
      <div className="absolute left-[31%] top-[27%] h-[27%] w-[27%] rounded-t-[50%] bg-[#151515]" />
      <div className="absolute bottom-0 left-[35%] h-[43%] w-[20%] bg-gradient-to-r from-[#537079] via-[#a1aeb1] to-[#445d66]" />
      <div className="absolute left-[21%] top-[22%] rounded-full bg-white/80 px-3 py-1 text-xs text-[#323232]">
        ◧ &nbsp; 142 Items
      </div>
    </>
  );
}

function FiveKindsOfIntelligence() {
  return (
    <section className="bg-foreground text-background p-20 2xl:mx-auto 2xl:container ">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-2xl font-medium text-brand leading-6">
            Five kinds of intelligence
          </p>
          <h2 className="font-poppins text-5xl font-semibold leading-15">
            Everything you own, working harder.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {intelligenceCards.map((card) => (
            <article
              key={card.eyebrow}
              className="grid overflow-hidden outline-8 outline-muted lg:grid-cols-[32%_1fr] mb-6 last:mb-0"
            >
              <div className="border-8 border-foreground">
                <div className="relative overflow-hidden bg-[#df4500] min-h-[445px] ">
                  <ProductVisual type={card.visual} />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-6 pl-11.25 bg-foreground border-l-8 border-muted">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-base text-brand font-medium">
                      {card.eyebrow}
                    </p>
                    <h3 className="font-poppins font-semibold text-2xl">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-surface leading-6">{card.description}</p>
                </div>

                <ul className="space-y-2 text-base leading-6 text-surface">
                  {card.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-brand">→</span>
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
