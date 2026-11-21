"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* =========================================
   VIDEO CREATION SERVICES
========================================= */

const services = [
  {
    name: "Commercial Video Creation",
    href: "/services/commercial-video-creation",
  },
  {
    name: "Business Video Creation",
    href: "/services/business-video-creation",
  },
  {
    name: "Product Video Creation",
    href: "/services/product-video-creation",
  },
  {
    name: "Explainer Video Creation",
    href: "/services/explainer-video-creation",
  },
  {
    name: "AI Video Creation",
    href: "/services/ai-video-creation",
  },
  {
    name: "Motion Graphics & Animation",
    href: "/services/motion-graphics-animation",
  },
];

/* =========================================
   SOCIAL LINKS
========================================= */

const socialLinks = [
  {
    src: "/icon 1.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    src: "/icon 2.svg",
    alt: "YouTube",
    href: "https://www.youtube.com/",
  },
  {
    src: "/icon 3.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    src: "/icon 4.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/",
  },
];

/* =========================================
   INDUSTRIES
========================================= */

const industries = [
  {
    name: "Apps & SaaS",
    href: "/industries/apps-saas",
  },
  {
    name: "D2C & Ecommerce Brands",
    href: "/industries/d2c-brands",
  },
  {
    name: "Fashion & Lifestyle",
    href: "/industries/fashion",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    name: "Corporate & Business",
    href: "/industries/corporate",
  },
  {
    name: "Electronics & Gadgets",
    href: "/industries/electronics-gadgets",
  },
  {
    name: "Industrial & Manufacturing",
    href: "/industries/industrial-manufacturing",
  },
];

/* =========================================
   FOOTER
========================================= */

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* MAIN FOOTER */}
      <div className="mx-auto w-full max-w-[1440px] px-6 py-14 sm:py-16 lg:px-12 lg:py-20">
        {/* TOP CTA */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              HipHipVideos
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Create videos that{" "}
              <span className="text-[#CCFF00]">make an impact.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50 sm:text-base">
              Creative video creation for products, brands, startups and
              businesses. We combine AI, animation, motion graphics, visual
              effects, graphic design and storytelling to turn ideas into
              engaging video content.
            </p>
          </div>

          <Link
            href="/quote"
            aria-label="Request a video creation project quote"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-6 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
          >
            Get a Free Discovery Call
          </Link>
        </div>

        {/* FOOTER GRID */}
        <div className="grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="HipHipVideos Home"
            >
              <Image
                src="/hiphiplogo.svg"
                alt="HipHipVideos Video Creation Company logo"
                width={150}
                height={40}
                className="h-[40px] w-[150px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              HipHipVideos is a video creation company in Hyderabad, India,
              creating product-focused and business-focused videos using AI,
              animation, motion graphics, visual effects, design, storytelling
              and real footage when required.
            </p>

            {/* CONTACT */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+916301022795"
                aria-label="Call HipHipVideos"
                className="block text-sm text-white/60 transition hover:text-[#CCFF00]"
              >
                +91 63021 11807
              </a>

              <a
                href="mailto:info@hiphipvideos.com"
                aria-label="Email HipHipVideos"
                className="block break-all text-sm text-white/60 transition hover:text-[#CCFF00]"
              >
                info@hiphipvideos.com
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>

            <nav
              aria-label="Company navigation"
              className="mt-5 flex flex-col gap-3"
            >
              <Link href="/" className="footer-link">
                Home
              </Link>

              <Link href="/about" className="footer-link">
                About Us
              </Link>

              <Link href="/portfolio" className="footer-link">
                Video Portfolio
              </Link>

              <Link href="/case-studies" className="footer-link">
                Case Studies
              </Link>

              <Link href="/process" className="footer-link">
                Our Creative Process
              </Link>

              <Link href="/blog" className="footer-link">
                Blog
              </Link>

              <Link href="/quote" className="footer-link">
                Get a Quote
              </Link>
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Video Creation Services
            </h3>

            <nav
              aria-label="Video creation services navigation"
              className="mt-5 flex flex-col gap-3"
            >
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="footer-link"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* INDUSTRIES */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Industries We Serve
            </h3>

            <nav
              aria-label="Industries navigation"
              className="mt-5 flex flex-col gap-3"
            >
              {industries.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="footer-link"
                >
                  {industry.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div
          className="flex items-center gap-[10px]"
          aria-label="HipHipVideos social media"
        >
          {socialLinks.map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -4,
                scale: 1.1,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <a
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`HipHipVideos on ${icon.alt}`}
                className="group w-[30px] h-[30px] flex items-center justify-center border border-[#CCFF00]/60 rounded-[6px] hover:bg-[#CCFF00] hover:shadow-[0_0_12px_#CCFF00] transition-all duration-300"
              >
                <Image
                  src={icon.src}
                  alt=""
                  width={14}
                  height={14}
                  className="transition group-hover:brightness-0"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* LOCATION & SEO CONTENT */}
        <div className="border-t border-white/10 py-8 mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* LOCAL SEO */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Video Creation Company in Hyderabad
              </h3>

              <address className="mt-3 not-italic text-sm leading-6 text-white/45">
                Sattva Magnus Commercial Building,
                <br />
                Shaikpet, Jubilee Hills,
                <br />
                Hyderabad, Telangana 500008, India
              </address>
            </div>

            {/* SERVICES SEO */}
            <div className="md:text-right">
              <p className="text-sm font-semibold text-white">
                Product & Business Video Creation
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/45 md:ml-auto">
                Product advertisements, product demo videos, business videos, AI
                video creation, SaaS explainers, app promotional videos,
                animated product videos, 3D product animation, motion graphics,
                visual storytelling and creative brand campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HipHipVideos. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#CCFF00]"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-[#CCFF00]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
