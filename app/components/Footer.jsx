// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer() {
// return ( <footer className="bg-black flex justify-center py-[60px] px-6 lg:px-12">


//   {/* CONTAINER */}
//   <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-6">

//     {/* LEFT */}
//     <p className="text-white text-[14px] md:text-[16px] leading-[24px] text-center md:text-left">
//       © 2026 Hip Hip Videos | All rights reserved
//     </p>

//     {/* CENTER SOCIAL */}
//     <div className="flex items-center gap-[12px]">

//       {[
//         { src: "/icon 1.svg", alt: "LinkedIn" },
//         { src: "/icon 2.svg", alt: "YouTube" },
//         { src: "/icon 3.svg", alt: "Facebook" },
//         { src: "/icon 4.svg", alt: "Instagram" },
//       ].map((icon, index) => (
//         <Link
//           key={index}
//           href="#"
//           className="group w-[28px] h-[28px] flex items-center justify-center 
//                      border border-[#CCFF00] rounded-[4px] 
//                      hover:bg-[#CCFF00] transition"
//         >
//           <Image
//             src={icon.src}
//             alt={icon.alt}
//             width={14}
//             height={14}
//             className="transition group-hover:brightness-0"
//           />
//         </Link>
//       ))}

//     </div>

//     {/* RIGHT */}
//     <div className="flex items-center gap-[20px] md:gap-[24px] text-white text-[14px] md:text-[16px] leading-[24px]">

//       <Link href="/Terms" className="hover:text-[#CCFF00] transition">
//         Terms of use
//       </Link>

//       <Link href="/Privacy" className="hover:text-[#CCFF00] transition">
//         Privacy policy
//       </Link>

//     </div>

//   </div>

// </footer>

// );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black flex justify-center py-[50px] md:py-[60px] px-6 lg:px-12 border-t border-white/10"
    >

      {/* CONTAINER */}
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

        {/* LEFT */}
        <p className="text-white/80 text-[13px] md:text-[15px] leading-[22px] text-center md:text-left">
          © 2026 Hip Hip Videos | All rights reserved
        </p>

        {/* CENTER SOCIAL */}
        <div className="flex items-center gap-[10px]">

          {[
            { src: "/icon 1.svg", alt: "LinkedIn" },
            { src: "/icon 2.svg", alt: "YouTube" },
            { src: "/icon 3.svg", alt: "Facebook" },
            { src: "/icon 4.svg", alt: "Instagram" },
          ].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="group w-[30px] h-[30px] flex items-center justify-center 
                           border border-[#CCFF00]/60 rounded-[6px] 
                           hover:bg-[#CCFF00] hover:shadow-[0_0_12px_#CCFF00] transition-all duration-300"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={14}
                  height={14}
                  className="transition group-hover:brightness-0"
                />
              </Link>
            </motion.div>
          ))}

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[16px] md:gap-[24px] text-white/80 text-[13px] md:text-[15px] leading-[22px]">

          <Link href="/Terms" className="hover:text-[#CCFF00] transition">
            Terms of use
          </Link>

          <Link href="/Privacy" className="hover:text-[#CCFF00] transition">
            Privacy policy
          </Link>

        </div>

      </div>

    </motion.footer>
  );
}