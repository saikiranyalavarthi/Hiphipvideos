export default function Hero() {
  return (
    <section className="relative h-[1114px] w-full overflow-hidden bg-black">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2021/11/25/98956-650523378_tiny.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-[1100px] mx-auto text-white">

          {/* Heading */}
          <h1 className="text-[56px] md:text-[72px] font-extrabold leading-[1.1] mb-8">
            Build stunning{" "}
            <span className="text-[#CCFF00]">
              Advertisements_
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-[20px] md:text-[24px] text-gray-300 max-w-[750px] mx-auto mb-12 leading-relaxed">
            Premium video productions built to engage audiences
            and convert attention into real results
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">

            <a
              href="/quote"
              className="
                bg-[#CCFF00]
                text-black
                px-10
                h-[60px]
                inline-flex
                items-center
                justify-center
                rounded-lg
                font-semibold
                text-[16px]
                hover:opacity-90
                transition
              "
            >
              Get a Free Discovery Call →
            </a>

            <a
              href="/portfolio"
              className="
                text-white
                text-[16px]
                font-medium
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