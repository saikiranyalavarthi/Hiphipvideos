"use client";

export default function CTASection() {
  return (
    <section className="bg-black flex justify-center">

      {/* SECTION CONTAINER */}
      <div className="flex flex-col items-center justify-center px-[240px] py-[48px] gap-[10px] w-full">

        {/* INNER WRAPPER */}
        <div className="w-[1440px] flex flex-col items-center gap-[48px]">

          {/* TITLE + TEXT */}
          <div className="flex flex-col items-center text-center gap-[16px]">

            <h2 className="text-white text-[40px] font-bold leading-[48px] tracking-[-0.32px]">
              Ready to turn your idea into a high-impact video in just one day?
            </h2>

            <p className="text-white text-[18px] leading-[28px] max-w-[640px]">
              Book a free expert consultation and explore your concept’s full potential.
            </p>

          </div>

          {/* BUTTON */}
          <button
            className="
              flex items-center justify-center
              px-[24px] py-[12px]
              rounded-[8px]
              bg-[#CCFF00]
              text-black
              text-[14px]
              font-semibold
              leading-[20px]
              hover:opacity-90
              transition
            "
          >
            Free discovery call
          </button>

        </div>

      </div>

    </section>
  );
}