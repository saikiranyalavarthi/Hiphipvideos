"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Creative Concept & Strategy",
    desc: "We develop video concepts, creative directions and visual storytelling strategies that connect your brand message with the right audience and business objective.",
  },
  {
    num: "02",
    title: "Video Pre-Production",
    desc: "From scripting and storyboards to locations, casting, shot lists and production planning, we prepare every important detail before filming begins.",
  },
  {
    num: "03",
    title: "Professional Video Production",
    desc: "Our production team brings your concept to life through professional direction, cinematography, lighting, filming and on-set production for high-quality brand videos.",
  },
  {
    num: "04",
    title: "Video Editing & Post-Production",
    desc: "We transform recorded footage into polished videos through editing, color grading, sound design, music, motion graphics, animation and visual effects.",
  },
];

export default function AboutServices() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-black text-white flex justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1440px]">
        {/* WHO WE ARE */}
        <div className="flex flex-col lg:flex-row px-6 lg:px-12 py-[56px] md:py-[72px] items-start gap-[32px] lg:gap-[64px]">
          {/* TITLE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="shrink-0"
          >
            <p className="text-[#CCFF00] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-2">
              About HipHipVideos
            </p>

            <h2
              id="about-heading"
              className="text-white text-[24px] md:text-[30px] lg:text-[34px] font-semibold leading-[40px]"
            >
              Who We Are
            </h2>

            <span
              aria-hidden="true"
              className="block w-[50px] h-[3px] mt-3 bg-gradient-to-r from-[#CCFF00] to-transparent rounded-full"
            />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="flex-1"
          >
            <p className="text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal leading-[30px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
              HipHipVideos is a creative video production company based in
              Hyderabad, creating high-quality visual content for brands,
              startups and businesses. We produce commercial videos, corporate
              films, product videos, advertisements, explainer videos, brand
              films and other engaging video content.
            </p>

            <p className="mt-6 text-white/50 text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] max-w-4xl">
              Our video production team works across different industries and
              helps businesses turn ideas into purposeful visual stories. From
              creative development and production planning to filming and
              post-production, we provide an end-to-end approach built around
              your brand, audience and marketing goals.
            </p>

            <p className="mt-5 text-white/40 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] max-w-4xl">
              Based in Hyderabad, Telangana, we work with businesses locally and
              with brands across India on video production projects of different
              sizes and requirements.
            </p>
          </motion.div>
        </div>

        {/* CAPABILITIES */}
        <div className="flex flex-col px-6 lg:px-12 py-[56px] md:py-[72px] justify-center items-start gap-[32px] md:gap-[40px]">
          {/* TITLE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="w-full"
          >
            <p className="text-[#CCFF00] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-2">
              Our Video Production Capabilities
            </p>

            <h2 className="text-white text-[24px] md:text-[30px] lg:text-[34px] font-semibold leading-[40px]">
              From Concept to Final Video
            </h2>

            <span
              aria-hidden="true"
              className="block w-[50px] h-[3px] mt-3 bg-gradient-to-r from-[#CCFF00] to-transparent rounded-full"
            />
          </motion.div>

          {/* CAPABILITY CARDS */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[28px] lg:gap-[32px]">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.num}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="flex flex-col gap-[16px] p-[22px] md:p-[24px] rounded-[12px] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all duration-300"
              >
                <span className="text-[13px] font-medium text-[#CCFF00]">
                  {item.num}
                </span>

                <h3 className="text-[19px] md:text-[21px] font-semibold leading-[28px]">
                  {item.title}
                </h3>

                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[23px] sm:leading-[25px] md:leading-[26px] text-gray-300">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* SUPPORTING SEO CONTENT */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-5xl text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] md:leading-[27px] text-white/40"
          >
            Our production capabilities support a wide range of projects,
            including commercial advertising, corporate communications, product
            launches, SaaS and technology videos, branded content, pitch videos,
            promotional campaigns and social media video content.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
