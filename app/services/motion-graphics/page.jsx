import Link from "next/link";

export const metadata = {
  title:
    "Motion Graphics Company in Hyderabad | Motion Graphics Videos | HipHipVideos",
  description:
    "HipHipVideos creates professional motion graphics videos, animated brand content, explainer animations, kinetic typography and promotional motion graphics in Hyderabad and across India.",
  alternates: {
    canonical: "/services/motion-graphics",
  },
  openGraph: {
    title: "Motion Graphics Company in Hyderabad | HipHipVideos",
    description:
      "Professional motion graphics, animated videos, kinetic typography and visual communication by HipHipVideos.",
    url: "/services/motion-graphics",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Motion Graphics Videos",
    description:
      "Create engaging motion graphics videos that combine typography, shapes, illustrations, animation and visual effects to communicate your message.",
  },
  {
    number: "02",
    title: "Animated Explainer Videos",
    description:
      "Simplify products, services and complex ideas through structured animation and clear visual storytelling.",
  },
  {
    number: "03",
    title: "Kinetic Typography",
    description:
      "Bring words, headlines and brand messages to life through dynamic typography, movement and rhythm.",
  },
  {
    number: "04",
    title: "Brand Motion Graphics",
    description:
      "Extend your visual identity into motion through animated logos, branded graphics, transitions and visual systems.",
  },
  {
    number: "05",
    title: "Social Media Motion Graphics",
    description:
      "Create short-form animated content designed for Instagram, LinkedIn, YouTube, advertising and other digital platforms.",
  },
  {
    number: "06",
    title: "Product Motion Graphics",
    description:
      "Highlight product features, benefits, interfaces and technology through engaging animated visual communication.",
  },
];

const industries = [
  "Technology",
  "SaaS",
  "FinTech",
  "EdTech",
  "Healthcare",
  "Real Estate",
  "Automotive",
  "Consumer Electronics",
  "D2C Brands",
  "E-Commerce",
  "Finance",
  "Education",
  "Corporate",
  "Manufacturing",
  "Industrial",
  "Startups",
];

const formats = [
  "Motion Graphics Video",
  "Animated Explainer",
  "Kinetic Typography",
  "Logo Animation",
  "Brand Animation",
  "Product Animation",
  "UI Animation",
  "Infographic Animation",
  "Social Media Animation",
  "Advertisement Animation",
  "Corporate Animation",
  "Presentation Animation",
];

const useCases = [
  "Brand Awareness",
  "Product Marketing",
  "Website Videos",
  "Landing Pages",
  "Social Media",
  "Digital Advertising",
  "YouTube",
  "Instagram",
  "LinkedIn",
  "Sales Presentations",
  "Corporate Communications",
  "Product Launches",
];

const process = [
  {
    number: "01",
    title: "Understand the Message",
    description:
      "We understand your brand, audience, product and communication objective before developing the visual concept.",
  },
  {
    number: "02",
    title: "Creative Concept",
    description:
      "We develop the visual direction, storytelling approach, animation style and overall creative concept.",
  },
  {
    number: "03",
    title: "Script & Storyboard",
    description:
      "The message is converted into a structured script and storyboard that defines the visual flow.",
  },
  {
    number: "04",
    title: "Design & Illustration",
    description:
      "Visual assets, typography, illustrations, icons and branded graphics are designed for the animation.",
  },
  {
    number: "05",
    title: "Animation",
    description:
      "Design elements are animated with timing, transitions, camera movement and visual effects.",
  },
  {
    number: "06",
    title: "Sound & Final Delivery",
    description:
      "Editing, sound design, music, voice-over and final formatting complete the motion graphics video.",
  },
];

