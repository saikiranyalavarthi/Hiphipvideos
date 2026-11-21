"use client";

import { motion } from "framer-motion";
import ConnectQuoteSection from "./ContactSection";

const videoProcess = [
  {
    step: "Step 01",
    title: "Discover & Understand",
    desc: "We begin by understanding your business, product, audience, goals and communication requirements. This helps us define the right creative direction and video strategy for your project.",
    points: [
      "Business & product objectives",
      "Target audience & key message",
      "Creative requirements & references",
    ],
  },
  {
    step: "Step 02",
    title: "Creative Concept & Strategy",
    desc: "Our creative team develops ideas, visual concepts and storytelling approaches that transform your product or business message into an engaging video experience.",
    points: [
      "Creative concepts & storytelling",
      "Scriptwriting & visual direction",
      "Creative strategy & video planning",
    ],
  },
  {
    step: "Step 03",
    title: "AI, Design & Visual Creation",
    desc: "We bring ideas to life using AI-powered video creation, graphic design, animation, visual effects, product visualization and real footage whenever the project requires it.",
    points: [
      "AI-generated visuals & video",
      "Animation & motion graphics",
      "Product visuals & creative assets",
    ],
  },
];

const postProduction = [
  {
    step: "Step 04",
    title: "Video Editing & Storytelling",
    desc: "We combine visuals, footage, graphics, sound and storytelling to create a compelling video that communicates your message clearly and keeps your audience engaged.",
  },
  {
    step: "Step 05",
    title: "Motion Graphics & Visual Effects",
    desc: "We enhance videos with motion graphics, animated typography, visual effects, transitions, product animation and branded elements to create a memorable visual experience.",
  },
  {
    step: "Step 06",
    title: "Review & Creative Refinement",
    desc: "We review the video with you, refine the storytelling, visuals, timing, graphics and details, and make the required adjustments to align the final video with your vision.",
  },
  {
    step: "Step 07",
    title: "Final Delivery & Content Ready",
    desc: "Your completed video is delivered in the formats and resolutions required for websites, social media, digital advertising, presentations, campaigns and business communication.",
  },
];

export default function ProcessPage() {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-black text-white py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="text-center max-w-4xl mx-auto mb-24 md:mb-32"
        >
          {/* LABEL */}
          <p className="uppercase tracking-widest text-xs md:text-sm text-[#CCFF00] mb-4">
            Our Video Creation Process
          </p>

          {/* SEO H1 */}
          <h1
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 md:mb-8"
          >
            From Creative Idea to
            <br />
            <span className="gradient-text">Powerful Video Content</span>
          </h1>

          {/* SEO DESCRIPTION */}
          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-lg leading-relaxed">
            Our video creation process transforms ideas into engaging visual
            content through creative strategy, AI-powered video creation,
            animation, motion graphics, visual effects, graphic design,
            storytelling and professional editing. We create product videos,
            business videos and promotional content designed to communicate
            effectively and support your brand's goals.
          </p>
        </motion.div>

        {/* ================= VIDEO CREATION PROCESS ================= */}
        <div className="mb-32 md:mb-40">
          {/* SECTION INTRO */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mb-12 md:mb-14"
          >
            <p className="text-[#CCFF00] text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
              Strategy to Creation
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              A Complete Video Creation Workflow
            </h2>

            <p className="text-gray-400 max-w-2xl text-[14px] md:text-lg">
              Every video begins with a clear purpose. We combine creative
              thinking, modern video creation technologies and visual
              storytelling to develop product-focused and business-focused
              videos for brands, startups and companies.
            </p>
          </motion.div>

          {/* PROCESS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {videoProcess.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] transition-all"
              >
                <span className="text-[#CCFF00] text-xs md:text-sm font-semibold">
                  {item.step}
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm md:text-base leading-6">
                  {item.desc}
                </p>

                <ul className="text-gray-300 space-y-2 text-sm">
                  {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* META */}
          <div className="flex flex-wrap gap-6 md:gap-10 mt-10 md:mt-14 text-xs md:text-sm text-gray-400">
            <p>
              <span className="text-white font-semibold">Services:</span>{" "}
              Product Videos, Business Videos & AI Video Creation
            </p>

            <p>
              <span className="text-white font-semibold">Reach:</span> India &
              International Clients
            </p>

            <p>
              <span className="text-white font-semibold">Approach:</span>{" "}
              Creative, AI-Powered & End-to-End Video Creation
            </p>
          </div>
        </div>

        {/* ================= VIDEO FINISHING ================= */}
        <div>
          {/* SECTION INTRO */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mb-12 md:mb-14"
          >
            <p className="text-[#CCFF00] text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
              Editing, Animation & Delivery
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Turning Ideas Into Complete Visual Experiences
            </h2>

            <p className="text-gray-400 text-[14px] md:text-lg max-w-3xl">
              Video creation goes beyond combining footage. We build visual
              experiences through editing, animation, motion graphics,
              storytelling, sound design, AI-generated content and creative
              finishing to make your brand message stand out.
            </p>
          </motion.div>

          {/* POST PRODUCTION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {postProduction.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] transition-all"
              >
                <span className="text-[#CCFF00] text-xs md:text-sm font-semibold">
                  {item.step}
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-6">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* SUPPORTING SEO CONTENT */}
          <motion.div
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
            className="mt-12 md:mt-16 max-w-4xl"
          >
            <p className="text-sm md:text-base leading-7 text-gray-400">
              Whether you need a product advertisement, product demo, animated
              product video, SaaS explainer, app promotional video, startup
              pitch video, business explainer, brand campaign or AI-generated
              commercial, our video creation workflow is adapted to your
              project's objectives, audience, creative direction and delivery
              requirements. We combine AI, animation, motion graphics, visual
              effects, graphic design, editing and real footage where
              appropriate to create engaging video content for businesses and
              brands.
            </p>
          </motion.div>

          {/* CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <motion.a
              href="/quote"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="inline-block bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black font-semibold px-10 md:px-14 py-3 md:py-4 rounded-full text-sm md:text-lg shadow-lg hover:shadow-[0_0_25px_#CCFF00] transition-all"
            >
              Start Your Video Creation Project
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
