"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Commercial Video Creation",
    description:
      "Creative advertising videos designed to showcase brands, communicate marketing messages and capture audience attention through powerful visual storytelling.",
    href: "/services/commercial-video-creation",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Business Video Creation",
    description:
      "Company profile videos, brand stories and corporate communication content that showcase your business identity, services and vision.",
    href: "/services/business-video-creation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Product Video Creation",
    description:
      "Creative product videos combining cinematic visuals, motion graphics and storytelling to highlight features, benefits and value.",
    href: "/services/product-video-creation",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Explainer Video Creation",
    description:
      "Engaging videos that simplify apps, SaaS platforms, technology, services and complex business ideas through visual storytelling.",
    href: "/services/explainer-video-creation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function WhatWeDo() {
  return (
    <section
      aria-labelledby="what-we-do-heading"
      className="relative overflow-hidden bg-white py-20 text-black sm:py-24 md:py-28"
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500 sm:text-sm">
            Video Creation Services
          </p>

          <h2
            id="what-we-do-heading"
            className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Creative Video Creation
            <span className="mt-2 block text-neutral-500">
              Services for Brands & Businesses
            </span>
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#CCFF00]" />

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            Hip Hip Videos creates product-focused and business-focused videos
            for brands, startups and organizations. From commercial advertising
            and product visuals to business films and explainer videos, we
            transform ideas into engaging visual experiences.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.href}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-neutral-400 hover:shadow-xl sm:min-h-[450px]"
            >
              {/* SERVICE IMAGE */}
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

              {/* TOP DETAILS */}
              <div className="relative z-10 flex items-center justify-between p-5 sm:p-6">
                <span className="text-xs font-medium tracking-[0.15em] text-white/80">
                  VIDEO SERVICES
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-sm text-white transition-all duration-300 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black">
                  ↗
                </span>
              </div>

              {/* CARD CONTENT */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                <span className="mb-3 block text-xs font-medium text-[#CCFF00]">
                  0{index + 1} / 04
                </span>

                <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  {service.description}
                </p>

                {/* BUTTON CTA */}
                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold transition-all duration-300 hover:bg-[#CCFF00]"
                  style={{
                    color: "#000000",
                    WebkitTextFillColor: "#000000",
                  }}
                >
                  <span
                    style={{
                      color: "#000000",
                      WebkitTextFillColor: "#000000",
                      visibility: "visible",
                      opacity: 1,
                    }}
                  >
                    Explore Service
                  </span>

                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      color: "#000000",
                      WebkitTextFillColor: "#000000",
                      visibility: "visible",
                      opacity: 1,
                    }}
                  >
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ADDITIONAL CAPABILITIES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl text-center lg:mt-16"
        >
          <p className="text-sm leading-7 text-neutral-500 sm:text-base sm:leading-8">
            Our creative capabilities include AI-generated videos, product
            advertisements, 3D product animations, SaaS explainers, app
            promotional videos, motion graphics, startup pitch videos, real
            estate videos, brand campaigns and custom visual content.
          </p>
        </motion.div>

        {/* MAIN CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center lg:mt-14"
        >
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[#CCFF00]"
            style={{
              color: "#ffffff",
              WebkitTextFillColor: "#ffffff",
            }}
          >
            <span
              style={{
                color: "#ffffff",
                WebkitTextFillColor: "#ffffff",
                visibility: "visible",
                opacity: 1,
              }}
            >
              Explore All Video Creation Services
            </span>

            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              style={{
                color: "#ffffff",
                WebkitTextFillColor: "#ffffff",
                visibility: "visible",
                opacity: 1,
              }}
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
