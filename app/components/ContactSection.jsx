"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ConnectQuoteSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      industry: formData.get("industry"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send");
      }

      setStatus("Thank you! Your enquiry has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);

      setStatus(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

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
            <p className="text-[#CCFF00] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Start Your Project
            </p>

            <h2
              id="quote-heading"
              className="text-[28px] sm:text-[34px] md:text-[42px] font-bold leading-[36px] md:leading-[48px] mb-[18px]"
            >
              Let's Create Your{" "}
              <span className="text-[#CCFF00]">Next Video</span>
            </h2>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[29px] text-white/70 mb-[14px]">
              Looking for creative video content for your product, business,
              brand, campaign, or digital platform?
            </p>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[29px] text-white/70 mb-[14px]">
              Hip Hip Videos is a video creation company in Hyderabad, India,
              creating product-focused and business-focused videos using AI,
              animation, motion graphics, visual effects, graphic design,
              storytelling, and real footage when needed.
            </p>

            <p className="text-[15px] sm:text-[17px] md:text-[18px] leading-[26px] md:leading-[29px] text-white/70">
              Tell us about your project, and our creative team will help you
              explore the right video concept, visual style, and approach for
              your business goals.
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              <a
                href="tel:+916301022795"
                aria-label="Call Hip Hip Videos"
                className="block text-sm sm:text-base text-white/60 hover:text-[#CCFF00] transition"
              >
                +91 63021 11807
              </a>

              <a
                href="mailto:info@hiphipvideos.com"
                aria-label="Email Hip Hip Videos"
                className="block text-sm sm:text-base text-white/60 hover:text-[#CCFF00] transition"
              >
                info@hiphipvideos.com
              </a>

              <p className="text-sm sm:text-base text-white/40">
                Hyderabad, Telangana, India
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
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
            aria-label="Video creation project enquiry form"
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

                  <option value="Product Video Creation">
                    Product Video Creation
                  </option>

                  <option value="Product Advertisement">
                    Product Advertisement
                  </option>

                  <option value="Product Demo Video">Product Demo Video</option>

                  <option value="AI Video Creation">AI Video Creation</option>

                  <option value="Business Video Creation">
                    Business Video Creation
                  </option>

                  <option value="Commercial Video Creation">
                    Commercial Video Creation
                  </option>

                  <option value="Explainer Video">Explainer Video</option>

                  <option value="SaaS Explainer Video">
                    SaaS Explainer Video
                  </option>

                  <option value="Animated Video">Animated Video</option>

                  <option value="Motion Graphics Video">
                    Motion Graphics Video
                  </option>

                  <option value="3D Product Animation">
                    3D Product Animation
                  </option>

                  <option value="App Promotional Video">
                    App Promotional Video
                  </option>

                  <option value="Startup Pitch Video">
                    Startup Pitch Video
                  </option>

                  <option value="Brand Campaign Video">
                    Brand Campaign Video
                  </option>

                  <option value="Real Estate Video">Real Estate Video</option>

                  <option value="Other">Other</option>
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

                  <option value="Apps & SaaS">Apps & SaaS</option>

                  <option value="Technology">Technology</option>

                  <option value="D2C Brands">D2C Brands</option>

                  <option value="Fashion & Lifestyle">
                    Fashion & Lifestyle
                  </option>

                  <option value="Real Estate">Real Estate</option>

                  <option value="Corporate & Business">
                    Corporate & Business
                  </option>

                  <option value="Electronics & Gadgets">
                    Electronics & Gadgets
                  </option>

                  <option value="Food & Beverages">Food & Beverages</option>

                  <option value="Industrial & Manufacturing">
                    Industrial & Manufacturing
                  </option>

                  <option value="Healthcare">Healthcare</option>

                  <option value="Education">Education</option>

                  <option value="Franchise">Franchise</option>

                  <option value="Automotive">Automotive</option>

                  <option value="Other">Other</option>
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

                <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>

                <option value="₹1 Lakh – ₹3 Lakhs">₹1 Lakh – ₹3 Lakhs</option>

                <option value="₹3 Lakhs – ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>

                <option value="₹5 Lakhs – ₹10 Lakhs">
                  ₹5 Lakhs – ₹10 Lakhs
                </option>

                <option value="₹10 Lakhs+">₹10 Lakhs+</option>

                <option value="Let's Discuss">Let's Discuss</option>
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
                placeholder="Tell us about your product, business, campaign, audience, video idea or project requirements..."
                required
                className="input-style h-[120px] resize-none"
              />
            </div>

            {/* STATUS MESSAGE */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  status.includes("successfully")
                    ? "text-[#CCFF00]"
                    : "text-red-400"
                }`}
              >
                {status}
              </div>
            )}

            {/* SUBMIT */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: loading ? 1 : 1.03,
              }}
              whileTap={{
                scale: loading ? 1 : 0.97,
              }}
              className="h-[54px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black font-semibold shadow-lg hover:shadow-[0_0_20px_#CCFF00] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "SENDING..." : "GET A FREE QUOTE"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
