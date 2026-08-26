import Link from "next/link";

export const metadata = {
  title: "D2C Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates D2C product videos, e-commerce videos, social media ads, product launch videos and performance marketing creatives in Hyderabad and across India.",
  alternates: {
    canonical: "/services/d2c-video-production",
  },
  openGraph: {
    title: "D2C Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional D2C product videos, e-commerce videos, social media ads and product campaign content by HipHipVideos.",
    url: "/services/d2c-video-production",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "D2C Product Videos",
    description:
      "Show your product clearly through engaging visuals that communicate features, benefits, use cases and the overall customer experience.",
  },
  {
    number: "02",
    title: "D2C Advertising Videos",
    description:
      "Create attention-grabbing video ads for digital campaigns, paid social media, product launches and performance marketing.",
  },
  {
    number: "03",
    title: "E-commerce Product Videos",
    description:
      "Professional product videos designed to help online shoppers understand products through demonstrations, details and real-world usage.",
  },
  {
    number: "04",
    title: "Product Launch Videos",
    description:
      "Introduce new products with launch films that communicate the product story, positioning, benefits and brand identity.",
  },
  {
    number: "05",
    title: "Social Media Product Videos",
    description:
      "Short-form vertical videos designed for Instagram, YouTube Shorts and other social platforms where product discovery happens.",
  },
  {
    number: "06",
    title: "D2C Brand Films",
    description:
      "Build a stronger emotional connection with customers through brand stories, lifestyle films and founder-led content.",
  },
];

const categories = [
  "Fashion",
  "Beauty",
  "Skincare",
  "Food & Beverage",
  "Health & Wellness",
  "Consumer Electronics",
  "Home & Lifestyle",
  "Personal Care",
  "Jewellery",
  "Accessories",
  "Fitness",
  "Pet Products",
];

const contentFormats = [
  "Product Demonstration",
  "Product Launch",
  "UGC-Style Video",
  "Social Media Ad",
  "Paid Advertising Creative",
  "Lifestyle Product Film",
  "Founder Story",
  "Brand Story",
  "Unboxing Video",
  "How-To Video",
  "Testimonial Video",
  "E-commerce Product Video",
];

const process = [
  {
    number: "01",
    title: "Understand the Product",
    description:
      "We study your product, audience, positioning, customer problems and the goal behind the video.",
  },
  {
    number: "02",
    title: "Creative Strategy",
    description:
      "We identify the strongest product story, hook, visual direction and message for the intended audience.",
  },
  {
    number: "03",
    title: "Script & Planning",
    description:
      "We develop the script, storyboard, shot list, styling, locations and production requirements.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "We capture product details, demonstrations, lifestyle moments, people, environments and brand visuals.",
  },
  {
    number: "05",
    title: "Editing & Motion",
    description:
      "Editing, sound design, music, color grading, text animation and motion graphics create the final content.",
  },
  {
    number: "06",
    title: "Performance-Ready Delivery",
    description:
      "Videos can be delivered in multiple aspect ratios and lengths for websites, social media and digital advertising.",
  },
];

const marketingChannels = [
  "Instagram Ads",
  "Facebook Ads",
  "YouTube Ads",
  "Instagram Reels",
  "YouTube Shorts",
  "E-commerce Websites",
  "Product Pages",
  "Landing Pages",
  "Amazon",
  "Google Ads",
  "Meta Ads",
  "Brand Websites",
];

const faqs = [
  {
    question: "What is D2C video production?",
    answer:
      "D2C video production creates product and brand videos specifically for direct-to-consumer businesses. These videos can be used for product discovery, e-commerce, social media, advertising and brand marketing.",
  },
  {
    question: "What types of D2C videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates D2C product videos, e-commerce product videos, social media ads, product launch videos, advertising creatives, lifestyle videos and D2C brand films.",
  },
  {
    question: "Do you provide D2C video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates D2C product and brand videos for businesses in Hyderabad and clients across India.",
  },
  {
    question: "Can you create videos for e-commerce products?",
    answer:
      "Yes. Product demonstrations, feature videos, lifestyle content, unboxing videos, how-to videos and other e-commerce formats can be created depending on the product and marketing objective.",
  },
  {
    question: "Can you create short videos for Instagram and Facebook ads?",
    answer:
      "Yes. D2C video campaigns can be produced in short vertical formats suitable for Instagram Reels, Facebook advertising and other social-first placements.",
  },
  {
    question: "Can you create multiple versions of one product video?",
    answer:
      "Yes. A campaign can be planned to produce different cuts, aspect ratios, hooks and lengths for different platforms and marketing requirements.",
  },
  {
    question: "Can you film product demonstrations?",
    answer:
      "Yes. Product demonstrations can show how a product works, how it is used, its features, benefits and customer experience.",
  },
  {
    question: "Do you handle scripting and editing?",
    answer:
      "Yes. Our production process can include concept development, scripting, production, product filming, editing, motion graphics, sound design, color grading and final delivery.",
  },
];

