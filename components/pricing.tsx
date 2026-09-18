"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "A first look at your wardrobe, catalogued.",
    price: "0",
    action: "Start Free Trial",
    features: [
      "Catalogue up to 30 items",
      "Basic daily outfit suggestions",
      "Basic wardrobe insights",
    ],
  },
  {
    name: "Plus",
    description: "A smarter everyday wardrobe that plans ahead.",
    price: "10",
    action: "Get Started",
    popular: true,
    features: [
      "Unlimited wardrobe items",
      "AI outfit planning",
      "Calendar & weather intelligence",
      "Wardrobe gap detection",
      "Duplicate purchase alerts",
    ],
  },
  {
    name: "Pro",
    description: "The full intelligence layer for your closet.",
    price: "32",
    action: "Get Started",
    features: [
      "Everything in Plus",
      "Advanced wardrobe analytics",
      "Advanced purchase intelligence",
      "Personal style intelligence",
      "Priority AI features",
    ],
  },
];

function Pricing() {
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
    <section id="pricing" ref={sectionRef} className="relative overflow-hidden bg-[#323232] 2xl:container 2xl:mx-auto px-4 py-20 sm:p-10 lg:p-14 xl:p-20">
      <Image
        src="/assets/images/pricing/pricing-bg.webp"
        alt=""
        fill
        className="pointer-events-none z-0 object-cover"
      />

      <div className="relative z-10 space-y-7 xl:space-y-10">
        <div className={`pricing-header-animation pricing-header-animation--drift max-w-[500px] space-y-2 lg:space-y-3 xl:max-w-[690px] xl:space-y-4 ${hasEntered ? "is-visible" : ""}`}>
          <p className=" font-medium text-base lg:text-lg xl:text-2xl text-brand leading-6 lg:leading-6.5 xl:leading-9">
            Pricing
          </p>
          <h2 className="pricing-header-animation__heading font-poppins font-semibold text-2xl lg:text-3xl xl:text-5xl leading-8 xl:leading-15 text-background">
            {['Simple', 'Pricing,', 'No', 'Surprises.'].map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h2>
          <p className="text-surface text-base lg:text-lg xl:text-2xl leading-6 lg:leading-6.5 xl:leading-9">
            Every plan pays for itself the first time it talks you out of a
            purchase you&apos;d regret.
          </p>
        </div>

        <div className="grid gap-4 md:gap-3.5 xl:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="relative overflow-hidden rounded-3xl bg-foreground p-2 h-137.5 md:h-112 xl:h-139.5 space-y-3 xl:space-y-4"
            >
              {plan.popular && (
                <div className="absolute inset-x-2 top-2 h-24 overflow-hidden rounded-t-2xl lg:h-28 xl:h-35">
                  <Image
                    src="/assets/plan-bg.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
              )}

              <div className="relative z-10 space-y-3 xl:space-y-4">
                {plan.popular && (
                  <span className="absolute top-4 right-6 px-3 xl:px-4 py-1 bg-brand text-sm xl:text-base rounded text-white ">
                    Popular
                  </span>
                )}

                <h3 className="text-base lg:text-lg xl:text-2xl font-poppins font-semibold px-4 text-white py-2 ">
                  {plan.name}
                </h3>

                <div className="relative z-0 rounded-2xl p-3 xl:p-4 bg-muted overflow-hidden">
                  <div className="space-y-2 relative z-10">
                    <p className="text-sm xl:text-base text-surface">
                      {plan.description}
                    </p>

                    <div className=" font-poppins text-white">
                      <span className="text-5xl md:text-2xl lg:text-3xl xl:text-5xl  font-semibold leading-15 sm:leading-8 xl:leading-15 ">
                        ${plan.price}
                      </span>

                      <span className="text-sm xl:text-base leading-8 xl:leading-15 h-fit">/month</span>
                    </div>

                    <button
                      className={`w-full rounded-lg py-4.5 sm:py-3.5 xl:py-5 text-xs font-semibold transition-colors hover:cursor-pointer ${plan.popular ? "bg-brand text-white hover:bg-[#b83702]" : "bg-foreground text-surface hover:bg-black "}`}
                    >
                      {plan.action}
                    </button>
                  </div>

                  <div className="absolute size-full inset-0 z-5 bg-muted">
                    <Image
                      src="/assets/images/pricing/static.webp"
                      alt="background static image"
                      fill
                      className="object-cover object-center"
                      quality={75}
                    />
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 xl:space-y-3.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm xl:text-base text-surface flex items-center"
                  >
                    <span className="">
                      <svg
                        className="text-surface mr-2 size-4.5 xl:size-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 13.3333C3 13.3333 4.5 14 6.5 17C6.5 17 6.78485 16.5192 7.32133 15.7526M17 6C14.7085 7.14577 12.3119 9.55181 10.3879 11.8223"
                          stroke="#E6E5E6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 13.3333C8 13.3333 9.5 14 11.5 17C11.5 17 17 8.5 22 6"
                          stroke="#E6E5E6"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
