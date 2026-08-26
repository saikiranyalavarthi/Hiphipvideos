import Link from "next/link";

export const metadata = {
  title: "About HipHipVideos | Video Production Company in Hyderabad",
  description:
    "Learn about HipHipVideos, a creative video production company in Hyderabad creating commercial, corporate, product, explainer, advertising and branded videos for businesses across India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About HipHipVideos | Video Production Company in Hyderabad",
    description:
      "Meet HipHipVideos, a Hyderabad-based video production company creating strategic visual content for brands, startups and businesses.",
    url: "/about",
    type: "website",
  },
};

const capabilities = [
  {
    number: "01",
    title: "Creative Strategy",
    description:
      "We develop concepts and visual directions around your brand, audience, message and business objective.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "Scripts, storyboards, locations, casting, production planning and shot lists are prepared before filming.",
  },
  {
    number: "03",
    title: "Video Production",
    description:
      "Professional direction, cinematography, lighting and production bring your creative concept to life.",
  },
  {
    number: "04",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, motion graphics, animation and visual effects complete the final video.",
  },
];

const services = [
  {
    title: "Commercial Video Production",
    description:
      "High-impact commercials and advertising videos designed to capture attention and communicate your brand.",
    href: "/services/commercial-video-production",
  },
  {
    title: "Corporate Video Production",
    description:
      "Corporate films, company stories and professional business videos that communicate your organization clearly.",
    href: "/services/corporate-video-production",
  },
  {
    title: "Product Video Production",
    description:
      "Product videos that demonstrate features, benefits, functionality and customer experience.",
    href: "/services/product-video-production",
  },
  {
    title: "Explainer Videos",
    description:
      "Clear visual stories that simplify products, services, technology and complex ideas.",
    href: "/services/explainer-videos",
  },
  {
    title: "3D Product Animation",
    description:
      "3D animation for product demonstrations, technology, components and visual storytelling.",
    href: "/services/3d-product-animation",
  },
  {
    title: "Motion Graphics",
    description:
      "Motion graphics that make information, branding, data and product features more engaging.",
    href: "/services/motion-graphics",
  },
];

const industries = [
  "Apps & SaaS",
  "Education & EdTech",
  "Healthcare",
  "Automotive",
  "Consumer Products",
  "D2C Brands",
  "Real Estate",
  "Fashion",
  "Corporate",
  "Electronics & Gadgets",
  "Industrial & Manufacturing",
];

const values = [
  {
    title: "Ideas First",
    description:
      "Every strong production starts with a clear idea. We focus on the message before deciding how to shoot it.",
  },
  {
    title: "Audience Focused",
    description:
      "We create visual content around the people you want to reach, not just around the camera or production.",
  },
  {
    title: "Business Mindset",
    description:
      "Our goal is to create videos that support communication, marketing, branding and business objectives.",
  },
  {
    title: "Attention to Detail",
    description:
      "From the first frame to the final sound mix, we care about the details that make a video feel professional.",
  },
];

