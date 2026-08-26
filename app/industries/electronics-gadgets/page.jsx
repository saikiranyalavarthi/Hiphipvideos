import Link from "next/link";

export const metadata = {
  title:
    "Electronics & Gadget Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates electronics product videos, gadget commercials, product launch videos, 3D product animations, demonstrations and social media videos in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/electronics-gadgets",
  },
  openGraph: {
    title:
      "Electronics & Gadget Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional video production for electronics, gadgets, consumer technology and product brands.",
    url: "/industries/electronics-gadgets",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Gadget Product Videos",
    description:
      "High-quality product videos that showcase the design, features, functionality and user experience of electronics and gadgets.",
    href: "/services/product-video-production",
  },
  {
    number: "02",
    title: "Electronics Commercials",
    description:
      "Creative commercial videos designed to introduce electronics products, build awareness and communicate product benefits.",
    href: "/services/commercial-video-production",
  },
  {
    number: "03",
    title: "Product Launch Videos",
    description:
      "Launch videos that create excitement around new gadgets, devices and consumer electronics products.",
    href: "/services/commercial-video-production",
  },
  {
    number: "04",
    title: "3D Product Animation",
    description:
      "Detailed 3D animations that demonstrate product design, internal components, technology and product functionality.",
    href: "/services/3d-product-animation",
  },
  {
    number: "05",
    title: "Product Explainer Videos",
    description:
      "Clear explainer videos that make technical features and product functionality easier for customers to understand.",
    href: "/services/explainer-videos",
  },
  {
    number: "06",
    title: "Motion Graphics",
    description:
      "Motion graphics, animated typography and visual effects that make technology and gadget videos more engaging.",
    href: "/services/motion-graphics",
  },
];

const productCategories = [
  "Smartphones",
  "Laptops",
  "Smartwatches",
  "Earbuds",
  "Headphones",
  "Speakers",
  "Cameras",
  "Gaming Products",
  "Smart Home Devices",
  "Consumer Electronics",
  "Computer Accessories",
  "IoT Products",
  "Wearable Technology",
  "Electronic Accessories",
  "New Gadgets",
  "Tech Products",
];

const contentTypes = [
  "Product Launch Videos",
  "Product Demonstration Videos",
  "Product Commercials",
  "Gadget Reviews",
  "Product Explainer Videos",
  "Feature Videos",
  "Unboxing Videos",
  "Social Media Videos",
  "Product Advertisements",
  "3D Product Animation",
  "Motion Graphics",
  "Brand Films",
];

const platforms = [
  "Amazon",
  "Flipkart",
  "Brand Websites",
  "Product Pages",
  "Instagram",
  "YouTube",
  "Facebook",
  "LinkedIn",
  "Google Ads",
  "Meta Ads",
  "Digital Campaigns",
  "E-Commerce Marketing",
];

const process = [
  {
    number: "01",
    title: "Understand the Product",
    description:
      "We understand your product, technology, features, target customer and communication objective.",
  },
  {
    number: "02",
    title: "Creative Concept",
    description:
      "We develop a visual concept that presents your product benefits clearly while creating attention.",
  },
  {
    number: "03",
    title: "Production Planning",
    description:
      "We plan scripts, storyboards, locations, product styling, shots, lighting and production requirements.",
  },
  {
    number: "04",
    title: "Product Filming",
    description:
      "Our team captures detailed product shots, demonstrations, lifestyle scenes and cinematic visuals.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Editing, sound design, color grading, motion graphics, animation and visual effects complete the video.",
  },
  {
    number: "06",
    title: "Platform Delivery",
    description:
      "Videos can be delivered in formats suitable for e-commerce, social media, websites and advertising campaigns.",
  },
];

