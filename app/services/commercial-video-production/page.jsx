import Link from "next/link";
import Script from "next/script";

const SITE_URL = "https://www.hiphipvideos.com"; // ← replace with your real production domain
const PAGE_PATH = "/services/commercial-video-production";

// ---------------------------------------------------------------------------
// SEO METADATA
// No `keywords` meta tag. Relevance comes from the H1, body copy, internal
// links and structured data below.
// ---------------------------------------------------------------------------
export const metadata = {
  title: "Commercial Video Production in Hyderabad | HipHipVideos",
  description:
    "Professional commercial video production in Hyderabad. HipHipVideos creates TV, digital and social commercials that communicate your brand and drive campaign results.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Commercial Video Production in Hyderabad | HipHipVideos",
    description:
      "High-impact commercial videos and advertisements for TV, digital and social — produced end-to-end by HipHipVideos in Hyderabad.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: "HipHipVideos",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/og/commercial-video-production-og.jpg`,
        width: 1200,
        height: 630,
        alt: "HipHipVideos — Commercial Video Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Video Production in Hyderabad | HipHipVideos",
    description:
      "High-impact commercial videos and advertisements for TV, digital and social platforms.",
    images: [`${SITE_URL}/og/commercial-video-production-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ---------------------------------------------------------------------------
// CONTENT DATA
// ---------------------------------------------------------------------------
const whoItsFor = [
  {
    title: "Brands Launching a Campaign",
    blurb:
      "A new product, seasonal push or repositioning that needs a commercial built around one clear message and a media plan behind it.",
  },
  {
    title: "Performance Marketing Teams",
    blurb:
      "Teams running paid media on YouTube, Meta and connected TV who need multiple commercial cuts to test against each other.",
  },
  {
    title: "Growing & Established Businesses",
    blurb:
      "Companies ready to move from ad-hoc social content to a proper commercial with the direction, casting and production value that builds brand trust.",
  },
];

const process = [
  [
    "01",
    "Brief & Creative Strategy",
    "We start with your business goal, not a shot list. What is the commercial meant to do — build awareness, drive a launch, support a media buy? We align on audience, core message, tone and the platforms it needs to run on before any concept work begins.",
  ],
  [
    "02",
    "Concept, Script & Storyboard",
    "From the strategy, we develop a creative concept, write the script and build a storyboard so you can see and approve the commercial before a single frame is shot. This is also where casting, locations and the shoot budget get scoped.",
  ],
  [
    "03",
    "Production Day",
    "A directed shoot with the crew, camera and lighting setup the concept calls for — from a single-location studio commercial to a multi-location shoot with talent and extras. Direction stays focused on getting footage that will cut together into a tight, campaign-ready film.",
  ],
  [
    "04",
    "Edit, Grade & Sound",
    "Editing, colour grading, motion graphics and sound design and mix turn the raw footage into a finished commercial. We deliver cutdowns sized for TV, YouTube pre-roll, and vertical/square placements for Instagram and Meta from the same shoot.",
  ],
  [
    "05",
    "Delivery & Campaign Support",
    "Final files are delivered in every format your media plan needs, with captions and platform-safe versions included. We stay available for revisions and additional cutdowns as your campaign runs.",
  ],
];

const deliverables = [
  "Primary commercial cut (15s, 30s or 60s, as scoped)",
  "Platform cutdowns — vertical and square versions for Instagram, YouTube Shorts and Meta placements",
  "Colour-graded, sound-mixed final files ready for broadcast and digital delivery",
  "On-screen text, captions and subtitle files for silent autoplay and accessibility",
  "Licensed music and custom sound design",
  "Raw or graded footage where included in your production package",
];

const industries = [
  {
    title: "FMCG & Retail",
    blurb:
      "Product-led commercials built for shelf impact and repeat viewing across TV and digital.",
  },
  {
    title: "D2C & Ecommerce",
    blurb:
      "Direct-response commercials cut for performance placements on Meta and YouTube.",
  },
  {
    title: "Real Estate & Developers",
    blurb:
      "Project launch commercials that pair lifestyle visuals with a clear call to action.",
  },
  {
    title: "Hospitality & F&B",
    blurb:
      "Brand commercials that sell an experience, not just a menu or a room.",
  },
  {
    title: "Finance & Insurance",
    blurb:
      "Trust-building commercials that explain an offer clearly within a tight runtime.",
  },
  {
    title: "Franchise & Multi-Location Brands",
    blurb:
      "Commercials built to run across multiple markets with consistent brand messaging.",
  },
];

const faqs = [
  {
    question: "What does commercial video production include?",
    answer:
      "It covers the full process from creative strategy and scripting through filming, editing, colour grading, sound design and final delivery in the formats your campaign needs, whether that's TV, YouTube, or social platforms.",
  },
  {
    question: "How long does a commercial video production project take?",
    answer:
      "Most commercial projects move from brief to final delivery within two to four weeks, depending on scope, casting and locations. Exact timelines are confirmed during the discovery call.",
  },
  {
    question:
      "Can you produce multiple cuts for different platforms from one shoot?",
    answer:
      "Yes. A single commercial shoot typically covers your primary cut plus vertical and square versions sized for Instagram, YouTube Shorts and Meta placements, so your media plan is covered without re-shooting.",
  },
  {
    question: "Do you handle casting and locations for commercial shoots?",
    answer:
      "Yes. Casting, location scouting and permissions are part of pre-production, and HipHipVideos coordinates these in and around Hyderabad, or wherever the shoot needs to take place.",
  },
  {
    question:
      "What's the difference between a commercial and a corporate video?",
    answer:
      "A commercial is built to sell a product, service or campaign message to an external audience, usually with paid media behind it. A corporate video typically communicates company identity, culture or updates to clients, partners or employees. See our corporate video production service for that format.",
  },
  {
    question: "How much does a commercial video cost?",
    answer:
      "Cost depends on scope — runtime, number of cutdowns, casting, locations and shoot days all affect the budget. Share your goals on a free discovery call and HipHipVideos will provide a tailored quote.",
  },
];

// ---------------------------------------------------------------------------
// JSON-LD STRUCTURED DATA
// ---------------------------------------------------------------------------
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Video Production",
  description:
    "High-impact commercial videos and advertisements designed to communicate brand, product and campaign messages across TV, digital and social platforms.",
  url: `${SITE_URL}${PAGE_PATH}`,
  serviceType: "Commercial Video Production",
  provider: {
    "@type": "Organization",
    name: "HipHipVideos",
    url: SITE_URL,
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
  },
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Video Production",
      item: `${SITE_URL}${PAGE_PATH}`,
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

export default function CommercialVideoProductionPage() {
  return (
    <main className="bg-black text-white">
      {/* JSON-LD */}
      <Script
        id="commercial-service-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Script
        id="commercial-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Script
        id="commercial-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Visible breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1440px] px-6 pt-8 lg:px-12"
      >
        <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
          <li>
            <Link href="/" className="hover:text-[#CCFF00]">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/services" className="hover:text-[#CCFF00]">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white/70" aria-current="page">
            Commercial Video Production
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
            Commercial Video Production
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Commercials That{" "}
            <span className="text-[#CCFF00]">Sell the Message</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            HipHipVideos produces commercial videos and advertisements for
            brands in Hyderabad and across India — built for TV, YouTube, Meta
            and every screen your campaign runs on, from concept to final
            delivery.
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

      {/* SERVICE EXPLANATION */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <p className="text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            A commercial has one job: land a message with the right audience
            fast enough to hold attention and clear enough to drive action. That
            means every choice, from the opening shot to the final line of copy,
            has to earn its place within a short runtime. HipHipVideos builds
            commercials around a single creative idea rather than packing in
            everything a brand could say — the result is a film that performs
            whether it's running as a 30-second TV spot, a 6-second YouTube
            bumper, or a vertical cut competing for attention in a social feed.
          </p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section
        aria-labelledby="who-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Who It's For
            </p>
            <h2
              id="who-heading"
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Built for Brands With a Message to Land
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoItsFor.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.blurb}
                </p>
              </div>
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Process
            </p>
            <h2
              id="process-heading"
              className="text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Brief to Broadcast-Ready
            </h2>
            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              A commercial shoot has less room for error than most video formats
              — here's how we keep it on strategy from the first call to final
              delivery.
            </p>
          </div>

          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* DELIVERABLES */}
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
            Deliverables From a Commercial Shoot
          </h2>
          <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
            Exact deliverables depend on scope agreed during your discovery
            call, but most commercial projects include:
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

      {/* INDUSTRIES */}
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
              Commercials Across Categories
            </h2>
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

      {/* HYDERABAD — LOCAL RELEVANCE */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad Commercial Production
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Commercial Video Production in Hyderabad
          </h2>
          <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
            HipHipVideos is based in Hyderabad, Telangana, and produces
            commercial video for brands shooting locally across Hyderabad and
            Secunderabad, as well as for campaigns that need production support
            elsewhere in India. Being local means faster location scouting,
            established vendor and casting relationships, and a crew that can
            turn around a shoot day without the overhead of an out-of-town
            production.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-flex rounded-lg bg-[#CCFF00] px-7 py-3 font-bold text-black"
          >
            Start Your Commercial
          </Link>
        </div>
      </section>

      {/* RELATED SERVICES — internal linking */}
      <section
        aria-labelledby="related-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <h2 id="related-heading" className="text-2xl font-bold sm:text-3xl">
            Related Services
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/services/corporate-video-production"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#CCFF00]/30"
            >
              <h3 className="font-bold group-hover:text-[#CCFF00]">
                Corporate Video Production
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Company profile videos and brand stories for internal and B2B
                audiences.
              </p>
            </Link>

            <Link
              href="/services/product-video-production"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#CCFF00]/30"
            >
              <h3 className="font-bold group-hover:text-[#CCFF00]">
                Product Video Production
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Feature-focused videos that demonstrate a product in use.
              </p>
            </Link>

            <Link
              href="/services/d2c-video-production"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-[#CCFF00]/30"
            >
              <h3 className="font-bold group-hover:text-[#CCFF00]">
                D2C Video Production
              </h3>
              <p className="mt-2 text-sm text-white/50">
                Performance-focused video content for ecommerce and D2C ads.
              </p>
            </Link>
          </div>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center text-sm font-semibold text-white/60 hover:text-[#CCFF00]"
          >
            ← Back to All Services
          </Link>
        </div>
      </section>

      {/* FAQ */}
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
            Ready to Brief Your Commercial?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/50">
            Tell us about your campaign, timeline and budget, and let's build a
            commercial that lands the message.
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
