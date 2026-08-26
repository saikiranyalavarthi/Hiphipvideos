"use client";

import { motion } from "framer-motion";

export default function ConnectQuoteSection() {
  return (
    <section
      aria-labelledby="quote-heading"
      className="bg-black flex justify-center py-[56px] md:py-[80px] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] px-6 lg:px-12 flex justify-center">
        <div className="flex flex-col lg:flex-row w-full max-w-[1050px] justify-between items-start gap-[40px] lg:gap-[100px]">
          {/* LEFT CONTENT */}
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
            className="max-w-[420px] text-white"
          >
            {/* LABEL */}
            <p className="text-[#CCFF00] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Start Your Project
            </p>

            {/* SEO H2 */}
            <h2
              id="quote-heading"
              className="text-[28px] sm:text-[34px] md:text-[42px] font-bold leading-[36px] md:leading-[48px] mb-[18px]"
            >
              Let's Create Your{" "}
              <span className="text-[#CCFF00]">Next Video</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[29px] text-white/70 mb-[14px]">
              Looking for a video production company for your next campaign,
              product launch, corporate film, advertisement or branded content?
            </p>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[29px] text-white/70 mb-[14px]">
              HipHipVideos works with brands, startups and businesses to develop
              video concepts and turn ideas into high-quality visual content.
            </p>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[29px] text-white/70">
              Tell us about your project and our team will get back to you to
              discuss the next steps.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <a
                href="tel:+916302111807"
                className="block text-sm sm:text-base text-white/60 hover:text-[#CCFF00] transition"
              >
                +91 63021 11807
              </a>

              <a
                href="mailto:info@hiphipvideos.com"
                className="block text-sm sm:text-base text-white/60 hover:text-[#CCFF00] transition"
              >
                info@hiphipvideos.com
              </a>

              <p className="text-sm sm:text-base text-white/40">
                Hyderabad, Telangana
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
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
            className="flex flex-col gap-[18px] md:gap-[22px] w-full max-w-[500px]"
          >
            {/* FIRST + LAST NAME */}
            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[18px]">
              <div className="flex flex-col w-full gap-[6px]">
                <label htmlFor="first-name" className="label-style">
                  FIRST NAME <span className="req">*</span>
                </label>

                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="Type your first name"
                  autoComplete="given-name"
                  required
                  className="input-style"
                />
              </div>

              <div className="flex flex-col w-full gap-[6px]">
                <label htmlFor="last-name" className="label-style">
                  LAST NAME <span className="req">*</span>
                </label>

                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Type your last name"
                  autoComplete="family-name"
                  required
                  className="input-style"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="email" className="label-style">
                EMAIL <span className="req">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Type your email"
                autoComplete="email"
                required
                className="input-style"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="phone" className="label-style">
                PHONE NUMBER
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91"
                autoComplete="tel"
                className="input-style"
              />
            </div>

            {/* PROJECT TYPE + INDUSTRY */}
            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[18px]">
              <div className="flex flex-col gap-[6px] w-full">
                <label htmlFor="project-type" className="label-style">
                  PROJECT TYPE <span className="req">*</span>
                </label>

                <select
                  id="project-type"
                  name="projectType"
                  required
                  className="input-style"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Project Type
                  </option>

                  <option value="commercial">Commercial Video</option>

                  <option value="corporate">Corporate Video</option>

                  <option value="product">Product Video</option>

                  <option value="explainer">Explainer Video</option>

                  <option value="advertisement">Advertisement</option>

                  <option value="pitch">Pitch Video</option>

                  <option value="brand-film">Brand Film</option>

                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-[6px] w-full">
                <label htmlFor="industry" className="label-style">
                  INDUSTRY <span className="req">*</span>
                </label>

                <select
                  id="industry"
                  name="industry"
                  required
                  className="input-style"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Industry
                  </option>

                  <option value="apps-saas">Apps & SaaS</option>

                  <option value="d2c">D2C Brands</option>

                  <option value="fashion">Fashion</option>

                  <option value="real-estate">Real Estate</option>

                  <option value="corporate">Corporate</option>

                  <option value="electronics">Electronics & Gadgets</option>

                  <option value="industrial">Industrial & Manufacturing</option>

                  <option value="franchise">Franchise</option>

                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* BUDGET */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="budget" className="label-style">
                ESTIMATED BUDGET
              </label>

              <select
                id="budget"
                name="budget"
                className="input-style"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Budget Range
                </option>

                <option value="under-1l">Under ₹1 Lakh</option>

                <option value="1-3l">₹1 Lakh – ₹3 Lakhs</option>

                <option value="3-5l">₹3 Lakhs – ₹5 Lakhs</option>

                <option value="5-10l">₹5 Lakhs – ₹10 Lakhs</option>

                <option value="10l-plus">₹10 Lakhs+</option>

                <option value="discuss">Let's Discuss</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="message" className="label-style">
                TELL US ABOUT YOUR VIDEO NEEDS <span className="req">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your video, campaign, product or project..."
                required
                className="input-style h-[120px] resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="h-[54px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black font-semibold shadow-lg hover:shadow-[0_0_20px_#CCFF00] transition-all duration-300"
            >
              GET A FREE QUOTE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
