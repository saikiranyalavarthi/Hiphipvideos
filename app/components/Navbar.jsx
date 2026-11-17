"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
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
  { name: "Explainer Videos", href: "/services/explainer-videos" },
  { name: "Pitch Videos", href: "/services/pitch-videos" },
  { name: "Franchise Videos", href: "/services/franchise-videos" },
  {
    name: "Fashion Video Production",
    href: "/services/fashion-video-production",
  },
  {
    name: "Real Estate Video Production",
    href: "/services/real-estate-video-production",
  },
  { name: "D2C Video Production", href: "/services/d2c-video-production" },
  { name: "SaaS Video Production", href: "/services/saas-video-production" },
  { name: "3D Product Animation", href: "/services/3d-product-animation" },
  { name: "Motion Graphics", href: "/services/motion-graphics" },
];

const industries = [
  { name: "Apps & SaaS", href: "/industries/apps-saas" },
  { name: "D2C Brands", href: "/industries/d2c-brands" },
  { name: "Real Estate", href: "/industries/real-estate" },
  { name: "Fashion", href: "/industries/fashion" },
  { name: "Electronics & Gadgets", href: "/industries/electronics-gadgets" },
  {
    name: "Industrial & Manufacturing",
    href: "/industries/industrial-manufacturing",
  },
  { name: "Corporate", href: "/industries/corporate" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Education & EdTech", href: "/industries/education-edtech" },
  { name: "Automotive", href: "/industries/automotive" },
  { name: "Consumer Products", href: "/industries/consumer-products" },
];

const locations = [
  {
    name: "India",
    href: "/locations/india",
    cities: [
      { name: "Hyderabad", href: "/locations/india/hyderabad" },
      { name: "Mumbai", href: "/locations/india/mumbai" },
      { name: "Bangalore", href: "/locations/india/bangalore" },
      { name: "Chennai", href: "/locations/india/chennai" },
      { name: "Delhi", href: "/locations/india/delhi" },
      { name: "Pune", href: "/locations/india/pune" },
      { name: "Kolkata", href: "/locations/india/kolkata" },
      { name: "Ahmedabad", href: "/locations/india/ahmedabad" },
      { name: "Jaipur", href: "/locations/india/jaipur" },
      { name: "Lucknow", href: "/locations/india/lucknow" },
      { name: "Chandigarh", href: "/locations/india/chandigarh" },
      { name: "Indore", href: "/locations/india/indore" },
      { name: "Nagpur", href: "/locations/india/nagpur" },
      { name: "Kochi", href: "/locations/india/kochi" },
      { name: "Coimbatore", href: "/locations/india/coimbatore" },
      { name: "Surat", href: "/locations/india/surat" },
      { name: "Visakhapatnam", href: "/locations/india/visakhapatnam" },
      { name: "Bhopal", href: "/locations/india/bhopal" },
      { name: "Vadodara", href: "/locations/india/vadodara" },
      { name: "Noida", href: "/locations/india/noida" },
      { name: "Gurugram", href: "/locations/india/gurugram" },
    ],
  },
  {
    name: "USA",
    href: "/locations/usa",
    cities: [
      { name: "New York", href: "/locations/usa/new-york" },
      { name: "Los Angeles", href: "/locations/usa/los-angeles" },
      { name: "Chicago", href: "/locations/usa/chicago" },
      { name: "San Francisco", href: "/locations/usa/san-francisco" },
      { name: "Miami", href: "/locations/usa/miami" },
      { name: "Seattle", href: "/locations/usa/seattle" },
      { name: "Austin", href: "/locations/usa/austin" },
      { name: "Boston", href: "/locations/usa/boston" },
      { name: "Dallas", href: "/locations/usa/dallas" },
      { name: "Atlanta", href: "/locations/usa/atlanta" },
      { name: "Houston", href: "/locations/usa/houston" },
      { name: "Washington DC", href: "/locations/usa/washington-dc" },
    ],
  },
  {
    name: "United Kingdom",
    href: "/locations/uk",
    cities: [
      { name: "London", href: "/locations/uk/london" },
      { name: "Manchester", href: "/locations/uk/manchester" },
      { name: "Birmingham", href: "/locations/uk/birmingham" },
      { name: "Leeds", href: "/locations/uk/leeds" },
      { name: "Glasgow", href: "/locations/uk/glasgow" },
      { name: "Edinburgh", href: "/locations/uk/edinburgh" },
      { name: "Bristol", href: "/locations/uk/bristol" },
      { name: "Liverpool", href: "/locations/uk/liverpool" },
    ],
  },
  {
    name: "Saudi Arabia",
    href: "/locations/saudi-arabia",
    cities: [
      { name: "Riyadh", href: "/locations/saudi-arabia/riyadh" },
      { name: "Jeddah", href: "/locations/saudi-arabia/jeddah" },
      { name: "Dammam", href: "/locations/saudi-arabia/dammam" },
      { name: "Mecca", href: "/locations/saudi-arabia/mecca" },
      { name: "Medina", href: "/locations/saudi-arabia/medina" },
      { name: "Khobar", href: "/locations/saudi-arabia/khobar" },
    ],
  },
  {
    name: "UAE",
    href: "/locations/uae",
    cities: [
      { name: "Dubai", href: "/locations/uae/dubai" },
      { name: "Abu Dhabi", href: "/locations/uae/abu-dhabi" },
      { name: "Sharjah", href: "/locations/uae/sharjah" },
      { name: "Ajman", href: "/locations/uae/ajman" },
    ],
  },
  {
    name: "Canada",
    href: "/locations/canada",
    cities: [
      { name: "Toronto", href: "/locations/canada/toronto" },
      { name: "Vancouver", href: "/locations/canada/vancouver" },
      { name: "Montreal", href: "/locations/canada/montreal" },
      { name: "Calgary", href: "/locations/canada/calgary" },
      { name: "Ottawa", href: "/locations/canada/ottawa" },
    ],
  },
  {
    name: "Australia",
    href: "/locations/australia",
    cities: [
      { name: "Sydney", href: "/locations/australia/sydney" },
      { name: "Melbourne", href: "/locations/australia/melbourne" },
      { name: "Brisbane", href: "/locations/australia/brisbane" },
      { name: "Perth", href: "/locations/australia/perth" },
      { name: "Adelaide", href: "/locations/australia/adelaide" },
    ],
  },
  {
    name: "Singapore",
    href: "/locations/singapore",
    cities: [
      { name: "Singapore City", href: "/locations/singapore/singapore-city" },
    ],
  },
  {
    name: "Germany",
    href: "/locations/germany",
    cities: [
      { name: "Berlin", href: "/locations/germany/berlin" },
      { name: "Munich", href: "/locations/germany/munich" },
      { name: "Frankfurt", href: "/locations/germany/frankfurt" },
      { name: "Hamburg", href: "/locations/germany/hamburg" },
    ],
  },
  {
    name: "France",
    href: "/locations/france",
    cities: [
      { name: "Paris", href: "/locations/france/paris" },
      { name: "Lyon", href: "/locations/france/lyon" },
      { name: "Marseille", href: "/locations/france/marseille" },
    ],
  },
  {
    name: "Netherlands",
    href: "/locations/netherlands",
    cities: [
      { name: "Amsterdam", href: "/locations/netherlands/amsterdam" },
      { name: "Rotterdam", href: "/locations/netherlands/rotterdam" },
    ],
  },
  {
    name: "New Zealand",
    href: "/locations/new-zealand",
    cities: [
      { name: "Auckland", href: "/locations/new-zealand/auckland" },
      { name: "Wellington", href: "/locations/new-zealand/wellington" },
    ],
  },
  {
    name: "South Africa",
    href: "/locations/south-africa",
    cities: [
      { name: "Johannesburg", href: "/locations/south-africa/johannesburg" },
      { name: "Cape Town", href: "/locations/south-africa/cape-town" },
      { name: "Durban", href: "/locations/south-africa/durban" },
    ],
  },
  {
    name: "Qatar",
    href: "/locations/qatar",
    cities: [{ name: "Doha", href: "/locations/qatar/doha" }],
  },
  {
    name: "Kuwait",
    href: "/locations/kuwait",
    cities: [{ name: "Kuwait City", href: "/locations/kuwait/kuwait-city" }],
  },
  {
    name: "Oman",
    href: "/locations/oman",
    cities: [{ name: "Muscat", href: "/locations/oman/muscat" }],
  },
  {
    name: "Bahrain",
    href: "/locations/bahrain",
    cities: [{ name: "Manama", href: "/locations/bahrain/manama" }],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [mobileLocations, setMobileLocations] = useState(false);
  const [openCountry, setOpenCountry] = useState(null);
  const [desktopMenu, setDesktopMenu] = useState(null);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServices(false);
    setMobileIndustries(false);
    setMobileLocations(false);
    setOpenCountry(null);
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
          className="flex shrink-0 items-center"
          aria-label="HipHipVideos - Video Production Company"
        >
          <Image
            src="/hip hip new logo.png"
            alt="HipHipVideos - Video Production Company"
            width={300}
            height={100}
            priority
            quality={100}
            sizes="(max-width: 768px) 120px, 150px"
            className="h-auto w-[120px] object-contain md:w-[150px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 text-white text-[14px] lg:text-[16px] font-medium">
          <li className="relative group">
            <Link
              href="/"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          <li className="relative group">
            <Link
              href="/about"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              About
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
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

          {/* LOCATIONS */}
          <li
            className="relative"
            onMouseEnter={() => setDesktopMenu("locations")}
            onMouseLeave={() => setDesktopMenu(null)}
          >
            <Link
              href="/locations"
              className="relative group transition duration-300 hover:text-[#CCFF00] whitespace-nowrap"
            >
              Locations
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
            </Link>

            <AnimatePresence>
              {desktopMenu === "locations" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-[340px] max-h-[75vh] overflow-y-auto bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl"
                >
                  <Link
                    href="/locations"
                    className="block px-4 py-3 rounded-lg text-sm font-semibold text-[#CCFF00] hover:bg-white/5"
                  >
                    All Global Locations →
                  </Link>
                  {locations.map((country) => (
                    <div key={country.href} className="mb-2">
                      <Link
                        href={country.href}
                        className="block px-4 py-2 text-sm font-bold text-[#CCFF00] hover:bg-white/5 rounded-lg"
                      >
                        {country.name}
                      </Link>
                      <div className="grid grid-cols-2 gap-1 px-3">
                        {country.cities.map((city) => (
                          <Link
                            key={city.href}
                            href={city.href}
                            className="px-2 py-2 text-xs text-gray-300 hover:text-[#CCFF00] hover:bg-white/5 rounded-md transition"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li className="relative group">
            <Link
              href="/case-studies"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Case Studies
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

          <li className="relative group">
            <Link
              href="/process"
              className="transition duration-300 group-hover:text-[#CCFF00] whitespace-nowrap"
            >
              Process
            </Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full" />
          </li>

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
        <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <ul className="flex flex-col items-center gap-6 p-8 text-white text-lg">
              <li>
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  About
                </Link>
              </li>
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
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

              {/* ✅ LOCATIONS MOBILE DROPDOWN — NEWLY ADDED */}
              <li className="w-full max-w-[320px]">
                <button
                  type="button"
                  onClick={() => setMobileLocations(!mobileLocations)}
                  className="w-full flex items-center justify-center py-1 hover:text-[#CCFF00] transition"
                  aria-expanded={mobileLocations}
                >
                  Locations
                </button>
                <AnimatePresence>
                  {mobileLocations && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
                        <Link
                          href="/locations"
                          onClick={closeMobileMenu}
                          className="text-center text-sm font-semibold text-[#CCFF00] py-2"
                        >
                          All Global Locations →
                        </Link>
                        {locations.map((country) => (
                          <div
                            key={country.href}
                            className="border-b border-white/5 last:border-none pb-1"
                          >
                            <button
                              type="button"
                              onClick={() =>
                                setOpenCountry(
                                  openCountry === country.name
                                    ? null
                                    : country.name,
                                )
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-white hover:text-[#CCFF00] transition"
                              aria-expanded={openCountry === country.name}
                            >
                              <span>{country.name}</span>
                              <span className="text-[#CCFF00] text-xs">
                                {openCountry === country.name ? "−" : "+"}
                              </span>
                            </button>
                            <AnimatePresence>
                              {openCountry === country.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="grid grid-cols-2 gap-1 px-2 pb-2">
                                    <Link
                                      href={country.href}
                                      onClick={closeMobileMenu}
                                      className="col-span-2 text-center text-xs font-semibold text-[#CCFF00] py-1.5 rounded-md hover:bg-white/5"
                                    >
                                      All {country.name} Locations
                                    </Link>
                                    {country.cities.map((city) => (
                                      <Link
                                        key={city.href}
                                        href={city.href}
                                        onClick={closeMobileMenu}
                                        className="text-center text-xs text-gray-300 py-1.5 rounded-md hover:text-[#CCFF00] hover:bg-white/5 transition"
                                      >
                                        {city.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/case-studies"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="hover:text-[#CCFF00] transition"
                >
                  Blog
                </Link>
              </li>

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
