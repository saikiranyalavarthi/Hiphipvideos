// "use client";

// import { motion } from "framer-motion";
// import ConnectQuoteSection from "./ContactSection";

// export default function ProcessPage() {
//   return (
//     <section className="bg-black text-white py-36 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center max-w-4xl mx-auto mb-32"
//         >
//           <p className="uppercase tracking-widest text-sm text-[#CCFF00] mb-5">
//             Our Process
//           </p>

//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
//             A Process Built to <br />
//             <span className="text-[#CCFF00]">Launch, Scale & Lead</span>
//           </h1>

//           <p className="text-gray-400 text-lg leading-relaxed">
//             We follow a flexible, proven, and outcome-driven process designed to
//             help businesses of all sizes move faster, build smarter, and scale
//             with confidence. From strategy to execution, every step is crafted
//             to deliver real business impact.
//           </p>
//         </motion.div>

//         {/* ================= ENTERPRISE PROCESS ================= */}
//         <div className="mb-40">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="mb-14"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               For SMEs & Conglomerates
//             </h2>
//             <p className="text-gray-400 max-w-2xl text-lg">
//               An agile, long-term engagement model focused on stability,
//               scalability, and continuous optimisation across digital products.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

//             {/* STEP 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
//             >
//               <span className="text-[#CCFF00] text-sm font-semibold">
//                 Step 01
//               </span>
//               <h3 className="text-2xl font-bold mt-4 mb-6">Discover</h3>

//               <p className="text-gray-400 mb-6">
//                 We begin by deeply understanding your business, users, and
//                 market landscape. This phase lays the strategic foundation for
//                 everything that follows.
//               </p>

//               <ul className="text-gray-300 space-y-2 text-sm">
//                 <li>• Business goals & vision alignment</li>
//                 <li>• User needs & behavioural insights</li>
//                 <li>• Market & competitor analysis</li>
//               </ul>
//             </motion.div>

//             {/* STEP 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
//             >
//               <span className="text-[#CCFF00] text-sm font-semibold">
//                 Step 02
//               </span>
//               <h3 className="text-2xl font-bold mt-4 mb-6">Design</h3>

//               <p className="text-gray-400 mb-6">
//                 Through an iterative and collaborative design process, we
//                 translate strategy into intuitive and visually engaging digital
//                 experiences.
//               </p>

//               <ul className="text-gray-300 space-y-2 text-sm">
//                 <li>• Information architecture</li>
//                 <li>• Wireframes & interaction design</li>
//                 <li>• Visual design & prototyping</li>
//               </ul>
//             </motion.div>

//             {/* STEP 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
//             >
//               <span className="text-[#CCFF00] text-sm font-semibold">
//                 Step 03
//               </span>
//               <h3 className="text-2xl font-bold mt-4 mb-6">Build</h3>

//               <p className="text-gray-400 mb-6">
//                 Our engineering team brings designs to life using scalable,
//                 secure, and performance-focused technologies.
//               </p>

//               <ul className="text-gray-300 space-y-2 text-sm">
//                 <li>• Frontend & backend development</li>
//                 <li>• System integrations</li>
//                 <li>• Quality assurance & optimisation</li>
//               </ul>
//             </motion.div>
//           </div>

//           {/* META */}
//           <div className="flex flex-wrap gap-10 mt-14 text-sm text-gray-400">
//             <p><span className="text-white font-semibold">Suited for:</span> SMEs & Conglomerates</p>
//             <p><span className="text-white font-semibold">Timeline:</span> 6–12 Months</p>
//             <p><span className="text-white font-semibold">Engagement:</span> Retainer</p>
//           </div>
//         </div>

//         {/* ================= STARTUP PROCESS ================= */}
//         <div>
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="mb-14"
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               For Startups
//             </h2>
//             <p className="text-gray-400 max-w-2xl text-lg">
//               A rapid execution model designed to help startups validate ideas,
//               launch MVPs, and reach the market faster.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

//             {/* STEP 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
//             >
//               <span className="text-[#CCFF00] text-sm font-semibold">
//                 Step 01
//               </span>
//               <h3 className="text-2xl font-bold mt-4 mb-6">Build</h3>

//               <p className="text-gray-400 mb-6">
//                 We quickly transform ideas into tangible prototypes, allowing
//                 you to test assumptions and gather real user feedback.
//               </p>

//               <ul className="text-gray-300 space-y-2 text-sm">
//                 <li>• Discovery & strategy workshop</li>
//                 <li>• Rapid prototyping</li>
//                 <li>• Early validation</li>
//               </ul>
//             </motion.div>

//             {/* STEP 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#CCFF00] transition"
//             >
//               <span className="text-[#CCFF00] text-sm font-semibold">
//                 Step 02
//               </span>
//               <h3 className="text-2xl font-bold mt-4 mb-6">Launch</h3>

