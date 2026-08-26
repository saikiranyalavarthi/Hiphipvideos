import Link from "next/link";

export const metadata = {
  title: "Real Estate Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates real estate videos, property walkthroughs, project films, luxury property videos, drone videos and real estate marketing content in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/real-estate",
  },
  openGraph: {
    title: "Real Estate Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional real estate video production for property developers, builders, brokers and real estate brands.",
    url: "/industries/real-estate",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Real Estate Video Production",
    description:
      "Professional property and project videos that showcase developments, locations, amenities and the overall property experience.",
    href: "/services/real-estate-video-production",
  },
  {
    number: "02",
    title: "Property Walkthrough Videos",
    description:
      "Take potential buyers through apartments, villas, commercial spaces and properties with engaging visual walkthroughs.",
    href: "/services/real-estate-video-production",
  },
  {
    number: "03",
    title: "Real Estate Commercials",
    description:
      "Create advertising films designed to communicate property benefits and attract attention across digital marketing channels.",
    href: "/services/commercial-video-production",
  },
  {
    number: "04",
    title: "Project Launch Videos",
    description:
      "Introduce new residential and commercial projects with cinematic launch videos that communicate the project's vision.",
    href: "/services/commercial-video-production",
  },
  {
    number: "05",
    title: "3D Property & Project Animation",
    description:
      "Visualize developments, architectural concepts, layouts and project experiences through 3D animation and CGI.",
    href: "/services/3d-product-animation",
  },
  {
    number: "06",
    title: "Motion Graphics",
    description:
      "Use animated maps, project information, pricing highlights, amenities and branded graphics to strengthen property videos.",
    href: "/services/motion-graphics",
  },
];

const propertyTypes = [
  "Residential Projects",
  "Apartments",
  "Luxury Villas",
  "Open Plots",
  "Gated Communities",
  "Commercial Properties",
  "Office Spaces",
  "Retail Projects",
  "Farm Lands",
  "Industrial Properties",
  "Real Estate Developers",
  "Property Brands",
];

const contentTypes = [
  "Property Walkthrough Videos",
  "Real Estate Commercials",
  "Project Launch Videos",
  "Apartment Videos",
  "Villa Videos",
  "Luxury Property Films",
  "Real Estate Brand Films",
  "Property Advertisements",
  "Construction Progress Videos",
  "Drone Property Videos",
  "3D Project Videos",
  "Social Media Property Videos",
];

const useCases = [
  "Property Websites",
  "Project Landing Pages",
  "Instagram",
  "YouTube",
  "Facebook Ads",
  "Google Ads",
  "Property Portals",
  "Project Launches",
  "Sales Presentations",
  "Investor Presentations",
  "Digital Campaigns",
  "Lead Generation",
];

const process = [
  {
    number: "01",
    title: "Understand the Project",
    description:
      "We understand the property, location, target buyer, project positioning, amenities and marketing objective.",
  },
  {
    number: "02",
    title: "Creative Planning",
    description:
      "We develop the visual concept, storyline, shot plan and production approach around the property's strongest selling points.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Locations, schedules, talent, equipment, camera movements and other production requirements are planned.",
  },
  {
    number: "04",
    title: "Property Production",
    description:
      "We capture architecture, interiors, exteriors, amenities, surroundings and lifestyle elements according to the creative plan.",
  },
  {
    number: "05",
    title: "Editing & Visuals",
    description:
      "Editing, color grading, motion graphics, music, sound design and other visual treatments bring the property story together.",
  },
  {
    number: "06",
    title: "Marketing Delivery",
    description:
      "Final videos can be prepared for websites, social media, advertisements, presentations and property marketing campaigns.",
  },
];

const faqs = [
  {
    question: "What is real estate video production?",
    answer:
      "Real estate video production creates professional visual content for properties and real estate projects. This can include property walkthroughs, project films, advertisements, launch videos, brand films and social media content.",
  },
  {
    question:
      "Does HipHipVideos provide real estate video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates real estate videos for developers, builders, property brands and businesses across Hyderabad and India.",
  },
  {
    question: "Can you create apartment walkthrough videos?",
    answer:
      "Yes. Apartment walkthrough videos can showcase interiors, layouts, rooms, amenities, common areas and other important aspects of a residential project.",
  },
  {
    question: "Can you create videos for villas and luxury properties?",
    answer:
      "Yes. Luxury property videos can focus on architecture, interiors, landscaping, amenities, lifestyle and the overall experience of the property.",
  },
  {
    question: "Can you create videos for open plot projects?",
    answer:
      "Yes. Plot and land projects can use video to showcase the location, access roads, surrounding area, development, amenities and project vision.",
  },
  {
    question: "Can you create real estate advertisements?",
    answer:
      "Yes. Real estate advertising videos can be created for digital campaigns, social media, property websites and other marketing channels.",
  },
  {
    question: "Can you create 3D videos for real estate projects?",
    answer:
      "Yes. 3D and CGI animation can help visualize architectural concepts, proposed developments, layouts and project environments.",
  },
  {
    question: "Can one property video be used on multiple platforms?",
    answer:
      "Yes. A property video can be adapted into suitable formats and aspect ratios for websites, YouTube, Instagram, advertising and other marketing channels.",
  },
];

export default function RealEstatePage() {
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
              Real Estate
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Real Estate Video Production for{" "}
              <span className="text-[#CCFF00]">Properties That Stand Out</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates property walkthroughs, real estate
              commercials, project launch videos, luxury property films, 3D
              project animations and social media content for real estate
              brands.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Real estate video production company in Hyderabad serving
              developers, builders and property brands across India.
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
              Property Marketing
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Show Buyers More Than a Property Listing
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Real estate buyers want to understand a property before they
              decide to visit or enquire. Professional video can bring the
              location, architecture, interiors, amenities and lifestyle
              experience together in one visual story.
            </p>

            <p>
              HipHipVideos creates real estate content for developers, builders,
              property marketers and real estate brands.
            </p>

            <p>
              From a single property walkthrough to a complete project launch
              campaign, we build video content around your property's
              positioning and target audience.
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
              Real Estate Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Create property-focused visual content for residential, commercial
              and real estate development projects.
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

      {/* PROPERTY TYPES */}
      <section
        aria-labelledby="property-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Property Types
          </p>

          <h2
            id="property-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Different Real Estate Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create professional visual content for residential, commercial and
            land development projects.
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
            Real Estate Video Content for Property Marketing
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            Marketing Applications
          </p>

          <h2
            id="use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Real Estate Videos for Sales & Lead Generation
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Use property videos across your website, advertising, social media,
            presentations and project marketing campaigns.
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
              From Property Planning to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We plan each production around the property, target audience,
              project positioning and marketing objective.
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
              Property Videos Designed Around Your Project
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Property Storytelling",
                text: "We identify the features, location and experiences that make your property worth exploring.",
              },
              {
                title: "Cinematic Presentation",
                text: "Professional composition, camera movement, editing and visual treatment help present the property clearly.",
              },
              {
                title: "Marketing Focused",
                text: "Videos can be structured around awareness, project launches, property enquiries and sales communication.",
              },
              {
                title: "Multiple Formats",
                text: "Create long-form project films and shorter versions for social media, advertisements and digital campaigns.",
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
            Real Estate Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create property walkthroughs, real estate
            advertisements, project films and digital property content for
            developers, builders and real estate businesses across India.
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
              Real Estate Video FAQ
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
            Start Your Real Estate Video Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Showcase Your Property?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your property, project or campaign and let us create
            video content designed to present it at its best.
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
