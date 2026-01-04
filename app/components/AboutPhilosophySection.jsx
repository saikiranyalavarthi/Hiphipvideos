"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophySection() {
  return (
    <section className="bg-black text-white py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mb-24"
        >
          <p className="uppercase tracking-widest text-sm text-[#CCFF00] mb-5">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            No House Style. <br />
            <span className="text-[#CCFF00]">Only Great Work.</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            We have no allegiance to a single style, medium, or method.
            Every project begins with a blank canvas — shaped by the story,
            the audience, and the goal.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              We pride ourselves on creating best-in-class work for any kind of
              client — big or small, established or emerging, commercial or
              purpose-driven.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Our approach is flexible by design. We adapt our creative process
              to the challenge, not the other way around.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-white/10 rounded-3xl p-10"
          >
            <h3 className="text-2xl font-bold mb-6">
              Creativity Is Our <span className="text-[#CCFF00]">North Star</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              We come to work every day to create powerful stories, moments, and
              messages that resonate.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our mission is simple: put more of the budget into the work itself,
              not the processes around it — so the final result is bold,
              effective, and unforgettable.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
