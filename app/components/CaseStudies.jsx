"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const caseStudies = [
  {
    number: "01",
    category: "SaaS & Technology Video Creation",
    title: "SaaS Product Launch Video",
    description:
      "A product-focused video concept designed to explain a SaaS platform, highlight its key features, communicate its value proposition and simplify complex technology through visual storytelling, animation and motion graphics.",
    services: "SaaS Video • Product Explainer • AI Visuals • Motion Graphics",
    href: "/case-studies/saas-product-launch",
  },
  {
    number: "02",
    category: "Product & D2C Video Creation",
    title: "Product Brand Campaign",
    description:
      "A creative product video campaign built to showcase product features, communicate brand identity and create engaging visual content for digital advertising, social media, marketing campaigns and customer communication.",
    services:
      "Product Video • Product Advertising • Brand Content • Creative Campaigns",
    href: "/case-studies/product-brand-campaign",
  },
  {
    number: "03",
    category: "Business & Brand Video Creation",
    title: "Corporate Brand Film",
    description:
      "A business-focused video concept created to communicate a company's story, services, capabilities and brand identity through creative visuals, storytelling, motion graphics, animation and video content.",
    services:
      "Business Video • Brand Storytelling • Company Profile • Visual Communication",
    href: "/case-studies/corporate-brand-film",
  },
];

export default function CaseStudies() {
  return (
    <section
      aria-labelledby="case-studies-heading"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#CCFF00]/5 blur-[140px]"
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
          className="max-w-4xl"
        >
          {/* LABEL */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            Video Creation Case Studies
          </p>

          {/* SEO H2 */}
          <h2
            id="case-studies-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Video Ideas Designed Around{" "}
            <span className="text-[#CCFF00]">Real Business Goals</span>
          </h2>

          {/* SEO DESCRIPTION */}
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Explore video creation case studies across SaaS, technology, product
            brands and businesses. At Hip Hip Videos, we combine creative
            strategy, AI-powered visuals, animation, motion graphics, visual
            effects, graphic design and storytelling to create product-focused
            and business-focused video content.
          </p>
        </motion.div>

        {/* CASE STUDIES */}
        <div className="mt-14 space-y-5 lg:mt-20">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.href}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-300 hover:border-[#CCFF00]/30 hover:bg-white/[0.045]"
            >
              <Link
                href={study.href}
                aria-label={`View ${study.title} case study`}
                className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[100px_1fr_auto] lg:items-center lg:gap-10 lg:p-10"
              >
                {/* NUMBER */}
                <div
                  aria-hidden="true"
                  className="text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-[#CCFF00]/30 sm:text-5xl"
                >
                  {study.number}
                </div>

                {/* CONTENT */}
                <div>
                  {/* CATEGORY */}
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#CCFF00]">
                    {study.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#CCFF00] sm:text-3xl">
                    {study.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-3xl text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                    {study.description}
                  </p>

                  {/* SERVICES */}
                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-white/30">
                    {study.services}
                  </p>
                </div>

                {/* VIEW BUTTON */}
                <div className="flex items-center gap-2 text-sm font-semibold text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#CCFF00]">
                  <span>View Case Study</span>

                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* SUPPORTING SEO CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mt-12 max-w-4xl lg:mt-16"
        >
          <p className="text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
            Our video creation portfolio explores different creative approaches
            to product video creation, business videos, product advertisements,
            SaaS explainer videos, AI video creation, animated product videos,
            brand campaigns, promotional videos, motion graphics, 3D product
            animation and visual storytelling. We develop video content using
            AI, animation, graphic design, visual effects and real footage
            whenever it best serves the creative direction and communication
            objectives of a project.
          </p>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="mt-12 flex flex-col items-center text-center lg:mt-16"
        >
          <p className="text-sm text-white/40">
            Have a product or business video idea?
          </p>

          <Link
            href="/quote"
            className="mt-4 inline-flex items-center justify-center rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
          >
            Start Your Video Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
