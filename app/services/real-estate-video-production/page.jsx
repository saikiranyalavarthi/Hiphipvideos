import Link from "next/link";

export const metadata = {
  title: "Real Estate Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates real estate promotional videos, property walkthroughs, project films, real estate ads and drone-ready property videos in Hyderabad and across India.",
  alternates: {
    canonical: "/services/real-estate-video-production",
  },
  openGraph: {
    title: "Real Estate Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional real estate video production for property developers, builders, projects and real estate brands.",
    url: "/services/real-estate-video-production",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Real Estate Promotional Videos",
    description:
      "High-impact property and project videos designed to present developments, locations, amenities and investment opportunities.",
  },
  {
    number: "02",
    title: "Property Walkthrough Videos",
    description:
      "Show prospective buyers the layout, interiors, exteriors, amenities and overall property experience through professional video.",
  },
  {
    number: "03",
    title: "Real Estate Project Films",
    description:
      "Cinematic project films that communicate the vision, lifestyle, location and value of residential and commercial developments.",
  },
  {
    number: "04",
    title: "Real Estate Advertisement Videos",
    description:
      "Short-form property advertisements created for digital campaigns, social media, websites and lead-generation marketing.",
  },
  {
    number: "05",
    title: "Property Drone Videos",
    description:
      "Aerial footage can showcase project scale, surrounding areas, roads, landmarks, communities and the wider property location.",
  },
  {
    number: "06",
    title: "Real Estate Brand Films",
    description:
      "Brand-focused films that communicate the reputation, vision, projects and values of builders and real estate companies.",
  },
];

const propertyTypes = [
  "Residential Projects",
  "Commercial Projects",
  "Apartments",
  "Villas",
  "Open Plots",
  "Gated Communities",
  "Farm Lands",
  "Land Development",
  "Luxury Properties",
  "Office Spaces",
  "Retail Projects",
  "Real Estate Brands",
];

const videoUses = [
  "Property Websites",
  "Project Landing Pages",
  "Google Ads",
  "Social Media Ads",
  "Instagram Reels",
  "YouTube",
  "Property Launches",
  "Sales Presentations",
  "Broker Presentations",
  "WhatsApp Marketing",
  "Digital Campaigns",
  "Real Estate Exhibitions",
];

const process = [
  {
    number: "01",
    title: "Understand the Project",
    description:
      "We learn about your property, location, target buyer, project features, positioning and marketing objective.",
  },
  {
    number: "02",
    title: "Creative Planning",
    description:
      "We develop the visual concept, script, shot list and storytelling direction around the property and audience.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Locations, schedules, talent, equipment, permissions and production requirements are planned before filming.",
  },
  {
    number: "04",
    title: "Property Filming",
    description:
      "We capture interiors, exteriors, amenities, architecture, lifestyle moments, surroundings and other important project visuals.",
  },
  {
    number: "05",
    title: "Editing & Post-Production",
    description:
      "Professional editing, color grading, sound design, music, motion graphics and visual effects complete the property film.",
  },
  {
    number: "06",
    title: "Marketing Delivery",
    description:
      "Final videos can be prepared in formats for websites, social media, advertising campaigns, presentations and digital marketing.",
  },
];

const faqs = [
  {
    question: "What is real estate video production?",
    answer:
      "Real estate video production involves creating professional visual content to showcase properties, developments, locations, amenities, lifestyles and real estate brands.",
  },
  {
    question: "What types of real estate videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates property walkthrough videos, real estate promotional videos, project films, property advertisements, aerial videos and real estate brand films.",
  },
  {
    question: "Do you provide real estate video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and provides real estate video production for builders, developers, property brands and projects in Hyderabad and across India.",
  },
  {
    question: "Can you create videos for apartments and villas?",
    answer:
      "Yes. Apartment projects, villas, gated communities and other residential developments can be presented through walkthroughs, promotional films, lifestyle videos and advertising content.",
  },
  {
    question: "Can you create videos for open plots and land projects?",
    answer:
      "Yes. Land and open-plot projects can be presented using location footage, aerial visuals, road connectivity, surrounding landmarks, project features and other relevant information.",
  },
  {
    question: "Can real estate videos include drone footage?",
    answer:
      "Yes. Aerial footage can be incorporated where suitable and permitted to show project scale, surroundings, connectivity, landscape and location context.",
  },
  {
    question: "Can you create short real estate videos for Instagram?",
    answer:
      "Yes. Real estate content can be created in vertical and short-form formats for Instagram, YouTube Shorts, social advertising and other digital platforms.",
  },
  {
    question: "How do I start a real estate video project?",
    answer:
      "Share your project details, location, property type, target audience and marketing objective with HipHipVideos. We can then discuss the creative concept and production requirements.",
  },
];

