import Link from "next/link";

export const metadata = {
  title:
    "Industrial & Manufacturing Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates industrial videos, manufacturing films, factory videos, product demonstrations, corporate films, process videos and B2B marketing videos in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/industrial-manufacturing",
  },
  openGraph: {
    title:
      "Industrial & Manufacturing Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional industrial and manufacturing video production for factories, manufacturers, engineering companies and B2B brands.",
    url: "/industries/industrial-manufacturing",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Industrial Video Production",
    description:
      "Professional industrial videos that showcase manufacturing facilities, processes, machinery, people, technology and capabilities.",
    href: "/services/corporate-video-production",
  },
  {
    number: "02",
    title: "Manufacturing Plant Videos",
    description:
      "Visual tours of factories and manufacturing facilities that communicate scale, infrastructure, technology and production capabilities.",
    href: "/services/corporate-video-production",
  },
  {
    number: "03",
    title: "Industrial Product Videos",
    description:
      "Product-focused videos that demonstrate industrial equipment, machinery, components and engineering products.",
    href: "/services/product-video-production",
  },
  {
    number: "04",
    title: "Industrial Process Videos",
    description:
      "Clear visual explanations of manufacturing processes, workflows, production systems and technical operations.",
    href: "/services/explainer-videos",
  },
  {
    number: "05",
    title: "Industrial Corporate Films",
    description:
      "Corporate films that communicate your company's capabilities, expertise, facilities, people and business story.",
    href: "/services/corporate-video-production",
  },
  {
    number: "06",
    title: "3D & Motion Graphics",
    description:
      "Use animation, technical graphics and motion design to explain complex machinery, processes and engineering concepts.",
    href: "/services/3d-product-animation",
  },
];

const industries = [
  "Manufacturing",
  "Engineering",
  "Automotive",
  "Industrial Equipment",
  "Machinery",
  "Pharmaceuticals",
  "Chemicals",
  "Construction",
  "Steel",
  "Electrical",
  "Electronics",
  "Renewable Energy",
  "Infrastructure",
  "Packaging",
  "Logistics",
  "Industrial Technology",
];

const contentTypes = [
  "Factory Videos",
  "Manufacturing Videos",
  "Industrial Films",
  "Plant Tour Videos",
  "Process Videos",
  "Machine Demonstration Videos",
  "Industrial Product Videos",
  "Corporate Films",
  "Training Videos",
  "Safety Videos",
  "Technical Explainer Videos",
  "B2B Marketing Videos",
];

const useCases = [
  "Company Websites",
  "LinkedIn",
  "YouTube",
  "Sales Presentations",
  "Trade Shows",
  "Exhibitions",
  "Investor Presentations",
  "Dealer Presentations",
  "Customer Meetings",
  "Recruitment",
  "B2B Marketing",
  "Digital Advertising",
];

const process = [
  {
    number: "01",
    title: "Understand the Business",
    description:
      "We learn about your company, products, manufacturing capabilities, target audience and communication objective.",
  },
  {
    number: "02",
    title: "Technical & Creative Planning",
    description:
      "We identify the processes, facilities, products and stories that need to be communicated visually.",
  },
  {
    number: "03",
    title: "Production Planning",
    description:
      "We plan locations, schedules, interviews, equipment, safety requirements, shot lists and production logistics.",
  },
  {
    number: "04",
    title: "Industrial Filming",
    description:
      "Our team captures factories, machinery, production lines, employees, products and operational processes.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, voice-over, motion graphics and technical visual effects bring the story together.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Videos can be delivered for websites, sales presentations, trade shows, LinkedIn, YouTube and B2B marketing campaigns.",
  },
];

