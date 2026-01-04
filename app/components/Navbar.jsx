"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div
        className="
          mx-auto max-w-7xl
          flex items-center justify-between
          px-6 py-3
          rounded-2xl
          bg-gray-900/80
          backdrop-blur-xl
          border border-white/10
          shadow-xl
        "
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/hiphiplogo.svg"
            alt="HipHip Logo"
            width={46}
            height={46}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">
          <li>
            <Link href="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-orange-400 transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/process" className="hover:text-orange-400 transition">
              Our Process
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-400 transition">
              About
            </Link>
          </li>
        </ul>

        {/* DESKTOP BUTTON */}
        <Link
          href="/quote"
          className="
            hidden md:inline-block
            bg-[#CCFF00]
            text-black
            px-5 py-2
            rounded-xl
            font-semibold
            hover:bg-orange-400
            transition
          "
        >
          Get Quote
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden
            mx-auto max-w-7xl
            mt-2
            px-6 py-6
            rounded-2xl
            bg-gray-900/95
            backdrop-blur-xl
            border border-white/10
            shadow-xl
          "
        >
          <ul className="flex flex-col gap-6 text-white font-medium">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/process" onClick={() => setOpen(false)}>
                Our Process
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="/quote"
                onClick={() => setOpen(false)}
                className="
                  block text-center
                  bg-[#CCFF00]
                  text-black
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
