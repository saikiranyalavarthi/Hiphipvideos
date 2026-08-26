import Link from "next/link";

export const metadata = {
  title:
    "Video Production Process | From Concept to Final Video | HipHipVideos",
  description:
    "Explore the HipHipVideos video production process from creative strategy and scripting to pre-production, filming, editing, motion graphics, color grading and final delivery.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title:
      "Video Production Process | From Concept to Final Video | HipHipVideos",
    description:
      "Discover how HipHipVideos takes a video project from idea and creative concept through production, post-production and final delivery.",
    url: "/process",
    type: "website",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Discovery & Brief",
    shortTitle: "Understand",
    description:
      "We start by understanding your brand, product, audience, communication goal, campaign requirements, timeline and where the final video will be used.",
    details: [
      "Project goals",
      "Target audience",
      "Brand positioning",
      "Key message",
      "Distribution platforms",
      "Timeline and requirements",
    ],
  },
  {
    number: "02",
    title: "Creative Strategy",
    shortTitle: "Think",
    description:
      "We turn the project brief into a creative direction. The goal is to find a strong visual idea that communicates the message clearly and gives the production a distinct identity.",
    details: [
      "Creative concept",
      "Visual direction",
      "Story approach",
      "Reference research",
      "Communication strategy",
      "Content structure",
    ],
  },
  {
    number: "03",
    title: "Script & Storyboard",
    shortTitle: "Plan the Story",
    description:
      "Once the creative direction is approved, we develop the script and visual structure so everyone understands what the final video needs to communicate.",
    details: [
      "Script writing",
      "Voice-over planning",
      "Storyboard",
      "Shot planning",
      "Scene structure",
      "Visual references",
    ],
  },
  {
    number: "04",
    title: "Pre-Production",
    shortTitle: "Prepare",
    description:
      "We organize the production details before the camera starts rolling, including locations, casting, props, crew, equipment, schedules and production logistics.",
    details: [
      "Location planning",
      "Casting",
      "Crew planning",
      "Equipment",
      "Props and styling",
      "Production schedule",
    ],
  },
  {
    number: "05",
    title: "Video Production",
    shortTitle: "Create",
    description:
      "The approved concept comes to life through professional direction, cinematography, lighting, sound recording and on-set production.",
    details: [
      "Direction",
      "Cinematography",
      "Lighting",
      "Camera production",
      "Sound recording",
      "On-set execution",
    ],
  },
  {
    number: "06",
    title: "Editing & Post-Production",
    shortTitle: "Build",
    description:
      "The captured footage is shaped into the final story through editing, sound design, music, color grading, motion graphics, animation and visual effects.",
    details: [
      "Video editing",
      "Color grading",
      "Sound design",
      "Music",
      "Motion graphics",
      "Visual effects",
    ],
  },
  {
    number: "07",
    title: "Review & Refinement",
    shortTitle: "Refine",
    description:
      "We review the video against the original brief and refine the edit, visuals, sound and messaging so the final result aligns with the project objective.",
    details: [
      "Client review",
      "Creative revisions",
      "Editing refinements",
      "Audio adjustments",
      "Visual corrections",
      "Final approval",
    ],
  },
  {
    number: "08",
    title: "Final Delivery",
    shortTitle: "Deliver",
    description:
      "The approved video is prepared in the required formats and specifications for websites, social media, advertising, presentations, campaigns and other platforms.",
    details: [
      "Final export",
      "Platform formats",
      "Aspect ratios",
      "Web delivery",
      "Social media versions",
      "Campaign assets",
    ],
  },
];

const productionTypes = [
  {
    title: "Commercial Videos",
    href: "/services/commercial-video-production",
  },
  {
    title: "Corporate Videos",
    href: "/services/corporate-video-production",
  },
  {
    title: "Product Videos",
    href: "/services/product-video-production",
  },
  {
    title: "Explainer Videos",
    href: "/services/explainer-videos",
  },
  {
    title: "3D Product Animation",
    href: "/services/3d-product-animation",
  },
  {
    title: "Motion Graphics",
    href: "/services/motion-graphics",
  },
];

const deliverables = [
  "Brand Films",
  "Commercials",
  "Corporate Films",
  "Product Videos",
  "Explainer Videos",
  "Social Media Videos",
  "Digital Advertisements",
  "Product Launch Videos",
  "Motion Graphics",
  "3D Product Animation",
  "Branded Content",
  "Campaign Videos",
];