const faqs = [
  {
    question: "What is industrial video production?",
    answer:
      "Industrial video production creates professional visual content for manufacturers, engineering companies, factories and industrial businesses. It can include factory tours, process videos, machine demonstrations, corporate films and technical explainers.",
  },
  {
    question:
      "Does HipHipVideos provide industrial video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad, Telangana, creating industrial, manufacturing and B2B video content for companies across India.",
  },
  {
    question: "Can you film manufacturing plants and factories?",
    answer:
      "Yes. Factory and manufacturing videos can showcase facilities, production lines, machinery, employees, technology, quality processes and operational capabilities.",
  },
  {
    question: "Can you create machine demonstration videos?",
    answer:
      "Yes. Industrial product videos can demonstrate machinery, equipment, components, operation, features and applications in a clear visual format.",
  },
  {
    question: "Can you explain complex manufacturing processes?",
    answer:
      "Yes. Process videos can combine live production footage, interviews, voice-over, motion graphics and animation to make technical processes easier to understand.",
  },
  {
    question: "Can you create videos for B2B marketing?",
    answer:
      "Yes. Industrial and manufacturing videos can be used for websites, LinkedIn, sales presentations, trade shows, exhibitions, customer meetings and other B2B marketing activities.",
  },
  {
    question: "Can you create 3D animation for industrial products?",
    answer:
      "Yes. 3D animation can visualize machinery, product components, internal mechanisms, engineering concepts and processes that may be difficult to capture through conventional filming.",
  },
  {
    question: "Can one production create multiple industrial videos?",
    answer:
      "Yes. A planned production can generate a main corporate or factory film along with shorter product demonstrations, process videos, social clips and sales assets.",
  },
];

export default function IndustrialManufacturingPage() {
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
              Industrial & Manufacturing
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Industrial & Manufacturing Videos That{" "}
              <span className="text-[#CCFF00]">Explain How You Build</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates industrial films, factory videos,
              manufacturing process videos, machine demonstrations, corporate
              films and technical visual content for B2B brands.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Industrial and manufacturing video production company in Hyderabad
              serving engineering, manufacturing and B2B companies across India.
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
              Industrial Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Make Complex Industrial Work Easy to Understand
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Industrial businesses often have complex products, machinery and
              processes that are difficult to communicate through text alone.
            </p>

            <p>
              Professional video can show how your factory works, how your
              products are manufactured and what makes your capabilities
              different.
            </p>

            <p>
              HipHipVideos combines cinematography, interviews, motion graphics
              and animation to turn technical information into engaging visual
              communication.
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
              Industrial & Manufacturing Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Professional visual content for manufacturing, engineering,
              industrial products and B2B marketing.
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
            Industrial Video Production Across Manufacturing Sectors
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create visual content for manufacturing, engineering, technology and
            industrial businesses.
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

      {/* CONTENT TYPES */}
      <section
        aria-labelledby="content-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Video Content
          </p>

          <h2
            id="content-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Industrial Video Content for B2B Marketing
          </h2>

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

      {/* USE CASES */}
      <section
        aria-labelledby="use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Business Applications
          </p>

          <h2
            id="use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Industrial Videos for Sales, Marketing & Communication
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Use professional industrial video content across your website, sales
            presentations, exhibitions, social media and B2B campaigns.
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
              From Factory Planning to Final Industrial Film
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We combine technical understanding with creative production to
              communicate your industrial story clearly.
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

      {/* WHY */}
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
              Industrial Storytelling Built Around Your Business
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Technical Storytelling",
                text: "We turn complex products, processes and capabilities into visual stories that audiences can understand.",
              },
              {
                title: "Professional Production",
                text: "Professional cinematography, interviews, lighting and post-production create a polished industrial film.",
              },
              {
                title: "B2B Focused",
                text: "Content can be structured for customers, dealers, investors, employees and business decision-makers.",
              },
              {
                title: "Multiple Assets",
                text: "One production can create a main film plus product demonstrations, process clips and short digital content.",
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
            Industrial Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create industrial films, factory videos,
            manufacturing process videos, machine demonstrations and B2B
            marketing content for businesses across India.
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
              Industrial Video FAQ
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
            Start Your Industrial Video Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Showcase Your Manufacturing Capabilities?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your factory, product, machinery or manufacturing
            process and let us create professional video content around it.
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
