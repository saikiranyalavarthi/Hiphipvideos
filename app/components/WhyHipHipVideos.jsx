"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const strengths = [
  {
    number: "01",
    title: "Strategy Before Creation",
    description:
      "Every video begins with understanding your business, product, audience and goals. We develop a creative direction around what your video needs to communicate.",
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
      className="relative overflow-hidden bg-white py-20 text-black sm:py-24 md:py-32"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-black/50 sm:text-sm">
            Why Hip Hip Videos
          </p>

          <h2
            id="why-hiphip-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            More Than Videos.
            <br />
            <span className="text-black/50">We Create Visual Experiences.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
            Hip Hip Videos is a creative video production company focused on
            product and business videos. We bring together AI, animation, motion
            graphics, visual effects, graphic design, storytelling and video
            editing to transform ideas into engaging visual content for brands
            and businesses.
          </p>
        </motion.div>

        {/* STRENGTHS GRID */}
        <div className="mt-14 grid overflow-hidden rounded-2xl border border-black/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group border-b border-r border-black/10 bg-white p-7 transition-colors duration-300 hover:bg-neutral-50 sm:p-8 lg:p-9"
            >
              {/* NUMBER */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-black/40">
                  {item.number}
                </span>

                <span className="h-px w-10 bg-black/20 transition-all duration-300 group-hover:w-16 group-hover:bg-black" />
              </div>

              {/* TITLE */}
              <h3 className="mt-10 text-xl font-bold leading-7 text-black sm:text-2xl">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm leading-6 text-black/60 sm:text-[15px] sm:leading-7">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-black/10 bg-neutral-50 p-6 sm:p-8 lg:mt-16 lg:flex-row lg:px-10"
        >
          {/* CTA TEXT */}
          <div>
            <p className="text-lg font-semibold text-black sm:text-xl">
              Have an idea for your next video?
            </p>

            <p className="mt-1 text-sm text-black/50">
              Let's transform your idea into engaging visual content.
            </p>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {/* EXPLORE OUR WORK */}
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-black/15 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-black hover:bg-white"
              style={{
                color: "#000000",
                WebkitTextFillColor: "#000000",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  WebkitTextFillColor: "#000000",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                Explore Our Work
              </span>
            </Link>

            {/* PRIMARY CTA */}
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
              style={{
                color: "#ffffff",
                WebkitTextFillColor: "#ffffff",
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  WebkitTextFillColor: "#ffffff",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                Start Your Video Project →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
