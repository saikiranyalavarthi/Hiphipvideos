"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Catch Up",
    category: "Product Film",
    video: "/videos/project-1.mp4",
  },
  {
    title: "Simply Kiddos",
    category: "Commercial",
    video: "/videos/project-2.mp4",
  },
  {
    title: "Legacy AI",
    category: "Brand Film",
    video: "/videos/project-3.mp4",
  },
  {
    title: "Redefining Luxury",
    category: "Corporate Film",
    video: "/videos/project-4.mp4",
  },
  {
    title: "Pure Moments",
    category: "Advertisement",
    video: "/videos/project-5.mp4",
  },
  {
    title: "Start Something",
    category: "Brand Campaign",
    video: "/videos/project-6.mp4",
  },
];

export default function BestCreations() {
  return (
    <section className="w-full bg-black py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* HEADER */}
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            {/* SMALL LABEL */}
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-white/40 text-[8px] text-white/70">
                ✦
              </span>

              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/50">
                Featured Work
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Our Best <span className="text-[#CCFF00]">Creations</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/50">
              Explore our latest video production work created for ambitious
              brands, businesses and campaigns.
            </p>
          </div>

          {/* ALL PROJECTS */}
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-white transition hover:border-[#CCFF00]/60 hover:bg-[#CCFF00] hover:text-black"
          >
            All Projects
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-black">
              →
            </span>
          </motion.a>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.video}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative aspect-[16/9] overflow-hidden rounded-xl bg-zinc-900"
            >
              {/* VIDEO */}
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* HOVER */}
              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

              {/* PROJECT CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                {/* CATEGORY */}
                <span className="inline-block rounded-full border border-white/30 bg-black/40 px-2.5 py-1 text-[8px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="mt-2 text-base font-semibold text-white sm:text-lg">
                  {project.title}
                </h3>

                {/* VIEW PROJECT */}
                <div className="mt-2 flex items-center gap-2 text-[10px] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00]" />
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* PLAY ICON */}
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition duration-300 group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black">
                ▶
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
