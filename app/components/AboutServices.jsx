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
                We are hip hip videos
              </p>
            </div>
  
            {/* RIGHT DESCRIPTION */}
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-5xl font-normal leading-tight max-w-4xl">
                We believe brands should stand out with bold design, sharp
                storytelling and content you can’t help but click. Creativity
                guides everything we do, and we take pride in delivering
                best-in-class work for every kind of client.
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
              <h3 className="text-3xl font-medium mt-4 mb-6">Strategy</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
                We’ll work with you to get your brand’s strategy, story and
                messaging exactly where you want it. Through curiosity,
                observation, inquiry, and carefully considered creativity,
                we help define what’s unique and sell its sizzle.
              </p>
            </div>
  
            {/* 02 */}
            <div>
              <span className="text-sm text-gray-400">02</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Design</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
                Design is how stories take shape. We create identities that
                move – visually, emotionally, and culturally. Every detail
                is deliberate. Every choice has purpose. Because great
                design doesn’t just look good – it changes how people feel.
              </p>
            </div>
  
            {/* 03 */}
            <div>
              <span className="text-sm text-gray-400">03</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Content</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
                We understand the bigger picture. With our strong in-house
                capability spanning motion, film, animation, AR and VR,
                we can present a range of options that will address your
                communications challenges to get you maximum impact.
              </p>
            </div>
  
            {/* 04 */}
            <div>
              <span className="text-sm text-gray-400">04</span>
              <h3 className="text-3xl font-medium mt-4 mb-6">Experience</h3>
              <p className="text-sm leading-relaxed text-gray-300 max-w-xs">
                We employ a balanced approach. Function with beauty,
                technology with tactile and longevity with contemporary
                relevance. We have a range of products, platforms and
                approaches that are customised to engage all audience types.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  