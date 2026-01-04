export default function Hero() {
    return (
      <section className="relative h-[100vh] w-full overflow-hidden">
  
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2021/11/25/98956-650523378_tiny.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
  
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
  
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
  Build Stunning{" "}
  <span className="text-[#CCFF00]">Digital Experiences</span>
</h1>

  
            <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
              We design and develop modern websites, apps, and digital solutions
              that grow your business.
            </p>
  
            <div className="flex gap-4">
              <a
                href="/quote"
                className="bg-[#CCFF00] text-black px-6 py-3 rounded-xl font-semibold hover:bg-orange-400 transition"
              >
                Get Quote
              </a>
  
              <a
                href="/portfolio"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
              >
                View Portfolio
              </a>
            </div>
  
          </div>
        </div>
  
      </section>
    );
  }
  