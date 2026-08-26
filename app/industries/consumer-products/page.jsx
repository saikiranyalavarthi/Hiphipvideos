import Link from "next/link";

export const metadata = {
  title:
    "Consumer Product Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates consumer product videos, product commercials, lifestyle videos, D2C product films, product launch videos and advertising content in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/consumer-products",
  },
  openGraph: {
    title:
      "Consumer Product Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional video production for consumer brands, D2C companies, product launches and advertising campaigns.",
    url: "/industries/consumer-products",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Consumer Product Commercials",
    description:
      "High-impact product commercials designed to showcase your product, communicate benefits and capture consumer attention.",
    href: "/services/commercial-video-production",
  },
  {
    number: "02",
    title: "Product Video Production",
    description:
      "Professional product videos that demonstrate features, functionality, design and the customer experience.",
    href: "/services/product-video-production",
  },
  {
    number: "03",
    title: "D2C Product Videos",
    description:
      "Conversion-focused product content for D2C brands selling through websites, marketplaces and social media.",
    href: "/services/d2c-video-production",
  },
  {
    number: "04",
    title: "Product Launch Videos",
    description:
      "Creative launch films that introduce new consumer products and build awareness around a new product release.",
    href: "/services/commercial-video-production",
  },
  {
    number: "05",
    title: "3D Product Animation",
    description:
      "Photorealistic 3D animation for product features, internal mechanisms, packaging, technology and visual demonstrations.",
    href: "/services/3d-product-animation",
  },
  {
    number: "06",
    title: "Product Motion Graphics",
    description:
      "Motion graphics that communicate product features, specifications, benefits, comparisons and key information.",
    href: "/services/motion-graphics",
  },
];

const productCategories = [
  "Consumer Electronics",
  "Home Appliances",
  "Beauty Products",
  "Skincare",
  "Personal Care",
  "Food & Beverage",
  "Fashion Products",
  "Fitness Products",
  "Lifestyle Products",
  "Home & Kitchen",
  "Consumer Technology",
  "Smart Devices",
  "Accessories",
  "FMCG Products",
  "D2C Products",
  "New Consumer Brands",
];

const contentTypes = [
  "Product Commercials",
  "Product Demonstration Videos",
  "D2C Product Videos",
  "Product Launch Films",
  "Lifestyle Product Videos",
  "Social Media Product Videos",
  "E-Commerce Product Videos",
  "Amazon Product Videos",
  "Product Explainer Videos",
  "Product Feature Videos",
  "3D Product Animation",
  "Product Advertisements",
];

const useCases = [
  "Product Launches",
  "Digital Advertising",
  "Social Media Marketing",
  "Instagram Ads",
  "YouTube Advertising",
  "E-Commerce Websites",
  "Amazon",
  "D2C Websites",
  "Brand Campaigns",
  "Performance Marketing",
  "Product Pages",
  "Crowdfunding Campaigns",
];

const process = [
  {
    number: "01",
    title: "Understand Your Product",
    description:
      "We understand the product, target customer, positioning, features and campaign objective before developing the creative direction.",
  },
  {
    number: "02",
    title: "Creative Concept",
    description:
      "We develop a visual concept and story designed around your product and the way your customers make buying decisions.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Scripts, storyboards, locations, props, talent, styling, product preparation and shot planning are organized before production.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Professional cinematography, lighting, product styling and direction bring the product story to life.",
  },
  {
    number: "05",
    title: "Editing & Post-Production",
    description:
      "Editing, color grading, sound design, motion graphics, animation and visual effects create the final product film.",
  },
  {
    number: "06",
    title: "Multi-Platform Delivery",
    description:
      "We prepare video assets for websites, e-commerce, social media, digital advertising, marketplaces and campaigns.",
  },
];

