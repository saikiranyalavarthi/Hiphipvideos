import Link from "next/link";

export const metadata = {
  title: "Fashion Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates fashion films, fashion product videos, campaign videos, brand films, social media content and fashion advertisements in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/fashion",
  },
  openGraph: {
    title: "Fashion Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Creative fashion video production for fashion brands, designers, e-commerce brands and lifestyle businesses.",
    url: "/industries/fashion",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Fashion Campaign Videos",
    description:
      "Creative campaign films designed to communicate your collection, brand identity and seasonal story through strong visual storytelling.",
    href: "/services/commercial-video-production",
  },
  {
    number: "02",
    title: "Fashion Product Videos",
    description:
      "Professional product videos that showcase clothing, accessories, details, materials and styling for digital commerce.",
    href: "/services/product-video-production",
  },
  {
    number: "03",
    title: "Fashion Brand Films",
    description:
      "Cinematic brand stories that communicate the personality, positioning and creative identity behind your fashion brand.",
    href: "/services/commercial-video-production",
  },
  {
    number: "04",
    title: "Fashion Advertisements",
    description:
      "Attention-grabbing fashion advertisements created for digital campaigns, social media and brand promotions.",
    href: "/services/commercial-video-production",
  },
  {
    number: "05",
    title: "Fashion Social Media Videos",
    description:
      "Short-form fashion content created for Instagram, YouTube and other social platforms.",
    href: "/services/motion-graphics",
  },
  {
    number: "06",
    title: "Motion Graphics",
    description:
      "Animated typography, graphics and branded visual elements that add energy and personality to fashion campaigns.",
    href: "/services/motion-graphics",
  },
];

const fashionCategories = [
  "Fashion Brands",
  "Clothing Brands",
  "Luxury Fashion",
  "Streetwear",
  "Ethnic Wear",
  "Western Wear",
  "Accessories",
  "Footwear",
  "Jewellery",
  "Beauty & Lifestyle",
  "Designer Brands",
  "E-Commerce Fashion",
];

const contentTypes = [
  "Fashion Films",
  "Fashion Campaign Videos",
  "Product Videos",
  "Brand Films",
  "Fashion Advertisements",
  "Collection Launch Videos",
  "Lookbook Videos",
  "Behind-the-Scenes Videos",
  "Instagram Reels",
  "Social Media Videos",
  "E-Commerce Videos",
  "Lifestyle Videos",
];

const platforms = [
  "Instagram",
  "YouTube",
  "Facebook",
  "E-Commerce Websites",
  "Brand Websites",
  "Digital Advertising",
  "Google Ads",
  "Meta Ads",
  "Product Pages",
  "Fashion Campaigns",
  "Collection Launches",
  "Social Media Marketing",
];

const process = [
  {
    number: "01",
    title: "Understand the Brand",
    description:
      "We understand your fashion identity, collection, audience, positioning and campaign objective before developing the creative direction.",
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "We develop the visual concept, mood, styling direction, references and storytelling approach for the campaign.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "We plan locations, models, styling, makeup, lighting, shot lists, schedules and production requirements.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Our production team captures the collection through professional cinematography, direction, lighting and creative execution.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, music, motion graphics and visual finishing bring the campaign together.",
  },
  {
    number: "06",
    title: "Platform Delivery",
    description:
      "Final videos can be prepared in different formats and aspect ratios for websites, social media and advertising platforms.",
  },
];

const faqs = [
  {
    question: "What is fashion video production?",
    answer:
      "Fashion video production creates visual content for fashion brands, designers, clothing companies, lifestyle businesses and e-commerce brands. It can include fashion films, campaign videos, product videos, advertisements and social media content.",
  },
  {
    question:
      "Does HipHipVideos provide fashion video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a creative video production company based in Hyderabad, Telangana, creating fashion films, campaign videos, advertisements, product videos and branded content for businesses across India.",
  },
  {
    question: "Can you create videos for a fashion collection launch?",
    answer:
      "Yes. Collection launch videos can introduce a new fashion line through cinematic storytelling, models, styling, product details, locations and brand-focused creative direction.",
  },
  {
    question: "Can you create fashion product videos for e-commerce?",
    answer:
      "Yes. Fashion product videos can showcase clothing, accessories, materials, fit, details and styling for product pages and online shopping platforms.",
  },
  {
    question: "Can you create Instagram fashion videos?",
    answer:
      "Yes. We can create short-form fashion content suitable for Instagram Reels, Stories, social advertisements and other digital formats.",
  },
  {
    question: "Can you create luxury fashion films?",
    answer:
      "Yes. Luxury fashion films can use cinematic production, creative direction, styling, lighting, locations and detailed post-production to communicate a premium brand identity.",
  },
  {
    question: "Can fashion videos be used for advertisements?",
    answer:
      "Yes. Fashion campaign videos can be adapted for digital advertisements, social media campaigns, product launches and brand awareness campaigns.",
  },
  {
    question: "Can one fashion shoot create multiple videos?",
    answer:
      "Yes. A planned production can be structured to create a primary campaign film along with shorter product videos, social media edits and other digital assets.",
  },
];

export default function FashionPage() {
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
              Fashion Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Fashion Video Production for{" "}
              <span className="text-[#CCFF00]">
                Brands That Make a Statement
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates fashion films, campaign videos, product
              videos, advertisements, brand films and social media content
              designed to showcase fashion brands and collections.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Fashion video production company in Hyderabad serving fashion
              brands, designers and lifestyle businesses across India.
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
              Fashion Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Your Collection Into a Visual Experience
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Fashion is visual. The right combination of styling, lighting,
              movement, cinematography and editing can communicate a brand's
              identity before a customer reads a single word.
            </p>

            <p>
              HipHipVideos creates fashion video content for designers, clothing
              brands, lifestyle companies and e-commerce businesses.
            </p>

            <p>
              From a new collection launch to a complete digital campaign, we
              create visual stories around your brand, products and audience.
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
              Fashion Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Build a complete visual content system for fashion campaigns,
              product launches, e-commerce and social media.
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
            Fashion Categories
          </p>

          <h2
            id="categories-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Fashion Video Production Across Categories
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create visual campaigns for different fashion, lifestyle and
            consumer categories.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {fashionCategories.map((item) => (
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
            Fashion Video Content for Brands & Campaigns
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
            Fashion Videos for Social Media, E-Commerce & Advertising
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create platform-ready video content for fashion marketing, product
            launches and digital advertising.
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
              From Fashion Concept to Final Campaign
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We combine creative direction, production and post-production to
              create fashion content around your brand identity.
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
              Visual Storytelling Built Around Your Fashion Brand
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Creative Direction",
                text: "We build the visual direction around your brand identity, collection and campaign objective.",
              },
              {
                title: "Cinematic Production",
                text: "Professional cinematography, lighting, composition and direction help your collection stand out.",
              },
              {
                title: "Brand Focused",
                text: "Every visual element is planned to communicate your brand personality and positioning.",
              },
              {
                title: "Multiple Deliverables",
                text: "One production can create campaign films, social edits, product videos and other digital assets.",
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
            Fashion Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create fashion films, campaign videos,
            product videos, advertisements and social media content for fashion
            and lifestyle brands across India.
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
              Fashion Video FAQ
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
            Start Your Fashion Video Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Make Your Fashion Brand Stand Out?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your collection, brand or campaign and let us develop
            a visual story that connects with your audience.
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
