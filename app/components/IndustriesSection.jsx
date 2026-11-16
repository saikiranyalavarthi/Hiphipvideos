"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    "Featured",
    "Products",
    "Gadgets",
    "Automobiles",
    "Real Estate",
    "Fashion",
    "Industrial",
    "Corporate",
    "Explainers",
    "Documentaries",
    "Tech",
  ];

  // Replace these sample video filenames with your actual MP4 filenames.

  const projects = [
    {
      title: "BlueStone",
      length: "Duration not specified",
      industry: "Products",
      type: "Jewellery Brand Commercial",
      video: "/videos/BlueStone.mp4",
    },
    {
      title: "Borosil",
      length: "Duration not specified",
      industry: "Products",
      type: "Home & Kitchen Product Video",
      video: "/videos/borosil.mp4",
    },
    {
      title: "FabIndia",
      length: "Duration not specified",
      industry: "Fashion",
      type: "Fashion & Lifestyle Film",
      video: "/videos/Fab India.mp4",
    },
    {
      title: "Hidesign",
      length: "Duration not specified",
      industry: "Fashion",
      type: "Luxury Fashion Commercial",
      video: "/videos/Hidesign.mp4",
    },
    {
      title: "Neeman's",
      length: "Duration not specified",
      industry: "Products",
      type: "Footwear Brand Commercial",
      video: "/videos/neeman.mp4",
    },
    {
      title: "Sleepy Owl",
      length: "Duration not specified",
      industry: "Products",
      type: "Coffee Brand Commercial",
      video: "/videos/sleepyowl.mp4",
    },
    {
      title: "Slurrp Farm",
      length: "Duration not specified",
      industry: "Products",
      type: "Food & Nutrition Commercial",
      video: "/videos/Slurrp Farm.mp4",
    },
    {
      title: "Supertails",
      length: "Duration not specified",
      industry: "Products",
      type: "Pet Care Brand Commercial",
      video: "/videos/Supertails.mp4",
    },
    {
      title: "The Summer House",
      length: "Duration not specified",
      industry: "Fashion",
      type: "Fashion & Lifestyle Commercial",
      video: "/videos/The Summer House.mp4",
    },
    {
      title: "Vaya",
      length: "Duration not specified",
      industry: "Products",
      type: "Lifestyle Product Commercial",
      video: "/videos/vaya.mp4",
    },
    {
      title: "Yoga Bar",
      length: "Duration not specified",
      industry: "Products",
      type: "Food & Nutrition Commercial",
      video: "/videos/Yoga Bar .mp4",
    },
  ];

  const [activeIndustry, setActiveIndustry] = useState("Featured");

  const filteredProjects =
    activeIndustry === "Featured"
      ? projects
      : projects.filter((item) => item.industry === activeIndustry);

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="flex justify-center overflow-hidden bg-black text-white"
    >
      <div className="flex w-full max-w-[1440px] flex-col items-center px-6 py-[40px] md:px-12 md:py-[48px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-[20px] w-full"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#CCFF00] sm:text-sm">
            Our Work
          </p>

          <h2
            id="portfolio-heading"
            className="text-[24px] font-semibold leading-[36px] sm:text-[28px] md:text-[32px] md:leading-[40px]"
          >
            Video Production Portfolio
          </h2>

          <div className="mt-2 h-[3px] w-[60px] rounded-full bg-gradient-to-r from-[#CCFF00] to-transparent" />

          <p className="mt-5 max-w-3xl text-[14px] leading-6 text-white/60 sm:text-[16px] sm:leading-7">
            Explore selected commercial videos, product videos, corporate films,
            explainer videos, promotional films, motion graphics and branded
            content created by HipHipVideos for businesses and brands.
          </p>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div
          className="mb-[30px] flex w-full flex-wrap gap-[10px] md:mb-[40px] md:gap-[12px]"
          role="tablist"
          aria-label="Filter video portfolio by category"
        >
          {industries.map((item, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setActiveIndustry(item)}
              whileTap={{ scale: 0.95 }}
              role="tab"
              aria-selected={activeIndustry === item}
              className={`rounded-[10px] border px-[16px] py-[10px] text-[13px] transition-all md:text-[14px] ${
                activeIndustry === item
                  ? "border-[#CCFF00] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black shadow-[0_0_10px_#CCFF00]"
                  : "border-[#757575] text-white hover:border-[#CCFF00]"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* VIDEO GRID */}
        <motion.div
          layout
          className="grid w-full grid-cols-1 gap-[20px] sm:grid-cols-2 md:gap-[24px] lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group relative w-full overflow-hidden rounded-[12px] border border-white/10 bg-[#111] transition-all duration-300 hover:border-[#CCFF00]/50"
              >
                {/* VIDEO PLAYER */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <video
                    src={item.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                    aria-label={`${item.title} - ${item.type}`}
                  >
                    Your browser does not support HTML video.
                  </video>

                  {/* CATEGORY LABEL */}
                  <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-[#CCFF00]/40 bg-black/75 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#CCFF00] sm:text-xs">
                    {item.industry}
                  </div>
                </div>

                {/* VIDEO DETAILS */}
                <div className="p-4 sm:p-5">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="text-[16px] font-semibold text-white transition-colors group-hover:text-[#CCFF00] md:text-[18px]">
                      {item.title}
                    </h3>

                    <span className="shrink-0 rounded-md bg-white/10 px-2 py-1 text-[10px] text-white/60 sm:text-xs">
                      {item.length}
                    </span>
                  </div>

                  <p className="text-[13px] leading-6 text-white/50 sm:text-[14px]">
                    {item.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* PORTFOLIO CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-[35px] md:mt-[45px]"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-[8px] border border-[#CCFF00]/40 px-6 py-3 text-sm font-semibold text-[#CCFF00] transition-all duration-300 hover:bg-[#CCFF00] hover:text-black md:text-base"
          >
            View Full Video Portfolio →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
