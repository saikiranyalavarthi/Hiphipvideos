"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does a video creation company do?",
    answer:
      "A video creation company develops visual content to help businesses communicate products, services, ideas and brand stories. Video creation can combine creative strategy, AI-generated visuals, animation, motion graphics, visual effects, graphic design, editing, storytelling and real footage when required.",
  },
  {
    question: "What video creation services does Hip Hip Videos offer?",
    answer:
      "Hip Hip Videos creates product videos, business videos, product advertisements, product demos, AI-generated videos, animated videos, motion graphics, 3D product animations, SaaS explainer videos, app promotional videos, startup pitch videos and brand campaign content.",
  },
  {
    question: "Is Hip Hip Videos a traditional video production company?",
    answer:
      "Hip Hip Videos is positioned as a video creation company focused on product and business content. Rather than relying only on traditional filming, we combine AI, animation, motion graphics, visual effects, graphic design, creative storytelling and real footage when appropriate to develop engaging visual content.",
  },
  {
    question: "Do you create AI-powered videos?",
    answer:
      "Yes. AI can be incorporated into video creation for visual development, creative concepts, product visualization, storytelling, animation and other elements depending on the project's requirements. We combine AI capabilities with creative direction and design to develop videos aligned with your brand and objectives.",
  },
  {
    question: "Can you create product advertisement and demo videos?",
    answer:
      "Yes. We create product-focused video content, including product advertisements, product demonstrations, promotional videos, animated product videos and product visualization. These videos can help businesses showcase product features, benefits, functionality and brand value across websites, social media and digital advertising.",
  },
  {
    question: "Do you create videos for SaaS, apps and technology companies?",
    answer:
      "Yes. We create SaaS explainer videos, software demonstrations, app promotional videos, feature videos, product launch videos, animated interface visuals and technology-focused content to help businesses explain their digital products and services.",
  },
  {
    question: "What types of businesses can work with Hip Hip Videos?",
    answer:
      "We work with businesses, startups, product brands and organizations across industries such as technology, SaaS, ecommerce, D2C, fashion, real estate, manufacturing, healthcare, education, food and beverages, automotive and other business sectors.",
  },
  {
    question: "Can you create business, corporate and promotional videos?",
    answer:
      "Yes. We create business-focused video content such as company introduction videos, business explainers, promotional videos, brand storytelling videos, startup pitch videos, franchise promotional videos, corporate communication content and campaign videos based on your objectives.",
  },
  {
    question: "Do you create animated videos, motion graphics and 3D videos?",
    answer:
      "Yes. Our creative capabilities include animation, motion graphics, visual effects, graphic design, animated product visuals, 3D product animation and other motion-led visual content. The creative approach depends on the concept, product and communication goals of the project.",
  },
  {
    question: "Can you create videos for social media and digital advertising?",
    answer:
      "Yes. We create video content for digital marketing, social media, websites, online advertising, product campaigns and brand communication. Videos can be planned for different platforms, aspect ratios, formats and durations according to your campaign requirements.",
  },
  {
    question: "How much does video creation cost?",
    answer:
      "Video creation costs depend on the creative concept, video duration, complexity, AI requirements, animation, 3D visuals, motion graphics, visual effects, design, editing, deliverables and project scope. Share your requirements with us to discuss an appropriate creative approach and estimated budget.",
  },
  {
    question: "How long does it take to create a video?",
    answer:
      "The timeline depends on the type of video, creative complexity, visual requirements, animation, AI generation, revisions and final deliverables. Once we understand your project requirements, we can discuss an estimated timeline for concept development, creation, review and final delivery.",
  },
  {
    question:
      "Can Hip Hip Videos work with clients outside Hyderabad or India?",
    answer:
      "Hip Hip Videos is based in Hyderabad, India. Project requirements and communication can be discussed remotely, making it possible to collaborate with businesses and brands outside Hyderabad and explore video creation projects across different markets.",
  },
  {
    question: "How can I start my video creation project?",
    answer:
      "You can start by contacting Hip Hip Videos through our project enquiry form or by requesting a discovery call. Share your product, business, campaign goals, target audience, video requirements, timeline and approximate budget. Our team can discuss your creative direction and the next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 md:py-28"
    >
      {/* BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1100px] px-5 sm:px-8 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-sm">
            Frequently Asked Questions
          </p>

          <h2
            id="faq-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Video Creation <span className="text-white/50">FAQs</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            Find answers about our video creation services, AI-powered visuals,
            product videos, business videos, creative process, pricing and
            project requirements.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="mt-12 space-y-3 md:mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.025 }}
                className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-white/25 bg-white/[0.045]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                {/* QUESTION BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                  style={{
                    color: "#ffffff",
                    WebkitTextFillColor: "#ffffff",
                  }}
                >
                  <span
                    className={`text-[15px] font-semibold leading-6 transition-colors sm:text-[17px] ${
                      isOpen ? "text-white" : "text-white/85"
                    }`}
                    style={{
                      color: isOpen ? "#ffffff" : "rgba(255,255,255,0.85)",
                      WebkitTextFillColor: isOpen
                        ? "#ffffff"
                        : "rgba(255,255,255,0.85)",
                      opacity: 1,
                      visibility: "visible",
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS */}
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-white/40 bg-white text-black"
                        : "border-white/15 text-white/60"
                    }`}
                  >
                    <span className="text-xl leading-none">+</span>
                  </span>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7">
                        <p
                          className="max-w-4xl text-sm leading-7 sm:text-[15px] sm:leading-8"
                          style={{
                            color: "rgba(255,255,255,0.65)",
                            WebkitTextFillColor: "rgba(255,255,255,0.65)",
                          }}
                        >
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center md:mt-16"
        >
          <p className="text-sm text-white/45 sm:text-base">
            Have a product, business or video idea to bring to life?
          </p>

          {/* CTA BUTTON */}
          <a
            href="/quote"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 sm:px-9"
            style={{
              color: "#000000",
              WebkitTextFillColor: "#000000",
            }}
          >
            <span
              style={{
                color: "#000000",
                WebkitTextFillColor: "#000000",
                opacity: 1,
                visibility: "visible",
              }}
            >
              Get a Free Discovery Call
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
