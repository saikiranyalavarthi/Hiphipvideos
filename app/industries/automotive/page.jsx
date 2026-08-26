import Link from "next/link";

export const metadata = {
  title:
    "Automotive Video Production Company in Hyderabad | Automotive Videos | HipHipVideos",
  description:
    "HipHipVideos creates automotive videos, car commercials, automobile product videos, dealership videos, vehicle launch films and automotive advertising content in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/automotive",
  },
  openGraph: {
    title: "Automotive Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional automotive video production for automobile brands, dealerships, mobility companies and automotive businesses.",
    url: "/industries/automotive",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Automotive Commercials",
    description:
      "High-impact car and automobile commercials created to showcase design, performance, features and brand identity.",
    href: "/services/commercial-video-production",
  },
  {
    number: "02",
    title: "Vehicle Launch Videos",
    description:
      "Launch films and campaign videos designed to introduce new vehicles, models, technologies and automotive products.",
    href: "/services/commercial-video-production",
  },
  {
    number: "03",
    title: "Automotive Product Videos",
    description:
      "Detailed vehicle and automotive product videos that highlight features, technology, design and customer benefits.",
    href: "/services/product-video-production",
  },
  {
    number: "04",
    title: "Dealership Videos",
    description:
      "Professional dealership and showroom videos that showcase vehicles, facilities, services and customer experiences.",
    href: "/services/corporate-video-production",
  },
  {
    number: "05",
    title: "Automotive 3D Animation",
    description:
      "3D product animation and visual effects for automotive components, technology, engineering and product demonstrations.",
    href: "/services/3d-product-animation",
  },
  {
    number: "06",
    title: "Automotive Motion Graphics",
    description:
      "Motion graphics that explain vehicle technology, specifications, features, performance data and product advantages.",
    href: "/services/motion-graphics",
  },
];

const automotiveTypes = [
  "Automobile Brands",
  "Car Manufacturers",
  "Two-Wheeler Brands",
  "Electric Vehicles",
  "EV Startups",
  "Automotive Dealerships",
  "Luxury Cars",
  "Commercial Vehicles",
  "Auto Components",
  "Automotive Technology",
  "Mobility Companies",
  "Automotive Accessories",
  "Tyre Brands",
  "Battery Companies",
  "Auto Service Businesses",
  "Automotive Startups",
];

const contentTypes = [
  "Car Commercials",
  "Automotive Brand Films",
  "Vehicle Launch Videos",
  "Car Product Videos",
  "Automotive Advertisements",
  "Dealership Videos",
  "Showroom Videos",
  "Automotive Explainer Videos",
  "EV Product Videos",
  "Automotive Technology Videos",
  "Car Feature Videos",
  "Automotive Social Media Videos",
];

const useCases = [
  "Vehicle Launches",
  "Brand Campaigns",
  "Digital Advertising",
  "Social Media",
  "YouTube",
  "Automotive Websites",
  "Dealership Marketing",
  "Product Launches",
  "Auto Shows",
  "Events",
  "Sales Presentations",
  "Corporate Marketing",
];

const process = [
  {
    number: "01",
    title: "Understand the Vehicle & Brand",
    description:
      "We understand your vehicle, target audience, positioning, campaign objective and the features that need to stand out.",
  },
  {
    number: "02",
    title: "Creative Concept",
    description:
      "We develop the creative direction, story, visual language and production approach for your automotive campaign.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Locations, vehicles, talent, storyboards, shot lists, schedules and production logistics are planned in detail.",
  },
  {
    number: "04",
    title: "Automotive Production",
    description:
      "Professional cinematography captures vehicles, driving sequences, interiors, exteriors, technology and brand environments.",
  },
  {
    number: "05",
    title: "Editing & Post-Production",
    description:
      "Editing, color grading, sound design, motion graphics and visual effects create a polished final automotive film.",
  },
  {
    number: "06",
    title: "Multi-Platform Delivery",
    description:
      "Videos can be delivered in formats for television, websites, YouTube, social media, advertising and events.",
  },
];

