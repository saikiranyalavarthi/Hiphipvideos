// "use client";

// import { useState } from "react";

// export default function IndustriesSection() {

// const industries = [
// "Featured","Products","Gadgets","Automobiles","Real Estate",
// "Fashion","Industrial","Corporate","Explainers","Documentaries","Tech"
// ];

// const projects = [
// { title:"Open Cinema", length:"60 Seconds", industry:"Explainers", type:"Explainer Video Production", image:"/image1 (2).jpeg"},
// { title:"App Launch", length:"45 Seconds", industry:"Tech", type:"Product Video", image:"/image1 (3).jpeg"},
// { title:"Healthcare Story", length:"90 Seconds", industry:"Corporate", type:"Brand Film", image:"/image1 (4).jpeg"},
// { title:"Education Platform", length:"60 Seconds", industry:"Products", type:"Explainer Video", image:"/image1 (5).jpeg"},
// { title:"Startup Pitch", length:"30 Seconds", industry:"Gadgets", type:"Promo Video", image:"/image1 (6).jpeg"},
// { title:"Biotech Visual", length:"75 Seconds", industry:"Industrial", type:"Animated Video", image:"/image1 (7).jpeg"},
// { title:"Finance Campaign", length:"45 Seconds", industry:"Real Estate", type:"Ad Film", image:"/image1 (8).jpeg"},
// { title:"Corporate Film", length:"2 Minutes", industry:"Corporate", type:"Company Profile", image:"/image1 (9).jpeg"},
// { title:"Creative Motion", length:"50 Seconds", industry:"Featured", type:"Motion Graphics", image:"/image1 (10).jpeg"},
// ];

// const [activeIndustry, setActiveIndustry] = useState("Featured");

// const filteredProjects =
// activeIndustry === "Featured"
// ? projects
// : projects.filter((item) => item.industry === activeIndustry);

// return ( <section className="bg-black text-white flex justify-center">


//   {/* SECTION CONTAINER */}
//   <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[48px] flex flex-col items-center gap-[10px]">

//     {/* HEADER */}
//     <div className="w-full">
//       <h2 className="text-[28px] md:text-[32px] font-semibold leading-[40px] tracking-[-0.16px]">
//         See what we have made
//       </h2>
//     </div>

//     {/* FILTER BUTTONS */}
//     <div className="w-full flex flex-wrap gap-[12px] mb-[40px] py-2">
//       {industries.map((item,index)=>(
//         <button
//           key={index}
//           onClick={()=>setActiveIndustry(item)}
//           className={`px-[18px] py-[12px] rounded-[12px] border text-[14px] transition
//           ${
//             activeIndustry === item
//             ? "bg-[#CCFF00] text-black border-[#CCFF00]"
//             : "border-[#757575] text-white hover:border-[#CCFF00]"
//           }`}
//         >
//           {item}
//         </button>
//       ))}
//     </div>

//     {/* GRID */}
//     <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">

//       {filteredProjects.map((item,index)=>(
//         <div
//           key={index}
//           className="relative w-full h-[220px] md:h-[250px] lg:h-[261px] rounded-[12px] overflow-hidden group"
//         >

//           {/* IMAGE */}
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />

//           {/* OVERLAY */}
//           <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition"></div>

//           {/* INFO */}
//           <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition">
//             <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
//             <p className="text-[14px]">Length: {item.length}</p>
//             <p className="text-[14px]">Industry: {item.industry}</p>
//             <p className="text-[14px]">{item.type}</p>
//           </div>

//           {/* PLAY BUTTON */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-[100px] h-[52px] rounded-[999px] bg-[#CCFF00]/90 flex items-center justify-center text-black font-bold">
//               ▶
//             </div>
//           </div>

//         </div>
//       ))}

//     </div>

//   </div>

// </section>


// );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IndustriesSection() {

  const industries = [
    "Featured","Products","Gadgets","Automobiles","Real Estate",
    "Fashion","Industrial","Corporate","Explainers","Documentaries","Tech"
  ];

  const projects = [
    { title:"Open Cinema", length:"60 Seconds", industry:"Explainers", type:"Explainer Video Production", image:"/image1 (2).jpeg"},
    { title:"App Launch", length:"45 Seconds", industry:"Tech", type:"Product Video", image:"/image1 (3).jpeg"},
    { title:"Healthcare Story", length:"90 Seconds", industry:"Corporate", type:"Brand Film", image:"/image1 (4).jpeg"},
    { title:"Education Platform", length:"60 Seconds", industry:"Products", type:"Explainer Video", image:"/image1 (5).jpeg"},
    { title:"Startup Pitch", length:"30 Seconds", industry:"Gadgets", type:"Promo Video", image:"/image1 (6).jpeg"},
    { title:"Biotech Visual", length:"75 Seconds", industry:"Industrial", type:"Animated Video", image:"/image1 (7).jpeg"},
    { title:"Finance Campaign", length:"45 Seconds", industry:"Real Estate", type:"Ad Film", image:"/image1 (8).jpeg"},
    { title:"Corporate Film", length:"2 Minutes", industry:"Corporate", type:"Company Profile", image:"/image1 (9).jpeg"},
    { title:"Creative Motion", length:"50 Seconds", industry:"Featured", type:"Motion Graphics", image:"/image1 (10).jpeg"},
  ];

  const [activeIndustry, setActiveIndustry] = useState("Featured");

  const filteredProjects =
    activeIndustry === "Featured"
      ? projects
      : projects.filter((item) => item.industry === activeIndustry);

  return (
    <section className="bg-black text-white flex justify-center overflow-hidden">

      <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[40px] md:py-[48px] flex flex-col items-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full mb-[20px]"
        >
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[36px] md:leading-[40px]">
            See what we have made
          </h2>

          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent mt-2 rounded-full"></div>
        </motion.div>

        {/* FILTERS */}
        <div className="w-full flex flex-wrap gap-[10px] md:gap-[12px] mb-[30px] md:mb-[40px]">

          {industries.map((item,index)=>(
            <motion.button
              key={index}
              onClick={()=>setActiveIndustry(item)}
              whileTap={{ scale: 0.95 }}
              className={`px-[16px] py-[10px] rounded-[10px] border text-[13px] md:text-[14px] transition-all
              ${
                activeIndustry === item
                ? "bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black border-[#CCFF00] shadow-[0_0_10px_#CCFF00]"
                : "border-[#757575] text-white hover:border-[#CCFF00]"
              }`}
            >
              {item}
            </motion.button>
          ))}

        </div>

        {/* GRID */}
        <motion.div layout className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">

          <AnimatePresence>
            {filteredProjects.map((item,index)=>(
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="relative w-full h-[200px] sm:h-[220px] md:h-[250px] lg:h-[260px] rounded-[12px] overflow-hidden group"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                {/* INFO */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px]">Length: {item.length}</p>
                  <p className="text-[13px] md:text-[14px]">Industry: {item.industry}</p>
                  <p className="text-[13px] md:text-[14px]">{item.type}</p>
                </div>

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90px] h-[48px] rounded-full bg-[#CCFF00]/90 flex items-center justify-center text-black font-bold animate-pulse">
                    ▶
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}