const faqs = [
  {
    question: "Who is HipHipVideos?",
    answer:
      "HipHipVideos is a creative video production company based in Hyderabad, Telangana. We create commercial, corporate, product, explainer, advertising and branded video content for businesses and brands.",
  },
  {
    question: "Where is HipHipVideos based?",
    answer:
      "HipHipVideos is based in Hyderabad, Telangana, India, and works with businesses and brands across India and beyond.",
  },
  {
    question: "What video production services does HipHipVideos provide?",
    answer:
      "Our services include commercial video production, corporate video production, product video production, explainer videos, 3D product animation and motion graphics.",
  },
  {
    question: "Does HipHipVideos work with startups?",
    answer:
      "Yes. We work with startups, established businesses, brands and organizations that need professional video content for marketing, communication, product launches and brand building.",
  },
  {
    question: "Does HipHipVideos work outside Hyderabad?",
    answer:
      "Yes. Although we are based in Hyderabad, we work with clients across India and can support video production projects in different locations depending on the project requirements.",
  },
  {
    question: "Can HipHipVideos handle complete video production?",
    answer:
      "Yes. Our production approach can cover creative concept development, scripting, pre-production, filming, editing, color grading, sound design, motion graphics, animation and final delivery.",
  },
  {
    question: "How can I start a project with HipHipVideos?",
    answer:
      "You can contact HipHipVideos through the project inquiry page and share your video requirement, timeline, goals and project details. Our team can then discuss the next steps with you.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HipHipVideos",
  url: "https://hiphipvideos.com",
  logo: "https://hiphipvideos.com/logo.png",
  description:
    "Creative video production company in Hyderabad creating commercial, corporate, product, explainer and branded videos.",
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://hiphipvideos.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://hiphipvideos.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* ORGANIZATION SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              About HipHipVideos
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              A Creative Video Production Company{" "}
              <span className="text-[#CCFF00]">Built Around Your Story</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos is a video production company in Hyderabad creating
              commercial, corporate, product, explainer, advertising and branded
              video content for ambitious brands, startups and businesses.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              From creative concept and pre-production to filming, editing,
              motion graphics and final delivery, we help turn ideas into
              engaging visual experiences.
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
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================== */}
      <section
        aria-labelledby="who-we-are-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Who We Are
            </p>

            <h2
              id="who-we-are-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              We Create Videos That Help Brands Communicate Better
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              HipHipVideos is a creative video production company based in
              Hyderabad, Telangana. We work with brands, startups and businesses
              that want to communicate their ideas through professional visual
              storytelling.
            </p>

            <p>
              Our work covers commercial videos, corporate films, product
              videos, explainer videos, advertisements, branded content, motion
              graphics and 3D product animation.
            </p>

            <p>
              We believe a good video should do more than look impressive. It
              should have a clear purpose, communicate the right message and
              connect with the intended audience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================== */}
      <section
        aria-labelledby="what-we-do-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              What We Do
            </p>

            <h2
              id="what-we-do-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              End-to-End Video Production
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              From the initial creative idea to the final delivered video, we
              can support the complete production process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.045] sm:p-8"
              >
                <span className="text-sm font-semibold text-[#CCFF00]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section
        aria-labelledby="services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Services
            </p>

            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Video Production Services
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Creative and production services for brands, businesses, startups
              and organizations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.045] sm:p-8"
              >
                <h3 className="text-xl font-bold transition-colors group-hover:text-[#CCFF00]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base">
                  {service.description}
                </p>

                <span className="mt-6 inline-block text-sm font-semibold text-white/40 transition-colors group-hover:text-[#CCFF00]">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES
      ========================================================== */}
      <section
        aria-labelledby="industries-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Industries
          </p>

          <h2
            id="industries-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Content for Different Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            We create visual content for different business models, industries
            and communication goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-2.5 text-sm text-white/60 transition hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================== */}
      <section
        aria-labelledby="values-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
                Our Approach
              </p>

              <h2
                id="values-heading"
                className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
              >
                Creative Thinking With a Business Purpose
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
                We combine creative storytelling with a practical understanding
                of what your video needs to communicate and where it will be
                used.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HYDERABAD
      ========================================================== */}
      <section
        aria-labelledby="location-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad, Telangana
          </p>

          <h2
            id="location-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            A Video Production Company Based in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad and works with brands and
            businesses across India. Our location gives us access to a growing
            creative, technology and business ecosystem while allowing us to
            work with clients across different industries.
          </p>

          <address className="mt-6 not-italic text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building,
            <br />
            Shaikpet, Jubilee Hills,
            <br />
            Hyderabad, Telangana 500008
          </address>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="tel:+916302111807"
              className="text-sm font-semibold text-white transition-colors hover:text-[#CCFF00]"
            >
              +91 63021 11807
            </a>

            <span className="hidden text-white/20 sm:block">•</span>

            <a
              href="mailto:info@hiphipvideos.com"
              className="text-sm font-semibold text-white transition-colors hover:text-[#CCFF00]"
            >
              info@hiphipvideos.com
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              About HipHipVideos FAQ
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
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold sm:text-lg">
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
          CTA
      ========================================================== */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Work With Us
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Have a Video Project in Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your brand, product, campaign or business objective
            and let's explore how video can help communicate your story.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-8 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.3)] sm:text-base"
          >
            Start Your Video Project
          </Link>
        </div>
      </section>
    </main>
  );
}