//               <p className="text-gray-400 mb-6">
//                 We build, test, and deploy a production-ready MVP that is
//                 scalable, secure, and market-ready.
//               </p>

//               <ul className="text-gray-300 space-y-2 text-sm">
//                 <li>• Full-stack development</li>
//                 <li>• QA & performance testing</li>
//                 <li>• MVP launch & support</li>
//               </ul>
//             </motion.div>
//           </div>

//           {/* META */}
//           <div className="flex flex-wrap gap-10 mt-14 text-sm text-gray-400">
//             <p><span className="text-white font-semibold">Suited for:</span> Startups</p>
//             <p><span className="text-white font-semibold">Timeline:</span> 2–3 Months</p>
//             <p><span className="text-white font-semibold">Engagement:</span> Fixed Duration</p>
//           </div>

//           {/* CTA */}
//           <div className="mt-20">
//             <a
//               href="#contact"
//               className="inline-block bg-[#CCFF00] text-black font-semibold
//                          px-14 py-4 rounded-full text-lg
//                          hover:scale-105 hover:shadow-xl transition-all"
//             >
//               Get In Touch
//             </a>
//           </div>
//         </div>

//       </div>
//       <ConnectQuoteSection/>
//     </section>
   
//   );
// }



"use client";

import { motion } from "framer-motion";
import ConnectQuoteSection from "./ContactSection";

export default function ProcessPage() {
  return (
    <section className="bg-black text-white py-28 md:py-36 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-24 md:mb-32"
        >
          <p className="uppercase tracking-widest text-xs md:text-sm text-[#CCFF00] mb-4">
            Our Process
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6 md:mb-8">
            A Process Built to <br />
            <span className="gradient-text">Launch, Scale & Lead</span>
          </h1>

          <p className="text-gray-400 text-[14px] sm:text-[16px] md:text-lg leading-relaxed">
            We follow a flexible, proven, and outcome-driven process designed to
            help businesses move faster, build smarter, and scale with confidence.
          </p>
        </motion.div>

        {/* ================= ENTERPRISE ================= */}
        <div className="mb-32 md:mb-40">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-14"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              For SMEs & Conglomerates
            </h2>
            <p className="text-gray-400 max-w-2xl text-[14px] md:text-lg">
              Agile long-term model focused on scalability and continuous optimisation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

            {[
              {
                step: "Step 01",
                title: "Discover",
                desc: "Understand business, users, and market deeply.",
                points: [
                  "Business goals & vision",
                  "User insights",
                  "Market analysis"
                ]
              },
              {
                step: "Step 02",
                title: "Design",
                desc: "Translate strategy into engaging experiences.",
                points: [
                  "Architecture",
                  "Wireframes",
                  "Visual design"
                ]
              },
              {
                step: "Step 03",
                title: "Build",
                desc: "Develop scalable and high-performance solutions.",
                points: [
                  "Frontend & backend",
                  "Integrations",
                  "QA & optimisation"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] transition-all"
              >
                <span className="text-[#CCFF00] text-xs md:text-sm font-semibold">
                  {item.step}
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 mb-5 text-sm md:text-base">
                  {item.desc}
                </p>

                <ul className="text-gray-300 space-y-1 text-sm">
                  {item.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>

          {/* META */}
          <div className="flex flex-wrap gap-6 md:gap-10 mt-10 md:mt-14 text-xs md:text-sm text-gray-400">
            <p><span className="text-white font-semibold">Suited for:</span> SMEs</p>
            <p><span className="text-white font-semibold">Timeline:</span> 6–12 Months</p>
            <p><span className="text-white font-semibold">Engagement:</span> Retainer</p>
          </div>
        </div>

        {/* ================= STARTUP ================= */}
        <div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-14"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              For Startups
            </h2>
            <p className="text-gray-400 text-[14px] md:text-lg">
              Rapid execution model for fast MVP launches.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            {[
              {
                step: "Step 01",
                title: "Build",
                desc: "Transform ideas into prototypes quickly.",
              },
              {
                step: "Step 02",
                title: "Launch",
                desc: "Deploy scalable and market-ready MVP.",
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-[#CCFF00]/40 hover:shadow-[0_0_25px_rgba(204,255,0,0.15)] transition-all"
              >
                <span className="text-[#CCFF00] text-xs md:text-sm font-semibold">
                  {item.step}
                </span>

                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-20 text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] text-black font-semibold px-10 md:px-14 py-3 md:py-4 rounded-full text-sm md:text-lg shadow-lg hover:shadow-[0_0_25px_#CCFF00] transition-all"
            >
              Get In Touch
            </motion.a>
          </div>

        </div>

      </div>

      <ConnectQuoteSection />

    </section>
  );
}