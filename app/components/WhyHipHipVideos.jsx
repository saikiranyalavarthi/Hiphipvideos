"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const strengths = [
  {
    number: "01",
    title: "Strategy Before Production",
    description:
      "Every project starts with understanding your audience, message and business objective before we move into creative production.",
  },
  {
    number: "02",
    title: "Creative Storytelling",
    description:
      "We turn ideas, products and complex messages into clear visual stories that are designed to hold attention.",
  },
  {
    number: "03",
    title: "Production & Post-Production",
    description:
      "From filming and editing to motion graphics, animation, sound design and final delivery, we manage the production journey.",
  },
  {
    number: "04",
    title: "Built for Your Brand",
    description:
      "We create videos around your brand identity, audience and communication goals instead of using a one-size-fits-all approach.",
  },
  {
    number: "05",
    title: "Modern Visual Production",
    description:
      "Our approach combines cinematic production, editing, motion design and modern visual storytelling to create memorable content.",
  },
  {
    number: "06",
    title: "Focused on Results",
    description:
      "A beautiful video is only the beginning. We focus on creating content that communicates clearly and supports your marketing goals.",
  },
];

export default function WhyHipHipVideos() {
  return (
    <section
      aria-labelledby="why-hiphip-heading"
      className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#CCFF00]/5 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        {/* HEADER */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            Why HipHipVideos
          </p>

          <h2
            id="why-hiphip-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            More Than Video Production.{" "}
            <span className="text-[#CCFF00]">We Build Visual Stories.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            From strategy and creative development to production and
            post-production, HipHipVideos brings the complete video creation
            process together to help brands tell better stories.
          </p>
        </motion.div>

        {/* STRENGTHS GRID */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.div
              key={item.number}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group relative bg-[#050505] p-7 transition-all duration-300 hover:bg-white/[0.035] sm:p-8 lg:p-9"
            >
              {/* NUMBER */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#CCFF00]">
                  {item.number}
                </span>

                <span className="h-px w-10 bg-white/10 transition-all duration-300 group-hover:w-16 group-hover:bg-[#CCFF00]" />
              </div>

              {/* TITLE */}
              <h3 className="mt-10 text-xl font-bold leading-7 text-white transition-colors duration-300 group-hover:text-[#CCFF00] sm:text-2xl">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-6 text-white/50 sm:text-[15px] sm:leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM TRUST STRIP */}
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
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:mt-16 lg:flex-row lg:px-10"
        >
          <div>
            <p className="text-lg font-semibold text-white sm:text-xl">
              Have an idea for your next video?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Let's turn it into something worth watching.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-[8px] border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00]"
            >
              Explore Our Work
            </Link>

            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-[8px] bg-[#CCFF00] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
            >
              Get a Free Discovery Call
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
