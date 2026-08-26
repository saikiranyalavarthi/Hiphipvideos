import Link from "next/link";

export const metadata = {
  title: "Pitch Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates startup pitch videos, investor pitch videos, founder videos and business pitch films in Hyderabad and across India.",
  alternates: {
    canonical: "/services/pitch-videos",
  },
  openGraph: {
    title: "Pitch Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional startup pitch videos, investor pitch videos and founder-led business videos created by HipHipVideos.",
    url: "/services/pitch-videos",
    type: "website",
  },
};

const pitchTypes = [
  {
    number: "01",
    title: "Startup Pitch Videos",
    description:
      "Communicate your startup idea, product, market opportunity and vision through a concise and engaging visual pitch.",
  },
  {
    number: "02",
    title: "Investor Pitch Videos",
    description:
      "Present your business opportunity, product, traction and vision in a professional video format designed for investor communication.",
  },
  {
    number: "03",
    title: "Founder Pitch Videos",
    description:
      "Put your founder story, expertise and vision at the centre of the pitch to create a more personal connection with your audience.",
  },
  {
    number: "04",
    title: "Product Pitch Videos",
    description:
      "Show how your product works, the problem it solves and why the market needs it through focused visual storytelling.",
  },
  {
    number: "05",
    title: "Business Presentation Videos",
    description:
      "Turn important business presentations, proposals and strategic messages into polished video content.",
  },
  {
    number: "06",
    title: "Fundraising Videos",
    description:
      "Create a clear visual narrative around your company, opportunity, product and future vision for fundraising communication.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn about your company, product, audience, market, business model and the purpose of the pitch.",
  },
  {
    number: "02",
    title: "Shape the Story",
    description:
      "We help structure the important information into a clear narrative that is easy for the audience to follow.",
  },
  {
    number: "03",
    title: "Script & Creative Direction",
    description:
      "We develop the script, messaging and visual direction around your pitch objective and brand.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Founder interviews, product visuals, office footage, demonstrations and supporting visuals can be combined into the production.",
  },
  {
    number: "05",
    title: "Editing & Graphics",
    description:
      "Editing, motion graphics, product visuals, charts, screen recordings, sound design and color grading bring the pitch together.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "We deliver the finished pitch video in formats suitable for investors, presentations, websites, social media and digital sharing.",
  },
];

const pitchElements = [
  "Founder Story",
  "Problem & Solution",
  "Product Demonstration",
  "Market Opportunity",
  "Business Model",
  "Traction",
  "Team",
  "Vision",
  "Technology",
  "Call to Action",
];

const useCases = [
  "Investor Meetings",
  "Fundraising",
  "Demo Days",
  "Startup Accelerators",
  "Pitch Competitions",
  "Business Presentations",
  "Product Launches",
  "Sales Presentations",
  "Company Websites",
  "Social Media",
];

const faqs = [
  {
    question: "What is a pitch video?",
    answer:
      "A pitch video is a concise business video used to communicate a company, startup, product, opportunity or founder story to an audience such as investors, customers, partners or business stakeholders.",
  },
  {
    question: "What is a startup pitch video?",
    answer:
      "A startup pitch video presents the important parts of a startup story, which may include the problem, solution, product, market, business model, traction, team and vision.",
  },
  {
    question: "Do you create investor pitch videos?",
    answer:
      "Yes. HipHipVideos creates professional investor and fundraising videos that visually communicate a company's story, product, opportunity and vision.",
  },
  {
    question: "Can the founder appear in the pitch video?",
    answer:
      "Yes. Founder-led videos can combine an on-camera founder presentation with product demonstrations, company footage, motion graphics, screen recordings and other supporting visuals.",
  },
  {
    question: "Can you create a pitch video from our existing pitch deck?",
    answer:
      "Yes. An existing pitch deck can provide useful information and structure for developing the script and visual direction. The final video can then be designed specifically for video rather than simply copying the slides.",
  },
  {
    question: "Do you create pitch videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates pitch videos for startups and businesses in Hyderabad and across India.",
  },
  {
    question: "Can the pitch video include product demonstrations?",
    answer:
      "Yes. Product demonstrations, software screen recordings, UI animations, prototypes, physical products and supporting visuals can be incorporated depending on the project.",
  },
  {
    question: "How do I start a pitch video project?",
    answer:
      "Share your pitch deck, company information, product details, audience and intended use with HipHipVideos. We can then discuss the story, production approach and project requirements.",
  },
];

