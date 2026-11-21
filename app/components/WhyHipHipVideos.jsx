"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const strengths = [
  {
    number: "01",
    title: "Strategy Before Creation",
    description:
      "Every video begins with understanding your business, product, audience and goals. We develop creative direction around what your video needs to communicate.",
  },
  {
    number: "02",
    title: "Creative Visual Storytelling",
    description:
      "We transform ideas, products and complex business messages into engaging visual stories using creative concepts, design and storytelling.",
  },
  {
    number: "03",
    title: "AI, Animation & Motion",
    description:
      "We combine AI video creation, animation, motion graphics, graphic design and visual effects to bring creative ideas to life.",
  },
  {
    number: "04",
    title: "Built Around Your Brand",
    description:
      "Every video is developed around your brand identity, product, audience and communication objectives rather than a generic creative approach.",
  },
  {
    number: "05",
    title: "Modern Video Creation",
    description:
      "Our creative process combines AI, digital design, animation, editing, VFX and real footage whenever needed to create engaging visual content.",
  },
  {
    number: "06",
    title: "Focused on Business Goals",
    description:
      "We create videos that do more than look visually appealing. Our focus is on communicating your message, showcasing your offering and supporting your marketing objectives.",
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

      <div className="relative mx-auto w-full max-w-360 px-6 lg:px-12">
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
            Why Hip Hip Videos
          </p>

          <h2
            id="why-hiphip-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            More Than Videos.
            <br />
            <span className="text-[#CCFF00]">
              We Create Visual Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Hip Hip Videos is a creative video creation company focused on
            product and business videos. We bring together AI, animation, motion
            graphics, visual effects, graphic design, storytelling and video
            editing to transform ideas into engaging visual content for brands
            and businesses.
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
              Let's transform your idea into engaging visual content.
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
              Start Your Video Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
