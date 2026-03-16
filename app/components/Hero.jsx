"use client";
import { useState, useEffect } from "react";

export default function Hero() {

  const words = [
    "Advertisements",
    "Movies",
    "Content Videos",
    "Documentaries",
    "Product Videos",
    "Explainers"
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return ( <section className="relative min-h-[600px] md:h-[700px] w-full overflow-hidden bg-black flex justify-center">
  

    {/* Background Image */}
    <img
      src="hero1.jpg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
  
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70" />
  
    {/* Content */}
    <div className="relative z-10 w-full max-w-[1440px] flex items-center justify-center text-center px-6 lg:px-12">
  
      <div className="flex flex-col items-center gap-[24px] md:gap-[32px]">
  
        {/* Heading */}
        <h1 className="text-[#FFF] text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] tracking-[-0.32px]">
          Build stunning{" "}
          <span className="text-[#CCFF00]">
            {words[wordIndex]}_
          </span>
        </h1>
  
        {/* Paragraph */}
        <p className="text-[#FFF] text-center text-[18px] sm:text-[24px] md:text-[32px] font-normal leading-[28px] sm:leading-[32px] md:leading-[40px] tracking-[-0.16px] max-w-[814px]">
          Premium video productions built to engage audiences
          and convert attention into real results
        </p>
  
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[20px]">
  
          {/* Primary Button */}
          <a
            href="/quote"
            className="flex px-[16px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-[#CCFF00] text-black text-[16px] font-bold leading-[24px] whitespace-nowrap"
          >
            Get a Free Discovery Call
          </a>
  
          {/* Portfolio Link */}
          <a
            href="/portfolio"
            className="text-white text-[16px] font-bold leading-[24px] hover:text-[#CCFF00] transition"
          >
            View Portfolio →
          </a>
  
        </div>
  
      </div>
  
    </div>
  
  </section>

  
  );
}