export default function PitchVideosPage() {
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
              Pitch Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Pitch Videos That{" "}
              <span className="text-[#CCFF00]">
                Bring Your Business Story to Life
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates professional startup pitch videos, investor
              pitch videos, founder videos and product pitches that help
              businesses communicate their idea, opportunity, product and vision
              through powerful visual storytelling.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Pitch video production in Hyderabad and across India.
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
        aria-labelledby="pitch-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Business Storytelling
            </p>

            <h2
              id="pitch-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Your Pitch Into a Story People Remember
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              A pitch needs to communicate important information quickly. Your
              audience needs to understand what you are building, the problem
              you solve, why your solution matters and where the business can
              go.
            </p>

            <p>
              A pitch video can combine the clarity of your business
              presentation with the impact of professional visual storytelling.
              It can include founders, products, customers, technology,
              demonstrations, graphics and supporting footage.
            </p>

            <p>
              HipHipVideos works with startups and businesses to turn important
              pitch information into a focused visual narrative built around the
              intended audience and objective.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          TYPES
      ========================================================= */}
      <section
        aria-labelledby="pitch-types-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Pitch Video Services
            </p>

            <h2
              id="pitch-types-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Pitch Videos for Startups, Founders & Businesses
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Different business situations require different pitch formats. We
              create the video around your message, audience and intended
              outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {pitchTypes.map((item) => (
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
          PITCH ELEMENTS
      ========================================================= */}
      <section
        aria-labelledby="pitch-elements-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Pitch Story Structure
          </p>

          <h2
            id="pitch-elements-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Build the Story Around What Matters
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Depending on the project, your pitch video can bring together the
            important elements of your business story.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {pitchElements.map((item) => (
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
        aria-labelledby="pitch-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Pitch Video Process
            </p>

            <h2
              id="pitch-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Pitch Deck to Finished Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We transform your business information into a visual narrative
              while keeping the pitch focused, clear and aligned with its
              purpose.
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
          USE CASES
      ========================================================= */}
      <section
        aria-labelledby="pitch-use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Where Pitch Videos Are Used
          </p>

          <h2
            id="pitch-use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Built for Important Business Moments
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            A pitch video can support investor communication, fundraising,
            startup events, sales presentations and other business
            opportunities.
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

      {/* =========================================================
          WHY HIPHIPVIDEOS
      ========================================================= */}
      <section
        aria-labelledby="why-pitch-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-pitch-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Professional Visual Storytelling for Your Pitch
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Clear Business Story",
                text: "We help structure the important information into a focused narrative that your audience can follow.",
              },
              {
                title: "Founder-Led Content",
                text: "Your founder or leadership team can become an important part of the story through professional interviews and presentation.",
              },
              {
                title: "Product Demonstrations",
                text: "Products, software interfaces, prototypes and customer experiences can be brought into the pitch visually.",
              },
              {
                title: "Professional Finish",
                text: "Editing, motion graphics, sound design, color grading and visual storytelling create a polished final presentation.",
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
        aria-labelledby="pitch-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="pitch-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Pitch Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad, Telangana and creates startup
            pitch videos, investor pitch videos, founder videos and product
            pitches for businesses in Hyderabad and clients across India.
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
        aria-labelledby="pitch-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Pitch Video FAQ
            </p>

            <h2
              id="pitch-faq-heading"
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
            Start Your Pitch Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Turn Your Pitch Into a Powerful Video?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Share your pitch deck, product or business idea with us and let's
            explore how to turn your story into a professional video.
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