const faqs = [
  {
    question: "What is electronics and gadget video production?",
    answer:
      "Electronics and gadget video production creates visual content that demonstrates the design, features, technology and benefits of electronic products and consumer gadgets.",
  },
  {
    question:
      "Does HipHipVideos create electronics product videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad creating product videos, commercials, launch videos, explainers, 3D animations and digital content for electronics and technology brands.",
  },
  {
    question: "Can you create videos for a new gadget launch?",
    answer:
      "Yes. Product launch videos can introduce a new gadget, highlight its key features and create excitement for customers across digital marketing channels.",
  },
  {
    question: "Can you create Amazon or e-commerce product videos?",
    answer:
      "Yes. Product videos can be planned for e-commerce product pages, advertisements and digital campaigns, depending on the platform's current content requirements.",
  },
  {
    question: "Can you create 3D animations for electronics?",
    answer:
      "Yes. 3D product animation can visually explain product construction, components, technology, functionality and internal mechanisms.",
  },
  {
    question: "Can you explain technical products through video?",
    answer:
      "Yes. Product explainer videos can simplify technical specifications, features and user benefits through demonstrations, animation, motion graphics and clear storytelling.",
  },
  {
    question: "Can one product shoot create multiple videos?",
    answer:
      "Yes. With proper planning, one production can create a main product film along with shorter social media videos, feature clips, advertisements and other digital assets.",
  },
  {
    question: "Do you create videos for startups and technology companies?",
    answer:
      "Yes. We create product and technology videos for startups, consumer electronics brands, technology companies and businesses launching new products.",
  },
];

export default function ElectronicsGadgetsPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Electronics & Gadget Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Electronics & Gadget Videos That{" "}
              <span className="text-[#CCFF00]">Make Products Stand Out</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates product videos, gadget commercials, product
              launch films, explainers, 3D product animations and motion
              graphics for electronics and technology brands.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Electronics and gadget video production company in Hyderabad
              serving technology and consumer product brands across India.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.3)]"
              >
                Get a Free Discovery Call
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        aria-labelledby="intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Product Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Product Features Into Visual Experiences
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Electronics products often have complex features that are
              difficult to communicate through text alone. Video can show
              customers how a product looks, works and fits into their lives.
            </p>

            <p>
              HipHipVideos creates visual content for consumer electronics,
              gadgets, technology products and innovative devices.
            </p>

            <p>
              From product launch films and commercials to 3D animation and
              e-commerce videos, we create content around your product and
              marketing objective.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-labelledby="services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Services
            </p>

            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Electronics & Gadget Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Complete video production solutions for technology products,
              consumer electronics and new gadget launches.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((item) => (
              <Link
                key={item.number}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.045] sm:p-8"
              >
                <span className="text-sm font-semibold text-[#CCFF00]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold transition-colors group-hover:text-[#CCFF00]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
                  {item.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-white/40 transition-colors group-hover:text-[#CCFF00]">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section
        aria-labelledby="categories-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Product Categories
          </p>

          <h2
            id="categories-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Electronics, Gadgets & Technology Products
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create product-focused video content for different consumer
            electronics and technology categories.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {productCategories.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-sm text-white/60 transition hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT TYPES */}
      <section
        aria-labelledby="content-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Video Content
          </p>

          <h2
            id="content-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Content for Gadget Marketing & Product Launches
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {contentTypes.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-sm text-white/60 transition hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section
        aria-labelledby="platforms-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Distribution
          </p>

          <h2
            id="platforms-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Product Videos for E-Commerce, Social Media & Advertising
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create digital video assets for product pages, social media,
            advertising and technology marketing campaigns.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {platforms.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-sm text-white/60 transition hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        aria-labelledby="process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Process
            </p>

            <h2
              id="process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Product Concept to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We combine product understanding, creative direction,
              cinematography and post-production to create effective product
              videos.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {process.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 sm:p-8"
              >
                <span className="text-sm font-semibold text-[#CCFF00]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section
        aria-labelledby="why-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Product Storytelling Built for Technology Brands
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Product Focused",
                text: "We focus on the features, design and benefits that matter most to your target customer.",
              },
              {
                title: "Cinematic Visuals",
                text: "Professional lighting, cinematography and product styling make your technology look its best.",
              },
              {
                title: "Technical Storytelling",
                text: "Complex features can be communicated through demonstrations, animation and clear visual explanations.",
              },
              {
                title: "Campaign Ready",
                text: "Create multiple assets from one production for launches, websites, social media and advertising.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYDERABAD */}
      <section
        aria-labelledby="location-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="location-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Electronics & Gadget Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad, Telangana and creates product
            videos, gadget commercials, launch films, explainers, motion
            graphics and 3D product animations for technology and electronics
            brands across India.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Electronics & Gadget Video FAQ
            </p>

            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-white sm:text-lg">
                  {faq.question}
                </summary>

                <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Launch Your Product
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Make Your Product Stand Out?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your gadget, electronics product or technology launch
            and let us create a powerful visual story for your brand.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] sm:text-base"
          >
            Get a Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
