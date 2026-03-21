// export default function HeroCreativePage() {
//   return ( <section className="relative w-full h-[600px] md:h-[720px] flex items-center justify-center overflow-hidden">

//     {/* Background Image */}
//     <img
//       src="/process/about.png"
//       alt=""
//       className="absolute inset-0 w-full h-full object-cover"
//     />
  
//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/60"></div>
  
//     {/* Content */}
//     <div className="relative z-10 w-full max-w-[900px] px-6 text-center flex flex-col items-center">
  
//     <h1 className="text-white text-[36px] md:text-[48px] font-semibold mb-4">
//   Build Stunning Digital Experiences
// </h1>

// <p className="text-gray-300 text-[16px] md:text-[18px] leading-[28px] mb-8 max-w-[720px]">
//   We craft high-impact digital visuals and cinematic content that help brands
//   stand out in a fast-moving digital world. From creative concepts to final
//   production, our team delivers compelling videos and visual experiences that
//   capture attention, tell powerful stories, and drive real engagement.
// </p>
  
//       {/* Buttons */}
//       <div className="flex items-center gap-6">
  
//         <a
//           href="/quote"
//           className="px-6 py-3 rounded-[8px] bg-[#CCFF00] text-black text-[14px] font-semibold"
//         >
//           GET A QUOTE
//         </a>
  
//         <a
//           href="/portfolio"
//           className="text-white text-[14px] font-semibold hover:text-[#CCFF00]"
//         >
//           View Portfolio →
//         </a>
  
//       </div>
  
//     </div>
  
//   </section>

  
//   );
//   }



"use client";
import { motion } from "framer-motion";

export default function HeroCreativePage() {
  return (
    <section className="relative w-full h-[520px] sm:h-[600px] md:h-[720px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <motion.img
        src="/process/about.png"
        alt=""
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-[900px] px-6 text-center flex flex-col items-center"
      >

        {/* Heading */}
        <h1 className="text-white text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-4 leading-tight">
          Build Stunning{" "}
          <span className="gradient-text">
            Digital Experiences
          </span>
        </h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-8 max-w-[720px]"
        >
          We craft high-impact digital visuals and cinematic content that help brands
          stand out in a fast-moving digital world. From creative concepts to final
          production, our team delivers compelling videos and visual experiences that
          capture attention, tell powerful stories, and drive real engagement.
        </motion.p>

        {/* Buttons */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">

          <motion.a
            href="/quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[14px] font-semibold shadow-lg hover:shadow-[0_0_20px_#CCFF00] transition-all"
          >
            GET A QUOTE
          </motion.a>

          <motion.a
            href="/portfolio"
            whileHover={{ x: 5 }}
            className="text-white text-[14px] font-semibold hover:text-[#CCFF00] transition"
          >
            View Portfolio →
          </motion.a>

        </div>

      </motion.div>

    </section>
  );
}
  