import Image from "next/image";

const footerLinks = [
  { title: "Product", links: ["Features", "Pricing", "Open App"] },
  { title: "Company", links: ["About", "Journal", "Careers"] },
  { title: "Legal", links: ["Privacy", "Terms", "Data"] },
];

function Footer() {
  return (
    <footer className="pb-238.75 relative overflow-hidden bg-muted text-background">
      <div className=" 2xl:mx-auto 2xl:container px-20 pt-25 relative z-20">
        <div
          className="relative overflow-hidden rounded-[40px] p-20 bg-[#373737] pb-79.25"
          style={{
            backgroundImage: "url('/assets/images/pricing/static.webp')",
          }}
        >
          <div className="grid gap-10 sm:grid-cols-[1fr_auto]">
            <div className="max-w-98 space-y-4">
              <div className="flex items-center gap-1 font-poppins text-5xl font-bold">
                <svg
                  className="w-24.5 h-13"
                  viewBox="0 0 98 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.6041 11.1489H97.3665L0.366455 0.79541L97.3665 50.7954H57.6041V11.1489Z"
                    fill="#DA4403"
                  />
                  <path
                    d="M97.4084 10.7515L97.3665 11.5493H58.0042V30.0552L97.55 50.4399L97.3665 51.1958H57.2043V30.5425L0.182861 1.15088L0.408447 0.397949L97.4084 10.7515Z"
                    stroke="white"
                    stroke-opacity="0.6"
                    stroke-width="0.8"
                  />
                </svg>
                Almari
              </div>
              <p className="text-base leading-6 text-surface">
                A wardrobe operating system. Know what you own, plan what to
                wear, know what you actually need.
              </p>
            </div>

            <nav className="grid grid-cols-3 gap-7.25 text-base">
              {footerLinks.map((group) => (
                <div key={group.title} className="space-y-4">
                  <h2 className="font-medium text-2xl leading-9 text-background">
                    {group.title}
                  </h2>
                  <ul className="space-y-2 text-surface">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          className="leading-6 transition-colors hover:text-brand"
                          href="#"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="absolute left-20 -bottom-[70px] z-5 opacity-40">
            <svg
              className="w-[493.61px] h-[255.18px]"
              viewBox="0 0 98 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57.6041 11.1489H97.3665L0.366455 0.79541L97.3665 50.7954H57.6041V11.1489Z"
                fill="#DA4403"
              />
              <path
                d="M97.4084 10.7515L97.3665 11.5493H58.0042V30.0552L97.55 50.4399L97.3665 51.1958H57.2043V30.5425L0.182861 1.15088L0.408447 0.397949L97.4084 10.7515Z"
                stroke="white"
                stroke-opacity="0.6"
                stroke-width="0.8"
              />
            </svg>
          </div>

          <p className="absolute left-0 z-10 bottom-[40px] text-2xl font-medium text-center w-full text-surface ">
            Almari — a ProdyIft Studio concept · designed &amp; built 2026
          </p>
        </div>
      </div>

      <div className="absolute inset-0 z-10 size-full">
        <Image
          src={"/assets/images/footer/background.png"}
          alt="footer background"
          fill
          className="size-full object-center object-cover"
          quality={75}
        />
      </div>
    </footer>
  );
}

export default Footer;


{/* <div className="mt-14 border-t border-white/10 pt-4 text-center text-sm text-surface">
  Almari — a ProdyIft Studio concept · designed &amp; built 2026
</div>; */}
