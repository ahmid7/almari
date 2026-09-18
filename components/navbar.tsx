"use client";

import { useState } from "react";

const navItems = ["How it works", "Features", "Pricing"];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0  top-0 z-50 box-border w-full md:rounded-b-lg p-1 md:p-0.5 bg-white text-sm text-background xl:p-1 xl:text-base">
      <div className="flex items-center justify-between rounded-xl bg-muted">
        <div className="2xl:container 2xl:mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 py-2.5 xl:py-3 flex items-center justify-between gap-3 xl:gap-4  w-full">
          <div className="">
            <div className="flex items-center gap-1 text-2xl lg:text-lg xl:text-2xl font-bold font-unifraktur-cook">
              <svg
                className=" w-[62px] h-[32px] md:w-[52px] md:h-[28px] xl:w-[63px] xl:h-[34px]"
                viewBox="0 0 63 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.9518 7.42167H62.3669L0.366943 0.79541L62.3669 32.7954H36.9518V7.42167Z"
                  fill="#DA4403"
                />
                <path
                  d="M62.4099 7.02393L62.3669 7.82178H37.3513V19.4331L62.5505 32.4399L62.3669 33.1958H36.5515V19.9214L0.18335 1.15088L0.409912 0.397949L62.4099 7.02393Z"
                  stroke="white"
                  stroke-opacity="0.6"
                  stroke-width="0.8"
                />
              </svg>
              Almari
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-4 text-surface">
              {navItems.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="relative py-2 transition-colors duration-300 hover:text-brand after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden rounded-[8px] bg-brand px-7 py-2.5 font-medium text-background md:block xl:px-10">
            sign in
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="grid size-10 place-items-center text-background md:hidden"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-7"
                aria-hidden="true"
              >
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="size-7"
                aria-hidden="true"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full box-border flex h-[calc(100dvh-65px)] flex-col border-4 bg-muted p-4 text-background text-2xl font-medium md:hidden">
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                  How it Works
                </a>
              </li>
              <li>
                <a href="#features" onClick={() => setIsMenuOpen(false)}>
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className="mt-auto rounded-lg bg-brand py-5 text-center text-base font-medium text-white"
          >
            Sign In
          </a>
        </div>
      )}
    </header>
  );
}

export default NavBar;
