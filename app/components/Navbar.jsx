"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

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
    name: "Franchise Videos",
    href: "/services/franchise-videos",
  },
  {
    name: "Fashion Video Production",
    href: "/services/fashion-video-production",
  },
  {
    name: "Real Estate Video Production",
    href: "/services/real-estate-video-production",
  },
  {
    name: "D2C Video Production",
    href: "/services/d2c-video-production",
  },
  {
    name: "SaaS Video Production",
    href: "/services/saas-video-production",
  },
  {
    name: "3D Product Animation",
    href: "/services/3d-product-animation",
  },
  {
    name: "Motion Graphics",
    href: "/services/motion-graphics",
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
    name: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    name: "Fashion",
    href: "/industries/fashion",
  },
  {
    name: "Electronics & Gadgets",
    href: "/industries/electronics-gadgets",
  },
  {
    name: "Industrial & Manufacturing",
    href: "/industries/industrial-manufacturing",
  },
  {
    name: "Corporate",
    href: "/industries/corporate",
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    name: "Education & EdTech",
    href: "/industries/education-edtech",
  },
  {
    name: "Automotive",
    href: "/industries/automotive",
  },
  {
    name: "Consumer Products",
    href: "/industries/consumer-products",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServices(false);
    setMobileIndustries(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-black/70 border-b border-white/10"
      aria-label="Main navigation"
    >
      {/* CONTAINER */}
      <div className="flex w-full max-w-[1440px] h-[72px] md:h-[80px] items-center justify-between px-6 lg:px-12">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="HipHipVideos - Video Production Company"
        >
          <Image
            src="/hiphiplogo.svg"
            alt="HipHipVideos - Video Production Company"
            width={32}
            height={32}
            priority
            className="w-[120px] md:w-[150px] h-[40px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-white text-[14px] lg:text-[16px] font-medium">
          {/* HOME */}
          <li className="relative group">
            <Link
              href="/"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Home
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          {/* ABOUT */}
          <li className="relative group">
            <Link
              href="/about"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              About
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          {/* PORTFOLIO */}
          <li className="relative group">
            <Link
              href="/portfolio"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Portfolio
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setDesktopMenu("services")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <Link
              href="/services"
              className="relative group transition duration-300 hover:text-[#CCFF00] whitespace-nowrap"
            >
              Services
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
            </Link>

            <AnimatePresence>
              {desktopMenu === "services" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-[320px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl"
                >
                  <Link
                    href="/services"
                    className="block px-4 py-3 rounded-lg text-sm font-semibold text-[#CCFF00] hover:bg-white/5 transition"
                  >
                    All Services
                  </Link>

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2.5 rounded-lg text-sm text-white hover:text-[#CCFF00] hover:bg-white/5 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* INDUSTRIES */}
          <li
            className="relative"
            onMouseEnter={() => setDesktopMenu("industries")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <Link
              href="/industries"
              className="relative group transition duration-300 hover:text-[#CCFF00] whitespace-nowrap"
            >
              Industries
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
            </Link>

            <AnimatePresence>
              {desktopMenu === "industries" && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-[330px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl"
                >
                  <Link
                    href="/industries"
                    className="block px-4 py-3 rounded-lg text-sm font-semibold text-[#CCFF00] hover:bg-white/5 transition"
                  >
                    All Industries
                  </Link>

                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block px-4 py-2.5 rounded-lg text-sm text-white hover:text-[#CCFF00] hover:bg-white/5 transition"
                    >
                      {industry.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* CASE STUDIES */}
          <li className="relative group">
            <Link
              href="/case-studies"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Case Studies
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          {/* PROCESS */}
          <li className="relative group">
            <Link
              href="/process"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Process
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          {/* BLOG */}
          <li className="relative group">
            <Link
              href="/blog"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Blog
            </Link>

            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="shrink-0"
        >
          <Link
            href="/quote"
            className="hidden lg:flex h-[40px] px-[16px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[13px] font-semibold shadow-md hover:shadow-[0_0_15px_#CCFF00] transition-all whitespace-nowrap"
          >
            Get a Free Discovery Call
          </Link>
        </motion.div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
            className="absolute top-[72px] left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-6 p-8 text-white text-lg">
              {/* HOME */}
              <li>
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Home
                </Link>
              </li>

              {/* ABOUT */}
              <li>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  About
                </Link>
              </li>

              {/* PORTFOLIO */}
              <li>
                <Link
                  href="/portfolio"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Portfolio
                </Link>
              </li>

              {/* SERVICES MOBILE DROPDOWN */}
              <li className="w-full max-w-[320px]">
                <button
                  type="button"
                  onClick={() => setMobileServices(!mobileServices)}
                  className="w-full flex items-center justify-center py-1 hover:text-[#CCFF00] transition"
                  aria-expanded={mobileServices}
                >
                  Services
                </button>

                <AnimatePresence>
                  {mobileServices && (
                    <motion.div
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
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                        <Link
                          href="/services"
                          onClick={closeMobileMenu}
                          className="text-center text-sm font-semibold text-[#CCFF00] py-2"
                        >
                          All Services
                        </Link>

                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className="text-center text-sm text-gray-300 hover:text-[#CCFF00] py-2 transition"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* INDUSTRIES MOBILE DROPDOWN */}
              <li className="w-full max-w-[320px]">
                <button
                  type="button"
                  onClick={() => setMobileIndustries(!mobileIndustries)}
                  className="w-full flex items-center justify-center py-1 hover:text-[#CCFF00] transition"
                  aria-expanded={mobileIndustries}
                >
                  Industries
                </button>

                <AnimatePresence>
                  {mobileIndustries && (
                    <motion.div
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
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                        <Link
                          href="/industries"
                          onClick={closeMobileMenu}
                          className="text-center text-sm font-semibold text-[#CCFF00] py-2"
                        >
                          All Industries
                        </Link>

                        {industries.map((industry) => (
                          <Link
                            key={industry.href}
                            href={industry.href}
                            onClick={closeMobileMenu}
                            className="text-center text-sm text-gray-300 hover:text-[#CCFF00] py-2 transition"
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* CASE STUDIES */}
              <li>
                <Link
                  href="/case-studies"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Case Studies
                </Link>
              </li>

              {/* PROCESS */}
              <li>
                <Link
                  href="/process"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Process
                </Link>
              </li>

              {/* BLOG */}
              <li>
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Blog
                </Link>
              </li>

              {/* MOBILE CTA */}
              <li className="w-full max-w-[260px] pt-2">
                <Link
                  href="/quote"
                  onClick={closeMobileMenu}
                  className="w-full block text-center bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black py-3 rounded-[8px] font-semibold shadow-md hover:shadow-[0_0_15px_#CCFF00] transition-all"
                >
                  Get a Free Discovery Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
