"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="uppercase tracking-widest text-sm text-[#CCFF00] mb-4">
            Our Offices
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Global Presence, <br />
            <span className="text-[#CCFF00]">Local Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            With teams across the globe, we collaborate closely with clients
            to deliver world-class explainer videos.
          </p>
        </motion.div>

        {/* LOCATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* USA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-white/10 rounded-3xl p-10
                       hover:border-[#CCFF00] transition"
          >
            <p className="uppercase tracking-widest text-xs text-[#CCFF00] mb-4">
              United States
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Hip Hip Videos Inc
            </h3>

            <p className="text-gray-400 leading-relaxed">
              2150 S. Central Expressway<br />
              Suite 200-270<br />
              McKinney, TX 75070<br />
              USA
            </p>
          </motion.div>

          {/* INDIA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-white/10 rounded-3xl p-10
                       hover:border-[#CCFF00] transition"
          >
            <p className="uppercase tracking-widest text-xs text-[#CCFF00] mb-4">
              India
            </p>

            <h3 className="text-2xl font-bold mb-4">
              Hip Hip Videos India Pvt. Ltd.
            </h3>

            <p className="text-gray-400 leading-relaxed">
              4th Floor, Hunters Quest Building<br />
              Plot No. 36 & 37, Survey No. 86<br />
              Vittal Rao Nagar, Madhapur<br />
              Serilingampalli, Hyderabad<br />
              Telangana – 500081
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
