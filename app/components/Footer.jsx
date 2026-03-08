"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
return ( <footer className="bg-black flex justify-center py-[60px] px-6 lg:px-12">


  {/* CONTAINER */}
  <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-6">

    {/* LEFT */}
    <p className="text-white text-[14px] md:text-[16px] leading-[24px] text-center md:text-left">
      © 2026 Hip Hip Videos | All rights reserved
    </p>

    {/* CENTER SOCIAL */}
    <div className="flex items-center gap-[12px]">

      {[
        { src: "/icon 1.svg", alt: "LinkedIn" },
        { src: "/icon 2.svg", alt: "YouTube" },
        { src: "/icon 3.svg", alt: "Facebook" },
        { src: "/icon 4.svg", alt: "Instagram" },
      ].map((icon, index) => (
        <Link
          key={index}
          href="#"
          className="w-[28px] h-[28px] flex items-center justify-center 
                     border border-[#CCFF00] rounded-[4px] 
                     hover:bg-[#CCFF00] transition"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={14}
            height={14}
          />
        </Link>
      ))}

    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-[20px] md:gap-[24px] text-white text-[14px] md:text-[16px] leading-[24px]">

      <Link href="#" className="hover:text-[#CCFF00] transition">
        Terms of use
      </Link>

      <Link href="#" className="hover:text-[#CCFF00] transition">
        Privacy policy
      </Link>

    </div>

  </div>

</footer>


);
}
