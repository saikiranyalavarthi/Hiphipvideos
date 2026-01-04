"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroCreativePage() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGE (YOU CAN CHANGE THIS IMAGE) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-[90%] max-w-4xl aspect-square"
        >
          <Image
            src="/hero1.jpg" // 👈 replace with your image
            alt="Creative Visual"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
          Hip Hip Videos is a <br />
          <span className="font-semibold">
            dynamic creative agency
          </span>{" "}
          with a design <br />
          and content focus.
        </h1>
      </motion.div>

    </section>
  );
}