export default function RealEstateVideoProductionPage() {
  return (
    <main className="bg-black text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Real Estate Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Real Estate Videos That{" "}
              <span className="text-[#CCFF00]">
                Sell the Property Before the Visit
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates real estate promotional videos, property
              walkthroughs, project films, property advertisements and brand
              videos that help buyers understand the property, location,
              lifestyle and opportunity.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Real estate video production in Hyderabad and across India.
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

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section
        aria-labelledby="real-estate-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Property Storytelling
            </p>

            <h2
              id="real-estate-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Show Buyers What Makes Your Property Worth Seeing
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Real estate is highly visual. Buyers want to understand the
              property, location, design, amenities and lifestyle before
              deciding whether to schedule a visit.
            </p>

            <p>
              Professional video can bring these details together into a clear
              visual experience, helping your audience understand the project
              beyond static images and text.
            </p>

            <p>
              HipHipVideos creates real estate videos around the property's
              strongest selling points, combining professional filming,
              storytelling, editing, motion graphics and location visuals.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        aria-labelledby="real-estate-services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Real Estate Video Services
            </p>

            <h2
              id="real-estate-services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Video Production for Property Marketing
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              From property walkthroughs to complete project films, we create
              video content around your project's marketing goals.
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

      {/* =========================================================
          PROPERTY TYPES
      ========================================================= */}
      <section
        aria-labelledby="property-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Property Categories
          </p>

          <h2
            id="property-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Real Estate Video Content for Different Property Types
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Our production approach can be adapted to residential, commercial,
            land and other property marketing requirements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {propertyTypes.map((item) => (
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

      {/* =========================================================
          MARKETING USES
      ========================================================= */}
      <section
        aria-labelledby="real-estate-marketing-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Marketing Formats
          </p>

          <h2
            id="real-estate-marketing-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Create Property Videos for Every Marketing Channel
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            One property production can be adapted into multiple assets for
            digital marketing, sales and property promotion.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {videoUses.map((item) => (
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

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section
        aria-labelledby="real-estate-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Production Process
            </p>

            <h2
              id="real-estate-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Property Brief to Final Marketing Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We manage the production process from planning and location
              filming through editing and final digital delivery.
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

      {/* =========================================================
          WHY HIPHIPVIDEOS
      ========================================================= */}
      <section
        aria-labelledby="why-real-estate-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-real-estate-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Real Estate Storytelling Designed for Property Marketing
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Property-Focused Storytelling",
                text: "We identify the features, location advantages and experiences that matter most to your target buyer.",
              },
              {
                title: "Professional Cinematography",
                text: "Interiors, exteriors, architecture, amenities and landscapes are captured with professional visual production.",
              },
              {
                title: "Aerial Possibilities",
                text: "Where appropriate and permitted, aerial footage can provide valuable context around the project and its surroundings.",
              },
              {
                title: "Marketing Ready",
                text: "Videos can be delivered for websites, social media, advertising, presentations and property campaigns.",
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

      {/* =========================================================
          HYDERABAD
      ========================================================= */}
      <section
        aria-labelledby="real-estate-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="real-estate-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Real Estate Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a real estate video production company based in
            Hyderabad, Telangana. We create property walkthroughs, project
            films, promotional videos, real estate advertisements and brand
            films for developers, builders and property brands.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        aria-labelledby="real-estate-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Real Estate Video FAQ
            </p>

            <h2
              id="real-estate-faq-heading"
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

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Start Your Property Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Showcase Your Property?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your project, location and marketing objective. We can
            help you plan a professional real estate video that presents the
            property clearly and effectively.
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
