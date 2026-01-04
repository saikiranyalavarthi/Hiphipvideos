"use client";

import { motion } from "framer-motion";

export default function ConnectQuoteSection() {
  return (
    <section id="contact" className="bg-[#0b0b0b] text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm text-[#CCFF00] mb-4">
            Let’s Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We Create Videos <br />
            That <span className="text-[#CCFF00]">People Remember</span>
          </h2>

          <p className="text-gray-400 text-lg mb-6 max-w-xl">
            We are a leading explainer video company connecting brands and people
            through tailor-made video content.
          </p>

          <p className="text-gray-400 text-lg max-w-xl">
            Trusted by global brands, we work with startups, scale-ups, and
            Fortune 500 companies worldwide.
          </p>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white text-black rounded-3xl p-10
                     shadow-[0_40px_90px_-30px_rgba(0,0,0,0.4)]"
        >
          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="First Name *" className="input" />
            <input type="text" placeholder="Last Name *" className="input" />
          </div>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email *"
            className="input mb-6"
          />

          {/* BUDGET + INDUSTRY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <select className="input">
              <option>Budget *</option>
              <option>$3k – $5k</option>
              <option>$5k – $10k</option>
              <option>$10k – $25k</option>
              <option>$25k+</option>
            </select>

            <select className="input">
              <option>Industry *</option>

              <option>Accounting and Finance</option>
              <option>Administrative and Clerical</option>
              <option>Agriculture</option>
              <option>Construction</option>
              <option>Creative and Design</option>
              <option>Customer Service</option>
              <option>Education</option>
              <option>Energy and Utilities</option>
              <option>Engineering</option>
              <option>Financial Services</option>
              <option>Healthcare</option>
              <option>Hospitality</option>
              <option>IT</option>
              <option>Labor</option>
              <option>Legal</option>
              <option>Maintenance and Repair</option>
              <option>Management</option>
              <option>Manufacturing and Industrial</option>
              <option>Marketing and Advertising</option>
              <option>Pharmaceutical and Research</option>
              <option>Production Animation Agency</option>
              <option>Professional</option>
              <option>Restaurant and Food Service</option>
              <option>Retail</option>
              <option>SaaS</option>
              <option>Sales</option>
              <option>Security</option>
              <option>Sustainability</option>
              <option>Telecommunications</option>
              <option>Transportation</option>
              <option>Warehouse</option>
              <option>Student</option>
            </select>
          </div>

          {/* MESSAGE */}
          <textarea
            rows="4"
            placeholder="Tell us about your video needs *"
            className="input mb-10"
          />

          {/* BUTTON */}
          <button
            className="w-full bg-[#CCFF00] text-black font-semibold
                       py-4 rounded-full text-lg
                       hover:scale-[1.04] hover:shadow-xl
                       transition-all duration-300"
          >
            GET A QUOTE
          </button>
        </motion.div>

      </div>
    </section>
  );
}
