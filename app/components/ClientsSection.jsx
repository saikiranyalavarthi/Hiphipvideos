// "use client";

// export default function ClientsSection() {

// const clients = [
// "/clients/img1.png",
// "/clients/img2.png",
// "/clients/img3.png",
// "/clients/img4.png",
// "/clients/img5.png",
// "/clients/img6.png",
// ];

// return ( <section className="bg-black flex flex-col justify-center items-center gap-[10px]">

//   {/* CONTAINER */}
//   <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[60px] flex flex-col items-center gap-[16px]">

//     {/* TITLE */}
//     <h2 className="text-white text-[28px] md:text-[32px] font-semibold leading-[40px] tracking-[-0.16px] text-center">
//       Our Clients
//     </h2>

//     {/* LOGOS ROW */}
//     <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-6">

//       {clients.map((logo, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-center w-[120px] md:w-[160px] h-[50px] md:h-[60px]"
//         >
//           <img
//             src={logo}
//             alt="Client Logo"
//             className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition duration-300"
//           />
//         </div>
//       ))}

//     </div>

//   </div>

// </section>

// );
// }

"use client";
import { motion } from "framer-motion";

export default function ClientsSection() {
  const clients = [
    "/clients/img1.png",
    "/clients/img2.png",
    "/clients/img3.png",
    "/clients/img4.png",
    "/clients/img5.png",
    "/clients/img6.png",
  ];

  return (
    <section className="bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* CONTAINER */}
      <div className="w-full max-w-[1440px] px-6 lg:px-12 py-[50px] md:py-[60px] flex flex-col items-center gap-[16px]">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-semibold leading-[36px] md:leading-[40px] tracking-[-0.16px]">
            Our Clients
          </h2>

          {/* Gradient underline */}
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent mx-auto mt-2 rounded-full"></div>
        </motion.div>

        {/* LOGOS */}
        <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 pt-6">
          {clients.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="flex items-center justify-center w-[100px] sm:w-[120px] md:w-[160px] h-[50px] md:h-[60px]"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="max-w-full max-h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300 drop-shadow-[0_0_10px_rgba(204,255,0,0.2)]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
