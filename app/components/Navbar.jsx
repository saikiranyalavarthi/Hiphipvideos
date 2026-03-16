"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
const [open, setOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full z-50 bg-black flex justify-center">

  {/* RESPONSIVE CONTAINER */}
  <div className="flex w-full max-w-[1440px] h-[80px] items-center justify-between px-6 lg:px-12">

    {/* LOGO */}
    <Link href="/" className="flex items-center">
      <Image
        src="/hiphiplogo.svg"
        alt="HipHip Logo"
        width={32}
        height={32}
        priority
        className="w-[140px] md:w-[160px] h-[42px]"
      />
    </Link>

    {/* NAV ITEMS */}
    <ul className="hidden md:flex items-center gap-6 lg:gap-[40px] text-white text-[16px] lg:text-[18px] font-medium">

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
      whitespace-nowrap
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
  <div className="absolute top-[80px] left-0 w-full bg-black md:hidden border-t border-gray-800">
    
    <ul className="flex flex-col items-center gap-6 p-8 text-white text-lg">

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

      {/* MOBILE BUTTON */}
      <li className="w-full max-w-[260px] pt-2">
        <Link
          href="/quote"
          className="w-full block text-center bg-[#CCFF00] text-black py-3 rounded-[8px] font-semibold hover:bg-[#b6e600] transition"
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