const faqs = [
  {
    question: "What is automotive video production?",
    answer:
      "Automotive video production creates professional visual content for automobile brands, dealerships, EV companies, vehicle manufacturers, auto component companies and mobility businesses.",
  },
  {
    question:
      "Does HipHipVideos provide automotive video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad creating automotive commercials, vehicle launch videos, product videos, dealership films and automotive advertising content.",
  },
  {
    question: "Can you create car commercials?",
    answer:
      "Yes. We can create cinematic car commercials focused on vehicle design, performance, technology, features and brand positioning.",
  },
  {
    question: "Can you create vehicle launch videos?",
    answer:
      "Yes. Vehicle launch videos can be developed for new cars, motorcycles, electric vehicles, commercial vehicles and automotive technology products.",
  },
  {
    question: "Can you create EV videos?",
    answer:
      "Yes. EV video production can showcase electric vehicles, battery technology, charging systems, features, design and the overall product experience.",
  },
  {
    question: "Can you create dealership videos?",
    answer:
      "Yes. Dealership videos can showcase showrooms, vehicle collections, service facilities, customer experiences and dealership services.",
  },
  {
    question: "Can you create automotive 3D animation?",
    answer:
      "Yes. 3D animation can visualize automotive components, engineering, technology, vehicle systems and product features.",
  },
  {
    question: "Can automotive videos be used on social media?",
    answer:
      "Yes. Automotive campaigns can be adapted into short-form videos and other formats for Instagram, YouTube, LinkedIn and digital advertising platforms.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HipHipVideos",
  description: "Automotive video production company in Hyderabad.",
  url: "https://hiphipvideos.com/industries/automotive",
  telephone: "+91 63021 11807",
  email: "info@hiphipvideos.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500008",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: [
    "Automotive Video Production",
    "Car Commercial Production",
    "Vehicle Launch Videos",
    "Automotive Product Videos",
    "Automotive 3D Animation",
  ],
};

export default function AutomotivePage() {
  return (
    <main className="bg-black text-white">
      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Automotive Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Automotive Videos That{" "}
              <span className="text-[#CCFF00]">Put Your Vehicle in Motion</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates automotive commercials, vehicle launch
              videos, car product films, dealership videos, EV content,
              automotive advertisements and technology-focused visual stories.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Automotive video production company in Hyderabad creating
              professional vehicle and automobile videos for brands across
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
              Automotive Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Vehicle Features Into Powerful Visual Stories
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Automotive brands compete through design, performance, technology
              and experience. Video gives brands a powerful way to communicate
              those qualities visually.
            </p>

            <p>
              From cinematic driving sequences and vehicle launches to product
              demonstrations and dealership films, every frame can be built
              around the audience and campaign objective.
            </p>

            <p>
              HipHipVideos combines creative direction, cinematography, editing,
              motion graphics and visual effects to create automotive content
              for modern brands.
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
              Automotive Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Professional video production for automobile brands, dealerships,
              EV companies, mobility businesses and automotive technology
              brands.
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

      {/* AUTOMOTIVE TYPES */}
      <section
        aria-labelledby="automotive-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Automotive Sectors
          </p>

          <h2
            id="automotive-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Automotive Brands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Visual content for vehicle manufacturers, EV companies, dealerships,
            automotive technology brands and mobility businesses.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {automotiveTypes.map((item) => (
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
            Automotive Video Content for Marketing & Advertising
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
            Applications
          </p>

          <h2
            id="use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Automotive Videos for Every Marketing Channel
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create cinematic automotive content for vehicle launches, digital
            campaigns, dealerships, social media and brand marketing.
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
              From Vehicle Concept to Final Automotive Film
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We plan every automotive production around the vehicle, audience,
              campaign message and distribution platform.
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
              Automotive Storytelling Built to Make Vehicles Stand Out
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Cinematic Storytelling",
                text: "We use creative direction and professional cinematography to present vehicles as experiences rather than simply specifications.",
              },
              {
                title: "Feature-Focused",
                text: "Vehicle design, performance, technology and key features can become central elements of the visual story.",
              },
              {
                title: "Launch Ready",
                text: "Create polished content for new vehicle launches, campaigns, dealerships and automotive events.",
              },
              {
                title: "Multi-Platform",
                text: "Adapt automotive campaigns for websites, YouTube, social media, digital advertising and presentations.",
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
            Automotive Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create automotive commercials, vehicle
            launch films, car product videos, dealership content, EV videos and
            automotive advertising content for brands across India.
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
              Automotive Video FAQ
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
            Start Your Automotive Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Put Your Vehicle on Screen?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your vehicle, automotive brand, dealership or campaign
            and let us develop a professional video around your goals.
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
