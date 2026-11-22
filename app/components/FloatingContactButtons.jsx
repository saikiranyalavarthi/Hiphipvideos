"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/app/lib/analytics";

export default function FloatingContactButtons() {
  const phoneNumber = "916302111807";

  const whatsappMessage = encodeURIComponent(
    "Hello Hip Hip Videos, I am interested in your video creation services. I need a video for my product or business and would like to discuss my project.",
  );

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", {
      location: "floating_button",
      service: "video_creation",
    });
  };

  const handleCallClick = () => {
    trackEvent("phone_click", {
      location: "floating_button",
      service: "video_creation",
    });
  };

  const buttonClass =
    "flex h-[58px] w-[58px] items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white hover:text-black hover:border-black/10";

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3">
      {/* WHATSAPP BUTTON */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hip Hip Videos on WhatsApp"
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.94 }}
        className={buttonClass}
        style={{
          color: "#000",
          WebkitTextFillColor: "#000",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.61 4.55 1.76 6.55L3 29l6.64-1.74A13 13 0 1 0 16 3Zm0 23.6a10.56 10.56 0 0 1-5.36-1.46l-.4-.24-3.94 1.03 1.05-3.84-.26-.42A10.57 10.57 0 1 1 16 26.6Z" />

          <path d="M21.8 18.7c-.32-.16-1.88-.92-2.17-1.02-.29-.11-.5-.16-.7.16-.21.32-.81 1.02-.99 1.22-.18.2-.36.23-.68.07-.32-.16-1.34-.5-2.55-1.58-.95-.84-1.58-1.9-1.77-2.22-.18-.32-.02-.5.14-.66.16-.16.32-.36.48-.55.16-.18.21-.32.32-.52.1-.21.05-.4-.02-.55-.07-.16-.70-1.70-.96-2.33-.25-.61-.52-.53-.70-.54h-.60c-.21 0-.55.07-.83.40-.28.32-1.09 1.07-1.09 2.61 0 1.54 1.12 3.03 1.28 3.24.16.21 2.20 3.36 5.34 4.71.75.32 1.34.51 1.80.65.76.24 1.45.20 2.00.12.61-.09 1.86-.76 2.13-1.50.27-.73.27-1.36.19-1.50-.08-.14-.29-.22-.61-.38Z" />
        </svg>
      </motion.a>

      {/* CALL BUTTON */}
      <motion.a
        href={`tel:+${phoneNumber}`}
        aria-label="Call Hip Hip Videos"
        onClick={handleCallClick}
        whileHover={{ scale: 1.08, y: -3 }}
        whileTap={{ scale: 0.94 }}
        className={buttonClass}
        style={{
          color: "#000",
          WebkitTextFillColor: "#000",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.92v3a2 2 0 0 1-2.18 2
            19.79 19.79 0 0 1-8.63-3.07
            19.5 19.5 0 0 1-6-6
            A19.79 19.79 0 0 1 2.12 4.18
            2 2 0 0 1 4.11 2h3
            a2 2 0 0 1 2 1.72
            12.84 12.84 0 0 0 .7 2.81
            2 2 0 0 1-.45 2.11L8.09 9.91
            a16 16 0 0 0 6 6l1.27-1.27
            a2 2 0 0 1 2.11-.45
            12.84 12.84 0 0 0 2.81.7
            A2 2 0 0 1 22 16.92z"
          />
        </svg>
      </motion.a>
    </div>
  );
}
