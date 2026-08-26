"use client";

import { motion } from "framer-motion";

const offices = [
  {
    country: "USA",
    image: "/usa.jpg",
    alt: "HipHipVideos office in USA",
    company: "HipHipVideos Inc.",
    address: [
      "2150 S. Central Expressway",
      "Suite 200-270",
      "McKinney, TX, USA 75070",
    ],
  },
  {
    country: "India",
    image: "/India.jpg",
    alt: "HipHipVideos office in Hyderabad India",
    company: "HipHipVideos India Private Limited",
    address: [
      "Sattva Magnus Commercial Building",
      "Shaikpet, Jubilee Hills",
      "Hyderabad, Telangana 500008",
    ],
  },
];

export default function OfficesSection() {
  return (
    <section
      aria-labelledby="offices-heading"
      className="bg-black flex justify-center py-[50px] md:py-[70px] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-[#CCFF00] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em]">
            Our Locations
          </p>

          <h2
            id="offices-heading"
            className="mt-2 text-white text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-tight tracking-tight"
          >
            Our Video Production Offices
          </h2>

          <p className="mt-4 max-w-2xl text-white/55 text-[15px] sm:text-[16px] md:text-[18px] leading-7">
            HipHipVideos operates across the USA and India, providing
            professional video production, commercial video, corporate video,
            product video and creative video services for brands and businesses.
          </p>

          <div
            aria-hidden="true"
            className="w-[60px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent mt-4 rounded-full"
          />
        </motion.div>

        {/* SEPARATOR */}
        <div className="my-[40px] md:my-[50px] w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* OFFICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {offices.map((office, index) => (
            <motion.article
              key={office.country}
              initial={{
                opacity: 0,
                x: index === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -6,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 md:p-8 transition-all duration-300 hover:border-[#CCFF00]/40 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(204,255,0,0.12)]"
            >
              {/* COUNTRY */}
              <div className="flex items-center gap-3">
                <img
                  src={office.image}
                  alt={office.alt}
                  width={40}
                  height={28}
                  loading="lazy"
                  className="w-10 h-7 object-cover rounded-sm border border-white/10"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#CCFF00]">
                    Office
                  </p>

                  <h3 className="mt-1 text-white text-xl md:text-2xl font-bold">
                    {office.country}
                  </h3>
                </div>
              </div>

              {/* COMPANY */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                  Company
                </p>

                <p className="mt-2 text-white/80 text-[15px] md:text-[16px] font-medium">
                  {office.company}
                </p>
              </div>

              {/* ADDRESS */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                  Address
                </p>

                <address className="mt-2 not-italic text-white/60 text-[14px] md:text-[16px] leading-7">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              {/* SERVICE */}
              <div className="mt-7 flex items-center gap-2 text-sm text-white/40">
                <span className="text-[#CCFF00]">●</span>

                <span>Video Production & Creative Services</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO SUPPORTING CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 text-center"
        >
          <p className="mx-auto max-w-3xl text-white/40 text-sm md:text-base leading-7">
            HipHipVideos works with brands, startups and businesses from our
            locations in the USA and Hyderabad, India. Our video production
            services include commercial videos, corporate films, product videos,
            advertisements, explainer videos, motion graphics and 3D product
            animation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
