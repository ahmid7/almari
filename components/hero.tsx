import Image from "next/image";

const navItems = ["How it Works", "Features", "Pricing"];
const outfitImages = ["image1.png", "image2.png", "image3.png", "image4.png"];

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#12141d] text-background">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_82%,#00767c_0,transparent_25%),radial-gradient(circle_at_52%_0%,#8d2b1a_0,transparent_23%),radial-gradient(circle_at_91%_73%,#8b451f_0,transparent_26%),linear-gradient(120deg,#07090e_10%,#272039_48%,#0b1420_100%)]" />
      <div className="absolute -left-[12%] top-[7%] -z-10 h-[90%] w-[70%] rotate-[-25deg] bg-[radial-gradient(ellipse_at_center,#5d436e_0,transparent_62%)] blur-3xl" />
      <div className="absolute right-[4%] top-[10%] -z-10 h-[65%] w-[38%] rotate-[22deg] bg-[linear-gradient(115deg,transparent_18%,rgba(255,255,255,.28)_32%,transparent_46%)] blur-xl" />

      <div className="mx-auto max-w-[1440px] px-1 pt-1 sm:px-2">
        <header className="flex h-13 items-center justify-between rounded-b-lg border-x border-b-2 border-white/80 bg-[#323232] px-6 sm:px-10">
          <a href="#" className="flex items-center gap-2">
            <Image src="/assets/Logo.svg" alt="Almari" width={48} height={26} className="h-6 w-auto" />
            <span className="font-unifraktur-cook text-xl text-white">Almari</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-surface md:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition-colors hover:text-brand">{item}</a>)}
          </nav>
          <a href="#" className="rounded-lg bg-brand px-7 py-2 text-sm font-medium text-white transition-colors hover:bg-[#b83702]">Sign In</a>
        </header>

        <div className="grid min-h-[calc(100vh-56px)] items-center gap-12 px-7 pb-14 pt-20 sm:px-14 lg:grid-cols-[1.08fr_.92fr] lg:px-20">
          <div className="max-w-[690px]">
            <h1 className="font-poppins text-5xl font-semibold leading-[1.12] tracking-[-.035em] sm:text-6xl xl:text-[5.3rem]">
              Your wardrobe,<br />finally <em className="font-normal">intelligent.</em>
            </h1>
            <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-surface sm:text-xl">Almari turns everything you own into a living catalogue that plans what to wear, spots what you&apos;re missing, and stops you buying what you already have.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="flex items-center gap-5 rounded-lg border-2 border-white bg-brand py-3 pl-5 pr-3 text-sm font-medium shadow-[0_0_0_1px_#da4403]">Build my wardrobe <span className="grid size-7 place-items-center rounded bg-white/15 text-xl">→</span></a>
              <a href="#how-it-works" className="flex items-center gap-5 rounded-lg bg-white/10 py-3 pl-7 pr-3 text-sm font-medium text-surface backdrop-blur-sm">How it works <span className="grid size-7 place-items-center rounded bg-white/10 text-xl">→</span></a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[575px] space-y-4 lg:mt-8">
            <div className="rounded-2xl border border-white/25 bg-[#27303d]/65 p-4 shadow-2xl backdrop-blur-md">
              <div className="flex justify-between text-xs text-surface"><span>Tomorrow 8:30</span><span>22°C</span></div>
              <div className="mt-2 flex justify-between text-lg"><span>Board Meeting</span><span>Sunny</span></div>
              <div className="mt-3 grid grid-cols-4 overflow-hidden rounded-lg bg-[#f2f2f2]">
                {outfitImages.map((image) => <div key={image} className="relative h-16 border-r border-[#d5d5d5] last:border-0"><Image src={`/assets/images/${image}`} alt="" fill className="object-cover" /></div>)}
              </div>
              <span className="mt-4 inline-block rounded-full bg-white/15 px-2 py-1 text-[10px]">Why this?</span>
              <p className="mt-2 text-[11px] leading-relaxed text-surface">Matches the rain, reads sharp for a 10 AM pitch, and pulls two pieces you haven&apos;t worn in 12 days.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[.78] overflow-hidden rounded-2xl bg-[#d7d7d7]"><Image src="/assets/images/fki/1.png" alt="Denim and top" fill className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-5 pt-14"><p className="text-lg">Denim and Top</p><div className="mt-1 flex justify-between text-[10px] text-white/80"><span>Worn: 22</span><span>$15/Wear</span></div></div></div>
              <div className="relative aspect-[.78] overflow-hidden rounded-2xl bg-[#d7d7d7]"><Image src="/assets/images/fki/coat.png" alt="Waist jacket" fill className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-5 pt-14"><p className="text-lg">Waist Jacket</p><div className="mt-1 flex justify-between text-[10px] text-white/80"><span>Worn: 22</span><span>$15/Wear</span></div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
