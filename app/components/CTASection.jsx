"use client";

export default function CTASection() {
return ( <section className="bg-black flex justify-center">

  {/* SECTION CONTAINER */}
  <div className="flex flex-col items-center justify-center px-6 lg:px-12 py-[48px] gap-[10px] w-full">

    {/* INNER WRAPPER */}
    <div className="w-full max-w-[1440px] flex flex-col items-center gap-[32px] md:gap-[48px]">

      {/* TITLE + TEXT */}
      <div className="flex flex-col items-center text-center gap-[16px]">

        <h2 className="text-white text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[36px] sm:leading-[42px] md:leading-[48px] tracking-[-0.32px]">
          Ready to turn your idea into a high-impact video in just one day?
        </h2>

        <p className="text-white text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] max-w-[640px]">
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
          whitespace-nowrap
        "
      >
        Free discovery call
      </button>

    </div>

  </div>

</section>

);
}

