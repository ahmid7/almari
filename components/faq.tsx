"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "How do I build my catalogue?",
    answer:
      "Snap quick photos or import online order receipts. Almari automatically removes backgrounds and tags your items.",
  },
  {
    question: "Do I need to upload my whole closet at once?",
    answer:
      "No. Start with the pieces you wear most and build your wardrobe over time, at your own pace.",
  },
  {
    question: "How does daily planning work?",
    answer:
      "Almari considers your calendar, the weather and your existing wardrobe to suggest a look for the day ahead.",
  },
  {
    question: "Is my wardrobe data private?",
    answer:
      "Yes. Your wardrobe data is private to you and is used only to make your recommendations more useful.",
  },
  {
    question: "How does Redundancy Guard stop duplicate buys?",
    answer:
      "It compares potential purchases against what you own and highlights close matches before you check out.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
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
    <section ref={sectionRef} className="bg-[#222121]">
      <div className="2xl:mx-auto 2xl:container px-4 py-20 sm:p-10 lg:p-14 xl:p-20 space-y-5 lg:space-y-7 xl:space-y-10">
        <div className={`faq-header-animation space-y-2 lg:space-y-2.5 xl:space-y-4 ${hasEntered ? "is-visible" : ""}`}>
          <p className="font-medium text-base lg:text-lg xl:text-2xl text-brand leading-6 lg:leading-6.5 xl:leading-9">
            Frequently Asked Questions
          </p>
          <h2 className="faq-header-animation__heading font-poppins font-semibold text-2xl lg:text-3xl xl:text-5xl leading-8 xl:leading-15 text-background">
            {["Smart", "Answers", "for", "a", "Smarter", "Closet"].map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h2>
        </div>

        <div className="mx-auto  max-w-[520px] space-y-3.5 xl:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="group text-sm xl:text-base leading-6">
                <div className="relative flex items-center justify-center gap-4 md:gap-2 xl:gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className={`flex-1 max-w-[420px] lg:max-w-[490px] xl:max-w-[535px] rounded-2xl p-4 md:p-3 xl:p-4 text-left  text-surface ${isOpen ? "bg-brand/16" : "bg-[#323232] hover:bg-[#3d3d3d]"}`}
                  >
                    {faq.question}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-label={`${isOpen ? "Close" : "Open"} ${faq.question}`}
                    className={`grid size-5 md:size-4 xl:size-5 shrink-0 place-items-center rounded-full border text-xs leading-none ${isOpen ? "border-brand bg-brand text-muted" : "border-[#e6e5e6] bg-[#323232] text-surface"}`}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>

                {isOpen && (
                  <p className="relative left-2 sm:left-15 lg:left-17 xl:left-[81px] mt-1.5 xl:mt-2 max-w-[435px] lg:max-w-[510px] xl:max-w-[551px] rounded-2xl bg-brand p-4 md:p-3 xl:p-4 text-sm leading-relaxed text-surface">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
