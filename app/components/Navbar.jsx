// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
// const [open, setOpen] = useState(false);

// return ( <nav className="fixed top-0 left-0 w-full z-50 bg-black flex justify-center">

//   {/* RESPONSIVE CONTAINER */}
//   <div className="flex w-full max-w-[1440px] h-[80px] items-center justify-between px-6 lg:px-12">

//     {/* LOGO */}
//     <Link href="/" className="flex items-center">
//       <Image
//         src="/hiphiplogo.svg"
//         alt="HipHip Logo"
//         width={32}
//         height={32}
//         priority
//         className="w-[140px] md:w-[160px] h-[42px]"
//       />
//     </Link>

//     {/* NAV ITEMS */}
//     <ul className="hidden md:flex items-center gap-6 lg:gap-[40px] text-white text-[16px] lg:text-[18px] font-medium">

//       <li>
//         <Link href="/" className="hover:text-[#CCFF00] transition">
//           Home
//         </Link>
//       </li>

//       <li>
//         <Link href="/portfolio" className="hover:text-[#CCFF00] transition">
//           Portfolio
//         </Link>
//       </li>

//       <li>
//         <Link href="/pricing" className="hover:text-[#CCFF00] transition">
//           Pricing
//         </Link>
//       </li>

//       <li>
//         <Link href="/process" className="hover:text-[#CCFF00] transition">
//           Our Process
//         </Link>
//       </li>

//       <li>
//         <Link href="/about" className="hover:text-[#CCFF00] transition">
//           About
//         </Link>
//       </li>

//     </ul>

//     {/* BUTTON */}
//     <Link
//       href="/quote"
//       className="
//       hidden md:flex
//       h-[40px]
//       px-[16px]
//       py-[10px]
//       justify-center
//       items-center
//       gap-[10px]
//       rounded-[8px]
//       bg-[#CCFF00]
//       text-black
//       text-[14px]
//       font-semibold
//       whitespace-nowrap
//       "
//     >
//       Get a Free Discovery Call
//     </Link>

//     {/* MOBILE MENU ICON */}
//     <button
//       onClick={() => setOpen(!open)}
//       className="md:hidden text-white text-3xl"
//     >
//       {open ? "✕" : "☰"}
//     </button>

//   </div>

//   {/* MOBILE MENU */}
//   {open && (
//   <div className="absolute top-[80px] left-0 w-full bg-black md:hidden border-t border-gray-800">
    
//     <ul className="flex flex-col items-center gap-6 p-8 text-white text-lg">

//       <li>
//         <Link href="/" className="hover:text-[#CCFF00] transition">
//           Home
//         </Link>
//       </li>

//       <li>
//         <Link href="/portfolio" className="hover:text-[#CCFF00] transition">
//           Portfolio
//         </Link>
//       </li>

//       <li>
//         <Link href="/pricing" className="hover:text-[#CCFF00] transition">
//           Pricing
//         </Link>
//       </li>

//       <li>
//         <Link href="/process" className="hover:text-[#CCFF00] transition">
//           Our Process
//         </Link>
//       </li>

//       <li>
//         <Link href="/about" className="hover:text-[#CCFF00] transition">
//           About
//         </Link>
//       </li>

//       {/* MOBILE BUTTON */}
//       <li className="w-full max-w-[260px] pt-2">
//         <Link
//           href="/quote"
//           className="w-full block text-center bg-[#CCFF00] text-black py-3 rounded-[8px] font-semibold hover:bg-[#b6e600] transition"
//         >
//           Get a Free Discovery Call
//         </Link>
//       </li>

//     </ul>

//   </div>
// )}
// </nav>


// );
// }





"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-black/70 border-b border-white/10"
    >

      {/* CONTAINER */}
      <div className="flex w-full max-w-[1440px] h-[72px] md:h-[80px] items-center justify-between px-6 lg:px-12">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/hiphiplogo.svg"
            alt="HipHip Logo"
            width={32}
            height={32}
            priority
            className="w-[120px] md:w-[150px] h-[40px]"
          />
        </Link>

        {/* NAV ITEMS */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-[36px] text-white text-[15px] lg:text-[17px] font-medium">

          {["Home", "Portfolio", "Pricing", "Our Process", "About"].map((item, i) => (
            <li key={i} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="transition duration-300 group-hover:text-[#CCFF00]"
              >
                {item}
              </Link>

              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#CCFF00] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

        </ul>

        {/* BUTTON */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/quote"
            className="hidden md:flex h-[40px] px-[16px] items-center rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[14px] font-semibold shadow-md hover:shadow-[0_0_15px_#CCFF00] transition-all"
          >
            Get a Free Discovery Call
          </Link>
        </motion.div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
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
            className="absolute top-[72px] md:top-[80px] left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 md:hidden"
          >

            <ul className="flex flex-col items-center gap-6 p-8 text-white text-lg">

              {["Home", "Portfolio", "Pricing", "Our Process", "About"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    onClick={() => setOpen(false)}
                    className="hover:text-[#CCFF00] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}

              {/* MOBILE BUTTON */}
              <li className="w-full max-w-[260px] pt-2">
                <Link
                  href="/quote"
                  onClick={() => setOpen(false)}
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