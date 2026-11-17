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
    <section className="relative overflow-hidden bg-[#050505] py-12 sm:py-16">
      <div className="mx-auto mb-10 max-w-7xl px-4 text-center sm:px-6">
        <span className="mb-4 inline-block rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#CCFF00]">
          Our Trusted Partners
        </span>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Brands That <span className="text-[#CCFF00]">Trust Us</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
          Proud to collaborate with ambitious brands and businesses to create
          meaningful digital experiences.
        </p>
      </div>

      {/* Single Row Continuous Logo Slider */}
      <div className="group relative w-full overflow-hidden">
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050505] to-transparent sm:w-28" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050505] to-transparent sm:w-28" />

        <div className="flex w-max animate-clients-scroll group-hover:[animation-play-state:paused]">
          {/* First Logo Group */}
          <div className="flex shrink-0 items-center gap-4 px-2 sm:gap-6 sm:px-3">
            {clients.map((logo, index) => (
              <div
                key={logo}
                className="flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:border-[#CCFF00]/50 hover:bg-white/[0.08] sm:h-28 sm:w-48 sm:px-6"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Duplicate Group For Infinite Scroll */}
          <div
            className="flex shrink-0 items-center gap-4 px-2 sm:gap-6 sm:px-3"
            aria-hidden="true"
          >
            {clients.map((logo, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex h-20 w-32 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:border-[#CCFF00]/50 hover:bg-white/[0.08] sm:h-28 sm:w-48 sm:px-6"
              >
                <img
                  src={logo}
                  alt=""
                  loading="lazy"
                  className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center">
        <p className="text-sm text-white/50">
          Building partnerships. Creating impact. Growing together.
        </p>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes clients-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-clients-scroll {
          animation: clients-scroll 65s linear infinite;
          width: max-content;
        }

        @media (max-width: 640px) {
          .animate-clients-scroll {
            animation-duration: 45s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-clients-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
