"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-black px-4 py-10 sm:px-6 md:py-16"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* SOLID ROUNDED CTA CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[24px] bg-white px-6 py-12 text-black sm:rounded-[32px] sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* LABEL */}
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/50 sm:text-sm">
              Let&apos;s Create Something
            </p>

            {/* HEADING */}
            <h2
              id="final-cta-heading"
              className="max-w-[900px] text-[30px] font-bold leading-[1.1] tracking-tight sm:text-[44px] md:text-[56px] lg:text-[68px]"
            >
              Ready to Create Your
              <br className="hidden sm:block" />
              <span className="text-black/50">
                {" "}Next High-Impact Video?
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-black/60 sm:text-[17px] sm:leading-8">
              Bring your product, business, or brand story to life with creative
              video content built around your vision, audience, and goals.
            </p>

            {/* CTA BUTTON */}
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-black/80 sm:px-10 sm:py-[18px] sm:text-base"
            >
              Start Your Video Project
              <span className="text-lg">→</span>
            </motion.a>

            {/* CONTACT DETAILS */}
            <div className="mt-10 flex flex-col items-center gap-3 text-xs text-black/45 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 sm:text-sm">
              <span>Hyderabad, Telangana, India</span>

              <span className="hidden sm:block">•</span>

              <a
                href="tel:+916302111807"
                className="transition-colors hover:text-black"
              >
                +91 63021 11807
              </a>

              <span className="hidden sm:block">•</span>

              <a
                href="mailto:info@hiphipvideos.com"
                className="transition-colors hover:text-black"
              >
                info@hiphipvideos.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}