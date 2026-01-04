"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5">
            ‹
          </span>
          <p>© 2026 Hip Hip Videos | All rights reserved</p>
        </div>

        {/* CENTER SOCIAL ICONS */}
        <div className="flex items-center gap-4">
  {[
    { href: "#", icon: "/icon 1.svg", alt: "LinkedIn" },
    { href: "#", icon: "/icon 2.svg", alt: "YouTube" },
    { href: "#", icon: "/icon 3.svg", alt: "Facebook" },
    { href: "#", icon: "/icon 4.svg", alt: "Instagram" },
  ].map((item, index) => (
    <Link
      key={index}
      href={item.href}
      className="w-10 h-10 flex items-center justify-center rounded-lg
                 hover:scale-110 transition-transform duration-300"
    >
      <Image
        src={item.icon}
        alt={item.alt}
        width={22}
        height={22}
        className="transition-opacity duration-300 hover:opacity-90"
      />
    </Link>
  ))}
</div>


        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="#" className="hover:text-[#CCFF00] transition">
            Terms of use
          </Link>
          <Link href="#" className="hover:text-[#CCFF00] transition">
            Privacy policy
          </Link>
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5">
            ›
          </span>
        </div>

      </div>
    </footer>
  );
}
