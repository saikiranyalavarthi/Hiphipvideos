import Link from "next/link";

export const metadata = {
  title: "Fashion Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates fashion campaign videos, fashion brand films, clothing videos, lifestyle videos and fashion advertising content in Hyderabad and across India.",
  alternates: {
    canonical: "/services/fashion-video-production",
  },
  openGraph: {
    title: "Fashion Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional fashion video production, campaign films, clothing videos and fashion brand content by HipHipVideos.",
    url: "/services/fashion-video-production",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Fashion Campaign Videos",
    description:
      "Cinematic campaign films designed to communicate the mood, identity and visual language of your fashion collection.",
  },
  {
    number: "02",
    title: "Fashion Brand Films",
    description:
      "Story-driven fashion films that communicate your brand identity, positioning, personality and creative direction.",
  },
  {
    number: "03",
    title: "Clothing Product Videos",
    description:
      "Professional videos showcasing clothing, apparel, accessories, details, materials and product styling.",
  },
  {
    number: "04",
    title: "Fashion Advertising Videos",
    description:
      "Short-form and campaign-ready fashion advertisements created for digital platforms, social media and paid campaigns.",
  },
  {
    number: "05",
    title: "Lifestyle Fashion Videos",
    description:
      "Lifestyle-driven visual content that places your fashion products into relevant environments, stories and experiences.",
  },
  {
    number: "06",
    title: "Fashion Social Media Videos",
    description:
      "Vertical and social-first fashion content designed for Instagram, YouTube, digital campaigns and other platforms.",
  },
];

const productionTypes = [
  "Fashion Campaigns",
  "Clothing Brands",
  "Apparel",
  "Luxury Fashion",
  "Streetwear",
  "Accessories",
  "Jewellery",
  "Footwear",
  "Beauty & Lifestyle",
  "D2C Fashion",
  "E-commerce",
  "Designer Brands",
];

const process = [
  {
    number: "01",
    title: "Creative Direction",
    description:
      "We understand your collection, brand identity, audience and campaign objective before developing the visual direction.",
  },
  {
    number: "02",
    title: "Concept & Moodboard",
    description:
      "We develop the visual concept, references, mood, styling direction, locations and overall creative approach.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Casting, styling, locations, shot planning, production scheduling and other details are prepared before filming.",
  },
  {
    number: "04",
    title: "Fashion Shoot",
    description:
      "Our production team captures your collection through professional cinematography, lighting, direction and movement.",
  },
  {
    number: "05",
    title: "Editing & Post",
    description:
      "Editing, color grading, music, sound design, motion graphics and visual finishing create the final campaign film.",
  },
  {
    number: "06",
    title: "Platform Delivery",
    description:
      "We prepare the finished content in formats suitable for websites, Instagram, YouTube, advertising and digital campaigns.",
  },
];

const contentFormats = [
  "Fashion Campaign Film",
  "Brand Story",
  "Collection Launch",
  "Product Video",
  "Model Video",
  "Lookbook Video",
  "Lifestyle Film",
  "Social Media Reel",
  "Fashion Advertisement",
  "Behind the Scenes",
  "Designer Story",
  "Launch Campaign",
];

const faqs = [
  {
    question: "What is fashion video production?",
    answer:
      "Fashion video production involves creating professional visual content for fashion brands, clothing collections, apparel, accessories, designers and lifestyle products.",
  },
  {
    question: "What types of fashion videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates fashion campaign films, fashion brand videos, clothing product videos, fashion advertisements, lifestyle videos and social media fashion content.",
  },
  {
    question: "Do you provide fashion video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and creates fashion videos for brands in Hyderabad and clients across India.",
  },
  {
    question: "Can you create videos for a clothing brand?",
    answer:
      "Yes. Clothing brands can use campaign films, product videos, lifestyle videos, collection launch videos and social media content to communicate their products and brand identity.",
  },
  {
    question: "Can you create fashion videos for Instagram?",
    answer:
      "Yes. Fashion content can be produced in vertical, square and horizontal formats depending on the platform and campaign requirements.",
  },
  {
    question: "Can you film fashion collections and models?",
    answer:
      "Yes. Depending on the project, production can include models, products, locations, styling, movement, close-up product details and cinematic campaign footage.",
  },
  {
    question: "Do you handle the creative concept and production?",
    answer:
      "Yes. The production process can cover creative direction, concept development, moodboards, pre-production, filming, editing, color grading, sound and final delivery.",
  },
  {
    question: "Can fashion videos be used for advertising?",
    answer:
      "Yes. Fashion campaign videos can be adapted for websites, social media, paid advertising, product launches, digital campaigns and other marketing channels.",
  },
];

