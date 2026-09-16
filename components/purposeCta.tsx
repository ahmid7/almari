import Image from "next/image";

function PurposeCta() {
  return (
    <section className="bg-muted">
      <div className="2xl:mx-auto 2xl:container px-4 py-20 sm:p-10 lg:p-14 xl:p-20">
        <div className="relative isolate overflow-hidden rounded-[30px] lg:rounded-[40px] bg-brand text-center text-background py-23 lg:py-28 xl:py-36.25">
          <div className="mx-auto px-6.75 py-10 sm:p-0 sm:max-w-150 lg:max-w-200 xl:max-w-249 space-y-2 lg:space-y-3 xl:space-y-4 ">
            <h2 className="font-poppins text-2xl lg:text-3xl xl:text-4xl font-semibold leading-8 xl:leading-12 text-center">
              Master your closet, buy with purpose.
            </h2>

            <p className="text-base lg:text-lg xl:text-2xl leading-6 lg:leading-6.5 xl:leading-9 text-surface">
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
