"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    "Featured",
    "Product Ads",
    "Product Demos",
    "App & SaaS",
    "Real Estate",
    "Franchise Videos",
    "Pitch Videos",
    "Business Explainers",
    "Motion Graphics",
    "Animation Videos",
  ];

  const projects = [
    {
      title: "BlueStone",
      category: "Product Ads",
      type: "Premium jewellery advertising with cinematic product visuals.",
      video: "/videos/BlueStone.mp4",
    },
    {
      title: "Borosil",
      category: "Product Ads",
      type: "Home and kitchen product advertising.",
      video: "/videos/borosil.mp4",
    },
    {
      title: "FabIndia",
      category: "Product Ads",
      type: "Fashion, lifestyle and brand storytelling.",
      video: "/videos/Fab India.mp4",
    },
    {
      title: "Hidesign",
      category: "Product Ads",
      type: "Luxury leather and fashion brand visuals.",
      video: "/videos/Hidesign.mp4",
    },
    {
      title: "Neeman's",
      category: "Product Ads",
      type: "Footwear advertising with modern product visuals.",
      video: "/videos/neeman.mp4",
    },
    {
      title: "Sleepy Owl",
      category: "Product Ads",
      type: "Coffee product advertising and brand storytelling.",
      video: "/videos/sleepyowl.mp4",
    },
    {
      title: "Slurrp Farm",
      category: "Product Ads",
      type: "Food product visuals for a modern nutrition brand.",
      video: "/videos/Slurrp Farm.mp4",
    },
    {
      title: "Supertails",
      category: "Product Ads",
      type: "Pet care product and lifestyle video content.",
      video: "/videos/Supertails.mp4",
    },
    {
      title: "The Summer House",
      category: "Product Ads",
      type: "Fashion and lifestyle brand storytelling.",
      video: "/videos/The Summer House.mp4",
    },
    {
      title: "Vaya",
      category: "Product Ads",
      type: "Lifestyle product promotional visuals.",
      video: "/videos/vaya.mp4",
    },
    {
      title: "Yoga Bar",
      category: "Product Ads",
      type: "Food and nutrition product advertising.",
      video: "/videos/Yoga Bar .mp4",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("Featured");

  const filteredProjects =
    activeCategory === "Featured"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="w-full overflow-hidden bg-black text-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        {/* PORTFOLIO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#CCFF00] sm:text-sm">
            Our Portfolio
          </p>

          <h2
            id="portfolio-heading"
            className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Product & Business Video Creation
          </h2>

          <div className="mt-5 h-[3px] w-16 rounded-full bg-[#CCFF00]" />

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Explore our creative work across product advertisements, brand
            films, business videos, animation and digital storytelling. We
            create impactful visuals that help brands capture attention and
            communicate their value.
          </p>
        </motion.div>

        {/* CATEGORY FILTER */}
        <div className="mb-10 w-full">
          <div
            className="flex flex-wrap gap-2 sm:gap-3"
            role="tablist"
            aria-label="Portfolio categories"
          >
            {industries.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  role="tab"
                  aria-selected={active}
                  className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 sm:px-5 sm:py-3 sm:text-sm ${
                    active
                      ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                      : "border-white/20 bg-transparent text-white/75 hover:border-white hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* PORTFOLIO GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition-colors duration-300 hover:border-white/25"
              >
                {/* VIDEO */}
                <div className="relative aspect-video overflow-hidden bg-[#111]">
                  <video
                    src={project.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    aria-label={`${project.title} portfolio video`}
                  />

                  {/* SUBTLE BOTTOM FADE */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* CATEGORY */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md sm:text-xs">
                    {project.category}
                  </span>
                </div>

                {/* PROJECT DETAILS */}
                <div className="relative px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/50">
                    {project.type}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black sm:px-8"
          >
            Explore Full Portfolio
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
