"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="max-w-[1440px] mx-auto h-[129px] flex items-center justify-between px-20">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/hiphiplogo.svg"
            alt="HipHip Logo"
            width={80}   // 🔥 Increased logo width
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-16 text-white text-[19px] font-medium tracking-wide">
          <li>
            <Link href="/" className="hover:text-[#CCFF00] transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-[#CCFF00] transition duration-300">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-[#CCFF00] transition duration-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/process" className="hover:text-[#CCFF00] transition duration-300">
              Our Process
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#CCFF00] transition duration-300">
              About
            </Link>
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <Link
          href="/quote"
          className="
            hidden md:inline-flex
            items-center
            gap-3
            bg-[#CCFF00]
            text-black
            px-10
            h-[60px]
            rounded-xl
            text-[17px]
            font-semibold
            hover:opacity-90
            transition duration-300
          "
        >
          Get a Free Discovery Call →
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black px-8 pb-8">
          <ul className="flex flex-col gap-6 text-white text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/about">About</Link></li>
            <li>
              <Link
                href="/quote"
                className="block mt-4 bg-[#CCFF00] text-black text-center py-3 rounded-lg font-semibold"
              >
                Get a Free Discovery Call
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}