const faqs = [
  {
    question: "What are motion graphics?",
    answer:
      "Motion graphics are animated visual elements such as typography, shapes, illustrations, icons, logos, graphics and visual effects used to communicate information or tell a story.",
  },
  {
    question: "What does a motion graphics company do?",
    answer:
      "A motion graphics company creates animated visual content for brands, products, advertising, social media, presentations, websites, explainers and other marketing communication.",
  },
  {
    question: "Does HipHipVideos provide motion graphics in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates motion graphics videos and animated content for businesses in Hyderabad and across India.",
  },
  {
    question: "What types of motion graphics videos do you create?",
    answer:
      "We create animated explainers, kinetic typography, brand animations, logo animations, product animations, UI animations, infographic videos and social media motion graphics.",
  },
  {
    question: "Can motion graphics explain a complex product?",
    answer:
      "Yes. Motion graphics can simplify complex products, services, technology and processes by combining visuals, animation, narration and structured storytelling.",
  },
  {
    question: "Can you create motion graphics for social media?",
    answer:
      "Yes. Motion graphics can be produced in short-form formats suitable for Instagram, YouTube, LinkedIn, digital advertising and other social platforms.",
  },
  {
    question: "Can you animate our existing brand identity?",
    answer:
      "Yes. Existing logos, colors, typography, illustrations and brand assets can be incorporated into an animated visual system.",
  },
  {
    question: "Do you provide scripting and storyboarding?",
    answer:
      "Yes. Depending on the project, the production process can include concept development, scripting, storyboarding, design, animation, sound design and final delivery.",
  },
];

export default function MotionGraphicsPage() {
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
              Motion Graphics
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Motion Graphics That{" "}
              <span className="text-[#CCFF00]">Make Your Message Move</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates motion graphics videos, animated explainers,
              kinetic typography, brand animations and product motion graphics
              that help brands communicate ideas visually.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Motion graphics company in Hyderabad serving brands across India.
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
              Visual Communication
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Ideas, Data and Messages Into Visual Stories
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Motion graphics can make complex information easier to understand
              by combining typography, illustration, animation, icons, graphics
              and sound.
            </p>

            <p>
              They are useful for products, technology, advertising, corporate
              communication, social media and brand storytelling.
            </p>

            <p>
              HipHipVideos develops motion graphics around your brand, audience
              and communication objective.
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
              Motion Graphics Services
            </p>

            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Motion Graphics & Animation Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Create animated visual content for products, brands, advertising,
              presentations, websites and digital campaigns.
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

      {/* INDUSTRIES */}
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
            Motion Graphics for Different Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create industry-specific animated content for technology, consumer
            brands, corporate communication and more.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((item) => (
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

      {/* FORMATS */}
      <section
        aria-labelledby="formats-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Formats
          </p>

          <h2
            id="formats-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Different Types of Motion Graphics Content
          </h2>

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

      {/* USE CASES */}
      <section
        aria-labelledby="use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Marketing Applications
          </p>

          <h2
            id="use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Motion Graphics for Marketing & Communication
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Use animated content across your website, advertising,
            presentations, social media and product marketing.
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
              From Concept to Finished Motion Graphics Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              A structured creative process helps turn your message into clear
              and engaging animated content.
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
              Motion Graphics Built Around Your Brand
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Clear Communication",
                text: "We structure visual information so your audience can understand the message quickly and clearly.",
              },
              {
                title: "Brand Consistency",
                text: "Your existing visual identity can be translated into typography, graphics, animation and motion.",
              },
              {
                title: "Creative Animation",
                text: "Use movement, transitions, visual effects and timing to create memorable branded content.",
              },
              {
                title: "Multi-Platform Content",
                text: "Create motion graphics for websites, social media, presentations, advertising and digital campaigns.",
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
            Motion Graphics Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create motion graphics, animated
            explainers, product animations, brand animations and digital visual
            content for businesses across India.
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
              Motion Graphics FAQ
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

      {/* FINAL CTA */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Start Your Motion Graphics Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Make Your Brand Move?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your brand, product or message and we can help turn it
            into engaging motion graphics content.
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
