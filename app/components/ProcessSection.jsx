"use client";

import { motion } from "framer-motion";
import ConnectQuoteSection from "./ContactSection";

const videoProcess = [
  {
    step: "Step 01",
    title: "Discover & Understand",
    desc: "We start by understanding your brand, audience, goals, message and video requirements so the production is built around a clear creative and business objective.",
    points: [
      "Brand & business goals",
      "Target audience & message",
      "Project requirements & references",
    ],
  },
  {
    step: "Step 02",
    title: "Concept & Pre-Production",
    desc: "Our creative team develops the concept and prepares the production through scripting, storyboards, locations, casting, shot planning and production scheduling.",
    points: [
      "Creative concept & script",
      "Storyboards & shot planning",
      "Locations, casting & production plan",
    ],
  },
  {
    step: "Step 03",
    title: "Production & Filming",
    desc: "We bring the approved concept to life through professional direction, cinematography, lighting, sound and on-set video production.",
    points: [
      "Professional filming",
      "Direction & cinematography",
      "Lighting & production execution",
    ],
  },
];

const postProduction = [
  {
    step: "Step 04",
    title: "Editing & Post-Production",
    desc: "Our editors shape the footage into a polished story using professional editing, pacing, color grading, sound design, music and visual effects.",
  },
  {
    step: "Step 05",
    title: "Motion Graphics & Finishing",
    desc: "Where required, we add motion graphics, animation, titles, visual effects and branded elements to make the final video more engaging and effective.",
  },
  {
    step: "Step 06",
    title: "Review & Final Delivery",
    desc: "We review the completed video with you, make the required refinements and deliver the final production in the formats required for your website, social media, advertising or campaigns.",
  },
  {
    step: "Step 07",
    title: "Launch & Content Support",
    desc: "We help prepare your finished video for the platforms and marketing channels where your audience will see it, including digital campaigns, social media and brand communication.",
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
            Our Video Production Process
          </p>

          {/* SEO H1 */}
          <h1
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 md:mb-8"
          >
            From Creative Idea to <br />
            <span className="gradient-text">Finished Video</span>
          </h1>

          {/* SEO DESCRIPTION */}
          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-lg leading-relaxed">
            Our video production process takes your idea from creative strategy
            and pre-production through professional filming, editing,
            post-production and final delivery. Every stage is planned to create
            high-quality video content that communicates your brand message and
            supports your marketing goals.
          </p>
        </motion.div>

        {/* ================= VIDEO PRODUCTION PROCESS ================= */}
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
              Strategy to Production
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              A Complete Video Production Workflow
            </h2>

            <p className="text-gray-400 max-w-2xl text-[14px] md:text-lg">
              From the first conversation to the final frame, we manage every
              important stage of commercial, corporate, product, explainer and
              branded video production.
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
              Commercial, Corporate & Product Videos
            </p>

            <p>
              <span className="text-white font-semibold">Production:</span>{" "}
              Hyderabad & Across India
            </p>

            <p>
              <span className="text-white font-semibold">Approach:</span>{" "}
              End-to-End Video Production
            </p>
          </div>
        </div>

        {/* ================= POST PRODUCTION ================= */}
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
              Post-Production & Delivery
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Turning Footage Into a Finished Brand Story
            </h2>

            <p className="text-gray-400 text-[14px] md:text-lg max-w-3xl">
              Great video production does not end when filming is complete. Our
              post-production team shapes the footage into a polished final
              video ready for your marketing and communication channels.
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
              Whether you need a commercial advertisement, corporate film,
              product launch video, SaaS explainer, pitch video, brand film or
              promotional content, our production workflow is adapted to the
              project's creative requirements, timeline and audience.
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
              Start Your Video Project
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
