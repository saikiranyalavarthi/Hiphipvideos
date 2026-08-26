import Link from "next/link";

export const metadata = {
  title: "3D Product Animation Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates 3D product animation, 3D product visualization, product rendering, CGI product videos and 3D motion graphics for brands in Hyderabad and across India.",
  alternates: {
    canonical: "/services/3d-product-animation",
  },
  openGraph: {
    title: "3D Product Animation Company in Hyderabad | HipHipVideos",
    description:
      "Professional 3D product animation, CGI product videos and 3D product visualization by HipHipVideos.",
    url: "/services/3d-product-animation",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "3D Product Animation",
    description:
      "Bring products to life with detailed 3D animation that demonstrates design, features, functionality and product experiences.",
  },
  {
    number: "02",
    title: "3D Product Visualization",
    description:
      "Create realistic digital product visuals before manufacturing, photography or physical production is complete.",
  },
  {
    number: "03",
    title: "CGI Product Videos",
    description:
      "Create cinematic CGI product videos for advertising, product launches, websites, presentations and digital campaigns.",
  },
  {
    number: "04",
    title: "3D Product Explainer Videos",
    description:
      "Explain complex product mechanisms, internal components and functionality through clear 3D animation.",
  },
  {
    number: "05",
    title: "3D Motion Graphics",
    description:
      "Combine 3D objects, typography, motion graphics and visual effects to create engaging branded content.",
  },
  {
    number: "06",
    title: "Product Feature Animation",
    description:
      "Highlight important product features, materials, technology and benefits with precise visual animation.",
  },
];

const industries = [
  "Consumer Electronics",
  "Automobiles",
  "Medical Devices",
  "Healthcare",
  "Technology",
  "Industrial Products",
  "Manufacturing",
  "Furniture",
  "Home Appliances",
  "Beauty Products",
  "FMCG",
  "D2C Brands",
  "Fashion",
  "Engineering",
  "Architecture",
  "Real Estate",
];

const formats = [
  "3D Product Animation",
  "3D Product Commercial",
  "CGI Product Advertisement",
  "3D Product Explainer",
  "Product Visualization",
  "Product Launch Video",
  "3D Product Demo",
  "3D Feature Animation",
  "Technical Animation",
  "3D Motion Graphics",
  "CGI Advertisement",
  "Product Rendering",
];

const useCases = [
  "Product Launches",
  "Digital Advertising",
  "E-Commerce",
  "Product Websites",
  "Landing Pages",
  "Social Media",
  "YouTube",
  "Instagram",
  "Sales Presentations",
  "Trade Shows",
  "Investor Presentations",
  "Product Catalogues",
];

const process = [
  {
    number: "01",
    title: "Product Understanding",
    description:
      "We understand your product, design, materials, functionality, target audience and the message the animation needs to communicate.",
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "We develop the visual concept, animation style, camera direction, environment and storytelling approach.",
  },
  {
    number: "03",
    title: "3D Modeling",
    description:
      "Product geometry and visual details are prepared to create an accurate digital representation of the product.",
  },
  {
    number: "04",
    title: "Materials & Lighting",
    description:
      "Materials, textures, lighting and environments are developed to create the desired realistic or stylized visual appearance.",
  },
  {
    number: "05",
    title: "Animation & Rendering",
    description:
      "Camera movement, product motion, feature demonstrations and visual effects are animated and rendered.",
  },
  {
    number: "06",
    title: "Post-Production",
    description:
      "Editing, compositing, sound design, music, color treatment and final formatting complete the production.",
  },
];

const faqs = [
  {
    question: "What is 3D product animation?",
    answer:
      "3D product animation uses computer-generated 3D models, materials, lighting, camera movement and animation to visually demonstrate a product, its design or functionality.",
  },
  {
    question:
      "What is the difference between 3D product animation and product video?",
    answer:
      "A traditional product video generally uses a physical product and camera production, while 3D product animation can create a digital version of the product and visualize features, movements and environments that may be difficult to film.",
  },
  {
    question: "Does HipHipVideos create 3D product animation in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates 3D product animation and product visualization content for businesses in Hyderabad and across India.",
  },
  {
    question:
      "Can you create a 3D animation before the product is manufactured?",
    answer:
      "Yes. When suitable product design information or 3D assets are available, a digital product visualization can be created before physical production.",
  },
  {
    question: "Can 3D animation show the inside of a product?",
    answer:
      "Yes. 3D animation can visually reveal internal components, mechanisms, layers and processes that cannot normally be seen from the outside.",
  },
  {
    question: "Can 3D product animation be used for advertising?",
    answer:
      "Yes. 3D product animations can be adapted for advertisements, product launches, websites, social media, presentations and digital campaigns.",
  },
  {
    question: "Can you create realistic CGI product videos?",
    answer:
      "Yes. CGI product videos can use detailed models, materials, lighting, environments, camera movement and visual effects to create realistic product imagery.",
  },
  {
    question: "Can 3D product videos be used for e-commerce?",
    answer:
      "Yes. Short product animations and visual demonstrations can be used across product pages, landing pages, advertisements and other e-commerce marketing channels.",
  },
];

export default function ThreeDProductAnimationPage() {
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
              3D Product Animation
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              3D Product Animation That{" "}
              <span className="text-[#CCFF00]">
                Makes Products Impossible to Ignore
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates 3D product animations, CGI product videos,
              product visualizations and 3D motion graphics that help brands
              demonstrate products, explain features and create high-impact
              visual experiences.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              3D product animation company in Hyderabad serving brands across
              India.
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
              Product Visualization
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Show Your Product From Every Angle
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Some products are difficult to demonstrate with conventional
              photography or live-action video. 3D animation allows brands to
              control the camera, environment, lighting and product movement.
            </p>

            <p>
              Complex features, internal mechanisms, materials and product
              experiences can be visualized in ways that traditional production
              may not be able to capture.
            </p>

            <p>
              HipHipVideos creates 3D product content around your product,
              audience, campaign and communication objective.
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
              Our 3D Services
            </p>

            <h2
              id="services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              3D Product Animation & CGI Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Create detailed product visuals for advertising, marketing,
              product education, launches and digital experiences.
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
            3D Product Animation for Different Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Visualize consumer products, technology, industrial equipment and
            other products through detailed 3D animation.
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
            Create Different Types of 3D Product Videos
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
            Use 3D Product Animation Across Your Marketing
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create reusable product visuals for launches, websites, advertising,
            e-commerce and sales presentations.
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
              From Product Design to Final 3D Animation
            </h2>
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
              3D Product Visualization Built Around Your Brand
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Visual Product Accuracy",
                text: "We build the visual story around your product design, features, materials and communication requirements.",
              },
              {
                title: "Creative Control",
                text: "3D production gives you flexibility over camera movement, environments, lighting and product presentation.",
              },
              {
                title: "Complex Features",
                text: "Show internal mechanisms, product layers, technology and functionality that may be difficult to capture physically.",
              },
              {
                title: "Marketing Ready",
                text: "Create product assets suitable for websites, advertising, social media, presentations and product launches.",
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
            3D Product Animation Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create 3D product animations, CGI product
            videos and product visualization content for brands, startups and
            businesses across India.
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
              3D Product Animation FAQ
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
            Start Your 3D Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Bring Your Product to Life?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your product, animation requirements and marketing
            objective. We can help turn your product into a powerful 3D visual
            experience.
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
