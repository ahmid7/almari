"use client";

import { useState } from "react";

type Motion = "split" | "expand" | "rail" | "focus";

const studies: { id: Motion; title: string; description: string }[] = [
  { id: "split", title: "01 · Split-slide accordion", description: "Question moves left while the answer travels right from the same starting point." },
  { id: "expand", title: "02 · Soft expansion", description: "A calm height, opacity, and blur reveal." },
  { id: "rail", title: "03 · Highlight rail", description: "A brand-colour rail grows into the answer." },
  { id: "focus", title: "04 · Card focus", description: "The selected answer comes forward while the others recede." },
];

const faqs = [
  { question: "How do I build my catalogue?", answer: "Snap quick photos or import online order receipts. Almari automatically removes backgrounds and tags your items." },
  { question: "Do I need to upload my whole closet at once?", answer: "No. Start with the pieces you wear most and build your wardrobe over time, at your own pace." },
  { question: "How does daily planning work?", answer: "Almari considers your calendar, the weather and your existing wardrobe to suggest a look for the day ahead." },
];

function MotionFaq({ motion }: { motion: Motion }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`faq-motion faq-motion--${motion} ${openIndex >= 0 ? "has-open-item" : ""}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <article key={faq.question} className={`faq-motion__item ${isOpen ? "is-open" : ""}`}>
            <div className="faq-motion__question-row">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="faq-motion__question"
              >
                {faq.question}
              </button>
              <button
                type="button"
                aria-label={`${isOpen ? "Close" : "Open"} ${faq.question}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="faq-motion__icon"
              >
                {isOpen ? "−" : "+"}
              </button>
            </div>
            <div className="faq-motion__answer-wrap">
              <p className="faq-motion__answer">{faq.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function FaqMotionPreview() {
  return (
    <main className="min-h-screen bg-[#222121] px-5 py-16 text-background sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="text-sm font-medium text-brand">FAQ motion studies</p>
        <h1 className="mt-3 font-poppins text-3xl font-semibold sm:text-5xl">Choose an accordion interaction</h1>
        <p className="mt-4 max-w-2xl text-surface">Each option retains the same colours, spacing, questions, and answers as your live FAQ section.</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {studies.map((study) => (
            <section key={study.id} className="rounded-3xl border border-white/10 bg-[#323232] p-5 sm:p-7">
              <h2 className="font-poppins text-xl font-semibold">{study.title}</h2>
              <p className="mt-1 min-h-10 text-sm text-surface">{study.description}</p>
              <MotionFaq motion={study.id} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FaqMotionPreview;
