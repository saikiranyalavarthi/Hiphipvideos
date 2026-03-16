export default function HeroCreativePage() {
  return ( <section className="relative w-full h-[600px] md:h-[720px] flex items-center justify-center overflow-hidden">

    {/* Background Image */}
    <img
      src="/process/about.png"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
  
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60"></div>
  
    {/* Content */}
    <div className="relative z-10 w-full max-w-[900px] px-6 text-center flex flex-col items-center">
  
    <h1 className="text-white text-[36px] md:text-[48px] font-semibold mb-4">
  Build Stunning Digital Experiences
</h1>

<p className="text-gray-300 text-[16px] md:text-[18px] leading-[28px] mb-8 max-w-[720px]">
  We craft high-impact digital visuals and cinematic content that help brands
  stand out in a fast-moving digital world. From creative concepts to final
  production, our team delivers compelling videos and visual experiences that
  capture attention, tell powerful stories, and drive real engagement.
</p>
  
      {/* Buttons */}
      <div className="flex items-center gap-6">
  
        <a
          href="/quote"
          className="px-6 py-3 rounded-[8px] bg-[#CCFF00] text-black text-[14px] font-semibold"
        >
          GET A QUOTE
        </a>
  
        <a
          href="/portfolio"
          className="text-white text-[14px] font-semibold hover:text-[#CCFF00]"
        >
          View Portfolio →
        </a>
  
      </div>
  
    </div>
  
  </section>

  
  );
  }
  