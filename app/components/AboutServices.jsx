export default function AboutServices() {
    return (
      <section className="relative py-32 overflow-hidden text-white">
  
        {/* BACKGROUND VIDEO */}
        
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/80"></div>
  
        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
  
          {/* TOP CONTENT */}
          <div className="grid md:grid-cols-12 gap-12 mb-32">
  
            {/* LEFT TITLE */}
            <div className="md:col-span-3">
              <p className="text-sm font-medium text-gray-300">
              Who we are
              </p>
            </div>
  
            {/* RIGHT DESCRIPTION */}
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight max-w-4xl">
              We are a modern visual storytelling studio producing high-impact content for ambitious brands ready to grow, compete, and lead confidently in today’s fast-moving digital landscape.
              </h2>
            </div>
          </div>
  
          {/* WHAT WE DO */}
          <div className="mb-16">
            <p className="text-sm font-medium text-gray-300">What we do</p>
          </div>
  
          {/* SERVICES */}
          <div className="grid md:grid-cols-4 gap-12">
  
            {/* 01 */}
            <div>
              <span className="text-sm text-gray-400">01</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Concept</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
              Every powerful visual begins with a clear idea. We shape compelling narratives, define direction, and align creative vision with your brand.
              </p>
            </div>
  
            {/* 02 */}
            <div>
              <span className="text-sm text-gray-400">02</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Previsualization</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
              We translate ideas into visual blueprints through storyboards, shot planning, and scene design, allowing you to see the vision before production begins
              </p>
            </div>
  
            {/* 03 */}
            <div>
              <span className="text-sm text-gray-400">03</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Production</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
              Using refined techniques and precision execution, we create striking visuals that capture attention and communicate your message effectively.
              </p>
            </div>
  
            {/* 04 */}
            <div>
              <span className="text-sm text-gray-400">04</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Composition</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
              We elevate the final piece through seamless editing, color refinement, sound design, and music, delivering a polished and impactful result.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  