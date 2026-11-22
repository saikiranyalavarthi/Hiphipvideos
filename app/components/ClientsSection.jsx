"use client";

const clients = [
  "/clients/Frame 2147211460.png",
  "/clients/Frame 2147211462.png",
  "/clients/Frame 2147211463.png",
  "/clients/Frame 2147211464.png",
  "/clients/Frame 2147211465.png",
  "/clients/Frame 2147211466.png",
  "/clients/Frame 2147211467.png",
  "/clients/Frame 2147211468.png",
  "/clients/Frame 2147211469.png",
  "/clients/Frame 2147211470.png",
  "/clients/Frame 2147211471.png",
  "/clients/Frame 2147211472.png",
  "/clients/Frame 2147211473.png",
  "/clients/Frame 2147211474.png",
  "/clients/Frame 2147211475.png",
  "/clients/Frame 2147211476.png",
  "/clients/Frame 2147211477.png",
  "/clients/Frame 2147211478.png",
  "/clients/Frame 2147211479.png",
  "/clients/Frame 2147211482.png",
  "/clients/Frame 2147211484.png",
  "/clients/Frame 2147211485.png",
  "/clients/Frame 2147211489.png",
  "/clients/Frame 2147211490.png",
  "/clients/Frame 2147211491.png",
  "/clients/Frame 2147211492.png",
  "/clients/Frame 2147211493.png",
  "/clients/Frame 2147211494.png",
];

export default function ClientsSection() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20"
    >
      {/* HEADING */}
      <div className="mb-10 px-4 text-center sm:mb-12">
        <h2
          id="clients-heading"
          className="text-[26px] font-medium tracking-tight text-[#858585] sm:text-[34px] md:text-[42px]"
        >
          Companies we <span className="font-bold text-black">collaborate</span>{" "}
          with.
        </h2>
      </div>

      {/* LOGO SCROLLER */}
      <div className="group relative w-full overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-12 md:w-16" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12 md:w-16" />

        {/* ANIMATED TRACK */}
        <div className="clients-marquee flex w-max items-center">
          {/* ORIGINAL LOGOS */}
          <div className="flex shrink-0 items-center gap-5 px-4 sm:gap-7 sm:px-6 md:gap-9 md:px-8">
            {clients.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex h-20 w-32 shrink-0 items-center justify-center sm:h-24 sm:w-40 md:h-28 md:w-48"
              >
                <img
                  src={logo}
                  alt={`Partner company ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 max-w-[120px] object-contain sm:max-h-20 sm:max-w-[150px] md:max-h-24 md:max-w-[180px]"
                />
              </div>
            ))}
          </div>

          {/* DUPLICATE LOGOS */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-5 px-4 sm:gap-7 sm:px-6 md:gap-9 md:px-8"
          >
            {clients.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex h-14 w-24 shrink-0 items-center justify-center sm:h-16 sm:w-28 md:h-20 md:w-32"
              >
                <img
                  src={logo}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="max-h-10 max-w-[85px] object-contain sm:max-h-12 sm:max-w-[105px] md:max-h-14 md:max-w-[120px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .clients-marquee {
          animation: clients-scroll 45s linear infinite;
          will-change: transform;
        }

        .group:hover .clients-marquee {
          animation-play-state: paused;
        }

        @keyframes clients-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .clients-marquee {
            animation-duration: 35s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