const faqs = [
  {
    question: "What is the video production process?",
    answer:
      "The video production process typically includes discovery, creative strategy, scripting, storyboarding, pre-production, filming, editing, post-production, review, revisions and final delivery.",
  },
  {
    question: "How does HipHipVideos start a video project?",
    answer:
      "We begin by understanding the brand, audience, objective, message, distribution requirements and timeline. This information helps us develop the appropriate creative direction.",
  },
  {
    question: "What happens during pre-production?",
    answer:
      "Pre-production includes planning elements such as scripting, storyboards, locations, casting, crew, equipment, props, schedules and other production requirements before filming begins.",
  },
  {
    question: "Does HipHipVideos handle video production from start to finish?",
    answer:
      "Yes. Depending on the project, HipHipVideos can support the complete workflow from creative concept and pre-production through filming, editing, post-production and final delivery.",
  },
  {
    question: "How long does video production take?",
    answer:
      "The timeline depends on the type, complexity and requirements of the project. Commercials, corporate films, product videos, animation and larger productions can each have different schedules.",
  },
  {
    question: "Can you create videos for social media?",
    answer:
      "Yes. Videos can be planned and delivered in suitable formats and aspect ratios for social media, digital advertising, websites and other distribution platforms.",
  },
  {
    question: "Do you provide motion graphics and animation?",
    answer:
      "Yes. Motion graphics, 3D product animation and visual effects can be incorporated into projects when they support the creative and communication objectives.",
  },
  {
    question: "Where does HipHipVideos provide video production?",
    answer:
      "HipHipVideos is based in Hyderabad, Telangana, and works with brands and businesses across India depending on project requirements.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HipHipVideos",
  url: "https://hiphipvideos.com",
  description:
    "Video production company in Hyderabad providing commercial, corporate, product, explainer, animation and motion graphics services.",
  telephone: "+91 63021 11807",
  email: "info@hiphipvideos.com",
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
      name: "Process",
      item: "https://hiphipvideos.com/process",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ProcessPage() {
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

      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Our Video Production Process
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              From <span className="text-[#CCFF00]">Idea to Final Video</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              A structured video production process that takes your project from
              creative discovery and strategy through scripting, pre-production,
              filming, editing, post-production and final delivery.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              HipHipVideos is a video production company in Hyderabad helping
              brands and businesses create professional commercial, corporate,
              product and branded video content.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#CCFF00] to-[#a3ff12] px-7 py-3 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(204,255,0,0.3)]"
              >
                Start Your Video Project
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

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section
        aria-labelledby="intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              A Clear Production Workflow
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              A Process Designed to Keep Creative and Production Aligned
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Great video production starts before the camera begins recording.
              Understanding the objective, audience and message helps create a
              stronger foundation for every production decision.
            </p>

            <p>
              Our workflow brings together creative strategy, production
              planning, professional filming and detailed post-production.
            </p>

            <p>
              Each stage has a clear purpose, helping move the project from an
              initial idea toward a polished final video.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS STEPS
      ====================================================== */}
      <section
        aria-labelledby="process-steps-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Step by Step
            </p>

            <h2
              id="process-steps-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Our Video Production Workflow
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Every project is different, but our production workflow provides a
              reliable structure for turning creative ideas into finished video
              content.
            </p>
          </div>

          <div className="mt-14 space-y-5 lg:mt-20">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#CCFF00]/30 hover:bg-white/[0.04] sm:p-8 lg:p-10"
              >
                <div className="grid gap-7 lg:grid-cols-[100px_1fr_1fr] lg:items-start lg:gap-10">
                  {/* NUMBER */}
                  <div>
                    <span className="text-4xl font-bold text-white/10 transition-colors duration-300 group-hover:text-[#CCFF00]/40 sm:text-5xl">
                      {step.number}
                    </span>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#CCFF00]">
                      {step.shortTitle}
                    </p>
                  </div>

                  {/* TITLE */}
                  <div>
                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-[#CCFF00] sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-white/50 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>

                  {/* DETAILS */}
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div
                        key={detail}
                        className="rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-xs text-white/45 sm:text-sm"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTION TYPES
      ====================================================== */}
      <section
        aria-labelledby="production-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Production Services
          </p>

          <h2
            id="production-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Our Process Works Across Different Video Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            From advertising campaigns and corporate films to product videos and
            animation, the production workflow can be adapted to your project.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productionTypes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-white/10 bg-white/[0.025] px-5 py-5 text-sm font-semibold text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PRE-PRODUCTION
      ====================================================== */}
      <section
        aria-labelledby="preproduction-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Pre-Production
            </p>

            <h2
              id="preproduction-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Strong Planning Creates Better Productions
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Pre-production is where the creative idea becomes a practical
              production plan. This stage helps align the team before filming
              begins.
            </p>

            <p>
              Depending on the project, this can include scripting, storyboards,
              casting, locations, production design, shot lists, equipment
              planning and schedules.
            </p>

            <p>
              Detailed preparation helps the production team focus on execution
              when filming begins.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTION
      ====================================================== */}
      <section
        aria-labelledby="production-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Production
            </p>

            <h2
              id="production-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Bringing the Creative Concept to Life
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Production is where the approved creative direction becomes actual
              footage. Professional cinematography, lighting, direction and
              sound work together to capture the planned story.
            </p>

            <p>
              Depending on the project, production may include interviews,
              product filming, commercial shoots, corporate environments,
              locations, talent, demonstrations or specialized visual
              production.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          POST PRODUCTION
      ====================================================== */}
      <section
        aria-labelledby="postproduction-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Post-Production
            </p>

            <h2
              id="postproduction-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Shaping Footage Into the Final Story
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Post-production brings the individual production elements together
              into a complete visual story.
            </p>

            <p>
              Editing, color grading, sound design, music, motion graphics,
              animation and visual effects can be combined according to the
              requirements of the project.
            </p>

            <p>
              The final result is then prepared for the platforms and formats
              where the video will be published.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERABLES
      ====================================================== */}
      <section
        aria-labelledby="deliverables-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Final Deliverables
          </p>

          <h2
            id="deliverables-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Content for Different Platforms and Campaigns
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {deliverables.map((item) => (
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

      {/* =====================================================
          HYDERABAD
      ====================================================== */}
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
            Video Production Process in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a video production company based in Hyderabad,
            working with brands and businesses across India. Our process can be
            adapted for commercial, corporate, product, advertising, explainer
            and branded video projects.
          </p>

          <address className="mt-6 not-italic text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building,
            <br />
            Shaikpet, Jubilee Hills,
            <br />
            Hyderabad, Telangana 500008
          </address>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section
        aria-labelledby="faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Video Production FAQ
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

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Start Your Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Start Your Video?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Share your idea, campaign or business objective and let's plan the
            right video production approach for your project.
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
