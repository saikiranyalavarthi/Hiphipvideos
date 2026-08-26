import Link from "next/link";

export const metadata = {
  title: "SaaS Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates SaaS product videos, software demo videos, explainer videos, product launch videos and technology marketing videos in Hyderabad and across India.",
  alternates: {
    canonical: "/services/saas-video-production",
  },
  openGraph: {
    title: "SaaS Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional SaaS product videos, software demos, explainers and technology marketing videos by HipHipVideos.",
    url: "/services/saas-video-production",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "SaaS Product Videos",
    description:
      "Explain your software product, key features, workflows and customer value through clear and engaging product videos.",
  },
  {
    number: "02",
    title: "SaaS Explainer Videos",
    description:
      "Simplify complex software products and communicate what your platform does, who it helps and why customers should care.",
  },
  {
    number: "03",
    title: "Software Demo Videos",
    description:
      "Show your platform in action through structured product demonstrations that help prospects understand the user experience.",
  },
  {
    number: "04",
    title: "SaaS Product Launch Videos",
    description:
      "Introduce new software products, features and platforms with launch videos designed for marketing campaigns and product announcements.",
  },
  {
    number: "05",
    title: "Technology Marketing Videos",
    description:
      "Create technology-focused video content for websites, campaigns, social media, sales presentations and digital marketing.",
  },
  {
    number: "06",
    title: "SaaS Brand Videos",
    description:
      "Tell the story behind your software company, product vision, team and technology through professional brand storytelling.",
  },
];

const saasTypes = [
  "B2B SaaS",
  "B2C SaaS",
  "Enterprise Software",
  "AI Platforms",
  "FinTech SaaS",
  "EdTech SaaS",
  "HealthTech",
  "HRTech",
  "MarTech",
  "PropTech",
  "Cybersecurity",
  "Cloud Software",
  "Developer Tools",
  "Productivity Software",
  "Business Platforms",
  "Mobile Applications",
];

const videoFormats = [
  "SaaS Explainer Video",
  "Software Demo",
  "Product Walkthrough",
  "Feature Launch Video",
  "Product Tour",
  "Onboarding Video",
  "How-To Video",
  "Customer Story",
  "Testimonial Video",
  "Founder Video",
  "Brand Film",
  "Motion Graphics",
  "UI Animation",
  "Product Launch",
  "Sales Video",
  "Website Hero Video",
];

const useCases = [
  "SaaS Website",
  "Landing Pages",
  "Product Pages",
  "Sales Presentations",
  "Investor Presentations",
  "Product Launches",
  "LinkedIn Marketing",
  "YouTube",
  "Social Media",
  "Paid Advertising",
  "Email Marketing",
  "Customer Onboarding",
];

const process = [
  {
    number: "01",
    title: "Understand the Product",
    description:
      "We learn how your software works, who uses it, the problem it solves and the value you want the video to communicate.",
  },
  {
    number: "02",
    title: "Message & Creative Strategy",
    description:
      "We identify the core message, audience, narrative and visual direction needed to make the product easier to understand.",
  },
  {
    number: "03",
    title: "Script & Storyboard",
    description:
      "The product story is structured into a clear script and visual plan covering UI, demonstrations, animation and supporting visuals.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Depending on the project, production can include screen capture, live-action filming, voice-over, motion graphics and animation.",
  },
  {
    number: "05",
    title: "Editing & Motion Design",
    description:
      "We combine editing, UI animation, motion graphics, sound design, music and visual effects into the final video.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "The completed video can be delivered in formats suitable for websites, product launches, sales teams, social media and digital campaigns.",
  },
];

