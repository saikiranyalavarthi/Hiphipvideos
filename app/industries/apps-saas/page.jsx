import Link from "next/link";

export const metadata = {
  title: "SaaS & App Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates SaaS videos, app demo videos, product videos, explainer videos, launch videos and motion graphics for technology and software companies in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/apps-saas",
  },
  openGraph: {
    title: "SaaS & App Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional SaaS, app and technology video production for startups and software companies.",
    url: "/industries/apps-saas",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "SaaS Product Videos",
    description:
      "Show your software product, platform and key features through clear, engaging product videos designed for potential customers.",
    href: "/services/product-video-production",
  },
  {
    number: "02",
    title: "SaaS Explainer Videos",
    description:
      "Turn complex software concepts, workflows and technology into easy-to-understand visual stories.",
    href: "/services/explainer-videos",
  },
  {
    number: "03",
    title: "App Demo Videos",
    description:
      "Demonstrate your mobile or web application through structured product walkthroughs and engaging visual content.",
    href: "/services/product-video-production",
  },
  {
    number: "04",
    title: "3D Product Animation",
    description:
      "Use 3D animation and visualisation to explain technology, hardware, interfaces and product experiences.",
    href: "/services/3d-product-animation",
  },
  {
    number: "05",
    title: "Motion Graphics",
    description:
      "Use animation, typography, UI elements and branded graphics to communicate technology and product benefits.",
    href: "/services/motion-graphics",
  },
  {
    number: "06",
    title: "Corporate Videos",
    description:
      "Tell your company's story, showcase your team and communicate your technology business to customers and stakeholders.",
    href: "/services/corporate-video-production",
  },
];

const contentTypes = [
  "SaaS Product Videos",
  "App Demo Videos",
  "Software Explainer Videos",
  "Product Launch Videos",
  "Feature Videos",
  "Technology Videos",
  "UI/UX Videos",
  "Motion Graphics",
  "3D Product Videos",
  "Corporate Films",
  "Brand Videos",
  "Startup Videos",
];

const useCases = [
  "Product Launches",
  "Website Homepage",
  "SaaS Landing Pages",
  "App Store Marketing",
  "Sales Presentations",
  "Investor Presentations",
  "Social Media",
  "Digital Advertising",
  "Customer Onboarding",
  "Product Education",
  "Email Marketing",
  "YouTube",
];

const audiences = [
  "SaaS Startups",
  "Software Companies",
  "Mobile App Companies",
  "Technology Startups",
  "FinTech Companies",
  "EdTech Companies",
  "HealthTech Companies",
  "AI Companies",
  "B2B SaaS",
  "B2C Apps",
  "Enterprise Software",
  "Technology Products",
];

const process = [
  {
    number: "01",
    title: "Understand Your Product",
    description:
      "We learn about your software, application, target audience, positioning, features and business objectives.",
  },
  {
    number: "02",
    title: "Define the Story",
    description:
      "We identify the most important message and create a clear narrative that helps your audience understand the product.",
  },
  {
    number: "03",
    title: "Script & Storyboard",
    description:
      "The product story is converted into a structured script and storyboard covering the visual and narrative flow.",
  },
  {
    number: "04",
    title: "Design & Production",
    description:
      "UI screens, product visuals, motion graphics, live footage or other visual elements are produced according to the concept.",
  },
  {
    number: "05",
    title: "Animation & Editing",
    description:
      "Editing, motion graphics, animation, transitions, sound design and visual effects bring the video together.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "The finished video is prepared for your website, social platforms, advertising, presentations or other marketing channels.",
  },
];

const faqs = [
  {
    question: "What is SaaS video production?",
    answer:
      "SaaS video production creates visual content that explains software products, platforms, features and customer experiences. This can include product videos, explainer videos, demos, launch videos and motion graphics.",
  },
  {
    question: "Does HipHipVideos create SaaS videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad, Telangana, creating SaaS, app, technology and software videos for companies in Hyderabad and across India.",
  },
  {
    question: "Can you create a video for a mobile app?",
    answer:
      "Yes. App videos can demonstrate user flows, features, interfaces and product benefits through screen recordings, motion graphics, animation or a combination of visual techniques.",
  },
  {
    question: "Can you create videos for B2B SaaS companies?",
    answer:
      "Yes. B2B SaaS videos can be designed to explain business workflows, software capabilities, customer problems, product benefits and use cases to decision-makers.",
  },
  {
    question: "Can you explain a complex software product?",
    answer:
      "Yes. Explainer videos and motion graphics can simplify complex software workflows and technical concepts into a structured visual story.",
  },
  {
    question: "Can SaaS videos be used on landing pages?",
    answer:
      "Yes. Product and explainer videos can be created specifically for SaaS websites, landing pages and product marketing campaigns.",
  },
  {
    question: "Can you create videos for product launches?",
    answer:
      "Yes. Product launch videos can introduce a new application, software platform, feature or technology product and communicate its value to the intended audience.",
  },
  {
    question: "Do you provide scripting and storyboarding?",
    answer:
      "Yes. Depending on the project, the production process can include creative concept development, scripting, storyboarding, design, production, animation, editing and final delivery.",
  },
];

export default function AppsSaaSPage() {
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
              Apps & SaaS
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Video Production for{" "}
              <span className="text-[#CCFF00]">SaaS & App Companies</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates SaaS product videos, app demo videos,
              software explainers, product launch videos and motion graphics
              that help technology companies explain products and communicate
              their value.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              SaaS and app video production company in Hyderabad serving
              technology businesses across India.
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
              Technology Video Production
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Make Complex Software Easy to Understand
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Technology products can be difficult to explain with text alone. A
              well-planned video can demonstrate your software, product
              workflow, features and benefits in a way that is easier for
              customers to understand.
            </p>

            <p>
              HipHipVideos works with SaaS companies, startups, app businesses
              and technology brands to create visual content for product
              marketing, launches, sales and customer education.
            </p>

            <p>
              From product screens and UI animation to motion graphics,
              storytelling and professional editing, we build videos around the
              product and its audience.
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
              Video Services for SaaS & App Companies
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Choose the right video format for your software product,
              application, audience and marketing objective.
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
            Video Content for SaaS Products, Apps & Technology
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create visual content that helps potential customers discover,
            understand and evaluate your technology product.
          </p>

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

      {/* AUDIENCES */}
      <section
        aria-labelledby="audience-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Who We Work With
          </p>

          <h2
            id="audience-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Technology Businesses
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {audiences.map((item) => (
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
            Use SaaS Videos Throughout Your Customer Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Product videos can support awareness, product education, sales,
            launches and customer communication.
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
              From Product Understanding to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We combine product understanding, storytelling, design and
              production to create technology videos with a clear purpose.
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
              Technology Videos Built Around Your Product
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Product Understanding",
                text: "We focus on the product, audience and message before deciding how the video should communicate.",
              },
              {
                title: "Clear Storytelling",
                text: "Complex software features are structured into a visual story that is easier for audiences to follow.",
              },
              {
                title: "Creative Visuals",
                text: "UI screens, motion graphics, animation, typography and other visual elements can work together.",
              },
              {
                title: "Marketing Ready",
                text: "Videos can be created for websites, product launches, advertising, social media, presentations and sales.",
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
            SaaS & App Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad, Telangana and creates SaaS
            product videos, app videos, technology explainers, motion graphics
            and corporate videos for technology businesses across India.
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
              SaaS & App Video FAQ
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
            Start Your Technology Video Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Explain Your Product Better?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your SaaS product, app or technology and let us create
            a video that makes your product easier to understand.
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
