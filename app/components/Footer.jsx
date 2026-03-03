"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-white/20 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* LEFT */}
          <div className="flex items-center gap-4 text-gray-300 text-sm">
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
              ‹
            </span>
            <p className="text-center md:text-left">
              © 2026 Hip Hip Videos | All rights reserved
            </p>
          </div>

          {/* CENTER SOCIAL ICONS */}
          <div className="flex items-center gap-5">
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
                           bg-white/5 hover:bg-[#CCFF00] hover:scale-110 
                           transition-all duration-300"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={18}
                  height={18}
                />
              </Link>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-sm text-gray-300">
            <Link href="#" className="hover:text-[#CCFF00] transition">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-[#CCFF00] transition">
              Privacy Policy
            </Link>
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10">
              ›
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}