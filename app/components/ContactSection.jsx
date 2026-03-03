"use client";

import { motion } from "framer-motion";

export default function ConnectQuoteSection() {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Let’s Connect!
          </h2>

          <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
            We are a leader video company that connects brands and people
            through tailor-made video content.
          </p>

          <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
            Trusted by global brands, we cater to diverse clients,
            from small startups to Fortune 500 companies.
          </p>

          <p className="text-gray-400 max-w-md leading-relaxed">
            Let’s talk about your project – whatever the challenge,
            we've got you covered. Fill out the form to get started!
          </p>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* FIRST + LAST NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase text-gray-400 mb-2 block">
                First Name*
              </label>
              <input
                type="text"
                placeholder="Type your first name"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#CCFF00] outline-none transition"
              />
            </div>

            <div>
              <label className="text-xs uppercase text-gray-400 mb-2 block">
                Last Name*
              </label>
              <input
                type="text"
                placeholder="Type your last name"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#CCFF00] outline-none transition"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-xs uppercase text-gray-400 mb-2 block">
              Email*
            </label>
            <input
              type="email"
              placeholder="Type your email"
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#CCFF00] outline-none transition"
            />
          </div>

          {/* DURATION + INDUSTRY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
  {/* Duration */}
  <div>
    <label className="text-xs uppercase text-gray-400 mb-2 block">
      Duration *
    </label>

    <select
      defaultValue=""
      className="w-full bg-white text-black border border-gray-300 px-4 py-3 rounded-md focus:border-[#CCFF00] focus:ring-0 outline-none transition"
    >
      <option value="" disabled>
        Select Duration
      </option>
      <option value="1month">1 Month</option>
      <option value="3months">3 Months</option>
      <option value="6months">6 Months</option>
      <option value="1year">1 Year</option>
    </select>
  </div>

  {/* Industry */}
  <div>
    <label className="text-xs uppercase text-gray-400 mb-2 block">
      Industry *
    </label>

    <select
      defaultValue=""
      className="w-full bg-white text-black border border-gray-300 px-4 py-3 rounded-md focus:border-[#CCFF00] focus:ring-0 outline-none transition"
    >
      <option value="" disabled>
        Select Industry
      </option>
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

</div>

          {/* MESSAGE */}
          <div>
            <label className="text-xs uppercase text-gray-400 mb-2 block">
              Tell us about your video needs*
            </label>
            <textarea
              rows={4}
              placeholder="Type Something"
              className="w-full bg-transparent border border-white/20 px-4 py-3 text-white focus:border-[#CCFF00] outline-none transition"
            />
          </div>

          {/* BUTTON */}
          <button
            className="w-full bg-[#CCFF00] text-black font-semibold
                       py-4 rounded-md
                       hover:opacity-90 transition"
          >
            GET A QUOTE
          </button>
        </motion.div>

      </div>
    </section>
  );
}