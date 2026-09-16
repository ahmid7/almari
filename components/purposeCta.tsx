import Image from "next/image";

function PurposeCta() {
  return (
    <section className="bg-[#323232]">
      <div className="2xl:mx-auto 2xl:container p-20">
        <div className="relative isolate overflow-hidden rounded-[40px] bg-brand text-center text-background py-36.25">
          <div className="mx-auto max-w-249 space-y-4 ">
            <h2 className="font-poppins text-4xl font-semibold leading-12 text-center">
              Master your closet, buy with purpose.
            </h2>

            <p className="text-2xl leading-9 text-surface">
              Most apps want you in a checkout. Almari is measured by how little
              you need to buy — because the best wardrobe is usually the one
              already in your closet.
            </p>
          </div>

          <div className="absolute inset-0 -z-10 size-full">
            <Image
              src="/assets/images/purpose-cta-bg.png"
              alt="Purpose CTA Background"
              className="size-full object-center object-cover"
              fill
              quality={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurposeCta;
