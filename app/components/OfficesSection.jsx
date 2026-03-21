// export default function OfficesSection() {
//     return ( <section className="bg-black flex justify-center py-[40px]">
    
 
//       <div className="w-full max-w-[1440px] px-6 lg:px-[240px] flex flex-col gap-[48px]">
    
//         {/* HEADER */}
//         <div className="flex flex-col gap-[8px]">
    
//           <span className="text-white text-[16px] font-semibold leading-[24px] uppercase">
//             Where are we?
//           </span>
    
//           <h2 className="text-white text-[32px] font-bold leading-[40px] tracking-[-0.16px]">
//             Our Offices
//           </h2>
    
//         </div>
    
//         {/* SEPARATOR LINE */}
//         <div className="w-full h-[1px] bg-white/20"></div>
    
    
//         {/* OFFICES GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-[120px]">
    
//           {/* USA */}
//           <div className="flex flex-col gap-[8px]">
    
//             <div className="flex items-center gap-[8px]">
//               <img src="usa.jpg" alt="" className="w-[20px] h-[14px] object-cover"/>
//               <h3 className="text-white text-[18px] font-semibold">
//                 USA
//               </h3>
//             </div>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               hiphip videos Inc
//             </p>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               2150 S. Central Expressway
//             </p>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               Suite 200-270
//             </p>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               McKinney TX, USA 75070
//             </p>
    
//           </div>
    
    
//           {/* INDIA */}
//           <div className="flex flex-col gap-[8px]">
    
//             <div className="flex items-center gap-[8px]">
//               <img src="India.jpg" alt="" className="w-[20px] h-[14px] object-cover"/>
//               <h3 className="text-white text-[18px] font-semibold">
//                 India
//               </h3>
//             </div>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               hiphip videos India Private limited
//             </p>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               4th Floor, Reliance Cyber Ville
//             </p>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               Hitech City,
//             </p>
    
//             <p className="text-white text-[16px] font-light leading-[24px]">
//               Hyderabad, Telangana - 500081
//             </p>
    
//           </div>
    
//         </div>
    
//       </div>
    
//     </section>
 
    
//     );
//     }
    



"use client";
import { motion } from "framer-motion";

export default function OfficesSection() {
  return (
    <section className="bg-black flex justify-center py-[40px] overflow-hidden">

      <div className="w-full max-w-[1440px] px-6 lg:px-[200px] flex flex-col gap-[40px] md:gap-[48px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-[6px]"
        >
          <span className="text-white/70 text-[14px] md:text-[16px] font-semibold uppercase tracking-wide">
            Where are we?
          </span>

          <h2 className="text-white text-[26px] sm:text-[30px] md:text-[32px] font-bold leading-[36px] md:leading-[40px] tracking-tight">
            Our Offices
          </h2>

          {/* Gradient underline */}
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent mt-2 rounded-full"></div>
        </motion.div>

        {/* SEPARATOR */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[80px]">

          {/* USA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="flex flex-col gap-[8px] p-[20px] rounded-[12px] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all duration-300"
          >

            <div className="flex items-center gap-[8px] mb-[6px]">
              <img src="usa.jpg" alt="" className="w-[20px] h-[14px] object-cover rounded-sm"/>
              <h3 className="text-white text-[17px] md:text-[18px] font-semibold">
                USA
              </h3>
            </div>

            <p className="text-white/80 text-[14px] md:text-[16px]">hiphip videos Inc</p>
            <p className="text-white/80 text-[14px] md:text-[16px]">2150 S. Central Expressway</p>
            <p className="text-white/80 text-[14px] md:text-[16px]">Suite 200-270</p>
            <p className="text-white/80 text-[14px] md:text-[16px]">McKinney TX, USA 75070</p>

          </motion.div>

          {/* INDIA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="flex flex-col gap-[8px] p-[20px] rounded-[12px] bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all duration-300"
          >

            <div className="flex items-center gap-[8px] mb-[6px]">
              <img src="India.jpg" alt="" className="w-[20px] h-[14px] object-cover rounded-sm"/>
              <h3 className="text-white text-[17px] md:text-[18px] font-semibold">
                India
              </h3>
            </div>

            <p className="text-white/80 text-[14px] md:text-[16px]">hiphip videos India Private limited</p>
            <p className="text-white/80 text-[14px] md:text-[16px]">4th Floor, Reliance Cyber Ville</p>
            <p className="text-white/80 text-[14px] md:text-[16px]">Hitech City,</p>
            <p className="text-white/80 text-[14px] md:text-[16px]">Hyderabad, Telangana - 500081</p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}