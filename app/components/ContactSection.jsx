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

  const fieldClass =
    "w-full h-[54px] rounded-lg border border-white/15 bg-white/[0.03] px-4 text-[14px] text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-white/50 focus:bg-white/[0.05]";

  const labelClass =
    "mb-1.5 block text-[11px] sm:text-xs font-medium uppercase tracking-[0.12em] text-white/65";

  return (
    <section
      id="contact"
      aria-labelledby="quote-heading"
      className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1150px] grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[470px] text-white"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-sm">
              Start Your Project
            </p>

            <h2
              id="quote-heading"
              className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
            >
              Let's Create Your
              <span className="block text-white/50">Next Video</span>
            </h2>

            <p className="mb-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Looking for creative video content for your product, business,
              brand, campaign, or digital platform?
            </p>

            <p className="mb-5 text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Hip Hip Videos is a video creation company in Hyderabad, India,
              creating product-focused and business-focused videos using AI,
              animation, motion graphics, visual effects, graphic design,
              storytelling, and real footage when needed.
            </p>

            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Tell us about your project, and our creative team will help you
              explore the right video concept, visual style, and approach for
              your business goals.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
              <a
                href="tel:+916302111807"
                aria-label="Call Hip Hip Videos"
                className="block text-sm text-white/55 transition-colors duration-300 hover:text-white sm:text-base"
              >
                +91 63021 11807
              </a>

              <a
                href="mailto:info@hiphipvideos.com"
                aria-label="Email Hip Hip Videos"
                className="block text-sm text-white/55 transition-colors duration-300 hover:text-white sm:text-base"
              >
                info@hiphipvideos.com
              </a>

              <p className="text-sm text-white/35 sm:text-base">
                Hyderabad, Telangana, India
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            aria-label="Video creation project enquiry form"
            className="flex w-full flex-col gap-5"
          >
            {/* FIRST NAME + LAST NAME */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className={labelClass}>
                  First Name <span className="text-white/40">*</span>
                </label>

                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                  required
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="last-name" className={labelClass}>
                  Last Name <span className="text-white/40">*</span>
                </label>

                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  autoComplete="family-name"
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-white/40">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
                required
                className={fieldClass}
              />
            </div>

            {/* PHONE */}
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91"
                autoComplete="tel"
                className={fieldClass}
              />
            </div>

            {/* PROJECT TYPE + INDUSTRY */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="project-type" className={labelClass}>
                  Project Type <span className="text-white/40">*</span>
                </label>

                <select
                  id="project-type"
                  name="projectType"
                  required
                  defaultValue=""
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="" disabled className="bg-black">
                    Select Project Type
                  </option>

                  <option value="Product Video Creation" className="bg-black">
                    Product Video Creation
                  </option>
                  <option value="Product Advertisement" className="bg-black">
                    Product Advertisement
                  </option>
                  <option value="Product Demo Video" className="bg-black">
                    Product Demo Video
                  </option>
                  <option value="AI Video Creation" className="bg-black">
                    AI Video Creation
                  </option>
                  <option value="Business Video Creation" className="bg-black">
                    Business Video Creation
                  </option>
                  <option
                    value="Commercial Video Creation"
                    className="bg-black"
                  >
                    Commercial Video Creation
                  </option>
                  <option value="Explainer Video" className="bg-black">
                    Explainer Video
                  </option>
                  <option value="SaaS Explainer Video" className="bg-black">
                    SaaS Explainer Video
                  </option>
                  <option value="Animated Video" className="bg-black">
                    Animated Video
                  </option>
                  <option value="Motion Graphics Video" className="bg-black">
                    Motion Graphics Video
                  </option>
                  <option value="3D Product Animation" className="bg-black">
                    3D Product Animation
                  </option>
                  <option value="App Promotional Video" className="bg-black">
                    App Promotional Video
                  </option>
                  <option value="Startup Pitch Video" className="bg-black">
                    Startup Pitch Video
                  </option>
                  <option value="Brand Campaign Video" className="bg-black">
                    Brand Campaign Video
                  </option>
                  <option value="Real Estate Video" className="bg-black">
                    Real Estate Video
                  </option>
                  <option value="Other" className="bg-black">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="industry" className={labelClass}>
                  Industry <span className="text-white/40">*</span>
                </label>

                <select
                  id="industry"
                  name="industry"
                  required
                  defaultValue=""
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="" disabled className="bg-black">
                    Select Industry
                  </option>

                  <option value="Apps & SaaS" className="bg-black">
                    Apps & SaaS
                  </option>
                  <option value="Technology" className="bg-black">
                    Technology
                  </option>
                  <option value="D2C Brands" className="bg-black">
                    D2C Brands
                  </option>
                  <option value="Fashion & Lifestyle" className="bg-black">
                    Fashion & Lifestyle
                  </option>
                  <option value="Real Estate" className="bg-black">
                    Real Estate
                  </option>
                  <option value="Corporate & Business" className="bg-black">
                    Corporate & Business
                  </option>
                  <option value="Electronics & Gadgets" className="bg-black">
                    Electronics & Gadgets
                  </option>
                  <option value="Food & Beverages" className="bg-black">
                    Food & Beverages
                  </option>
                  <option
                    value="Industrial & Manufacturing"
                    className="bg-black"
                  >
                    Industrial & Manufacturing
                  </option>
                  <option value="Healthcare" className="bg-black">
                    Healthcare
                  </option>
                  <option value="Education" className="bg-black">
                    Education
                  </option>
                  <option value="Franchise" className="bg-black">
                    Franchise
                  </option>
                  <option value="Automotive" className="bg-black">
                    Automotive
                  </option>
                  <option value="Other" className="bg-black">
                    Other
                  </option>
                </select>
              </div>
            </div>

            {/* BUDGET */}
            <div>
              <label htmlFor="budget" className={labelClass}>
                Estimated Budget
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue=""
                className={`${fieldClass} cursor-pointer`}
              >
                <option value="" disabled className="bg-black">
                  Select Budget Range
                </option>

                <option value="Under ₹1 Lakh" className="bg-black">
                  Under ₹1 Lakh
                </option>
                <option value="₹1 Lakh – ₹3 Lakhs" className="bg-black">
                  ₹1 Lakh – ₹3 Lakhs
                </option>
                <option value="₹3 Lakhs – ₹5 Lakhs" className="bg-black">
                  ₹3 Lakhs – ₹5 Lakhs
                </option>
                <option value="₹5 Lakhs – ₹10 Lakhs" className="bg-black">
                  ₹5 Lakhs – ₹10 Lakhs
                </option>
                <option value="₹10 Lakhs+" className="bg-black">
                  ₹10 Lakhs+
                </option>
                <option value="Let's Discuss" className="bg-black">
                  Let's Discuss
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Tell Us About Your Video Needs{" "}
                <span className="text-white/40">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your product, business, campaign, audience, video idea or project requirements..."
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-white/50 focus:bg-white/[0.05]"
              />
            </div>

            {/* STATUS */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-lg border p-4 text-sm ${
                  status.includes("successfully")
                    ? "border-white/15 bg-white/[0.04] text-white/80"
                    : "border-white/15 bg-white/[0.04] text-white/60"
                }`}
              >
                {status}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="flex h-[56px] w-full items-center justify-center rounded-xl bg-white text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "SENDING..." : "GET A FREE QUOTE"}
            </motion.button>

            <p className="text-center text-xs leading-5 text-white/30">
              By submitting this form, you agree to be contacted regarding your
              project enquiry.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
