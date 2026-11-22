"use client";

import { motion } from "framer-motion";

export default function AboutServices() {
  return (
    <section
      aria-labelledby="about-heading"
      className="flex justify-center overflow-hidden bg-white text-black"
    >
      <div className="w-full max-w-[1440px]">
        {/* WHO WE ARE */}
        <div className="flex flex-col items-start gap-8 px-6 py-16 md:flex-row md:gap-16 md:px-12 md:py-24">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="shrink-0 md:w-[280px]"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
              About Hip Hip Videos
            </p>

            <h2
              id="about-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-black md:text-4xl"
            >
              Who We Are
            </h2>

            <span className="mt-4 block h-[3px] w-12 rounded-full bg-black" />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            {/* MAIN DESCRIPTION */}
            <p className="text-lg font-normal leading-8 text-neutral-900 sm:text-xl md:text-2xl lg:text-[28px] lg:leading-[1.5]">
              Hip Hip Videos is a creative video creation company producing
              product-focused and business-focused videos for brands, startups
              and businesses. We transform ideas into engaging visual
              experiences through AI, animation, motion graphics, visual
              effects, graphic design, storytelling and real footage.
            </p>

            {/* SUPPORTING DESCRIPTION */}
            <p className="mt-6 max-w-4xl text-sm leading-7 text-neutral-600 sm:text-base md:text-lg">
              From product advertisements and animated product videos to
              business explainers, SaaS videos, promotional campaigns and brand
              storytelling, we develop creative video content that helps
              businesses showcase products, explain services, communicate ideas
              and connect with their audiences.
            </p>

            {/* LOCATION & GLOBAL REACH */}
            <p className="mt-5 max-w-4xl text-sm leading-7 text-neutral-500 sm:text-base">
              Based in Hyderabad, India, Hip Hip Videos works with brands and
              businesses across India and international markets, delivering
              creative video solutions for digital marketing, advertising,
              business communication, product promotion and online platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
