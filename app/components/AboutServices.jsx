"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    num: "01",
    title: "Creative Concept & Strategy",
    desc: "We transform business objectives, product ideas and brand messages into creative video concepts, visual directions and storytelling strategies designed to connect with the right audience.",
  },
  {
    num: "02",
    title: "AI & Visual Creation",
    desc: "We combine AI-generated visuals, creative design, image generation, visual development and digital creativity to bring ideas to life through unique video content.",
  },
  {
    num: "03",
    title: "Animation & Motion Graphics",
    desc: "We create engaging videos using 2D and 3D animation, motion graphics, visual effects, product visualization and dynamic graphics to communicate ideas creatively.",
  },
  {
    num: "04",
    title: "Editing & Final Delivery",
    desc: "We bring every visual element together through video editing, sound design, music, color grading, effects, storytelling and final video optimization for different platforms.",
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
              About Hip Hip Videos
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
            {/* MAIN BRAND DESCRIPTION */}
            <p className="text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-normal leading-[30px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px]">
              Hip Hip Videos is a creative video creation company producing
              product-focused and business-focused videos for brands, startups
              and businesses. We transform ideas into engaging visual
              experiences through AI, animation, motion graphics, visual
              effects, graphic design, storytelling and real footage.
            </p>

            {/* SUPPORTING DESCRIPTION */}
            <p className="mt-6 text-white/50 text-[15px] sm:text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] max-w-4xl">
              From product advertisements and animated product videos to
              business explainers, SaaS videos, promotional campaigns and brand
              storytelling, we develop creative video content that helps
              businesses showcase products, explain services, communicate ideas
              and connect with their audiences.
            </p>

            {/* LOCATION & GLOBAL REACH */}
            <p className="mt-5 text-white/40 text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] max-w-4xl">
              Based in Hyderabad, India, Hip Hip Videos works with brands and
              businesses across India and international markets, delivering
              creative video solutions for digital marketing, advertising,
              business communication, product promotion and online platforms.
            </p>
          </motion.div>
        </div>

        {/* CREATIVE CAPABILITIES */}
        <div className="flex flex-col px-6 lg:px-12 py-[56px] md:py-[72px] justify-center items-start gap-[32px] md:gap-[40px">
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
              Our Video Creation Capabilities
            </p>

            <h2 className="text-white text-[24px] md:text-[30px] lg:text-[34px] font-semibold leading-[40px]">
              From Idea to Final Video
            </h2>

            <span
              aria-hidden="true"
              className="block w-[50px] h-[3px] mt-3 bg-gradient-to-r from-[#CCFF00] to-transparent rounded-full"
            />
          </motion.div>

          {/* CAPABILITY CARDS */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[28px] lg:gap-[32px">
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
                {/* NUMBER */}
                <span className="text-[13px] font-medium text-[#CCFF00]">
                  {item.num}
                </span>

                {/* TITLE */}
                <h3 className="text-[19px] md:text-[21px] font-semibold leading-[28px]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
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
            Our video creation services cover product advertising videos,
            AI-generated videos, product demos, animated product videos, 3D
            product animation, motion graphics, SaaS explainer videos, app
            promotional videos, business videos, startup pitch videos, brand
            campaigns, real estate videos and creative social media video
            content. Every project is developed around its purpose, audience,
            message and creative direction.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
