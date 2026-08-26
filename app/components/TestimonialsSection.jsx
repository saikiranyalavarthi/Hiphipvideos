"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "HipHipVideos understood our vision and turned it into a strong visual story that communicated our product clearly.",
    name: "Arjun Mehta",
    role: "Founder",
    company: "DemoTech",
  },
  {
    quote:
      "The production process was creative, professional and well organised from concept through final delivery.",
    name: "Priya Sharma",
    role: "Marketing Manager",
    company: "BrandNest",
  },
  {
    quote:
      "The final product video gave our campaign a strong visual identity and presented the product beautifully.",
    name: "Rahul Verma",
    role: "Brand Director",
    company: "NovaWorks",
  },
];
const results = [
  {
    value: "Creative",
    label: "Video Strategy",
  },
  {
    value: "End-to-End",
    label: "Production",
  },
  {
    value: "3D & Motion",
    label: "Visual Capabilities",
  },
  {
    value: "Brand-Focused",
    label: "Storytelling",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-24 md:py-32"
    >
      {/* BACKGROUND GLOW */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#CCFF00]/5 blur-[150px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-12">
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
          className="mx-auto max-w-4xl text-center"
        >
          {/* LABEL */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            Client Experiences
          </p>

          {/* SEO H2 */}
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            What Clients Say About{" "}
            <span className="text-[#CCFF00]">HipHipVideos</span>
          </h2>

          {/* SUPPORTING CONTENT */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            From commercial and corporate videos to product films, explainer
            videos and branded content, we work closely with our clients to turn
            ideas into professional visual stories that communicate clearly and
            support their marketing goals.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.04] sm:p-8"
            >
              {/* QUOTE MARK */}
              <div
                aria-hidden="true"
                className="text-4xl font-bold leading-none text-[#CCFF00]/40"
              >
                "
              </div>

              {/* QUOTE */}
              <blockquote className="mt-5 text-base leading-7 text-white/70">
                {testimonial.quote}
              </blockquote>

              {/* CLIENT */}
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>

                <p className="mt-1 text-sm text-white/40">{testimonial.role}</p>

                <p className="mt-1 text-sm font-medium text-[#CCFF00]/70">
                  {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CAPABILITY / RESULTS STRIP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] lg:mt-16 lg:grid-cols-4"
        >
          {results.map((result, index) => (
            <div
              key={result.label}
              className={`p-6 text-center sm:p-8 ${
                index !== results.length - 1
                  ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                  : ""
              } ${index === 0 ? "border-r border-white/10" : ""} ${
                index === 2 ? "lg:border-r" : ""
              }`}
            >
              <p className="text-lg font-bold text-[#CCFF00] sm:text-xl">
                {result.value}
              </p>

              <p className="mt-1 text-xs uppercase tracking-wider text-white/40 sm:text-sm">
                {result.label}
              </p>
            </div>
          ))}
        </motion.div>

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
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mt-10 max-w-4xl text-center text-sm leading-6 text-white/35 sm:text-base sm:leading-7"
        >
          HipHipVideos provides professional video production services for
          brands, startups and businesses, including commercial video
          production, corporate films, product videos, explainer videos,
          advertisements, brand films and motion graphics.
        </motion.p>
      </div>
    </section>
  );
}
