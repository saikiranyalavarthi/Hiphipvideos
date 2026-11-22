"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The team understood what we wanted from the video and made the entire process easy. The final output looked great, and the product was presented exactly the way we had imagined.",
    name: "Marketing Team",
    role: "Brand Campaign",
    company: "Product Brand",
  },
  {
    quote:
      "Working with Hip Hip Videos was a smooth experience. They understood our requirements, shared creative ideas and delivered a video that communicated our message clearly.",
    name: "Business Team",
    role: "Business Communication",
    company: "Corporate Client",
  },
  {
    quote:
      "We wanted something more engaging than a traditional product video. The team brought a creative approach to the visuals and made the final video feel much more interesting.",
    name: "Brand Manager",
    role: "Product Marketing",
    company: "Consumer Brand",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="overflow-hidden bg-white py-20 text-black sm:py-24 md:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-sm">
            Client Experiences
          </p>

          <h2
            id="testimonials-heading"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl"
          >
            Good Work.{" "}
            <span className="text-neutral-400">Good Relationships.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
            We believe the best video projects come from good collaboration.
            Understanding the brief, sharing ideas, getting the details right
            and creating something our clients are happy to put their name on.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-400 sm:p-8"
            >
              {/* QUOTE ICON */}
              <div>
                <span
                  aria-hidden="true"
                  className="text-5xl font-serif leading-none text-neutral-300"
                >
                  “
                </span>

                {/* TESTIMONIAL */}
                <blockquote className="mt-3 text-[15px] leading-7 text-neutral-700 sm:text-base sm:leading-8">
                  {testimonial.quote}
                </blockquote>
              </div>

              {/* CLIENT INFORMATION */}
              <div className="mt-8 border-t border-neutral-200 pt-5">
                <div className="flex items-center gap-3">
                  {/* AVATAR */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-700">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-black">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-neutral-400">
                  {testimonial.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 border-t border-neutral-200 pt-8 sm:mt-16 sm:pt-10"
        >
          <p className="max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
            Every project is a collaboration. We listen, create, refine and work
            closely with brands and businesses to turn ideas into videos that
            make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
