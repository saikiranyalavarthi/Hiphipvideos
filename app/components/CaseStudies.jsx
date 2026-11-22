"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    number: "01",
    brand: "Calendly",
    category: "SaaS & Technology",
    title: "Product Video & SaaS Storytelling",
    description:
      "A creative video experience showcasing Calendly's scheduling platform, highlighting its product functionality, seamless scheduling experience and ability to simplify meeting coordination for businesses and professionals.",
    services: "SaaS Video • Product Storytelling • Technology Video",
    href: "/case-studies/calendly",
  },
  {
    number: "02",
    brand: "Owlet",
    category: "Baby Care & Consumer Products",
    title: "Product Storytelling & Brand Video",
    description:
      "A product-focused video highlighting Owlet's baby care technology through engaging visuals, product storytelling and creative communication designed to introduce product features and connect with families.",
    services: "Product Video • Brand Storytelling • Product Advertising",
    href: "/case-studies/owlet",
  },
  {
    number: "03",
    brand: "Slurrp Farm",
    category: "Food & Nutrition",
    title: "Food Product Advertisement",
    description:
      "A creative food and product video designed to bring Slurrp Farm products to life through engaging visuals, product presentation, creative storytelling and advertising-focused content.",
    services: "Food Advertising • Product Video • Brand Campaign",
    href: "/case-studies/slurrp-farm",
  },
];

export default function CaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-32"
    >
      {/* SUBTLE BACKGROUND EFFECT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-sm">
            Selected Projects
          </p>

          <h2
            id="case-studies-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Real Brands.{" "}
            <span className="text-white/50">Real Video Projects.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            Explore selected video projects created for brands across SaaS,
            technology, food, consumer products and business. Each project
            combines creative direction, visual storytelling and video
            production to communicate products and brands effectively.
          </p>
        </motion.div>

        {/* CASE STUDIES */}
        <div className="mt-14 space-y-0 border-t border-white/15 lg:mt-20">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.brand}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-white/15"
            >
              <Link
                href={study.href}
                className="grid gap-6 py-8 transition-all duration-300 sm:py-10 lg:grid-cols-[100px_1fr_220px] lg:items-center lg:gap-10 lg:py-14"
              >
                {/* PROJECT NUMBER */}
                <span className="text-3xl font-medium text-white/20 transition-colors duration-300 group-hover:text-white sm:text-4xl">
                  {study.number}
                </span>

                {/* PROJECT DETAILS */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                    {study.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                    {study.brand}
                  </h3>

                  <p className="mt-2 text-base font-medium text-white/70 sm:text-lg">
                    {study.title}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">
                    {study.description}
                  </p>

                  <p className="mt-5 text-xs leading-6 text-white/30 sm:text-sm">
                    {study.services}
                  </p>
                </div>

                {/* VIEW PROJECT */}
                <div className="flex items-center justify-start lg:justify-end">
                  <span className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    View Project
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center text-center lg:mt-20"
        >
          <p className="text-sm text-white/40 sm:text-base">
            Have a product or business video idea?
          </p>

          <Link
            href="/quote"
            className="mt-5 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-300 sm:px-9"
          >
            Start Your Video Project
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
