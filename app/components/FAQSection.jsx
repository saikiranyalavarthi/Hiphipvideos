"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does a video production company do?",
    answer:
      "A video production company helps brands turn ideas into finished video content. This can include creative strategy, concept development, scripting, storyboarding, pre-production, filming, editing, motion graphics, animation, sound design, color grading and final delivery.",
  },
  {
    question:
      "Does HipHipVideos provide video production services in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and works with brands, startups and businesses on commercial videos, corporate films, product videos, advertisements, explainers, branded content and other visual productions.",
  },
  {
    question: "What types of videos does HipHipVideos create?",
    answer:
      "We create commercial videos, advertisements, corporate films, product videos, explainer videos, pitch videos, brand films, promotional content, documentaries, motion graphics and other custom video productions based on the project's goals.",
  },
  {
    question: "Can you create videos for SaaS and technology companies?",
    answer:
      "Yes. We create product videos, SaaS explainer videos, app videos, launch videos, demonstrations and motion-led content that can help technology companies communicate products and complex ideas more clearly.",
  },
  {
    question: "Do you create videos for D2C and ecommerce brands?",
    answer:
      "Yes. We create product-focused videos, advertisements, branded content and campaign videos for D2C and ecommerce brands. The creative direction can be adapted for websites, social media, paid advertising and product launches.",
  },
  {
    question: "Do you work with corporate and industrial companies?",
    answer:
      "Yes. Our video production capabilities can be used for corporate films, company profile videos, manufacturing videos, industrial films, internal communications, product demonstrations and other business-focused content.",
  },
  {
    question: "How does the video production process work?",
    answer:
      "Our process generally moves through discovery, concept development, scripting and storyboarding, pre-production, production, post-production and final delivery. The exact workflow depends on the scope and requirements of each project.",
  },
  {
    question: "How much does video production cost?",
    answer:
      "Video production costs depend on factors such as concept complexity, script requirements, shoot days, locations, crew, equipment, talent, animation, motion graphics, post-production and final deliverables. Contact us with your project details and we can discuss the appropriate production scope and budget.",
  },
  {
    question: "How long does it take to produce a video?",
    answer:
      "The timeline depends on the type and complexity of the project. A simple production may require a shorter turnaround, while larger commercial, corporate or animated productions can require more planning and post-production time. We establish the expected timeline during project planning.",
  },
  {
    question: "Can HipHipVideos handle the complete production?",
    answer:
      "Yes. Depending on the project, we can support the production journey from creative concept and scripting through pre-production, filming, editing, motion graphics, sound design, color grading and final delivery.",
  },
  {
    question: "Can you create videos for social media and digital advertising?",
    answer:
      "Yes. We can create video content designed for digital campaigns, social media, websites and advertising platforms. Deliverables can be planned around the required formats, aspect ratios, durations and campaign requirements.",
  },
  {
    question: "How can I start a video project with HipHipVideos?",
    answer:
      "You can contact HipHipVideos through the project enquiry form or request a free discovery call. Share your project idea, industry, video requirements, timeline and approximate budget, and our team can discuss the next steps with you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Video Production <span className="text-[#CCFF00]">FAQs</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Answers to common questions about our video production services,
            process, industries, timelines and project requirements.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="mt-12 space-y-3 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#CCFF00]/30 bg-white/[0.04]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                {/* QUESTION */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <span
                    className={`text-[15px] font-semibold leading-6 sm:text-[17px] ${
                      isOpen ? "text-[#CCFF00]" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-[#CCFF00] text-[#CCFF00]"
                        : "border-white/20 text-white/50"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7">
                        <p className="max-w-4xl text-sm leading-6 text-white/55 sm:text-[15px] sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="text-sm text-white/40 sm:text-base">
            Still have questions about your video project?
          </p>

          <a
            href="/quote"
            className="mt-5 inline-flex items-center justify-center rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
          >
            Get a Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
