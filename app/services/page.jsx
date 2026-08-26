import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.hiphipvideos.com"; // ← replace with your real production domain

// ---------------------------------------------------------------------------
// SEO METADATA
// No `keywords` meta tag — Google ignores it for ranking and it reads as
// keyword-stuffing under Google's spam policies. Relevance comes from the
// H1, body copy, internal links, and structured data below.
// ---------------------------------------------------------------------------
export const metadata = {
  title: "Video Production Services in Hyderabad | HipHipVideos",
  description:
    "Explore professional video production services from HipHipVideos, including commercial, corporate, product, explainer, pitch, fashion, franchise, real estate, D2C and SaaS videos.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Video Production Services in Hyderabad | HipHipVideos",
    description:
      "Commercial, corporate, product, explainer, pitch, fashion, franchise, real estate, D2C and SaaS video production for brands and businesses in Hyderabad and beyond.",
    url: `${SITE_URL}/services`,
    siteName: "HipHipVideos",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/og/services-og.jpg`,
        width: 1200,
        height: 630,
        alt: "HipHipVideos — Video Production Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production Services in Hyderabad | HipHipVideos",
    description:
      "Commercial, corporate, product, explainer, pitch, fashion, franchise, real estate, D2C and SaaS video production services.",
    images: [`${SITE_URL}/og/services-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------------------------------------
// SERVICE DATA — each entry now carries a longer description and a "who
// it's for" line so the grid, the detail rail below it, and the JSON-LD
// ItemList all draw from one source of truth.
// ---------------------------------------------------------------------------
const services = [
  {
    title: "Commercial Video Production",
    description:
      "High-impact commercial videos and advertisements designed to communicate your brand, product and campaign message across TV, digital and social placements.",
    who: "Brands running paid campaigns, product launches or seasonal promotions that need broadcast-ready video.",
    href: "/services/commercial-video-production",
  },
  {
    title: "Corporate Video Production",
    description:
      "Professional corporate films, company profile videos and brand stories that communicate your business, culture and values clearly to clients, partners and investors.",
    who: "Established businesses that need a polished company profile, culture film or leadership message.",
    href: "/services/corporate-video-production",
  },
  {
    title: "Product Video Production",
    description:
      "Creative product videos that demonstrate features, benefits and real customer experiences through strong visual storytelling and clear demonstrations.",
    who: "Physical and digital product companies preparing for launch, retail listings or performance marketing.",
    href: "/services/product-video-production",
  },
  {
    title: "Explainer Videos",
    description:
      "Clear, concise explainer videos that simplify products, services, technology, SaaS platforms and complex ideas into a story a first-time viewer can follow.",
    who: "Startups and SaaS companies whose product or process needs a simple, fast introduction.",
    href: "/services/explainer-videos",
  },
  {
    title: "Pitch Videos",
    description:
      "Professional pitch videos designed to help startups and businesses communicate their idea, product and opportunity to investors, partners and stakeholders.",
    who: "Founders raising a round, entering an accelerator or pitching a new partnership.",
    href: "/services/pitch-videos",
  },
  {
    title: "Franchise Videos",
    description:
      "Franchise marketing and promotional videos created to communicate business opportunities, unit economics and brand value to prospective franchisees.",
    who: "Franchisors recruiting new franchise partners across cities or regions.",
    href: "/services/franchise-videos",
  },
  {
    title: "Fashion Video Production",
    description:
      "Fashion films, lookbooks, campaign videos and branded visual content created for fashion brands, designers, stylists and lifestyle businesses.",
    who: "Fashion labels and designers launching a collection, campaign or seasonal lookbook.",
    href: "/services/fashion-video-production",
  },
  {
    title: "Real Estate Video Production",
    description:
      "Property films, project walkthroughs and real estate marketing content designed to showcase developments, amenities and neighbourhoods to prospective buyers.",
    who: "Developers and real estate brokers marketing residential or commercial projects.",
    href: "/services/real-estate-video-production",
  },
  {
    title: "D2C Video Production",
    description:
      "Product-focused video content for D2C brands and ecommerce businesses, built for launches, performance campaigns and digital advertising placements.",
    who: "D2C and ecommerce brands running performance marketing on Meta, Google or Amazon.",
    href: "/services/d2c-video-production",
  },
  {
    title: "SaaS Video Production",
    description:
      "SaaS product videos, demos, explainers and launch content that make software easier for prospects, customers and internal teams to understand and adopt.",
    who: "SaaS companies onboarding new users or supporting a sales and marketing funnel.",
    href: "/services/saas-video-production",
  },
];

const process = [
  [
    "01",
    "Creative Strategy",
    "Every project starts with a conversation, not a camera. We align on your audience, the message you need to land, the platforms the video will live on and the outcome you're measuring against. This stage sets the creative direction so every later decision, from location to music, serves the same goal.",
  ],
  [
    "02",
    "Pre-Production",
    "Scripting, storyboarding, casting, location scouting and shot planning happen here. A clear pre-production plan is what lets a shoot day run on schedule instead of improvising on set, and it's where budget and timeline get locked in.",
  ],
  [
    "03",
    "Production",
    "Filming with the crew, camera and lighting setup the concept calls for, whether that's a single-location interview or a multi-day shoot across sites. Direction stays focused on getting footage that will actually cut together in the edit.",
  ],
  [
    "04",
    "Post-Production",
    "Editing, colour grading, motion graphics, sound design and mixing turn raw footage into a finished film. We deliver in the aspect ratios and formats each platform needs, from a 16:9 hero video to vertical cuts for Reels and Shorts.",
  ],
];

const industries = [
  {
    title: "Startups & SaaS",
    blurb:
      "Product demos, explainers and pitch videos that turn a complex product into a story a first-time viewer understands in under two minutes.",
  },
  {
    title: "D2C & Ecommerce",
    blurb:
      "Scroll-stopping product and campaign videos built for Meta, Google and Amazon performance placements, not just brand awareness.",
  },
  {
    title: "Real Estate & Development",
    blurb:
      "Project walkthroughs and property films that help buyers picture themselves in the space before they visit the site.",
  },
  {
    title: "Fashion & Lifestyle",
    blurb:
      "Campaign films and lookbooks with the visual polish fashion audiences expect from a brand they're about to follow or buy from.",
  },
  {
    title: "Franchise Businesses",
    blurb:
      "Recruitment-focused videos that make the business opportunity and unit economics clear to a prospective franchise partner.",
  },
  {
    title: "Corporate & Enterprise",
    blurb:
      "Company profiles, leadership messages and culture films for internal communication, investor updates and B2B sales enablement.",
  },
];

const deliverables = [
  "Full-length hero video for your website, YouTube channel or investor deck",
  "Vertical and square cutdowns optimised for Instagram, YouTube Shorts and LinkedIn",
  "Raw and graded footage where agreed in scope",
  "Motion graphics, on-screen text and subtitle files for accessibility and silent autoplay",
  "Licensed music and sound design mixed for both headphone and mobile-speaker playback",
  "Source project files or a shareable archive, depending on your production package",
];

const faqs = [
  {
    question:
      "What video production services does HipHipVideos offer in Hyderabad?",
    answer:
      "HipHipVideos offers commercial, corporate, product, explainer, pitch, franchise, fashion, real estate, D2C and SaaS video production, covering everything from concept and scripting to filming, editing and final delivery.",
  },
  {
    question: "Does HipHipVideos work with businesses outside Hyderabad?",
    answer:
      "Yes. While HipHipVideos is based in Hyderabad, Telangana, the team produces video content for brands and businesses across India and takes on remote and travel projects depending on scope.",
  },
  {
    question: "How long does a typical video production project take?",
    answer:
      "Timelines vary by service and scope, but most projects move through creative strategy, pre-production, filming and post-production within a few weeks. Exact timelines are confirmed during the discovery call.",
  },
  {
    question: "How do I get a quote for a video project?",
    answer:
      "Start with a free discovery call. Share your goals, timeline and budget, and HipHipVideos will recommend the right service and provide a tailored quote.",
  },
  {
    question: "Can HipHipVideos handle both filming and editing in-house?",
    answer:
      "Yes. Production and post-production, including filming, editing, motion graphics and sound design, are handled end-to-end so you work with one team from idea to final video.",
  },
  {
    question: "What formats and aspect ratios are included in delivery?",
    answer:
      "Standard delivery includes the primary hero video plus platform-specific cutdowns for vertical and square placements, so you get assets ready for your website, YouTube, Instagram and LinkedIn from a single shoot.",
  },
  {
    question: "Do you write the script, or do we provide one?",
    answer:
      "Either works. HipHipVideos can develop the script and storyboard as part of the creative strategy stage, or refine and shoot from a script your team has already prepared.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD STRUCTURED DATA
// - ItemList of Service entries for the service hub
// - BreadcrumbList for hub position in the site hierarchy
// - FAQPage so eligible FAQs can surface as rich results
// Structured data helps Google understand the page; it does not guarantee
// rankings or rich-result display.
// ---------------------------------------------------------------------------
const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Video Production Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `${SITE_URL}${service.href}`,
      provider: {
        "@type": "Organization",
        name: "HipHipVideos",
        url: SITE_URL,
        areaServed: {
          "@type": "City",
          name: "Hyderabad",
        },
      },
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      {/* JSON-LD — rendered once, kept out of the visual tree */}
      <Script
        id="services-list-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListJsonLd) }}
      />
      <Script
        id="services-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="services-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Visible breadcrumb — mirrors the BreadcrumbList schema above */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1440px] px-6 pt-8 lg:px-12"
      >
        <ol className="flex items-center gap-2 text-xs text-white/40">
          <li>
            <Link href="/" className="hover:text-[#CCFF00]">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white/70" aria-current="page">
            Services
          </li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
            HipHipVideos Services
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Video Production Services for{" "}
            <span className="text-[#CCFF00]">Brands & Businesses</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            HipHipVideos is a video production company in Hyderabad providing
            end-to-end services for brands, startups and businesses. From
            creative concept and pre-production to filming, editing and final
            delivery, we create visual content built around your audience and
            business objectives.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-[#CCFF00] px-7 py-3 font-bold text-black transition hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.25)]"
            >
              Get a Free Discovery Call
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO / WHY VIDEO — added long-form context paragraph for depth */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            Video has become the primary way businesses explain what they do,
            build trust with an audience and convert attention into action.
            Whether you're launching a product, raising a round, opening a
            franchise or marketing a property, the right video format changes
            how quickly a viewer understands your offer and how likely they are
            to act on it. HipHipVideos works across ten core service lines so
            you're not forcing your project into a one-size-fits-all package —
            each service below is scoped, shot and edited for the specific
            outcome it's meant to drive.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-labelledby="services-list-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Services
            </p>

            <h2
              id="services-list-heading"
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Video Production for Different Business Needs
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              Choose the video production service that matches your campaign,
              product, audience or business objective.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                aria-label={`${service.title} — explore this service`}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.045]"
              >
                <span className="text-sm font-semibold text-[#CCFF00]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-xl font-bold transition-colors group-hover:text-[#CCFF00]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {service.description}
                </p>

                <p className="mt-3 text-xs leading-5 text-white/35">
                  <span className="font-semibold text-white/50">
                    Best for:{" "}
                  </span>
                  {service.who}
                </p>

                <div className="mt-7 text-sm font-semibold text-white/50 transition-colors group-hover:text-[#CCFF00]">
                  Explore Service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — expanded with a paragraph per stage */}
      <section
        aria-labelledby="process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              End-to-End Production
            </p>

            <h2
              id="process-heading"
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Idea to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              Our production workflow covers creative strategy, scripting,
              pre-production, filming, editing, motion graphics, sound design
              and final delivery.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, blurb]) => (
              <li
                key={number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="text-sm font-semibold text-[#CCFF00]">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{blurb}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* INDUSTRIES / USE CASES */}
      <section
        aria-labelledby="industries-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Industries We Work With
            </p>

            <h2
              id="industries-heading"
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Built for Your Sector, Not a Generic Template
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              Every industry has different expectations for pacing, visuals and
              tone. Here's how our service lines map to the sectors we work with
              most.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <h3 className="text-lg font-bold">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {industry.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET / DELIVERABLES */}
      <section
        aria-labelledby="deliverables-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            What You Get
          </p>

          <h2
            id="deliverables-heading"
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Deliverables From Every Project
          </h2>

          <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
            Exact deliverables depend on the service and scope agreed during
            your discovery call, but most projects include:
          </p>

          <ul className="mt-8 space-y-4">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-white/60 sm:text-base"
              >
                <span aria-hidden="true" className="mt-0.5 text-[#CCFF00]">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HYDERABAD — LOCAL RELEVANCE, expanded */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad Video Production
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Video Production Company in Hyderabad
          </h2>

          <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
            Based in Hyderabad, Telangana, HipHipVideos works with brands,
            startups and businesses on commercial, corporate, product,
            explainer, advertising and branded video projects. Being local means
            faster turnaround on scouting and shoot days across Hyderabad and
            Secunderabad, and a crew that already knows the permissions,
            locations and vendors a shoot needs — while we also travel for
            projects that call for it, across Telangana and beyond.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-flex rounded-lg bg-[#CCFF00] px-7 py-3 font-bold text-black"
          >
            Start Your Video Project
          </Link>
        </div>
      </section>

      {/* FAQ — mirrors the FAQPage JSON-LD above */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            FAQs
          </p>

          <h2
            id="faq-heading"
            className="text-center text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Common Questions
          </h2>

          <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.025]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 sm:p-7">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-[#CCFF00] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-white/50">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Have a Video Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/50">
            Tell us about your idea, campaign or product and let's explore how
            HipHipVideos can turn it into a strong visual story.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-flex rounded-lg bg-[#CCFF00] px-8 py-3 font-bold text-black transition hover:-translate-y-1"
          >
            Get a Free Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
