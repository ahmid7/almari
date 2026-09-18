"use client";

import Image from "next/image";
import { useState } from "react";

const plannerOutfitImages = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
];

const heroWardrobeImages = [
  { image: "hero-image1.png", title: "Denim and Top", reversed: false },
  { image: "hero-image2.png", title: "Waist Jacket", reversed: true },
];

function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/assets/images/hero-bg.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="pt-[140px] lg:pt-[180px] xl:pt-[211px] pb-[122px] xl:pb-[149px] 2xl:container 2xl:mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 flex flex-col lg:flex-row lg:items-center justify-between gap-[30px] lg:gap-[72px] xl:gap-[90px]">
        <div className="space-y-4 lg:space-y-4.5 xl:space-y-6 lg:basis-[580px] xl:basis-[622px]">
          <h2 className="font-poppins font-semibold text-[40px] md:text-6xl xl:text-[80px] leading-13 md:leading-15 lg:leading-17 xl:leading-22 text-background">
            Your wardrobe, finally{" "}
            <span className="font-sansita italic">intelligent</span>.
          </h2>
          <p className="text-base lg:text-lg xl:text-2xl leading-6 lg:leading-6.5 xl:leading-9 text-surface">
            Almari turns everything you own into a living catalogue that plans
            what to wear, spots what you&apos;re missing, and stops you buying
            what you already have.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-4">
            <button className="w-full lg:w-fit p-1 bg-white rounded-lg flex items-stretch gap-x-1 cursor-pointer">
              <span className="flex-1 rounded-lg bg-brand text-background py-4 xl:py-[19.5px] px-6 lg:px-4.5 xl:px-[22.5px] text-sm xl:text-base font-medium">
                {" "}
                Build my wardrobe{" "}
              </span>
              <div className="rounded-lg bg-brand px-2.5 py-4.5 flex items-center">
                <svg
                  className="size-5 xl:size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 12H5"
                    stroke="#FEF7FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
                    stroke="#FEF7FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>

            <button className="w-full lg:w-fit p-1 bg-white/8 rounded-lg flex items-stretch gap-x-1 cursor-pointer">
              <span className="flex-1 rounded-lg bg-white/8 text-background py-4 xl:py-[19.5px] px-6 lg:px-4.5 xl:px-[22.5px] text-sm xl:text-base font-medium">
                {" "}
                How it works{" "}
              </span>
              <div className="rounded-lg bg-white/8 px-2.5 py-4.5 flex items-center">
                <svg
                  className="size-5 xl:size-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 12H5"
                    stroke="#FEF7FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6"
                    stroke="#FEF7FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div className="space-y-4 lg:space-y-3 xl:space-y-4 lg:basis-[440px] xl:basis-[556px]">
          <div className="rounded-2xl outline-[0.5px] outline-white/40 text-white p-3 xl:p-4 space-y-4.5 xl:space-y-6  bg-muted/24 w-full lg:w-[60%] mx-auto lg:w-full">
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

              <div className="grid grid-cols-4 gap-px overflow-hidden rounded-md bg-[#f2f2f2] ">
                {plannerOutfitImages.map((image) => (
                  <div
                    key={image}
                    className="relative w-full h-[72px] xl:h-[81.34px] rounded-md overflow-hidden "
                  >
                    <Image
                      src={`/assets/images/${image}`}
                      alt=""
                      fill
                      className="size-full object-center object-cover"
                    />
                  </div>
                ))}
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

          <div className="grid grid-cols-2 gap-2 xl:gap-4">
            {heroWardrobeImages.map(({ image, title, reversed }) => (
              <div
                key={image}
                className="relative h-[200px] md:h-[280px] xl:h-[358px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={`/assets/images/${image}`}
                  alt="Wardrobe item"
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute bottom-2 left-0 right-0 w-full space-y-2 px-2 text-white font-medium">
                  {!reversed && <p className="text-sm xl:text-base">{title}</p>}
                  <div className="flex items-center justify-between text-xs">
                    <span>Worn: 22</span>
                    <span>$15/Wear</span>
                  </div>
                  {reversed && <p className="text-base">{title}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
