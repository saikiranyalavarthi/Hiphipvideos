"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HyderabadSection() {
  return (
    <section
      aria-labelledby="hyderabad-heading"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#CCFF00]/5 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* LABEL */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Hyderabad Video Production
            </p>

            {/* SEO H2 */}
            <h2
              id="hyderabad-heading"
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Video Production Company in{" "}
              <span className="text-[#CCFF00]">Hyderabad</span>
            </h2>

            {/* LOCAL SEO CONTENT */}
            <p className="mt-6 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos is a creative video production company based in
              Hyderabad, Telangana. We create commercial videos, corporate
              films, product videos, advertisements, explainer videos, brand
              films and other visual content for brands, startups and
              businesses.
            </p>

            <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Our video production team handles the complete journey from
              creative concept and scripting to pre-production, filming,
              editing, motion graphics, sound design and final delivery. We
              create content for websites, social media, digital advertising,
              product launches and brand campaigns.
            </p>

            <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Based in Jubilee Hills, Hyderabad, we work with local businesses
              as well as clients across India. Every project is planned around
              the client's audience, message, creative direction and business
              objectives.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#CCFF00] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
              >
                Start Your Video Project
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-[8px] border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                About HipHipVideos
              </Link>
            </div>
          </motion.div>

          {/* RIGHT BUSINESS INFORMATION */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          >
            {/* CARD HEADER */}
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CCFF00]">
                  Our Hyderabad Studio
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  HipHipVideos
                </h3>
              </div>

              <div
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/10 text-[#CCFF00]"
              >
                ●
              </div>
            </div>

            {/* ADDRESS */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                Studio Address
              </p>

              <address className="mt-2 not-italic text-sm leading-6 text-white/65 sm:text-base">
                Sattva Magnus Commercial Building,
                <br />
                Shaikpet, Jubilee Hills,
                <br />
                Hyderabad, Telangana 500008
              </address>
            </div>

            {/* PHONE */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                Phone
              </p>

              <a
                href="tel:+916301022795"
                className="mt-2 block text-base font-semibold text-white transition-colors hover:text-[#CCFF00]"
                aria-label="Call HipHipVideos"
              >
                +91 63021 11807
              </a>
            </div>

            {/* EMAIL */}
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/35">
                Email
              </p>

              <a
                href="mailto:info@hiphipvideos.com"
                className="mt-2 block break-all text-base font-semibold text-white transition-colors hover:text-[#CCFF00]"
                aria-label="Email HipHipVideos"
              >
                info@hiphipvideos.com
              </a>
            </div>

            {/* LOCATION LINK */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sattva+Magnus+Commercial+Building+Shaikpet+Jubilee+Hills+Hyderabad+Telangana+500008"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find HipHipVideos in Hyderabad on Google Maps"
              className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
            >
              <span>Find HipHipVideos in Hyderabad</span>

              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        {/* LOCAL SERVICE AREA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12 border-t border-white/10 pt-8 lg:mt-16"
        >
          <p className="text-center text-sm leading-6 text-white/35 sm:text-base">
            HipHipVideos serves brands and businesses in Hyderabad, Telangana
            and works with clients across India and beyond for creative video
            production projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
