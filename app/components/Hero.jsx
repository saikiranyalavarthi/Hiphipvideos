// "use client";
// import { useState, useEffect } from "react";

// export default function Hero() {

//   const words = [
//     "Advertisements",
//     "Movies",
//     "Content Videos",
//     "Documentaries",
//     "Product Videos",
//     "Explainers"
//   ];

//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setWordIndex((prev) => (prev + 1) % words.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return ( <section className="relative min-h-[600px] md:h-[700px] w-full overflow-hidden bg-black flex justify-center">
  

//     {/* Background Image */}
//     <img
//       src="hero1.jpg"
//       alt=""
//       className="absolute inset-0 w-full h-full object-cover"
//     />
  
//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/70" />
  
//     {/* Content */}
//     <div className="relative z-10 w-full max-w-[1440px] flex items-center justify-center text-center px-6 lg:px-12">
  
//       <div className="flex flex-col items-center gap-[24px] md:gap-[32px]">
  
//         {/* Heading */}
//         <h1 className="text-[#FFF] text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] tracking-[-0.32px]">
//           Build stunning{" "}
//           <span className="text-[#CCFF00]">
//             {words[wordIndex]}_
//           </span>
//         </h1>
  
//         {/* Paragraph */}
//         <p className="text-[#FFF] text-center text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[28px] sm:leading-[32px] md:leading-[40px] tracking-[-0.16px] max-w-[814px]">
//           Premium video productions built to engage audiences
//           and convert attention into real results
//         </p>
  
//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]">
  
//           {/* Primary Button */}
//           <a
//             href="/quote"
//             className="flex px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-[#CCFF00] text-black text-[16px] font-bold leading-[24px] whitespace-nowrap"
//           >
//             Get a Free Discovery Call
//           </a>
  
//           {/* Portfolio Link */}
//           <a
//             href="/portfolio"
//             className="text-white text-[16px] font-bold leading-[24px] hover:text-[#CCFF00] transition"
//           >
//             View Portfolio →
//           </a>
  
//         </div>
  
//       </div>
  
//     </div>
  
//   </section>

  
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const words = [
    "Advertisements",
    "Movies",
    "Content Videos",
    "Documentaries",
    "Product Videos",
    "Explainers",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

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

  return (
    <section className="relative min-h-[600px] md:h-[700px] w-full overflow-hidden bg-black flex justify-center">

      {/* Background Image Animation */}
      <motion.img
        src="hero1.jpg"
        alt=""
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] flex items-center justify-center text-center px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-[24px] md:gap-[32px]"
        >

          {/* Heading */}
          <h1 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[36px] sm:leading-[44px] md:leading-[56px] tracking-tight">
            Build stunning{" "}
            <span className="text-[#CCFF00] text-glow">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-[16px] sm:text-[20px] md:text-[28px] leading-[24px] sm:leading-[30px] md:leading-[38px] max-w-[814px]"
          >
            Premium video productions built to engage audiences
            and convert attention into real results
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]">

            {/* Primary Button */}
            <motion.a
              href="/quote"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[16px] font-bold leading-[24px] whitespace-nowrap shadow-lg hover:shadow-[0_0_20px_#CCFF00]"
            >
              Get a Free Discovery Call
            </motion.a>

            {/* Portfolio Link */}
            <motion.a
              href="/portfolio"
              whileHover={{ x: 5 }}
              className="text-white text-[16px] font-bold leading-[24px] hover:text-[#CCFF00] transition"
            >
              View Portfolio →
            </motion.a>

          </div>

        </motion.div>
      </div>
    </section>
  );
}