import Link from "next/link";

export const metadata = {
  title: "Product Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates product videos, product launch films, demo videos, promotional videos and product commercials for brands, startups and businesses in Hyderabad and across India.",
  alternates: {
    canonical: "/services/product-video-production",
  },
  openGraph: {
    title: "Product Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional product videos, launch films, demos and promotional videos created by HipHipVideos in Hyderabad.",
    url: "/services/product-video-production",
    type: "website",
  },
};

const productVideoTypes = [
  {
    number: "01",
    title: "Product Launch Videos",
    description:
      "Introduce a new product with a strong visual story that highlights its value, features, design and customer experience.",
  },
  {
    number: "02",
    title: "Product Demo Videos",
    description:
      "Show customers how your product works through clear demonstrations, product walkthroughs and engaging visual explanations.",
  },
  {
    number: "03",
    title: "Product Commercials",
    description:
      "Create advertising-focused product videos designed to capture attention and communicate your product in a memorable way.",
  },
  {
    number: "04",
    title: "Product Feature Videos",
    description:
      "Highlight important product features, benefits and differentiators through concise and visually engaging content.",
  },
  {
    number: "05",
    title: "Ecommerce Product Videos",
    description:
      "Create product-focused videos that help online shoppers understand how a product looks, works and fits their needs.",
  },
  {
    number: "06",
    title: "Product Brand Films",
    description:
      "Combine product storytelling, brand identity and cinematic visuals to create a stronger connection between your product and audience.",
  },
];

const process = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "We learn about your product, target customer, key features, differentiators and the purpose of the video.",
  },
  {
    number: "02",
    title: "Creative Concept",
    description:
      "We develop the creative direction, story, messaging and visual approach around your product and audience.",
  },
  {
    number: "03",
    title: "Script & Storyboard",
    description:
      "The production is planned through scripting, storyboards, shot lists and visual references before filming begins.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "We film your product using professional lighting, cinematography, camera movement, direction and production techniques.",
  },
  {
    number: "05",
    title: "Editing & Motion",
    description:
      "The footage is shaped through editing, color grading, sound design, music, motion graphics and visual effects where required.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "We deliver the completed product video in formats suitable for websites, ecommerce, social media, advertising and digital campaigns.",
  },
];

const useCases = [
  "Product Launches",
  "Ecommerce Websites",
  "Amazon & Marketplace Content",
  "Social Media Campaigns",
  "Digital Advertising",
  "Brand Websites",
  "Sales Presentations",
  "Marketing Campaigns",
  "Investor & Pitch Content",
  "Retail & Distribution",
];

const faqs = [
  {
    question: "What is product video production?",
    answer:
      "Product video production is the process of creating professional visual content that demonstrates, promotes or tells the story of a product. Product videos can be used for launches, advertising, ecommerce, websites, social media and sales.",
  },
  {
    question: "What types of product videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates product launch videos, product demonstrations, product commercials, feature videos, ecommerce product videos and product-focused brand films.",
  },
  {
    question: "Do you provide product video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and provides product video production services for businesses in Hyderabad and clients across India.",
  },
  {
    question: "Can you create videos for ecommerce products?",
    answer:
      "Yes. Product videos can be created for ecommerce websites, online marketplaces, social media campaigns, digital advertising and product landing pages.",
  },
  {
    question: "Can you show product features and how the product works?",
    answer:
      "Yes. Product demonstrations can combine live-action filming, close-up product shots, motion graphics, animation, screen recordings and other visual techniques depending on the product.",
  },
  {
    question: "Do you handle product video editing?",
    answer:
      "Yes. Our production service can include editing, color grading, sound design, music, motion graphics, animation and final delivery.",
  },
  {
    question: "How can I start a product video project?",
    answer:
      "Contact HipHipVideos with your product details, target audience, intended platform and project requirements. We can then discuss the creative direction, production approach and next steps.",
  },
];

export default function ProductVideoProductionPage() {
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
              Product Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Product Videos That{" "}
              <span className="text-[#CCFF00]">
                Make Products Stand Out
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates professional product videos for
              brands, startups and businesses. From product launches
              and demonstrations to commercials, feature videos and
              ecommerce content, we turn products into engaging visual
              stories.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Product video production in Hyderabad and across India.
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
                View Product Videos
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section
        aria-labelledby="product-video-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Product Storytelling
            </p>

            <h2
              id="product-video-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Show Customers Why Your Product Matters
            </h2>

          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">

            <p>
              A good product video helps customers quickly understand
              what a product is, how it works and why it is valuable.
              The right visuals can make features easier to understand
              and give your audience a stronger sense of the product.
            </p>

            <p>
              HipHipVideos combines product cinematography, creative
              storytelling, motion graphics and professional post-production
              to create videos that present products clearly and
              attractively.
            </p>

            <p>
              Whether you are launching a new product, building an
              ecommerce campaign, running digital advertising or
              updating your website, we can create a product video
              around the goal and audience of your campaign.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          TYPES OF PRODUCT VIDEOS
      ========================================================= */}
      <section
        aria-labelledby="product-video-types-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Product Video Services
            </p>

            <h2
              id="product-video-types-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Product Video Content for Every Stage of Your Campaign
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              From product launches and demonstrations to ecommerce and
              advertising content, we create different video formats
              based on your product and marketing objective.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">

            {productVideoTypes.map((item) => (
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
        aria-labelledby="product-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

          <div className="max-w-4xl">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Product Video Process
            </p>

            <h2
              id="product-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Product Brief to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We manage the production process from understanding your
              product and audience through creative development, filming,
              editing and final delivery.
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

                <h3 className="mt-4 text-xl font-bold">
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
          USE CASES
      ========================================================= */}
      <section
        aria-labelledby="product-use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >

        <div className="mx-auto max-w-[1200px] px-6 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Where Product Videos Are Used
          </p>

          <h2
            id="product-use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Product Videos Built for Marketing & Sales
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Product videos can be adapted for different customer
            touchpoints, campaigns and marketing channels.
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
        aria-labelledby="why-product-video-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-product-video-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Product Videos Designed Around Your Audience
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {[
              {
                title: "Product-Focused Storytelling",
                text:
                  "We focus on the product's value, features, experience and the reason customers should care.",
              },
              {
                title: "Professional Visuals",
                text:
                  "Product cinematography, lighting, composition and movement help present your product with clarity.",
              },
              {
                title: "Creative Post-Production",
                text:
                  "Editing, color, sound, motion graphics and visual effects can be combined to create a polished final video.",
              },
              {
                title: "Marketing Ready",
                text:
                  "Videos can be planned for websites, ecommerce, social media, advertising, presentations and campaigns.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

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
        aria-labelledby="product-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad Product Video Production
          </p>

          <h2
            id="product-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Product Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a video production company based in
            Hyderabad, Telangana. We create product videos for brands,
            startups and businesses in Hyderabad and work with clients
            across India.
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
        aria-labelledby="product-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >

        <div className="mx-auto max-w-[1000px] px-6">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Product Video FAQ
            </p>

            <h2
              id="product-faq-heading"
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
            Start Your Product Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Put Your Product in the Spotlight?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your product, audience and campaign goals.
            We'll help you explore the right creative and production
            approach.
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