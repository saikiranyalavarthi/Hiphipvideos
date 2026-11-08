
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Industries We Serve | Professional Video Production Company | HipHipVideos",
  description:
    "Explore professional video production services for technology, SaaS, real estate, healthcare, education, fashion, manufacturing, automotive, and other industries. Create videos that engage audiences and grow your business with HipHipVideos.",
  alternates: {
    canonical: "https://hiphipvideos.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | HipHipVideos",
    description:
      "Industry-focused video production solutions for brands, businesses, and growing companies.",
    url: "https://hiphipvideos.com/industries",
    siteName: "HipHipVideos",
    type: "website",
  },
};

const industries = [
  {
    number: "01",
    title: "Technology & SaaS",
    slug: "apps-saas",
    description:
      "Make complex technology simple with engaging SaaS videos, software demonstrations, product walkthroughs, app promotional videos, and explainer animations.",
    services: ["SaaS Explainer Videos", "App Demo Videos", "Software Product Videos"],
    keywords: "SaaS video production, software explainer videos, technology video production",
    icon: "💻",
  },
  {
    number: "02",
    title: "Real Estate & Property",
    slug: "real-estate",
    description:
      "Showcase properties, developments, architecture, and investment opportunities through cinematic real estate videos, project films, and promotional content.",
    services: ["Property Walkthrough Videos", "Real Estate Promotional Videos", "Project Films"],
    keywords: "real estate video production, property marketing videos, real estate films",
    icon: "🏙️",
  },
  {
    number: "03",
    title: "Fashion & Lifestyle",
    slug: "fashion",
    description:
      "Create visually engaging fashion campaigns, brand films, product showcases, and lifestyle videos that communicate your brand identity.",
    services: ["Fashion Campaign Videos", "Brand Films", "Lifestyle Product Videos"],
    keywords: "fashion video production, lifestyle video production, fashion brand films",
    icon: "👗",
  },
  {
    number: "04",
    title: "Healthcare & Medical",
    slug: "healthcare",
    description:
      "Communicate healthcare services, medical innovations, hospital facilities, and patient education through clear and professional video content.",
    services: ["Hospital Promotional Videos", "Medical Explainer Videos", "Healthcare Brand Films"],
    keywords: "healthcare video production, hospital promotional videos, medical animation",
    icon: "🏥",
  },
  {
    number: "05",
    title: "Education & EdTech",
    slug: "education-edtech",
    description:
      "Help educational institutions and learning platforms connect with students through course videos, educational explainers, training content, and promotional films.",
    services: ["Online Course Videos", "Educational Explainer Videos", "Institutional Films"],
    keywords: "education video production, e-learning videos, EdTech video production",
    icon: "🎓",
  },
  {
    number: "06",
    title: "Industrial & Manufacturing",
    slug: "industrial-manufacturing",
    description:
      "Present industrial capabilities, manufacturing processes, machinery, facilities, and engineering solutions with professional corporate and industrial videos.",
    services: ["Factory Profile Videos", "Industrial Process Videos", "Product Demonstrations"],
    keywords: "industrial video production, manufacturing videos, factory profile films",
    icon: "🏭",
  },
  {
    number: "07",
    title: "Consumer Products & D2C",
    slug: "consumer-products",
    description:
      "Make your products stand out with product commercials, social media videos, product demonstrations, and direct-to-consumer brand storytelling.",
    services: ["Product Commercials", "D2C Brand Videos", "Social Media Product Videos"],
    keywords: "D2C video production, consumer product videos, product advertising videos",
    icon: "📦",
  },
  {
    number: "08",
    title: "Corporate & Professional Services",
    slug: "corporate",
    description:
      "Build trust and strengthen your business identity with corporate films, company profile videos, leadership messages, and internal communication videos.",
    services: ["Corporate Films", "Company Profile Videos", "Leadership Videos"],
    keywords: "corporate video production, company profile video, business films",
    icon: "🏢",
  },
  {
    number: "09",
    title: "Electronics & Gadgets",
    slug: "electronics-gadgets",
    description:
      "Highlight product features, technology, design, and performance through detailed product videos, demonstrations, and 3D animation.",
    services: ["Gadget Promotional Videos", "3D Product Animation", "Product Demonstrations"],
    keywords: "electronics video production, gadget promotional videos, 3D product animation",
    icon: "📱",
  },
  {
    number: "10",
    title: "Automotive",
    slug: "automotive",
    description:
      "Showcase vehicles, automotive products, features, and performance through cinematic promotional videos and product-focused storytelling.",
    services: ["Automotive Commercials", "Vehicle Promotional Videos", "Product Films"],
    keywords: "automotive video production, car promotional videos, vehicle commercials",
    icon: "🚘",
  },
  {
    number: "11",
    title: "Food & Consumer Brands",
    slug: "consumer-products",
    description:
      "Bring food, beverages, and consumer brands to life with engaging commercials, product visuals, and social media campaigns.",
    services: ["Food Commercials", "Product Videos", "Brand Campaign Videos"],
    keywords: "food commercial production, beverage promotional videos, brand videos",
    icon: "🍽️",
  },
  {
    number: "12",
    title: "Startups & Emerging Brands",
    slug: "apps-saas",
    description:
      "Help new businesses introduce their ideas, explain their products, and build brand awareness through launch films, pitch videos, and promotional content.",
    services: ["Startup Explainer Videos", "Pitch Videos", "Brand Launch Films"],
    keywords: "startup video production, pitch videos, brand launch videos",
    icon: "🚀",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Industry",
    description:
      "We understand your business, target audience, products, objectives, and communication requirements.",
  },
  {
    number: "02",
    title: "Creative Strategy",
    description:
      "We develop the video concept, messaging, creative direction, and production approach for your project.",
  },
  {
    number: "03",
    title: "Production & Animation",
    description:
      "Our creative workflow brings your story to life through video production, editing, motion graphics, and animation.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "Receive polished video content prepared for your website, social media, advertising, presentations, and campaigns.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-[#080808] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,255,0,0.13),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#CCFF00]">
            Industries We Serve
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Creative Videos.
            <span className="block text-[#CCFF00]">
              Industry Impact.
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/65">
              Every industry has a different story to tell. We create
              professional video content that helps businesses explain
              their products, showcase their expertise, connect with
              audiences, and communicate their brand value.
            </p>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                href="/quote"
                className="rounded-full bg-[#CCFF00] px-8 py-4 font-bold text-black transition hover:bg-white"
              >
                Start Your Project ↗
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
                What We Do
              </p>
              <h2 className="max-w-3xl text-4xl font-black md:text-6xl">
                Video Solutions Across Industries
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/55">
              From emerging startups to established businesses, we
              develop creative video solutions for different business
              goals and audiences.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article
                key={industry.number}
                className="group flex flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/50 hover:bg-white/[0.07] md:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-4xl">{industry.icon}</span>
                  <span className="text-sm font-bold tracking-widest text-white/30">
                    {industry.number}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold transition group-hover:text-[#CCFF00]">
                  {industry.title}
                </h3>

                <p className="mb-7 flex-1 text-sm leading-7 text-white/55">
                  {industry.description}
                </p>

                <div className="mb-7 border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#CCFF00]">
                    Video Solutions
                  </p>
                  <ul className="space-y-2">
                    {industry.services.map((service) => (
                      <li
                        key={service}
                        className="text-sm text-white/65"
                      >
                        <span className="mr-2 text-[#CCFF00]">↗</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-[#CCFF00] transition group-hover:gap-4"
                >
                  Explore Industry <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SERVICES */}
      <section className="bg-[#CCFF00] px-6 py-20 text-black md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em]">
            Our Creative Capabilities
          </p>
          <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            One Creative Partner. Multiple Video Solutions.
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Corporate Video Production", "Company profiles, business films, and corporate communication."],
              ["02", "Product Video Production", "Product demonstrations, commercials, and promotional videos."],
              ["03", "Explainer Video Production", "Animated explainers that make complex ideas easier to understand."],
              ["04", "3D Animation & Motion Graphics", "Visual storytelling, 3D product animation, and motion design."],
              ["05", "Commercial Video Production", "Creative advertising films and brand campaigns."],
              ["06", "Real Estate Video Production", "Property films, project showcases, and walkthrough videos."],
              ["07", "Social Media Video Content", "Short-form videos for digital campaigns and social platforms."],
              ["08", "Brand Storytelling", "Brand films that communicate your vision, mission, and values."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-black/20 pt-6">
                <span className="text-sm font-bold opacity-50">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="mt-12 inline-flex rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Discover All Services →
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
              How We Work
            </p>
            <h2 className="text-4xl font-black md:text-6xl">
              From Business Idea to Powerful Video
            </h2>
            <p className="mt-6 leading-8 text-white/55">
              Our video production process combines strategic planning,
              creative storytelling, production, and post-production to
              create content aligned with your business objectives.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.number} className="border-t border-white/20 pt-6">
                <span className="text-4xl font-black text-[#CCFF00]">
                  {item.number}
                </span>
                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#111] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
              Why HipHipVideos
            </p>
            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Creative Thinking Meets Business Communication.
            </h2>
            <p className="mt-7 leading-8 text-white/55">
              Effective business videos do more than look attractive.
              They communicate a message, explain a solution, present a
              product, and help audiences understand why a brand matters.
              We focus on combining creative storytelling with clear
              business objectives.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Industry-focused storytelling",
              "Creative video concepts",
              "Professional editing",
              "Motion graphics and animation",
              "Brand-focused communication",
              "Digital-ready video formats",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="mb-4 block text-2xl text-[#CCFF00]">
                  0{index + 1}
                </span>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
            Frequently Asked Questions
          </p>
          <h2 className="mb-12 text-4xl font-black md:text-6xl">
            Industries & Video Production FAQs
          </h2>

          <div className="space-y-4">
            {[
              [
                "Which industries does HipHipVideos serve?",
                "HipHipVideos offers video production solutions for technology, SaaS, real estate, healthcare, education, fashion, manufacturing, automotive, consumer products, and corporate businesses.",
              ],
              [
                "What types of videos can you create for businesses?",
                "Depending on the project, video solutions can include corporate films, product videos, commercials, explainer videos, 3D product animation, motion graphics, and social media videos.",
              ],
              [
                "Can you create videos for startups and small businesses?",
                "Yes. Video concepts can be planned around your brand, target audience, communication needs, and available project budget.",
              ],
              [
                "Do you create animated videos for technology companies?",
                "Yes. Explainer animations, software demonstrations, product walkthroughs, and motion graphics can help technology businesses communicate complex products and services.",
              ],
              [
                "How do I start a video production project?",
                "Contact HipHipVideos with your business details, project requirements, reference examples, and expected timeline. The team can discuss a suitable creative approach.",
              ],
            ].map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  {question}
                  <span className="text-2xl text-[#CCFF00] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#CCFF00] px-8 py-16 text-center text-black md:px-16 md:py-24">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em]">
            Let's Create Something Powerful
          </p>
          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Your Industry Has a Story. Let's Make It Stand Out.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl leading-8 text-black/65">
            Tell us about your business, your audience, and your video
            goals. Let's develop a creative video solution for your brand.
          </p>
          <Link
            href="/quote"
            className="mt-10 inline-flex rounded-full bg-black px-9 py-4 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Get a Project Quote ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
