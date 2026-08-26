"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    name: "Commercial Video Production",
    href: "/services/commercial-video-production",
  },
  {
    name: "Corporate Video Production",
    href: "/services/corporate-video-production",
  },
  {
    name: "Product Video Production",
    href: "/services/product-video-production",
  },
  {
    name: "Explainer Videos",
    href: "/services/explainer-videos",
  },
  {
    name: "Pitch Videos",
    href: "/services/pitch-videos",
  },
  {
    name: "Brand Films",
    href: "/services/brand-films",
  },
];

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

const industries = [
  {
    name: "Apps & SaaS",
    href: "/industries/apps-saas",
  },
  {
    name: "D2C Brands",
    href: "/industries/d2c-brands",
  },
  {
    name: "Fashion",
    href: "/industries/fashion",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    name: "Corporate",
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
              Creative video production for brands, startups and businesses.
              From concept and production to editing and final delivery.
            </p>
          </div>

          <Link
            href="/quote"
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
                alt="HipHipVideos logo"
                width={150}
                height={40}
                className="h-[40px] w-[150px] object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
              HipHipVideos is a video production company in Hyderabad creating
              commercial, corporate, product, explainer and branded videos for
              businesses and brands.
            </p>

            {/* CONTACT */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+916302111807"
                className="block text-sm text-white/60 transition hover:text-[#CCFF00]"
              >
                +91 63021 11807
              </a>

              <a
                href="mailto:info@hiphipvideos.com"
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
                Portfolio
              </Link>

              <Link href="/case-studies" className="footer-link">
                Case Studies
              </Link>

              <Link href="/process" className="footer-link">
                Our Process
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
              Video Services
            </h3>

            <nav
              aria-label="Video services navigation"
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
              Industries
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
        {/* CENTER SOCIAL */}
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
                className="group w-[30px] h-[30px] flex items-center justify-center 
                           border border-[#CCFF00]/60 rounded-[6px]
                           hover:bg-[#CCFF00]
                           hover:shadow-[0_0_12px_#CCFF00]
                           transition-all duration-300"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={14}
                  height={14}
                  className="transition group-hover:brightness-0"
                />
              </a>
            </motion.div>
          ))}
        </div>
        {/* LOCATION */}
        <div className="border-t border-white/10 py-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Video Production Company in Hyderabad
              </h3>

              <address className="mt-3 not-italic text-sm leading-6 text-white/45">
                Sattva Magnus Commercial Building,
                <br />
                Shaikpet, Jubilee Hills,
                <br />
                Hyderabad, Telangana 500008
              </address>
            </div>

            <div className="md:text-right">
              <p className="text-sm font-semibold text-white">
                Video Production Services
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/45 md:ml-auto">
                Commercial videos, corporate films, product videos,
                advertisements, explainer videos, pitch videos, brand films,
                motion graphics and branded content.
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
