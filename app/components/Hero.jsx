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

  // TYPEWRITER EFFECT
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

  // AUTO VIDEO ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full bg-white px-3 pt-5 sm:px-5 sm:pt-6 md:px-6"
    >
      {/* HERO CONTAINER */}
      <div className="relative isolate flex h-[85svh] min-h-[620px] max-h-[900px] w-full items-end overflow-hidden rounded-[20px] bg-black sm:rounded-[28px] md:rounded-[32px]">
        {/* BACKGROUND VIDEO */}
        <motion.video
          key={videos[videoIndex]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 6, ease: "easeOut" },
          }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videos[videoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        {/* CINEMATIC GRADIENT */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"
        />

        {/* VIGNETTE */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/10" />

        {/* HERO CONTENT */}
        <div className="relative z-10 w-full px-5 pb-20 pt-16 sm:px-9 sm:pb-24 md:px-14 lg:px-20 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex max-w-[1200px] flex-col items-start gap-5 sm:gap-6"
          >
            {/* MAIN HEADLINE */}
            <h1
              id="hero-heading"
              className="max-w-[1150px] text-[40px] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-[42px] md:text-[52px] lg:text-[62px] xl:text-[82px]"
            >
              Product & Business Video Creation{" "}
              <span className="text-white">Powered by Creativity</span>
            </h1>

            {/* ANIMATED HEADLINE */}
            <h2 className="max-w-[1100px] text-[23px] font-medium leading-tight tracking-tight text-white sm:text-[32px] md:text-[42px] lg:text-[52px]">
              Creating Stunning{" "}
              <span className="text-white">
                {displayText}
                <span className="ml-1 inline-block animate-pulse font-light">
                  |
                </span>
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="max-w-[760px] text-[14px] leading-7 text-white/85 sm:text-[17px] sm:leading-8 md:text-[19px]">
              Creating impactful product and business videos that bring brands,
              ideas, and products to life through powerful visual storytelling.
            </p>

            {/* CTA BUTTONS */}
            {/* CTA BUTTONS */}
            <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              {/* PRIMARY CTA */}
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white bg-white px-7 py-4 text-[14px] font-semibold shadow-xl transition-all duration-300 sm:px-9 sm:py-[18px] sm:text-[16px]"
                style={{
                  color: "#000",
                  WebkitTextFillColor: "#000",
                }}
              >
                <span
                  style={{
                    color: "#000",
                    WebkitTextFillColor: "#000",
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  Start Your Video Project
                </span>

                <span
                  className="text-lg"
                  style={{
                    color: "#000",
                    WebkitTextFillColor: "#000",
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  →
                </span>
              </motion.a>

              {/* SECONDARY CTA */}
              <motion.a
                href="/work"
                whileHover={{ x: 5 }}
                className="group inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-300 sm:text-[16px]"
                style={{
                  color: "#fff",
                  WebkitTextFillColor: "#fff",
                }}
              >
                <span
                  style={{
                    color: "#fff",
                    WebkitTextFillColor: "#fff",
                    opacity: 1,
                    visibility: "visible",
                  }}
                >
                  Explore Our Video Creations
                </span>

                <span
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    color: "#fff",
                    WebkitTextFillColor: "#fff",
                  }}
                >
                  →
                </span>
              </motion.a>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="mt-3 flex flex-col gap-2 text-[12px] text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:text-[14px]">
              <span>Video Creation for Brands & Businesses</span>

              <span className="hidden sm:inline text-white/35">•</span>

              <a
                href="tel:+916301022795"
                className="transition-colors hover:text-white"
                aria-label="Call Hip Hip Videos"
              >
                +91 6301022795
              </a>

              <span className="hidden sm:inline text-white/35">•</span>

              <a
                href="mailto:info@hiphipvideos.com"
                className="transition-colors hover:text-white"
                aria-label="Email Hip Hip Videos"
              >
                info@hiphipvideos.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* VIDEO INDICATORS */}
        <div
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
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
                videoIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
