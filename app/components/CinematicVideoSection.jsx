"use client";

import { motion } from "framer-motion";

export default function CinematicVideoSection() {
  return (
    <section className="relative w-full h-[650px] md:h-[780px] overflow-hidden bg-black">
      {/* FULL SCREEN VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/cinematic-video.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CINEMATIC GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
          }}
          className="max-w-[750px]"
        >
          {/* SMALL LABEL */}
          <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-white/60">
            CREATIVE VIDEO PRODUCTION
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            We create films that make brands unforgettable
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-[580px] text-sm leading-6 text-white/70 sm:text-base">
            From powerful advertisements to cinematic brand films, we create
            visual stories that connect with audiences and move businesses
            forward.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <motion.a
              href="/quote"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-full bg-[#CCFF00] px-6 py-3 text-sm font-bold text-black transition hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
            >
              Start Your Project
            </motion.a>

            {/* <motion.a
              href="/portfolio"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="rounded-full border border-white/40 bg-black/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
            >
              Explore Our Work →
            </motion.a> */}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM CINEMATIC LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
