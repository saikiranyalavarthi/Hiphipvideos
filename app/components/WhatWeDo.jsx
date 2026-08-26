"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Commercial Video Production",
    description:
      "Professional commercial video production that turns your brand message into engaging visual stories for campaigns, advertising and digital marketing.",
    href: "/services/commercial-video-production",
  },
  {
    title: "Corporate Video Production",
    description:
      "Corporate films, company profile videos, brand stories and business videos that communicate your company's message clearly and professionally.",
    href: "/services/corporate-video-production",
  },
  {
    title: "Product Video Production",
    description:
      "High-quality product videos that demonstrate features, benefits and real-world use cases to help brands present products clearly and drive customer interest.",
    href: "/services/product-video-production",
  },
  {
    title: "Explainer Video Production",
    description:
      "Engaging explainer videos that simplify products, SaaS platforms, technology, services and complex business ideas for your audience.",
    href: "/services/explainer-videos",
  },
];

export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        {/* SECTION HEADER */}
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
          {/* SMALL LABEL */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            Video Production Services
          </p>

          {/* SEO H2 */}
          <h2
            id="what-we-do-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Professional Video Production{" "}
            <span className="text-[#CCFF00]">Services for Brands</span>
          </h2>

          {/* SEO DESCRIPTION */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            HipHipVideos provides end-to-end video production services for
            brands, startups and businesses. From creative concepts and
            scripting to filming, editing, motion graphics and final delivery,
            we create videos designed to communicate your message and support
            your marketing goals.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
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
              className="group"
            >
              <Link
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.05] hover:shadow-[0_15px_50px_rgba(204,255,0,0.08)] sm:p-7"
              >
                {/* NUMBER */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#CCFF00]">
                    0{index + 1}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#CCFF00]"
                  >
                    →
                  </span>
                </div>

                {/* SERVICE TITLE */}
                <h3 className="text-xl font-bold leading-7 text-white transition-colors duration-300 group-hover:text-[#CCFF00]">
                  {service.title}
                </h3>

                {/* SERVICE DESCRIPTION */}
                <p className="mt-4 text-sm leading-6 text-white/50">
                  {service.description}
                </p>

                {/* LEARN MORE */}
                <div className="mt-7 text-sm font-semibold text-white/50 transition-colors duration-300 group-hover:text-[#CCFF00]">
                  Explore Service →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SERVICE SCOPE */}
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
          className="mx-auto mt-12 max-w-4xl text-center lg:mt-16"
        >
          <p className="text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
            Our video production capabilities also include brand films, pitch
            videos, advertisements, promotional videos, motion graphics,
            documentaries and custom video content for different business and
            marketing requirements.
          </p>
        </motion.div>

        {/* BOTTOM CTA */}
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
          className="mt-10 flex justify-center lg:mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center rounded-lg border border-[#CCFF00]/30 px-6 py-3 text-sm font-semibold text-[#CCFF00] transition-all duration-300 hover:bg-[#CCFF00] hover:text-black"
          >
            Explore All Video Production Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
