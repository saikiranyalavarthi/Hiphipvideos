"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-black flex justify-center overflow-hidden"
    >
      {/* SECTION CONTAINER */}
      <div className="flex flex-col items-center justify-center px-6 lg:px-12 py-[40px] md:py-[64px] w-full">
        {/* INNER WRAPPER */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="w-full max-w-[1440px] flex flex-col items-center gap-[28px] md:gap-[40px]"
        >
          {/* TITLE + TEXT */}
          <div className="flex flex-col items-center text-center gap-[14px] md:gap-[16px]">
            <h2
              id="final-cta-heading"
              className="text-white text-[24px] sm:text-[30px] md:text-[40px] font-bold leading-[34px] sm:leading-[40px] md:leading-[48px] tracking-tight max-w-[900px]"
            >
              Ready to Create Your{" "}
              <span className="gradient-text">Next High-Impact Video?</span>
            </h2>

            {/* SUPPORTING CONTENT */}
            <p className="text-white/80 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[640px]">
              Bring your product, business, or brand story to life with creative
              video content powered by AI, animation, motion graphics, visual
              effects, design, and storytelling.
            </p>
          </div>

          {/* CTA BUTTON */}
          <motion.a
            href="/quote"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Start your video creation project and get a free discovery call"
            className="
              flex items-center justify-center
              px-[24px] py-[12px]
              rounded-[8px]
              bg-gradient-to-r from-[#CCFF00] to-[#a3ff12]
              text-black
              text-[14px]
              font-semibold
              leading-[20px]
              shadow-lg
              hover:shadow-[0_0_20px_#CCFF00]
              transition-all duration-300
              whitespace-nowrap
            "
          >
            Get a Free Discovery Call
          </motion.a>

          {/* LOCAL BUSINESS INFORMATION */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/40">
            <span>Hyderabad, Telangana, India</span>

            <span className="hidden sm:block text-white/20">•</span>

            <a
              href="tel:+916301022795"
              aria-label="Call Hip Hip Videos"
              className="hover:text-[#CCFF00] transition"
            >
              +91 63021 11807
            </a>

            <span className="hidden sm:block text-white/20">•</span>

            <a
              href="mailto:info@hiphipvideos.com"
              aria-label="Email Hip Hip Videos"
              className="hover:text-[#CCFF00] transition"
            >
              info@hiphipvideos.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
