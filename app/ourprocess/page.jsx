// import ProcessSteps from "../components/ProcessSteps";

// export default function ProcessHero() {
// return (
// <>


//   <section className="relative w-full h-[220px] md:h-[300px] lg:h-[360px] flex items-center justify-center overflow-hidden">

//     {/* Background Image */}
//     <img
//       src="/hero1.jpg"
//       alt="Process Background"
//       className="absolute inset-0 w-full h-full object-cover"
//     />

//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/70"></div>

//     {/* Content */}
//     <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-12">

//       <h1 className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
//         Our Process
//       </h1>

//     </div>

//   </section>

//   <ProcessSteps />
//   <section className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">

//     <img
//       src="/hero1.jpg"
//       alt=""
//       className="absolute inset-0 w-full h-full object-cover"
//     />

//     <div className="absolute inset-0 bg-black/70"></div>

//     <div className="relative z-10 w-full max-w-[1000px] px-6 text-center flex flex-col items-center gap-6">
//       <h2 className="text-white text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-[28px] md:leading-[40px]">
//         Our team thrives on new projects and challenges. If you have a project in mind then we’d love to hear from you.
//       </h2>

//       <a
//         href="/quote"
//         className="flex items-center gap-2 px-[20px] py-[10px] rounded-[8px] bg-[#CCFF00] text-black text-[14px] font-semibold"
//       >
//         Free discovery call →
//       </a>
//     </div>

//   </section>
//   </>
// );
// }



"use client";

import ProcessSteps from "../components/ProcessSteps";
import { motion } from "framer-motion";

export default function ProcessHero() {
  return (
    <>

      {/* HERO */}
      <section className="relative w-full h-[220px] md:h-[300px] lg:h-[360px] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <motion.img
          src="/hero1.jpg"
          alt="Process Background"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-[1440px] px-6 lg:px-12"
        >
          <h1 className="text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] font-semibold">
            Our Process
          </h1>

          {/* small underline */}
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent mt-2 rounded-full"></div>
        </motion.div>

      </section>

      {/* STEPS */}
      <ProcessSteps />

      {/* CTA SECTION */}
      <section className="relative w-full h-[240px] md:h-[300px] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <motion.img
          src="/hero1.jpg"
          alt=""
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-[1000px] px-6 text-center flex flex-col items-center gap-5 md:gap-6"
        >

          <h2 className="text-white text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-semibold leading-[24px] md:leading-[38px]">
            Our team thrives on new projects and challenges. If you have a project in mind then we’d love to hear from you.
          </h2>

          <motion.a
            href="/quote"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-[20px] py-[10px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black text-[14px] font-semibold shadow-lg hover:shadow-[0_0_20px_#CCFF00] transition-all"
          >
            Free discovery call →
          </motion.a>

        </motion.div>

      </section>

    </>
  );
}