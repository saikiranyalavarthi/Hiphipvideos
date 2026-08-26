import Link from "next/link";

export const metadata = {
  title: "Explainer Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates professional explainer videos, animated explainers, product explainers, SaaS videos and technology explainers in Hyderabad and across India.",
  alternates: {
    canonical: "/services/explainer-videos",
  },
  openGraph: {
    title: "Explainer Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional explainer videos, animated explainers, SaaS explainers and product videos created by HipHipVideos.",
    url: "/services/explainer-videos",
    type: "website",
  },
};

const explainerTypes = [
  {
    number: "01",
    title: "Product Explainer Videos",
    description:
      "Explain what your product does, how it works and why customers should choose it through a clear visual story.",
  },
  {
    number: "02",
    title: "SaaS Explainer Videos",
    description:
      "Make software platforms and SaaS products easier to understand through product demonstrations, animation and visual storytelling.",
  },
  {
    number: "03",
    title: "Animated Explainer Videos",
    description:
      "Use 2D animation, motion graphics and visual storytelling to communicate concepts that may be difficult to explain with live action alone.",
  },
  {
    number: "04",
    title: "Technology Explainer Videos",
    description:
      "Simplify technology, digital products, platforms and technical concepts for customers, teams and business audiences.",
  },
  {
    number: "05",
    title: "Service Explainer Videos",
    description:
      "Explain your services, customer journey and value proposition in a concise and engaging format.",
  },
  {
    number: "06",
    title: "Corporate Explainer Videos",
    description:
      "Communicate business processes, solutions, initiatives and complex corporate information through structured visual storytelling.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your product, service, audience, business objective and the message your video needs to communicate.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We develop a creative direction that turns your information into a simple, logical and engaging visual story.",
  },
  {
    number: "03",
    title: "Script",
    description:
      "We structure the information into a concise script with a clear beginning, message and call to action.",
  },
  {
    number: "04",
    title: "Storyboard",
    description:
      "Visual scenes, transitions, graphics and narration are planned before the animation or production begins.",
  },
  {
    number: "05",
    title: "Production",
    description:
      "We bring the story to life using animation, motion graphics, voice-over, sound design, live action or a combination of techniques.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "The finished explainer is delivered in formats suitable for websites, presentations, social media, advertising and campaigns.",
  },
];

const formats = [
  "2D Animation",
  "Motion Graphics",
  "3D Animation",
  "Product Explainers",
  "SaaS Explainers",
  "Technology Videos",
  "Live Action + Animation",
  "Screen Recording",
  "UI / Product Demonstration",
  "Voice-Over Videos",
];

const useCases = [
  "Website Homepage",
  "Product Landing Pages",
  "SaaS Platforms",
  "App Launches",
  "Digital Marketing",
  "Sales Presentations",
  "Investor Presentations",
  "Social Media",
  "Customer Onboarding",
  "Internal Communication",
];

const faqs = [
  {
    question: "What is an explainer video?",
    answer:
      "An explainer video is a short visual video designed to explain a product, service, technology, process or idea in a clear and engaging way. It can use animation, motion graphics, live action, screen recordings or a combination of formats.",
  },
  {
    question: "What types of explainer videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates product explainer videos, SaaS explainers, animated explainer videos, technology explainers, service explainers and corporate explainer videos.",
  },
  {
    question: "Do you create animated explainer videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates animated and visual explainer videos for businesses in Hyderabad and clients across India.",
  },
  {
    question: "Can you explain a SaaS product or software?",
    answer:
      "Yes. SaaS and software explainers can combine product demonstrations, UI animations, screen recordings, motion graphics, narration and other visual techniques to make software easier to understand.",
  },
  {
    question: "Can an explainer video include animation and live action?",
    answer:
      "Yes. Depending on the project, live-action footage can be combined with animation, motion graphics, screen recordings and visual effects.",
  },
  {
    question: "Do you provide scriptwriting for explainer videos?",
    answer:
      "Yes. Explainer video projects can include concept development, messaging, scriptwriting, storyboarding, voice-over direction, production and post-production.",
  },
  {
    question: "Where can I use an explainer video?",
    answer:
      "Explainer videos can be used on websites, landing pages, product pages, social media, sales presentations, digital advertising, investor presentations and customer onboarding.",
  },
  {
    question: "How do I start an explainer video project?",
    answer:
      "Share your product or service information, target audience, objective and preferred timeline with HipHipVideos. We can then discuss the creative direction and production requirements.",
  },
];

export default function ExplainerVideosPage() {
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
              Explainer Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Explainer Videos That{" "}
              <span className="text-[#CCFF00]">Make Complex Ideas Simple</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates engaging explainer videos that help
              businesses communicate products, services, technology and complex
              ideas clearly. From animated explainers and SaaS videos to product
              demonstrations and motion graphics, we turn information into
              easy-to-understand visual stories.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Explainer video production in Hyderabad and across India.
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
        aria-labelledby="explainer-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Visual Communication
            </p>

            <h2
              id="explainer-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Complex Information Into a Story People Understand
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Products and services can sometimes be difficult to explain with
              text alone. An explainer video combines visuals, narration,
              animation and storytelling to communicate the important
              information in a more accessible format.
            </p>

            <p>
              HipHipVideos develops explainer videos around your audience,
              product and communication objective. We focus on the information
              that matters most and build a visual structure around it.
            </p>

            <p>
              Whether you are launching software, explaining a service,
              demonstrating a product or communicating a technical idea, the
              video can be designed around the way your audience needs to
              understand it.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section
        aria-labelledby="explainer-types-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Explainer Video Services
            </p>

            <h2
              id="explainer-types-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Explainer Videos for Products, Services & Technology
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Choose the visual approach that best matches your product,
              audience and communication requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {explainerTypes.map((item) => (
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

      {/* FORMATS */}
      <section
        aria-labelledby="explainer-formats-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Production Formats
          </p>

          <h2
            id="explainer-formats-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Different Visual Formats for Different Messages
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Your explainer video can use animation, motion graphics, live action
            and product visuals individually or together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {formats.map((item) => (
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
        aria-labelledby="explainer-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Process
            </p>

            <h2
              id="explainer-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Complex Idea to Clear Visual Story
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We structure the project around your message first, then develop
              the visual storytelling and production required to communicate it
              clearly.
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

      {/* USE CASES */}
      <section
        aria-labelledby="explainer-use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Use Cases
          </p>

          <h2
            id="explainer-use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Where Explainer Videos Can Help
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Explainer videos can support marketing, sales, product education and
            customer communication across different digital channels.
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

      {/* WHY HIPHIPVIDEOS */}
      <section
        aria-labelledby="why-explainer-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-explainer-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Explainer Videos Built Around Understanding
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Clear Storytelling",
                text: "We structure information into a logical visual story so your audience can follow the message.",
              },
              {
                title: "Animation & Motion",
                text: "Motion graphics and animation can make interfaces, processes, data and concepts easier to visualize.",
              },
              {
                title: "Product Understanding",
                text: "We focus on the product or service information your customers actually need to understand.",
              },
              {
                title: "Multiple Formats",
                text: "Explainers can be created for websites, social media, presentations, advertising and product experiences.",
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
        aria-labelledby="explainer-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="explainer-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Explainer Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad, Telangana and creates explainer
            videos for startups, technology companies, SaaS businesses, brands
            and organisations. We work with clients in Hyderabad and across
            India.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="explainer-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Explainer Video FAQ
            </p>

            <h2
              id="explainer-faq-heading"
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
            Start Your Explainer Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Have a Complex Idea to Explain?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your product, service or idea and we'll help turn the
            information into a clear and engaging visual story.
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
