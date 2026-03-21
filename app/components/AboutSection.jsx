// export default function AboutSection() {
//   return ( <section className="bg-black flex justify-center py-[40px]">

//     <div className="w-full max-w-[1440px] px-6 lg:px-12 flex flex-col md:flex-row items-start gap-[48px]">
  
//       {/* LEFT TITLE */}
//       <div className="w-[220px] flex-shrink-0">
  
//         <h2 className="text-white text-[24px] font-semibold">
//           About us
//         </h2>
  
//       </div>
  
  
//       {/* RIGHT TEXT */}
//       <div className="max-w-[900px] flex flex-col gap-[20px]">
  
//         <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px]">
//           We have no house style, or allegiance to medium or method.
//         </p>
  
//         <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px]">
//           We pride ourselves on our ability to make best-in-class work for any sort
//           of client: big or small, established or upstart, commercial or otherwise.
//         </p>
  
//         <p className="text-white text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px]">
//           Creativity is our guiding principle. We come to work to create powerful
//           stories, moments and messages. Our mission is to put more of the budget
//           into the work, rather than the processes around it.
//         </p>
  
//       </div>
  
//     </div>
  
//   </section>

  
//   );
// }



"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-black flex justify-center py-[50px] md:py-[70px]">

      <div className="w-full max-w-[1440px] px-6 lg:px-12 flex flex-col md:flex-row items-start gap-[40px] md:gap-[60px]">

        {/* LEFT TITLE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[220px] flex-shrink-0 relative"
        >

          <h2 className="text-white text-[22px] md:text-[24px] font-semibold relative z-10">
            About us
          </h2>

          {/* Gradient line effect */}
          <div className="absolute left-0 top-[35px] w-[60px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent" />

        </motion.div>


        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-[900px] flex flex-col gap-[18px] md:gap-[22px]"
        >

          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] hover:text-[#CCFF00] transition duration-300">
            We have no house style, or allegiance to medium or method.
          </p>

          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] hover:text-[#CCFF00] transition duration-300">
            We pride ourselves on our ability to make best-in-class work for any sort
            of client: big or small, established or upstart, commercial or otherwise.
          </p>

          <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] tracking-[-0.16px] hover:text-[#CCFF00] transition duration-300">
            Creativity is our guiding principle. We come to work to create powerful
            stories, moments and messages. Our mission is to put more of the budget
            into the work, rather than the processes around it.
          </p>

        </motion.div>

      </div>
    </section>
  );
}