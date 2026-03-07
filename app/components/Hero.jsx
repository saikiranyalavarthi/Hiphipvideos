export default function Hero() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden bg-black flex justify-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2021/11/25/98956-650523378_tiny.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 w-[1920px] flex items-center justify-center text-center px-6">

        <div className="flex flex-col items-center gap-[32px]">

          {/* Heading */}
          <h1 className="text-[#FFF] text-[48px] font-bold leading-[56px] tracking-[-0.32px]">
            Build stunning{" "}
            <span className="text-[#CCFF00]">
              Advertisements_
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-[#FFF] text-center text-[32px] font-normal leading-[40px] tracking-[-0.16px] max-w-[814px]">
            Premium video productions built to engage audiences
            and convert attention into real results
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-[20px]">

            {/* Primary Button */}
            <a
              href="/quote"
              className="
              flex
              px-[16px]
              py-[10px]
              justify-center
              items-center
              gap-[10px]
              rounded-[8px]
              bg-[#CCFF00]
              text-black
              text-[16px]
              font-bold
              leading-[24px]
              "
            >
              Get a Free Discovery Call
            </a>

            {/* Portfolio Link */}
            <a
              href="/portfolio"
              className="
              text-white
              text-[16px]
              font-bold
              leading-[24px]
              hover:text-[#CCFF00]
              transition
              "
            >
              View Portfolio →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}