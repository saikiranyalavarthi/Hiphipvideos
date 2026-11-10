import Link from "next/link";

export const metadata = {
  title: "Corporate Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates professional corporate videos, company profile films, brand stories, internal communication videos and corporate films in Hyderabad and across India.",
  alternates: {
    canonical: "/services/corporate-video-production",
  },
  openGraph: {
    title: "Corporate Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional corporate films, company profile videos, brand stories and business videos created by HipHipVideos in Hyderabad.",
    url: "/services/corporate-video-production",
    type: "website",
  },
};

const corporateServices = [
  {
    number: "01",
    title: "Company Profile Videos",
    description:
      "Present your company's story, capabilities, people, facilities and vision through a professional company profile video.",
  },
  {
    number: "02",
    title: "Corporate Brand Films",
    description:
      "Create a strong emotional connection with your audience through cinematic corporate storytelling built around your brand.",
  },
  {
    number: "03",
    title: "Corporate Communication Videos",
    description:
      "Communicate important business messages, announcements, initiatives and company information through engaging video.",
  },
  {
    number: "04",
    title: "Leadership & Founder Videos",
    description:
      "Professional videos featuring founders, executives and leadership teams to communicate expertise, vision and company values.",
  },
  {
    number: "05",
    title: "Employee & Culture Videos",
    description:
      "Showcase your people, workplace culture and employee experience through authentic corporate storytelling.",
  },
  {
    number: "06",
    title: "Corporate Event Videos",
    description:
      "Capture conferences, launches, business events and corporate experiences through professionally produced event videos.",
  },
];

const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We understand your business, audience, communication objective and brand before developing the creative direction.",
  },
  {
    number: "02",
    title: "Concept & Script",
    description:
      "Our team develops the story, messaging, script and visual direction required to communicate your corporate message clearly.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "We plan locations, interviews, talent, schedules, equipment, shot lists and other production requirements.",
  },
  {
    number: "04",
    title: "Filming & Production",
    description:
      "Our production team handles direction, cinematography, lighting, sound and professional filming.",
  },
  {
    number: "05",
    title: "Editing & Post-Production",
    description:
      "We edit the footage with professional color grading, sound design, music, motion graphics and visual effects where required.",
  },
  {
    number: "06",
    title: "Review & Delivery",
    description:
      "After your review and final refinements, we deliver the finished corporate video in the formats required for your channels.",
  },
];

const industries = [
  "Technology",
  "SaaS",
  "Manufacturing",
  "Healthcare",
  "Education",
  "Real Estate",
  "Finance",
  "Industrial",
  "D2C & Consumer Brands",
  "Professional Services",
];

const faqs = [
  {
    question: "What is corporate video production?",
    answer:
      "Corporate video production is the process of creating professional video content that communicates a company's story, services, people, culture, capabilities, values or business message to a specific audience.",
  },
  {
    question: "What types of corporate videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates company profile videos, corporate brand films, leadership videos, employee and culture videos, corporate communication videos, event videos and other business-focused visual content.",
  },
  {
    question: "Do you provide corporate video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and provides corporate video production services for businesses in Hyderabad as well as clients across India.",
  },
  {
    question: "Can you film at our office or business location?",
    answer:
      "Yes. Corporate productions can include filming at offices, facilities, manufacturing locations, project sites, events and other locations depending on the requirements of the project.",
  },
  {
    question: "Do you handle scripting and editing?",
    answer:
      "Yes. Our end-to-end production process can include creative concept development, scripting, storyboarding, filming, editing, color grading, sound design, motion graphics and final delivery.",
  },
  {
    question: "How do we start a corporate video project?",
    answer:
      "Start by contacting HipHipVideos with your project requirements, target audience, intended use and approximate timeline. We can then discuss the creative approach and production requirements.",
  },
];

export default function CorporateVideoProductionPage() {
  return (
    <main className="bg-black text-white">
      {/* =========================================================
          HERO
      ========================================================= */}

      {/* HERO WITH BACKGROUND VIDEO */}
      <section className="relative isolate flex min-h-[650px] items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/corporate-banner-poster.jpg"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/videos/coropratevideo.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-black/65" />

        {/* Hero Content */}
        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-28 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Corporate Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Corporate Video Production{" "}
              <span className="text-[#CCFF00]">
                That Tells Your Business Story
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              HipHipVideos creates professional corporate videos for companies,
              startups and organisations. From company profile films and brand
              stories to leadership, culture and corporate communication videos,
              we turn your business message into clear and engaging visual
              stories.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
              Based in Hyderabad, Telangana, we work with businesses across
              Hyderabad and clients throughout India.
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
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                View Corporate Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section
        aria-labelledby="corporate-video-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Corporate Storytelling
            </p>

            <h2
              id="corporate-video-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Professional Videos That Make Your Business Easier to Understand
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              A strong corporate video should do more than show your office or
              explain what your company does. It should communicate your
              positioning, people, capabilities and values in a way your
              audience can understand and remember.
            </p>

            <p>
              HipHipVideos combines creative strategy, storytelling,
              professional production and post-production to create corporate
              films that are aligned with your company's communication goals.
            </p>

            <p>
              Whether you need a company profile video, corporate brand film,
              leadership video, employee culture video or business communication
              video, we build the production around your audience and message.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORPORATE VIDEO TYPES
      ========================================================= */}
      <section
        aria-labelledby="corporate-services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Corporate Video Services
            </p>

            <h2
              id="corporate-services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Corporate Video Content for Different Business Needs
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              We create different types of corporate video content depending on
              your business objective, audience and communication requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {corporateServices.map((item) => (
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
          PROCESS
      ========================================================= */}
      <section
        aria-labelledby="corporate-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Process
            </p>

            <h2
              id="corporate-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Corporate Brief to Final Film
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We manage the production process from creative development through
              final delivery, keeping the project organised at every stage.
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
          INDUSTRIES
      ========================================================= */}
      <section
        aria-labelledby="corporate-industries-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Industries
          </p>

          <h2
            id="corporate-industries-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Corporate Video Production Across Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50">
            Our corporate video approach can be adapted to different business
            environments, audiences and communication goals.
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
          WHY HIPHIPVIDEOS
      ========================================================= */}
      <section
        aria-labelledby="why-corporate-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-corporate-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              A Creative Production Partner for Your Brand
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Creative Storytelling",
                text: "We turn business messages into stories that are easier for audiences to understand and remember.",
              },
              {
                title: "End-to-End Production",
                text: "From concept and scripting to filming, editing and final delivery, we can manage the complete production.",
              },
              {
                title: "Professional Production",
                text: "Our approach combines direction, cinematography, sound, editing, color and visual design.",
              },
              {
                title: "Business-Focused",
                text: "Every production starts with understanding what the video needs to communicate and who needs to see it.",
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
          HYDERABAD LOCAL SEO
      ========================================================= */}
      <section
        aria-labelledby="corporate-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="corporate-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Corporate Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad, Telangana and creates
            professional corporate videos for companies, startups and
            organisations. We also work with clients across India on corporate
            films, company profile videos, leadership videos, brand stories and
            business communication content.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Studio: Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section
        aria-labelledby="corporate-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Corporate Video FAQ
            </p>

            <h2
              id="corporate-faq-heading"
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
            Start Your Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Tell Your Company Story?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your company, audience and video requirements. We'll
            help you explore the right creative and production approach.
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
