// "use client";

// export default function TestimonialsSection() {

// const testimonials = [
// {
// name: "Daniel Harper",
// role: "Aurelius Tech",
// image: "/avatar/avatar1.jpg",
// text: "They captured our product’s value with precision and clarity. The launch video alone drove a 38% increase in demo bookings within the first month.",
// },
// {
// name: "Isabella Rossi",
// role: "Velora Living",
// image: "/avatar/avatar2.svg",
// text: "Their creative direction transformed our concept into a premium visual story. Engagement across our paid campaigns doubled after publishing the new videos.",
// },
// {
// name: "Liam Bennett",
// role: "Northbridge Automotive",
// image: "/avatar/avatar3.svg",
// text: "From script to final render, the process was seamless and professional. The product film elevated our brand perception across international markets.",
// },
// {
// name: "Sofia Laurent",
// role: "Maison Elara",
// image: "/avatar/avatar4.png",
// text: "They translated intricate details into elegant, compelling visuals. Our online sales saw a noticeable lift immediately after the campaign went live.",
// },
// {
// name: "Ethan Müller",
// role: "Helix Dynamics",
// image: "avatar/avatar5.jpg",
// text: "Their understanding of technical features and market positioning was impressive. The final videos simplified our messaging without losing sophistication.",
// },
// {
// name: "Camila Duarte",
// role: "Solstice Realty",
// image: "avatar/avatar6.png",
// text: "They showcased our properties with cinematic precision and atmosphere. Buyer inquiries increased significantly after the first promotional release.",
// },
// {
// name: "Noah Andersen",
// role: "Arctic Labs",
// image: "avatar/avatar7.jpg",
// text: "Their team brought speed, structure, and creative excellence to the table. We saw measurable growth in conversions within weeks of launch.",
// },
// {
// name: "Amélie Dubois",
// role: "Luma Interiors",
// image: "avatar/avatar8.jpg",
// text: "The visuals felt modern, refined, and strategically crafted. Our brand now stands out clearly in an otherwise crowded marketplace.",
// },
// ];

// return ( <section className="bg-black flex flex-col items-center justify-center py-[48px] px-6 lg:px-12">


//   {/* TITLE */}
//   <h2 className="text-white text-center text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[40px] md:leading-[48px] lg:leading-[56px] tracking-[-0.32px] mb-[48px]">
//     What our clients say
//   </h2>

//   {/* GRID CONTAINER */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] w-full max-w-[1440px]">

//     {testimonials.map((item, index) => (
//       <div
//         key={index}
//         className="w-full min-h-[360px] flex flex-col items-center justify-center gap-[24px] p-[32px] md:p-[40px] border border-white/20 rounded-lg text-center"
//       >

//         {/* AVATAR */}
//         <img
//           src={item.image}
//           alt={item.name}
//           className="w-[64px] h-[64px] rounded-full object-cover"
//         />

//         {/* NAME */}
//         <h3 className="text-white text-[16px] font-semibold leading-[24px]">
//           {item.name}
//         </h3>

//         {/* ROLE */}
//         <p className="text-white/70 text-[14px] leading-[20px]">
//           {item.role}
//         </p>

//         {/* TEXT */}
//         <p className="text-white text-[16px] leading-[24px]">
//           "{item.text}"
//         </p>

//       </div>
//     ))}

//   </div>

// </section>


// );
// }



"use client";
import { motion } from "framer-motion";

export default function TestimonialsSection() {

  const testimonials = [
    {
      name: "Daniel Harper",
      role: "Aurelius Tech",
      image: "/avatar/avatar1.jpg",
      text: "They captured our product’s value with precision and clarity. The launch video alone drove a 38% increase in demo bookings within the first month.",
    },
    {
      name: "Isabella Rossi",
      role: "Velora Living",
      image: "/avatar/avatar2.svg",
      text: "Their creative direction transformed our concept into a premium visual story. Engagement across our paid campaigns doubled after publishing the new videos.",
    },
    {
      name: "Liam Bennett",
      role: "Northbridge Automotive",
      image: "/avatar/avatar3.svg",
      text: "From script to final render, the process was seamless and professional. The product film elevated our brand perception across international markets.",
    },
    {
      name: "Sofia Laurent",
      role: "Maison Elara",
      image: "/avatar/avatar4.png",
      text: "They translated intricate details into elegant, compelling visuals. Our online sales saw a noticeable lift immediately after the campaign went live.",
    },
    {
      name: "Ethan Müller",
      role: "Helix Dynamics",
      image: "avatar/avatar5.jpg",
      text: "Their understanding of technical features and market positioning was impressive. The final videos simplified our messaging without losing sophistication.",
    },
    {
      name: "Camila Duarte",
      role: "Solstice Realty",
      image: "avatar/avatar6.png",
      text: "They showcased our properties with cinematic precision and atmosphere. Buyer inquiries increased significantly after the first promotional release.",
    },
    {
      name: "Noah Andersen",
      role: "Arctic Labs",
      image: "avatar/avatar7.jpg",
      text: "Their team brought speed, structure, and creative excellence to the table. We saw measurable growth in conversions within weeks of launch.",
    },
    {
      name: "Amélie Dubois",
      role: "Luma Interiors",
      image: "avatar/avatar8.jpg",
      text: "The visuals felt modern, refined, and strategically crafted. Our brand now stands out clearly in an otherwise crowded marketplace.",
    },
  ];

  return (
    <section className="bg-black flex flex-col items-center justify-center py-[40px] md:py-[48px] px-6 lg:px-12 overflow-hidden">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-[40px] md:mb-[48px]"
      >
        <h2 className="text-white text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-[36px] md:leading-[48px] lg:leading-[56px] tracking-[-0.32px]">
          What our clients say
        </h2>

        {/* Gradient underline */}
        <div className="w-[70px] h-[3px] bg-gradient-to-r from-[#CCFF00] to-transparent mx-auto mt-3 rounded-full"></div>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px] w-full max-w-[1440px]">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="w-full min-h-[340px] flex flex-col items-center justify-center gap-[20px] p-[24px] md:p-[32px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-center hover:border-[#CCFF00]/40 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all duration-300"
          >

            {/* AVATAR */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full object-cover border border-white/20"
            />

            {/* NAME */}
            <h3 className="text-white text-[15px] md:text-[16px] font-semibold leading-[24px]">
              {item.name}
            </h3>

            {/* ROLE */}
            <p className="text-white/60 text-[13px] md:text-[14px] leading-[20px]">
              {item.role}
            </p>

            {/* TEXT */}
            <p className="text-white text-[14px] md:text-[15px] leading-[22px] md:leading-[24px]">
              "{item.text}"
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}