export default function D2CVideoProductionPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              D2C Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              D2C Videos That{" "}
              <span className="text-[#CCFF00]">Turn Products Into Demand</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates D2C product videos, e-commerce videos, social
              media advertisements, product launch videos and brand films that
              help consumer brands explain products, capture attention and
              communicate value.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              D2C video production in Hyderabad and across India.
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
        aria-labelledby="d2c-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Direct-to-Consumer Storytelling
            </p>

            <h2
              id="d2c-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Make Your Product Easier to Discover, Understand and Want
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              D2C brands compete for attention across social media, e-commerce
              websites, advertising platforms and digital marketplaces. Strong
              product video can help communicate the value of your product
              quickly.
            </p>

            <p>
              HipHipVideos combines product storytelling, creative direction,
              cinematography, motion graphics and editing to create content
              designed around your brand and audience.
            </p>

            <p>
              From a product launch to ongoing performance marketing, we can
              create different video assets for different stages of the customer
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-labelledby="d2c-services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              D2C Video Services
            </p>

            <h2
              id="d2c-services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Video Production for Consumer Brands
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Create product and brand content around your launch, advertising,
              e-commerce and customer acquisition goals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.number}
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        aria-labelledby="d2c-categories-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            D2C Categories
          </p>

          <h2
            id="d2c-categories-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Content for Different Consumer Brands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Our creative approach can be adapted to products across different
            consumer categories and business models.
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

      {/* CONTENT FORMATS */}
      <section
        aria-labelledby="d2c-formats-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Content Formats
          </p>

          <h2
            id="d2c-formats-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Build a Complete Product Content Library
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            One production can be planned to create multiple video assets for
            product discovery, advertising and brand communication.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {contentFormats.map((item) => (
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

      {/* MARKETING CHANNELS */}
      <section
        aria-labelledby="d2c-channels-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Marketing Channels
          </p>

          <h2
            id="d2c-channels-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video for E-commerce, Social Media & Advertising
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Deliver product content in formats suitable for the platforms where
            your customers discover and evaluate products.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {marketingChannels.map((item) => (
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
        aria-labelledby="d2c-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Production Process
            </p>

            <h2
              id="d2c-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Product Brief to Marketing-Ready Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We manage the creative process from product understanding and
              concept development through filming, editing and delivery.
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

      {/* WHY HIPHIPVIDEOS */}
      <section
        aria-labelledby="why-d2c-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-d2c-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Product Video Production Built for D2C Growth
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Product-Focused Storytelling",
                text: "We focus on the features, benefits, use cases and customer experience that make your product valuable.",
              },
              {
                title: "Creative Hooks",
                text: "Strong opening concepts can help your video communicate the product quickly in attention-limited environments.",
              },
              {
                title: "Multiple Formats",
                text: "Create different cuts, lengths and aspect ratios for websites, social media, advertising and product pages.",
              },
              {
                title: "End-to-End Production",
                text: "Concept, scripting, production, editing, motion graphics, sound design and final delivery can all be handled together.",
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
        aria-labelledby="d2c-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="d2c-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            D2C Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a D2C video production company based in Hyderabad,
            Telangana, creating product videos, e-commerce videos, social media
            ads and brand content for consumer businesses in Hyderabad and
            across India.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="d2c-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              D2C Video FAQ
            </p>

            <h2
              id="d2c-faq-heading"
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

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Start Your D2C Video Campaign
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Make Your Product Impossible to Scroll Past?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your product, audience and campaign goal and let's
            create video content designed around your brand.
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