const faqs = [
  {
    question: "What is SaaS video production?",
    answer:
      "SaaS video production creates video content that explains software products, platforms, features, workflows, use cases and customer value.",
  },
  {
    question: "What types of SaaS videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates SaaS explainer videos, software demos, product walkthroughs, product launch videos, feature videos, technology marketing videos and SaaS brand films.",
  },
  {
    question: "Do you provide SaaS video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates SaaS and technology videos for companies in Hyderabad and clients across India.",
  },
  {
    question: "Can you create a video showing our software product?",
    answer:
      "Yes. Software screen recordings, UI demonstrations, product walkthroughs and motion graphics can be combined to show how your platform works.",
  },
  {
    question: "Can you explain a complex SaaS product?",
    answer:
      "Yes. The production process begins by understanding the product and audience, then simplifying the message into a structured visual story.",
  },
  {
    question: "Can you create SaaS videos for B2B companies?",
    answer:
      "Yes. B2B SaaS products can be presented through product explainers, sales videos, customer stories, feature videos and website content.",
  },
  {
    question: "Can you create videos for a SaaS product launch?",
    answer:
      "Yes. Product launches can include feature announcements, product demonstrations, animated explainers, brand storytelling and short social media versions.",
  },
  {
    question: "Do you handle scripting and animation?",
    answer:
      "Yes. Depending on the project, the production can include concept development, scripting, storyboarding, motion graphics, UI animation, editing and sound design.",
  },
];

export default function SaaSVideoProductionPage() {
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
              SaaS Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              SaaS Videos That{" "}
              <span className="text-[#CCFF00]">
                Make Complex Products Simple
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates SaaS product videos, software demos,
              explainer videos, product launch videos and technology marketing
              content that helps customers understand your software and its
              value.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              SaaS video production in Hyderabad and across India.
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
        aria-labelledby="saas-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Software Storytelling
            </p>

            <h2
              id="saas-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Complex Software Into a Story Customers Understand
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Software products can be difficult to communicate through text
              alone. Customers want to understand what the product does, how it
              works and how it can solve their problem.
            </p>

            <p>
              A well-structured SaaS video can combine product interfaces,
              demonstrations, animation, narration and storytelling into one
              clear visual experience.
            </p>

            <p>
              HipHipVideos creates technology-focused video content around your
              product, audience, positioning and marketing objective.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        aria-labelledby="saas-services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              SaaS Video Services
            </p>

            <h2
              id="saas-services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Video Production for SaaS & Technology Companies
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              From product demonstrations to launch campaigns, we create videos
              designed around the way technology businesses sell and communicate
              their products.
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

      {/* SAAS TYPES */}
      <section
        aria-labelledby="saas-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Technology Categories
          </p>

          <h2
            id="saas-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            SaaS Video Production for Different Technology Products
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Our visual storytelling approach can be adapted to different
            software products, industries and technology business models.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {saasTypes.map((item) => (
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

      {/* VIDEO FORMATS */}
      <section
        aria-labelledby="saas-formats-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Video Formats
          </p>

          <h2
            id="saas-formats-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            SaaS Videos for Marketing, Sales & Product Education
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Choose the format that best matches your product, audience and stage
            of the customer journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {videoFormats.map((item) => (
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
        aria-labelledby="saas-use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Use Cases
          </p>

          <h2
            id="saas-use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Use SaaS Videos Across Your Customer Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create video assets for awareness, product education, sales,
            launches, onboarding and customer communication.
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
        aria-labelledby="saas-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Production Process
            </p>

            <h2
              id="saas-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Product Understanding to Final SaaS Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We turn product information into a structured visual story that is
              easier for your audience to understand.
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
        aria-labelledby="why-saas-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-saas-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              SaaS Video Production Built Around Your Product
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Product Understanding",
                text: "We start by understanding the software, audience, problem and value proposition before developing the video.",
              },
              {
                title: "Clear Storytelling",
                text: "Complex features are structured into a clear narrative so viewers can understand the product more easily.",
              },
              {
                title: "UI & Motion",
                text: "Software interfaces can be combined with animation, motion graphics and visual storytelling.",
              },
              {
                title: "Multiple Marketing Formats",
                text: "Create content for websites, product launches, sales presentations, social media and digital campaigns.",
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
        aria-labelledby="saas-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="saas-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            SaaS Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a SaaS and technology video production company based
            in Hyderabad, Telangana. We create software product videos,
            explainers, demos, launch videos and technology marketing content
            for startups, SaaS companies and technology businesses.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="saas-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              SaaS Video FAQ
            </p>

            <h2
              id="saas-faq-heading"
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
            Start Your SaaS Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Explain Your Software Clearly?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your software, audience and marketing objective. We
            can help turn your product into a clear, engaging visual story.
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
