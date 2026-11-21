"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Product Advertisements",
    "Product Demo Videos",
    "AI-Powered Visuals",
    "Motion Graphics",
    "SaaS Explainer Videos",
    "Business Videos",
    "3D Product Animations",
    "Brand Storytelling",
  ];

  const videos = [
    "/videos/borosil.mp4",
    "/videos/BlueStone.mp4",
    "/videos/Hidesign.mp4",
    "/videos/Fab India.mp4",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  // Animated text effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentWord.substring(0, displayText.length - 1)
              : currentWord.substring(0, displayText.length + 1),
          );
        },
        isDeleting ? 45 : 90,
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Change background video every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[600px] h-[700px] md:h-[750px] w-full items-end justify-center overflow-hidden bg-black"
    >
      {/* BACKGROUND VIDEO */}
      <motion.video
        key={videos[videoIndex]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 6, ease: "easeOut" },
        }}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[videoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"
      />

      {/* VIDEO VIGNETTE */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/10" />

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full max-w-[1440px] flex items-end justify-start text-left px-5 pb-24 sm:px-8 sm:pb-28 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-[16px] md:gap-[20px] max-w-[780px]"
        >
          {/* SEO H1 */}
          <h1
            id="hero-heading"
            className="text-white text-[25px] sm:text-[32px] md:text-[40px] lg:text-[46px] font-bold leading-[1.15] tracking-tight"
          >
            Product & Business Video Creation{" "}
            <span className="text-[#CCFF00] text-glow">
              Powered by Creativity
            </span>
          </h1>

          {/* ANIMATED TEXT */}
          <h2 className="text-white text-[19px] sm:text-[22px] md:text-[27px] font-semibold leading-[1.25] max-w-[750px]">
            Creating Stunning{" "}
            <span className="text-[#CCFF00] text-glow">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          {/* SEO DESCRIPTION */}
          <p className="max-w-[700px] text-[12px] sm:text-[13px] md:text-[14px] leading-6 text-white/75">
            Hip Hip Videos is a video creation company crafting product
            advertisements, product demos, AI-powered videos, animated visuals,
            motion graphics, SaaS explainers and business videos. We combine AI,
            animation, visual effects, graphic design and visual storytelling to
            help brands and businesses communicate ideas, showcase products and
            connect with audiences across India and worldwide.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] sm:gap-[16px]">
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex px-[22px] py-[12px] justify-center items-center gap-[10px] rounded-full bg-white/15 border border-white/30 backdrop-blur-md text-white text-[14px] font-bold leading-[24px] whitespace-nowrap shadow-lg hover:bg-[#CCFF00] hover:text-black transition-all duration-300"
            >
              Start Your Video Project →
            </motion.a>

            <motion.a
              href="/work"
              whileHover={{ x: 5 }}
              className="text-white text-[14px] font-bold leading-[24px] hover:text-[#CCFF00] transition"
            >
              Explore Our Video Creations →
            </motion.a>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/60 text-xs sm:text-sm">
            <span>Video Creation for Brands & Businesses</span>

            <span className="hidden sm:block text-white/30">•</span>

            <a
              href="tel:+916301022795"
              className="hover:text-[#CCFF00] transition"
              aria-label="Call Hip Hip Videos"
            >
              +91 6301022795
            </a>

            <span className="hidden sm:block text-white/30">•</span>

            <a
              href="mailto:info@hiphipvideos.com"
              className="hover:text-[#CCFF00] transition"
              aria-label="Email Hip Hip Videos"
            >
              info@hiphipvideos.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* VIDEO INDICATORS */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"
        aria-label="Hero background video controls"
      >
        {videos.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setVideoIndex(index)}
            aria-label={`Switch to background video ${index + 1}`}
            aria-current={videoIndex === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              videoIndex === index ? "w-8 bg-[#CCFF00]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
