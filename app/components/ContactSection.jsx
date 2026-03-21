// "use client";

// export default function ConnectQuoteSection() {
// return (

// <section className="bg-black flex justify-center py-[48px]">

//   <div className="w-full max-w-[1440px] px-6 lg:px-12 flex justify-center">


// <div className="flex flex-col lg:flex-row w-full max-w-[952px] justify-between items-start gap-[40px] lg:gap-[117px]">

//   {/* LEFT TEXT */}
//   <div className="max-w-[360px] text-white">
//     <h2 className="text-[28px] md:text-[32px] font-semibold leading-[40px] tracking-[-0.16px] mb-[16px]">
//       Let’s Connect!
//     </h2>

//     <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80 mb-[12px]">
//       We are a leader video company that connects brands and people
//       through tailor-made video content.
//     </p>

//     <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80 mb-[12px]">
//       Trusted by global brands, we cater to diverse clients.
//     </p>

//     <p className="text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-white/80">
//       Let’s talk about your project – fill out the form to get started.
//     </p>
//   </div>

//   {/* FORM */}
//   <form className="flex flex-col gap-[24px] w-full max-w-[436px]">

//     {/* FIRST + LAST */}
//     <div className="flex flex-col sm:flex-row gap-[18px]">

//       <div className="flex flex-col w-full gap-[6px]">
//         <label className="text-[14px] uppercase font-medium text-white tracking-wide">
//           FIRST NAME
//           <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
//         </label>

//         <input
//           type="text"
//           placeholder="Type your first name"
//           className="h-[55px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
//         />
//       </div>

//       <div className="flex flex-col w-full gap-[6px]">
//         <label className="text-[14px] uppercase font-medium text-white tracking-wide">
//           LAST NAME
//           <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
//         </label>

//         <input
//           type="text"
//           placeholder="Type your last name"
//           className="h-[55px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
//         />
//       </div>

//     </div>

//     {/* EMAIL */}
//     <div className="flex flex-col gap-[6px]">
//       <label className="text-[14px] uppercase font-medium text-white tracking-wide">
//         EMAIL
//         <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
//       </label>

//       <input
//         type="email"
//         placeholder="Type your email"
//         className="h-[55px] w-full p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
//       />
//     </div>

//     {/* SELECT ROW */}
//     <div className="flex flex-col sm:flex-row gap-[18px]">

//       <div className="flex flex-col gap-[6px] w-full">
//         <label className="text-[14px] uppercase font-medium text-white tracking-wide">
//           DURATION
//           <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
//         </label>

//         <select className="h-[55px] w-full p-[16px] border border-[#757575] rounded-[3px] bg-black text-white focus:border-[#CCFF00] outline-none">
//           <option>Select Duration</option>
//           <option>1 Month</option>
//           <option>3 Months</option>
//         </select>
//       </div>

//       <div className="flex flex-col gap-[6px] w-full">
//         <label className="text-[14px] uppercase font-medium text-white tracking-wide">
//           INDUSTRY
//           <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
//         </label>

//         <select className="h-[55px] w-full p-[16px] border border-[#757575] rounded-[3px] bg-black text-white focus:border-[#CCFF00] outline-none">
//           <option>Select Industry</option>
//           <option>Technology</option>
//           <option>Finance</option>
//         </select>
//       </div>

//     </div>

//     {/* MESSAGE */}
//     <div className="flex flex-col gap-[6px]">
//       <label className="text-[14px] uppercase font-medium text-white tracking-wide">
//         TELL US ABOUT YOUR VIDEO NEEDS
//         <span className="text-[rgba(251,94,42,0.9)] ml-1">*</span>
//       </label>

//       <textarea
//         placeholder="TYPE SOMETHING"
//         className="w-full h-[110px] p-[16px] border border-[#757575] rounded-[3px] bg-black text-white placeholder:text-gray-400 focus:border-[#CCFF00] outline-none"
//       />
//     </div>

//     {/* BUTTON */}
//     <button className="h-[56px] border-[3px] border-[#CCFF00] bg-white text-black font-semibold rounded-[8px] hover:bg-[#CCFF00] transition">
//       GET A QUOTE
//     </button>

//   </form>

// </div>


//   </div>

// </section>
// );
// }



"use client";
import { motion } from "framer-motion";

export default function ConnectQuoteSection() {
  return (
    <section className="bg-black flex justify-center py-[40px] md:py-[48px] overflow-hidden">

      <div className="w-full max-w-[1440px] px-6 lg:px-12 flex justify-center">

        <div className="flex flex-col lg:flex-row w-full max-w-[952px] justify-between items-start gap-[32px] md:gap-[40px] lg:gap-[117px]">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[360px] text-white"
          >
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[36px] md:leading-[40px] mb-[16px]">
              Let’s Connect!
            </h2>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/80 mb-[10px]">
              We are a leader video company that connects brands and people
              through tailor-made video content.
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/80 mb-[10px]">
              Trusted by global brands, we cater to diverse clients.
            </p>

            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-white/80">
              Let’s talk about your project – fill out the form to get started.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-[18px] md:gap-[22px] w-full max-w-[436px]"
          >

            {/* FIRST + LAST */}
            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[18px]">

              <div className="flex flex-col w-full gap-[6px]">
                <label className="label-style">
                  FIRST NAME <span className="req">*</span>
                </label>
                <input type="text" placeholder="Type your first name" className="input-style" />
              </div>

              <div className="flex flex-col w-full gap-[6px]">
                <label className="label-style">
                  LAST NAME <span className="req">*</span>
                </label>
                <input type="text" placeholder="Type your last name" className="input-style" />
              </div>

            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-[6px]">
              <label className="label-style">
                EMAIL <span className="req">*</span>
              </label>
              <input type="email" placeholder="Type your email" className="input-style" />
            </div>

            {/* SELECT */}
            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[18px]">

              <div className="flex flex-col gap-[6px] w-full">
                <label className="label-style">
                  DURATION <span className="req">*</span>
                </label>
                <select className="input-style">
                  <option>Select Duration</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                </select>
              </div>

              <div className="flex flex-col gap-[6px] w-full">
                <label className="label-style">
                  INDUSTRY <span className="req">*</span>
                </label>
                <select className="input-style">
                  <option>Select Industry</option>
                  <option>Technology</option>
                  <option>Finance</option>
                </select>
              </div>

            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-[6px]">
              <label className="label-style">
                TELL US ABOUT YOUR VIDEO NEEDS <span className="req">*</span>
              </label>
              <textarea
                placeholder="Type something..."
                className="input-style h-[110px] resize-none"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-[54px] rounded-[8px] bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black font-semibold shadow-lg hover:shadow-[0_0_20px_#CCFF00] transition-all duration-300"
            >
              GET A QUOTE
            </motion.button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}