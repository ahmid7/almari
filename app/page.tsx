export default function Home() {
  return (
    <section className="relative isolate overflow-hidden bg-[#222121] px-5 py-7 text-[#fef7ff] sm:px-10 sm:py-8 lg:min-h-[662px] lg:px-[4.8vw] lg:py-6">
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(30deg,transparent_48%,#323232_49%,#323232_51%,transparent_52%),linear-gradient(150deg,transparent_48%,#323232_49%,#323232_51%,transparent_52%)] [background-size:88px_52px]" />
      <div className="mx-auto max-w-[1120px]">
        <div className="max-w-[620px]">
          <p className="text-xs font-semibold text-brand sm:text-sm">How Almari works</p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-[3.25rem]">From receipts and photos to a wardrobe that thinks.</h2>
          <p className="mt-4 max-w-[520px] text-sm leading-relaxed text-[#e6e5e6] sm:text-base">No manual data entry. Point Almari at where your clothes already live, and it does the cataloguing.</p>
        </div>
        <div className="mt-6 border-[7px] border-[#171717] bg-[#111] p-1.5 shadow-[0_0_0_1px_#323232] sm:mt-8">
          <div className="relative h-[210px] overflow-hidden bg-[#03223a] sm:h-[315px] lg:h-[318px]">
            <div className="absolute -left-10 -top-10 h-[150%] w-[34%] rotate-[-28deg] bg-gradient-to-r from-white/0 via-white/75 to-white/0 blur-xl" />
            <div className="absolute right-[22%] -top-16 h-[145%] w-[14%] rotate-[28deg] bg-gradient-to-r from-white/0 via-white/60 to-white/0 blur-lg" />
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/75 to-transparent" />
            <div className="absolute bottom-[-18%] left-[32%] h-[76%] w-[25%] rounded-[48%_48%_18%_18%] bg-[#8e2d20] blur-[3px]" />
            <div className="absolute bottom-[22%] left-[39%] h-[42%] w-[17%] rounded-[45%] bg-[#291a12] blur-md" />
            <div className="absolute bottom-0 left-[21%] h-[33%] w-[58%] rounded-t-[48%] bg-[#151b20] blur-[2px]" />
          </div>
          <div className="grid border-t-[7px] border-[#171717] bg-[#222121] md:grid-cols-3">
            {[["Connect", "Link your shopping inbox, forward receipts, or snap a photo of what’s on the rail. Almari reads order confirmations and images."], ["Understand", "Each item is identified and filed — brand, colour, size, price, season — into a structured, visual catalogue you can actually browse."], ["Optimise", "Get daily outfits, honest gap analysis, and a check before every purchase — all explained, all under your control."]].map(([title, description]) => (
              <article key={title} className="border-b border-[#323232] px-4 py-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:px-5 lg:py-4">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#e6e5e6]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
