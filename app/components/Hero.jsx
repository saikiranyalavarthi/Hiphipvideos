// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const words = [
//     "Advertisements",
//     "Product Videos",
//     "Corporate Films",
//     "Explainer Videos",
//     "Brand Films",
//     "Commercial Videos",
//   ];

//   const [wordIndex, setWordIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[wordIndex];
//     const typingSpeed = isDeleting ? 50 : 100;

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayText(currentWord.substring(0, displayText.length + 1));

//         if (displayText === currentWord) {
//           setTimeout(() => setIsDeleting(true), 1000);
//         }
//       } else {
//         setDisplayText(currentWord.substring(0, displayText.length - 1));

//         if (displayText === "") {
//           setIsDeleting(false);
//           setWordIndex((prev) => (prev + 1) % words.length);
//         }
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, wordIndex]);

//   return (
//     <section
//       aria-labelledby="hero-heading"
//       className="relative min-h-[600px] md:h-[700px] w-full overflow-hidden bg-black flex justify-center"
//     >
//       {/* BACKGROUND IMAGE */}
//       <motion.img
//         src="/hero1.jpg"
//         alt="HipHipVideos video production studio and creative video production"
//         initial={{
//           scale: 1.1,
//         }}
//         animate={{
//           scale: 1,
//         }}
//         transition={{
//           duration: 6,
//           ease: "easeOut",
//         }}
//         className="absolute inset-0 w-full h-full object-cover"
//         fetchPriority="high"
//       />

//       {/* OVERLAY */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"
//       />

//       {/* CONTENT */}
//       <div className="relative z-10 w-full max-w-[1440px] flex items-center justify-center text-center px-6 lg:px-12">
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//           className="flex flex-col items-center gap-[24px] md:gap-[32px]"
//         >
//           {/* PRIMARY SEO H1 */}
//           <h1
//             id="hero-heading"
//             className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[36px] sm:leading-[44px] md:leading-[56px] tracking-tight"
//           >
//             Video Production Company in{" "}
//             <span className="text-[#CCFF00] text-glow">Hyderabad</span>
//           </h1>

//           {/* SUPPORTING SEO HEADLINE */}
//           <h2 className="text-white text-[20px] sm:text-[25px] md:text-[32px] font-semibold leading-[28px] sm:leading-[34px] md:leading-[40px] max-w-[900px]">
//             Creating Stunning{" "}
//             <span className="text-[#CCFF00] text-glow">
//               {displayText}
//               <span className="animate-pulse">|</span>
//             </span>
//           </h2>

//           {/* SEO SUPPORTING CONTENT */}
//           <motion.p
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               delay: 0.3,
//             }}
//             className="text-white text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[36px] max-w-[850px]"
//           >
//             HipHipVideos is a creative video production company in Hyderabad
//             creating commercial videos, corporate films, product videos,
//             advertisements, explainer videos and branded content for businesses
//             and brands.
//           </motion.p>

//           {/* ADDITIONAL NATURAL SEARCH CONTEXT */}
//           <p className="max-w-[760px] text-[13px] sm:text-[14px] md:text-[15px] leading-6 text-white/50">
//             From concept development and scripting to filming, editing, motion
//             graphics and final delivery, we create video content designed around
//             your brand, audience and business goals.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]">
//             {/* PRIMARY LEAD CTA */}
//             <motion.a
//               href="/quote"
//               whileHover={{
//                 scale: 1.05,
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               className="relative flex px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[16px] font-bold leading-[24px] whitespace-nowrap shadow-lg hover:shadow-[0_0_20px_#CCFF00]"
//             >
//               Get a Free Discovery Call
//             </motion.a>

//             {/* PORTFOLIO LINK */}
//             <motion.a
//               href="/portfolio"
//               whileHover={{
//                 x: 5,
//               }}
//               className="text-white text-[16px] font-bold leading-[24px] hover:text-[#CCFF00] transition"
//             >
//               View Our Video Portfolio →
//             </motion.a>
//           </div>