const faqs = [
  {
    question: "What is consumer product video production?",
    answer:
      "Consumer product video production creates professional visual content for products sold to consumers, including commercials, product demonstrations, launch videos, lifestyle content and advertising videos.",
  },
  {
    question: "Does HipHipVideos create consumer product videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad creating consumer product videos, commercials, product demonstrations and advertising content for brands across India.",
  },
  {
    question: "Can you create videos for D2C brands?",
    answer:
      "Yes. We create D2C product videos designed for websites, social media, digital advertising, product pages and online campaigns.",
  },
  {
    question: "Can you create product launch videos?",
    answer:
      "Yes. Product launch videos can introduce a new consumer product, highlight its key benefits and create a strong visual identity for the launch campaign.",
  },
  {
    question: "Can you create e-commerce product videos?",
    answer:
      "Yes. Product videos can be created for e-commerce websites and marketplaces to demonstrate product features, usage, design and benefits.",
  },
  {
    question: "Can you create 3D product animation?",
    answer:
      "Yes. 3D product animation can visualize product features, internal mechanisms, materials, technology and functionality that may be difficult to show through traditional filming.",
  },
  {
    question: "Can consumer product videos be used for social media?",
    answer:
      "Yes. Product campaigns can be adapted into short-form videos and other formats for Instagram, YouTube, LinkedIn and digital advertising.",
  },
  {
    question: "What types of consumer products can you film?",
    answer:
      "We can create video content for consumer electronics, beauty, skincare, food and beverage, home products, fitness products, lifestyle products, accessories, smart devices and other consumer categories.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HipHipVideos",
  description: "Consumer product video production company in Hyderabad.",
  url: "https://hiphipvideos.com/industries/consumer-products",
  telephone: "+91 63021 11807",
  email: "info@hiphipvideos.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500008",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Consumer Product Video Production",
    "Product Commercial Production",
    "D2C Product Video Production",
    "Product Launch Videos",
    "3D Product Animation",
  ],
};

export default function ConsumerProductsPage() {
  return (
    <main className="bg-black text-white">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Consumer Product Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Consumer Product Videos That{" "}
              <span className="text-[#CCFF00]">Make Products Stand Out</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates consumer product commercials, D2C product
              videos, product demonstrations, launch films, lifestyle videos, 3D
              product animations and advertising content.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Consumer product video production company in Hyderabad creating
              professional product content for brands across India.
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
              Turn Your Product Into a Visual Experience
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Consumer brands need more than product photographs to communicate
              why a product matters. Video can demonstrate the product,
              communicate benefits and show how it fits into everyday life.
            </p>

            <p>
              From cinematic commercials and lifestyle campaigns to product
              demonstrations and 3D animation, we build visual content around
              your product and target customer.
            </p>

            <p>
              HipHipVideos combines creative strategy, production,
              cinematography, editing and post-production to create product
              content for modern consumer brands.
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
              Consumer Product Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Professional video production for consumer brands, D2C businesses,
              product launches and digital advertising campaigns.
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
            Video Production for Consumer Product Brands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Product storytelling for consumer technology, lifestyle, beauty,
            food, home, fitness and D2C brands.
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
            Product Video Content for Modern Brands
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

      {/* USE CASES */}
      <section
        aria-labelledby="use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Applications
          </p>

          <h2
            id="use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Consumer Product Videos for Sales & Marketing
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create product content for launches, e-commerce, advertising, social
            media, websites and performance marketing campaigns.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {useCases.map((item) => (
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
              From Product Idea to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We build every product video around your product, audience,
              message and marketing objective.
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
              Product Storytelling Built for Consumer Brands
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Product-Focused Storytelling",
                text: "We focus on the details, benefits and experiences that make your product valuable to customers.",
              },
              {
                title: "Creative Visuals",
                text: "Professional lighting, cinematography, styling and post-production help products look their best.",
              },
              {
                title: "D2C & E-Commerce Ready",
                text: "Create content designed for product pages, online stores, marketplaces and digital campaigns.",
              },
              {
                title: "Multi-Platform Content",
                text: "Build product video assets for websites, social media, advertising, YouTube and product launches.",
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
            Consumer Product Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create consumer product commercials,
            product demonstrations, D2C videos, launch films, lifestyle content
            and product advertising for brands across India.
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
              Consumer Product Video FAQ
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
            Start Your Product Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Make Your Product Stand Out?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your consumer product, D2C brand or upcoming launch
            and let us create a video around your marketing goals.
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