export default function FashionVideoProductionPage() {
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
              Fashion Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Fashion Videos That{" "}
              <span className="text-[#CCFF00]">
                Make Your Brand Impossible to Ignore
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates fashion campaign films, clothing product
              videos, fashion brand films, lifestyle content and advertising
              videos that turn collections and products into powerful visual
              stories.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Fashion video production in Hyderabad and across India.
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
        aria-labelledby="fashion-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Fashion Storytelling
            </p>

            <h2
              id="fashion-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Your Collection Into a Visual Experience
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Fashion is visual. The way a collection looks, moves and feels can
              be just as important as the product itself. Professional video
              allows your audience to experience the mood and identity behind
              the collection.
            </p>

            <p>
              HipHipVideos combines creative direction, cinematography, styling,
              movement, locations and post-production to create fashion content
              designed around your brand and campaign.
            </p>

            <p>
              From a new collection launch to social media campaigns and
              e-commerce content, we create video formats that can support
              different stages of your fashion marketing journey.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section
        aria-labelledby="fashion-services-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Fashion Video Services
            </p>

            <h2
              id="fashion-services-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Fashion Video Production for Modern Brands
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Choose the video format that matches your collection, campaign,
              audience and marketing objective.
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

      {/* =========================================================
          INDUSTRIES / BRANDS
      ========================================================= */}
      <section
        aria-labelledby="fashion-industries-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Fashion & Lifestyle
          </p>

          <h2
            id="fashion-industries-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Content for Different Fashion Categories
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Our production approach can be adapted to different fashion,
            apparel, lifestyle and D2C brands.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {productionTypes.map((item) => (
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
          FORMATS
      ========================================================= */}
      <section
        aria-labelledby="fashion-formats-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Content Formats
          </p>

          <h2
            id="fashion-formats-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Create One Campaign With Multiple Video Assets
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            A single fashion production can generate different creative assets
            for launches, websites, social media and advertising.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {contentFormats.map((item) => (
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
        aria-labelledby="fashion-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Production Process
            </p>

            <h2
              id="fashion-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Creative Concept to Final Fashion Film
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We manage the production process from creative development through
              filming, editing and final delivery.
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
          WHY HIPHIPVIDEOS
      ========================================================= */}
      <section
        aria-labelledby="why-fashion-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-fashion-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Creative Video Production Built Around Your Fashion Brand
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Creative Direction",
                text: "We develop visual concepts around your collection, brand identity, audience and campaign objective.",
              },
              {
                title: "Cinematic Production",
                text: "Professional cinematography, lighting, movement and direction help your products look their best.",
              },
              {
                title: "Social-First Content",
                text: "We can create vertical and short-form assets designed for modern social platforms and digital campaigns.",
              },
              {
                title: "End-to-End Production",
                text: "From concept and pre-production to filming, editing, color grading and final delivery.",
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
        aria-labelledby="fashion-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="fashion-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Fashion Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a fashion video production company based in
            Hyderabad, Telangana, creating fashion campaign films, clothing
            videos, lifestyle content and fashion advertising videos for brands
            in Hyderabad and across India.
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
        aria-labelledby="fashion-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Fashion Video FAQ
            </p>

            <h2
              id="fashion-faq-heading"
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
          CTA
      ========================================================= */}
      <section className="border-t border-white/10 py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Start Your Fashion Campaign
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Create a Fashion Video That Gets Attention?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your collection, campaign or fashion brand and let's
            build the right visual production around it.
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