//           {/* LOCAL BUSINESS INFORMATION */}
//           <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/60 text-sm">
//             <span>Video Production Company in Hyderabad</span>

//             <span className="hidden sm:block text-white/30">•</span>

//             <a
//               href="tel:+916301022795"
//               className="hover:text-[#CCFF00] transition"
//               aria-label="Call HipHipVideos at +91 6301022795"
//             >
//               +91 6301022795
//             </a>

//             <span className="hidden sm:block text-white/30">•</span>

//             <a
//               href="mailto:info@hiphipvideos.com"
//               className="hover:text-[#CCFF00] transition"
//               aria-label="Email HipHipVideos"
//             >
//               info@hiphipvideos.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Advertisements",
    "Product Videos",
    "Corporate Films",
    "Explainer Videos",
    "Brand Films",
    "Commercial Videos",
  ];

  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4"];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  // Automatically change video every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[600px] md:h-[700px] w-full overflow-hidden bg-black flex justify-center"
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
        className="absolute inset-0 "
      />

      {/* EXTRA VIDEO VIGNETTE */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[1440px] flex items-center justify-center text-center px-6 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-col items-center gap-[24px] md:gap-[32px]"
        >
          {/* PRIMARY SEO H1 */}
          <h1
            id="hero-heading"
            className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[36px] sm:leading-[44px] md:leading-[56px] tracking-tight"
          >
            Video Production Company in{" "}
            <span className="text-[#CCFF00] text-glow">Hyderabad</span>
          </h1>

          {/* SUPPORTING SEO HEADLINE */}
          <h2 className="text-white text-[20px] sm:text-[25px] md:text-[32px] font-semibold leading-[28px] sm:leading-[34px] md:leading-[40px] max-w-[900px]">
            Creating Stunning{" "}
            <span className="text-[#CCFF00] text-glow">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          {/* SEO SUPPORTING CONTENT */}
          {/* <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="text-white text-[16px] sm:text-[20px] md:text-[24px] leading-[24px] sm:leading-[30px] md:leading-[36px] max-w-[850px]"
          >
            HipHipVideos is a creative video production company in Hyderabad
            creating commercial videos, corporate films, product videos,
            advertisements, explainer videos and branded content for businesses
            and brands.
          </motion.p> */}

          {/* ADDITIONAL SEARCH CONTEXT */}
          <p className="max-w-[760px] text-[13px] sm:text-[14px] md:text-[15px] leading-6 text-white/50">
             HipHipVideos is a creative video production company in Hyderabad
            creating commercial videos, corporate films, product videos,
            advertisements, explainer videos and branded content for businesses
            and brands.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]">
            {/* PRIMARY CTA */}
            <motion.a
              href="/quote"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="relative flex px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[16px] font-bold leading-[24px] whitespace-nowrap shadow-lg hover:shadow-[0_0_20px_#CCFF00]"
            >
              Get a Free Discovery Call
            </motion.a>

            {/* PORTFOLIO */}
            <motion.a
              href="/portfolio"
              whileHover={{
                x: 5,
              }}
              className="text-white text-[16px] font-bold leading-[24px] hover:text-[#CCFF00] transition"
            >
              View Our Video Portfolio →
            </motion.a>
          </div>

          {/* LOCAL BUSINESS INFORMATION */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/60 text-sm">
            <span>Video Production Company in Hyderabad</span>

            <span className="hidden sm:block text-white/30">•</span>

            <a
              href="tel:+916301022795"
              className="hover:text-[#CCFF00] transition"
              aria-label="Call HipHipVideos at +91 6301022795"
            >
              +91 6301022795
            </a>

            <span className="hidden sm:block text-white/30">•</span>

            <a
              href="mailto:info@hiphipvideos.com"
              className="hover:text-[#CCFF00] transition"
              aria-label="Email HipHipVideos"
            >
              info@hiphipvideos.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* VIDEO INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setVideoIndex(index)}
            aria-label={`Play hero video ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              videoIndex === index ? "w-8 bg-[#CCFF00]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
