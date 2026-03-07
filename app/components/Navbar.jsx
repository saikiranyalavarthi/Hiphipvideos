"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black flex justify-center">

      {/* FIGMA CONTAINER */}
      <div className="flex w-[1920px] h-[80px] items-center justify-center gap-[263px] py-[20px]">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
  <Image
    src="/hiphiplogo.svg"
    alt="HipHip Logo"
    width={32}
    height={32}
    priority
    className="w-[160px] h-[42px]"
  />
</Link>

        {/* NAV ITEMS */}
        <ul className="hidden md:flex items-center gap-[40px] text-white text-[18px] font-medium">

          <li>
            <Link href="/" className="hover:text-[#CCFF00] transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/portfolio" className="hover:text-[#CCFF00] transition">
              Portfolio
            </Link>
          </li>

          <li>
            <Link href="/pricing" className="hover:text-[#CCFF00] transition">
              Pricing
            </Link>
          </li>

          <li>
            <Link href="/process" className="hover:text-[#CCFF00] transition">
              Our Process
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-[#CCFF00] transition">
              About
            </Link>
          </li>

        </ul>

        {/* BUTTON */}
        <Link
          href="/quote"
          className="
          hidden md:flex
          h-[40px]
          px-[16px]
          py-[10px]
          justify-center
          items-center
          gap-[10px]
          rounded-[8px]
          bg-[#CCFF00]
          text-black
          text-[14px]
          font-semibold
          "
        >
          Get a Free Discovery Call
        </Link>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-[80px] left-0 w-full bg-black md:hidden">
          <ul className="flex flex-col gap-6 p-6 text-white text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/process">Our Process</Link></li>
            <li><Link href="/about">About</Link></li>

            <li>
              <Link
                href="/quote"
                className="bg-[#CCFF00] text-black py-3 text-center rounded-lg font-semibold"
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