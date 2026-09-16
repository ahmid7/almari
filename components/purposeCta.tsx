function PurposeCta() {
  return (
    <section className="bg-[#323232]">
      <div className="2xl:mx-auto 2xl:container p-20">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-brand px-6 py-18 text-center text-background sm:px-12">
          <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(135deg,transparent_34%,#fef7ff_35%,#fef7ff_40%,transparent_41%),linear-gradient(315deg,transparent_34%,#fef7ff_35%,#fef7ff_40%,transparent_41%)] [background-position:0_0,38px_38px] [background-size:150px_150px]" />
          <div className="mx-auto max-w-[800px] space-y-4">
            <h2 className="font-poppins text-4xl font-semibold leading-12">
              Master your closet, buy with purpose.
            </h2>
            <p className="text-base leading-6 text-surface">
              Most apps want you in a checkout. Almari is measured by how little you need to buy — because the best wardrobe is usually the one already in your closet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurposeCta;
