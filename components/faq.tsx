"use client";

import { useState } from "react";

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

  return (
    <section className="bg-[#222121]">
      <div className="2xl:mx-auto 2xl:container p-20 space-y-10">
        <div className="space-y-4">
          <p className="font-medium text-2xl text-brand leading-9">
            Frequently Asked Questions
          </p>
          <h2 className="font-poppins font-semibold text-5xl leading-15 text-background">
            Smart Answers for a Smarter Closet
          </h2>
        </div>

        <div className="mx-auto  max-w-[520px] space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="group">
                <div className="relative -left-[67px] flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className={`flex-1 rounded-xl text-surface p-4 text-left text-sm transition-colors ${isOpen ? "bg-[#59301f]" : "bg-[#323232] hover:bg-[#3d3d3d]"}`}
                  >
                    {faq.question}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-label={`${isOpen ? "Close" : "Open"} ${faq.question}`}
                    className={`grid size-5 shrink-0 place-items-center rounded-full border text-xs leading-none transition-colors ${isOpen ? "border-brand bg-brand text-white" : "border-[#e6e5e6] bg-[#323232] text-surface"}`}
                  >
                    {isOpen ? "−" : "+"}
                  </button>
                </div>
                <div
                  className={`relative left-[81px] grid transition-[grid-template-rows,opacity,transform,margin] duration-500 ease-out ${isOpen ? "mt-1 grid-rows-[1fr] translate-x-0 opacity-100" : "grid-rows-[0fr] -translate-x-[81px] -translate-y-1 opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="ml-auto max-w-[402px] rounded-xl bg-brand p-4 text-sm leading-relaxed text-surface">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faq;
