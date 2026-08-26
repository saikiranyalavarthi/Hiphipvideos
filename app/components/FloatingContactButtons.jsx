// "use client";

// import { motion } from "framer-motion";
// import { trackEvent } from "@/app/lib/analytics";

// export default function FloatingContactButtons() {
//   const phoneNumber = "916302111807";

//   const whatsappMessage = encodeURIComponent(
//     "Hello HipHipVideos, I am interested in your video production services. I would like to discuss my project.",
//   );

//   const handleWhatsAppClick = () => {
//     trackEvent("whatsapp_click", {
//       location: "floating_button",
//     });
//   };

//   const handleCallClick = () => {
//     trackEvent("phone_click", {
//       location: "floating_button",
//     });
//   };

//   return (
//     <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">
//       {/* WHATSAPP BUTTON */}
//       <motion.a
//         href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label="Chat with HipHipVideos on WhatsApp"
//         onClick={handleWhatsAppClick}
//         whileHover={{ scale: 1.08 }}
//         whileTap={{ scale: 0.95 }}
//         className="
//           group
//           flex items-center justify-center
//           w-[52px] h-[52px]
//           rounded-full
//           bg-[#25D366]
//           text-white
//           shadow-[0_6px_25px_rgba(37,211,102,0.35)]
//           transition-all duration-300
//           hover:shadow-[0_8px_30px_rgba(37,211,102,0.55)]
//         "
//       >
//         <svg
//           viewBox="0 0 32 32"
//           className="w-7 h-7"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path d="M19.11 17.43c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.43-1.72-1.6-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.55-.88-2.13-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.1 2.43.9 1.43 1.8 2.51 4.37 3.52.61.26 1.09.41 1.46.53.61.19 1.17.16 1.61.1.49-.07 1.51-.62 1.72-1.22.21-.6.21-1.11.15-1.22-.06-.11-.26-.17-.55-.31z" />
//           <path d="M16.03 3C8.84 3 3 8.82 3 16c0 2.3.6 4.55 1.73 6.54L3 29l6.6-1.7A13 13 0 1 0 16.03 3zm0 23.6c-2.05 0-4.06-.55-5.82-1.59l-.42-.25-3.92 1.01 1.05-3.82-.27-.44A10.58 10.58 0 1 1 16.03 26.6z" />
//         </svg>

//         <span
//           className="
//             pointer-events-none
//             absolute right-[62px]
//             whitespace-nowrap
//             rounded-lg
//             bg-white
//             px-3 py-2
//             text-xs font-semibold
//             text-black
//             opacity-0
//             translate-x-2
//             group-hover:opacity-100
//             group-hover:translate-x-0
//             transition-all duration-200
//           "
//         >
//           WhatsApp Us
//         </span>
//       </motion.a>

//       {/* CALL BUTTON */}
//       <motion.a
//         href="tel:+916302111807"
//         aria-label="Call HipHipVideos"
//         onClick={handleCallClick}
//         whileHover={{ scale: 1.08 }}
//         whileTap={{ scale: 0.95 }}
//         className="
//           group
//           flex items-center justify-center
//           w-[52px] h-[52px]
//           rounded-full
//           bg-[#CCFF00]
//           text-black
//           shadow-[0_6px_25px_rgba(204,255,0,0.3)]
//           transition-all duration-300
//           hover:shadow-[0_8px_30px_rgba(204,255,0,0.55)]
//         "
//       >
//         <svg
//           viewBox="0 0 24 24"
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           aria-hidden="true"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M22 16.92v3a2 2 0 0 1-2.18 2
//             19.79 19.79 0 0 1-8.63-3.07
//             19.5 19.5 0 0 1-6-6
//             A19.79 19.79 0 0 1 2.12 4.18
//             2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
//             12.84 12.84 0 0 0 .7 2.81
//             2 2 0 0 1-.45 2.11L8.09 9.91
//             a16 16 0 0 0 6 6l1.27-1.27
//             a2 2 0 0 1 2.11-.45
//             12.84 12.84 0 0 0 2.81.7
//             A2 2 0 0 1 22 16.92z"
//           />
//         </svg>

//         <span
//           className="
//             pointer-events-none
//             absolute right-[62px]
//             whitespace-nowrap
//             rounded-lg
//             bg-white
//             px-3 py-2
//             text-xs font-semibold
//             text-black
//             opacity-0
//             translate-x-2
//             group-hover:opacity-100
//             group-hover:translate-x-0
//             transition-all duration-200
//           "
//         >
//           Call Us
//         </span>
//       </motion.a>
//     </div>
//   );
// }
