"use client";

import { motion } from "framer-motion";
import ConnectQuoteSection from "./ContactSection";

export default function ProcessPage() {
  return (
    <section className="bg-black text-white py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <p className="uppercase tracking-widest text-sm text-[#CCFF00] mb-5">
            Our Process
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
            A Process Built to <br />
            <span className="text-[#CCFF00]">Launch, Scale & Lead</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            We follow a flexible, proven, and outcome-driven process designed to
            help businesses of all sizes move faster, build smarter, and scale
            with confidence. From strategy to execution, every step is crafted
            to deliver real business impact.
          </p>
        </motion.div>

        {/* ================= ENTERPRISE PROCESS ================= */}
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For SMEs & Conglomerates
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              An agile, long-term engagement model focused on stability,
              scalability, and continuous optimisation across digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* STEP 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
            >
              <span className="text-[#CCFF00] text-sm font-semibold">
                Step 01
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Discover</h3>

              <p className="text-gray-400 mb-6">
                We begin by deeply understanding your business, users, and
                market landscape. This phase lays the strategic foundation for
                everything that follows.
              </p>

              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Business goals & vision alignment</li>
                <li>• User needs & behavioural insights</li>
                <li>• Market & competitor analysis</li>
              </ul>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
            >
              <span className="text-[#CCFF00] text-sm font-semibold">
                Step 02
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Design</h3>

              <p className="text-gray-400 mb-6">
                Through an iterative and collaborative design process, we
                translate strategy into intuitive and visually engaging digital
                experiences.
              </p>

              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Information architecture</li>
                <li>• Wireframes & interaction design</li>
                <li>• Visual design & prototyping</li>
              </ul>
            </motion.div>

            {/* STEP 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
            >
              <span className="text-[#CCFF00] text-sm font-semibold">
                Step 03
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Build</h3>

              <p className="text-gray-400 mb-6">
                Our engineering team brings designs to life using scalable,
                secure, and performance-focused technologies.
              </p>

              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Frontend & backend development</li>
                <li>• System integrations</li>
                <li>• Quality assurance & optimisation</li>
              </ul>
            </motion.div>
          </div>

          {/* META */}
          <div className="flex flex-wrap gap-10 mt-14 text-sm text-gray-400">
            <p><span className="text-white font-semibold">Suited for:</span> SMEs & Conglomerates</p>
            <p><span className="text-white font-semibold">Timeline:</span> 6–12 Months</p>
            <p><span className="text-white font-semibold">Engagement:</span> Retainer</p>
          </div>
        </div>

        {/* ================= STARTUP PROCESS ================= */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              For Startups
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              A rapid execution model designed to help startups validate ideas,
              launch MVPs, and reach the market faster.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* STEP 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
            >
              <span className="text-[#CCFF00] text-sm font-semibold">
                Step 01
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Build</h3>

              <p className="text-gray-400 mb-6">
                We quickly transform ideas into tangible prototypes, allowing
                you to test assumptions and gather real user feedback.
              </p>

              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Discovery & strategy workshop</li>
                <li>• Rapid prototyping</li>
                <li>• Early validation</li>
              </ul>
            </motion.div>

            {/* STEP 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
            >
              <span className="text-[#CCFF00] text-sm font-semibold">
                Step 02
              </span>
              <h3 className="text-2xl font-bold mt-4 mb-6">Launch</h3>

              <p className="text-gray-400 mb-6">
                We build, test, and deploy a production-ready MVP that is
                scalable, secure, and market-ready.
              </p>

              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Full-stack development</li>
                <li>• QA & performance testing</li>
                <li>• MVP launch & support</li>
              </ul>
            </motion.div>
          </div>

          {/* META */}
          <div className="flex flex-wrap gap-10 mt-14 text-sm text-gray-400">
            <p><span className="text-white font-semibold">Suited for:</span> Startups</p>
            <p><span className="text-white font-semibold">Timeline:</span> 2–3 Months</p>
            <p><span className="text-white font-semibold">Engagement:</span> Fixed Duration</p>
          </div>

          {/* CTA */}
          <div className="mt-20">
            <a
              href="#contact"
              className="inline-block bg-[#CCFF00] text-black font-semibold
                         px-14 py-4 rounded-full text-lg
                         hover:scale-105 hover:shadow-xl transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

      </div>
      <ConnectQuoteSection/>
    </section>
   
  );
}
