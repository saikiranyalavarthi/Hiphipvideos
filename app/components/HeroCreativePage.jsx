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
        Build Stunning digital experiance
      </h1>
  
      <p className="text-gray-300 text-[16px] md:text-[18px] leading-[28px] mb-8 max-w-[720px]">
      Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
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
  