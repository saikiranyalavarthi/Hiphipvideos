import Link from "next/link";

export const metadata = {
  title: "D2C Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates D2C product videos, brand films, commercials, product launch videos, social media content and e-commerce videos for direct-to-consumer brands in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/d2c-brands",
  },
  openGraph: {
    title: "D2C Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Video production for D2C brands, e-commerce products and consumer brands.",
    url: "/industries/d2c-brands",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "D2C Product Videos",
    description:
      "High-quality product videos that showcase product features, benefits, design, usage and customer experience.",
    href: "/services/product-video-production",
  },
  {
    number: "02",
    title: "D2C Brand Films",
    description:
      "Creative brand films that communicate your story, personality, values and positioning to your target customers.",
    href: "/services/commercial-video-production",
  },
  {
    number: "03",
    title: "D2C Commercials",
    description:
      "Performance-focused commercial videos designed to capture attention and communicate your product quickly.",
    href: "/services/commercial-video-production",
  },
  {
    number: "04",
    title: "Product Launch Videos",
    description:
      "Launch campaigns that introduce new products and create excitement across digital channels.",
    href: "/services/commercial-video-production",
  },
  {
    number: "05",
    title: "Social Media Videos",
    description:
      "Short-form video content designed for Instagram, YouTube, Facebook and other social platforms.",
    href: "/services/motion-graphics",
  },
  {
    number: "06",
    title: "3D Product Animation",
    description:
      "3D visuals and animations that demonstrate product design, functionality and unique features.",
    href: "/services/3d-product-animation",
  },
];

const categories = [
  "Beauty",
  "Skincare",
  "Cosmetics",
  "Fashion",
  "Food & Beverage",
  "Health & Wellness",
  "Home & Lifestyle",
  "Consumer Electronics",
  "Gadgets",
  "Accessories",
  "Personal Care",
  "Fitness",
  "Pet Products",
  "E-Commerce Brands",
  "Consumer Products",
  "Lifestyle Brands",
];

const contentTypes = [
  "D2C Product Videos",
  "Product Demonstration Videos",
  "Product Commercials",
  "Brand Films",
  "Product Launch Videos",
  "Social Media Reels",
  "UGC-Style Videos",
  "E-Commerce Videos",
  "Product Explainers",
  "Feature Videos",
  "Lifestyle Videos",
  "Digital Advertisements",
];

const platforms = [
  "Shopify",
  "Amazon",
  "Flipkart",
  "Brand Websites",
  "Product Pages",
  "Instagram",
  "YouTube",
  "Facebook",
  "Google Ads",
  "Meta Ads",
  "E-Commerce Marketing",
  "Digital Campaigns",
];

const process = [
  {
    number: "01",
    title: "Understand Your Brand",
    description:
      "We learn about your product, brand personality, audience, positioning and campaign objectives.",
  },
  {
    number: "02",
    title: "Creative Strategy",
    description:
      "We develop concepts and visual directions designed around your product and customer.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Scripts, storyboards, styling, props, locations, talent, shot lists and production planning are prepared.",
  },
  {
    number: "04",
    title: "Product Production",
    description:
      "We capture products through professional cinematography, product styling, lighting and creative direction.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Editing, color grading, music, sound design, motion graphics and visual effects complete the content.",
  },
  {
    number: "06",
    title: "Digital Delivery",
    description:
      "Final assets can be adapted for websites, e-commerce, social media and digital advertising.",
  },
];

const faqs = [
  {
    question: "What is D2C video production?",
    answer:
      "D2C video production creates marketing and product videos for direct-to-consumer brands. This can include product videos, commercials, brand films, launch videos, social media content and e-commerce videos.",
  },
  {
    question: "Does HipHipVideos create D2C videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a creative video production company based in Hyderabad, creating D2C product videos, commercials, brand films and digital content for consumer brands across India.",
  },
  {
    question: "Can you create videos for e-commerce products?",
    answer:
      "Yes. Product videos can showcase product features, benefits, usage, design, packaging and customer experience for e-commerce websites and product pages.",
  },
  {
    question: "Can you create D2C videos for Instagram?",
    answer:
      "Yes. We can create short-form product videos, reels, advertisements and branded content for Instagram and other social platforms.",
  },
  {
    question: "Can you create videos for product launches?",
    answer:
      "Yes. Product launch videos can introduce new products, communicate key benefits and create awareness across social media, websites and digital advertising.",
  },
  {
    question: "Can you create performance marketing videos?",
    answer:
      "Yes. D2C advertising videos can be structured around product benefits, customer problems, demonstrations, offers and calls to action for digital campaigns.",
  },
  {
    question: "Can you create 3D product animation?",
    answer:
      "Yes. 3D product animation can demonstrate product design, functionality, internal components and features that may be difficult to show through traditional filming.",
  },
  {
    question: "Can one shoot create multiple D2C videos?",
    answer:
      "Yes. A well-planned production can generate a main product film together with shorter social media videos, feature clips, advertisements and e-commerce assets.",
  },
];

export default function D2CBrandsPage() {
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
              D2C Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              D2C Video Production That{" "}
              <span className="text-[#CCFF00]">
                Turns Products Into Stories
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates product videos, commercials, brand films,
              product launch videos and social media content for direct-to-
              consumer and e-commerce brands.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              D2C video production company in Hyderabad serving consumer brands
              and e-commerce businesses across India.
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
              D2C Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Make Your Product Impossible to Ignore
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              D2C brands compete for attention across websites, social media,
              marketplaces and digital advertising. Strong video helps your
              product communicate quickly and visually.
            </p>

            <p>
              HipHipVideos creates product-focused content that demonstrates
              what your product does, why it matters and how it fits into the
              customer's life.
            </p>

            <p>
              From product launches to performance campaigns, we build visual
              content around your brand and marketing objective.
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
              D2C Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Complete video production for product marketing, e-commerce,
              social media and direct-to-consumer advertising.
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

      {/* CATEGORIES */}
      <section
        aria-labelledby="categories-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            D2C Categories
          </p>

          <h2
            id="categories-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Consumer Brands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create product-focused content for different D2C and consumer
            product categories.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((item) => (
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
            Content Types
          </p>

          <h2
            id="content-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            D2C Content for Products, Campaigns & Social Media
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
            Digital Distribution
          </p>

          <h2
            id="platforms-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            D2C Videos for E-Commerce, Social Media & Ads
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create video assets for product pages, social campaigns, performance
            marketing and brand advertising.
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
              From Product Idea to Campaign-Ready Content
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We combine creative strategy, product filmmaking and
              post-production to create content for modern D2C brands.
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
              Video Content Built for D2C Growth
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Product Focused",
                text: "We highlight the product features and benefits that matter most to your customers.",
              },
              {
                title: "Creative Storytelling",
                text: "Strong visual concepts help your product stand out in competitive consumer markets.",
              },
              {
                title: "Performance Ready",
                text: "Content can be structured around awareness, product education, engagement and conversion goals.",
              },
              {
                title: "Multiple Assets",
                text: "One production can generate a main video plus shorter social, advertising and product-page assets.",
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
            D2C Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create D2C product videos, commercials,
            brand films, product launch videos and social media content for
            consumer brands across India.
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
              D2C Video FAQ
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
            Grow Your D2C Brand
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Make Your Product Stand Out?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your product, campaign or brand and let us create
            video content designed for your customers and digital channels.
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
