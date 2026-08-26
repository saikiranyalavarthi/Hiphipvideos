import Link from "next/link";

export const metadata = {
  title:
    "Healthcare Video Production Company in Hyderabad | Medical Videos | HipHipVideos",
  description:
    "HipHipVideos creates healthcare videos, hospital films, medical explainer videos, healthcare advertisements, doctor interviews, patient education videos and pharmaceutical content in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/healthcare",
  },
  openGraph: {
    title: "Healthcare Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional healthcare, medical and pharmaceutical video production for hospitals, clinics, healthcare brands and medical companies.",
    url: "/industries/healthcare",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Healthcare Video Production",
    description:
      "Professional healthcare videos that communicate your hospital, clinic, healthcare service, technology or brand clearly.",
    href: "/services/corporate-video-production",
  },
  {
    number: "02",
    title: "Medical Explainer Videos",
    description:
      "Clear visual explanations that make medical services, procedures, technologies and healthcare concepts easier to understand.",
    href: "/services/explainer-videos",
  },
  {
    number: "03",
    title: "Hospital Corporate Films",
    description:
      "Corporate films that showcase hospital facilities, doctors, departments, technology, expertise and patient-focused services.",
    href: "/services/corporate-video-production",
  },
  {
    number: "04",
    title: "Doctor & Expert Videos",
    description:
      "Professional doctor interviews, expert conversations and educational videos that communicate healthcare information clearly.",
    href: "/services/commercial-video-production",
  },
  {
    number: "05",
    title: "Healthcare Advertisements",
    description:
      "Creative healthcare advertising videos designed to communicate services, facilities and brand positioning across digital channels.",
    href: "/services/commercial-video-production",
  },
  {
    number: "06",
    title: "Medical 3D Animation",
    description:
      "3D animation and motion graphics for visualizing medical technology, procedures, products and complex healthcare concepts.",
    href: "/services/3d-product-animation",
  },
];

const healthcareTypes = [
  "Hospitals",
  "Clinics",
  "Diagnostic Centers",
  "Pharmaceutical Companies",
  "Medical Devices",
  "Healthcare Startups",
  "HealthTech",
  "Dental Clinics",
  "Fertility Centers",
  "Wellness Brands",
  "Medical Technology",
  "Healthcare Services",
  "Specialty Hospitals",
  "Research Organizations",
  "Healthcare Products",
  "Medical Brands",
];

const contentTypes = [
  "Hospital Corporate Films",
  "Healthcare Brand Films",
  "Medical Explainer Videos",
  "Doctor Interviews",
  "Patient Education Videos",
  "Healthcare Advertisements",
  "Medical Product Videos",
  "Medical Device Videos",
  "Hospital Facility Tours",
  "Healthcare Social Media Videos",
  "Pharmaceutical Videos",
  "3D Medical Animation",
];

const useCases = [
  "Hospital Websites",
  "Healthcare Websites",
  "Patient Education",
  "Doctor Profiles",
  "Social Media",
  "YouTube",
  "Digital Advertising",
  "Healthcare Campaigns",
  "Medical Conferences",
  "Presentations",
  "Internal Training",
  "Brand Marketing",
];

const process = [
  {
    number: "01",
    title: "Understand Your Healthcare Brand",
    description:
      "We understand your healthcare service, audience, communication goals and the information your video needs to communicate.",
  },
  {
    number: "02",
    title: "Research & Story Development",
    description:
      "We organize the story, key messages, interviews and visual information into a clear production concept.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Scripts, locations, interview planning, shot lists, production schedules and visual direction are prepared.",
  },
  {
    number: "04",
    title: "Healthcare Production",
    description:
      "We capture doctors, facilities, equipment, services, products and supporting visuals through professional production.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, voice-over, motion graphics and animation bring the healthcare story together.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Videos can be prepared for websites, social media, digital advertising, presentations and healthcare communication.",
  },
];

const faqs = [
  {
    question: "What is healthcare video production?",
    answer:
      "Healthcare video production creates professional visual content for hospitals, clinics, healthcare companies, medical brands, pharmaceutical businesses and health technology companies.",
  },
  {
    question:
      "Does HipHipVideos provide healthcare video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad creating healthcare, medical and pharmaceutical video content for organizations across India.",
  },
  {
    question: "Can you create hospital corporate films?",
    answer:
      "Yes. Hospital corporate films can showcase facilities, departments, doctors, technology, services, infrastructure and the overall patient-focused experience.",
  },
  {
    question: "Can you create medical explainer videos?",
    answer:
      "Yes. Medical explainer videos can use professional filming, motion graphics, animation and voice-over to communicate healthcare concepts and services clearly.",
  },
  {
    question: "Can you create doctor interview videos?",
    answer:
      "Yes. Doctor and healthcare expert interviews can be professionally filmed and edited for websites, social media, educational content and brand communication.",
  },
  {
    question: "Can you create patient education videos?",
    answer:
      "Yes. Patient education content can be structured around clear, understandable communication for healthcare websites, digital platforms and other appropriate channels.",
  },
  {
    question: "Can you create medical device videos?",
    answer:
      "Yes. Medical device and healthcare product videos can demonstrate product features, applications, workflows and technology using live production, motion graphics or 3D animation.",
  },
  {
    question: "Can you create healthcare videos for social media?",
    answer:
      "Yes. Healthcare brands can use short-form videos, educational content, expert videos and brand content across social media platforms.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HipHipVideos",
  description: "Healthcare and medical video production company in Hyderabad.",
  url: "https://hiphipvideos.com/industries/healthcare",
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
    "Healthcare Video Production",
    "Medical Video Production",
    "Healthcare Explainer Videos",
    "Hospital Corporate Films",
    "Medical Animation",
  ],
};

export default function HealthcarePage() {
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
              Healthcare Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Healthcare Videos That{" "}
              <span className="text-[#CCFF00]">Communicate With Clarity</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates healthcare videos, hospital films, medical
              explainers, doctor interviews, healthcare advertisements and
              medical product videos for healthcare organizations and brands.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Healthcare video production company in Hyderabad serving
              hospitals, clinics, healthcare brands and medical companies across
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
              Healthcare Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Make Healthcare Information Easier to Understand
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Healthcare organizations need to communicate important information
              clearly to patients, families, professionals and business
              audiences.
            </p>

            <p>
              Video can bring together doctors, facilities, technology,
              services, patient education and brand stories into an engaging
              visual experience.
            </p>

            <p>
              HipHipVideos combines professional production, interviews, motion
              graphics and animation to create healthcare content around your
              communication objectives.
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
              Healthcare & Medical Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Professional video production for hospitals, healthcare brands,
              medical companies and health technology businesses.
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

      {/* HEALTHCARE TYPES */}
      <section
        aria-labelledby="healthcare-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Healthcare Sectors
          </p>

          <h2
            id="healthcare-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Healthcare Organizations
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Visual storytelling for hospitals, healthcare companies, medical
            brands and health technology organizations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {healthcareTypes.map((item) => (
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
            Healthcare Video Content for Digital & Brand Communication
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
            Healthcare Videos for Patients, Professionals & Brands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create useful video assets for websites, patient communication,
            digital marketing, presentations and healthcare campaigns.
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
              From Healthcare Story to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We plan each healthcare production around the audience,
              communication objective and content requirements.
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
              Healthcare Storytelling Built Around Clear Communication
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Clear Communication",
                text: "We organize complex information into visual stories that are easier for audiences to follow.",
              },
              {
                title: "Professional Production",
                text: "Professional filming, interviews, lighting, editing and sound create polished healthcare content.",
              },
              {
                title: "Educational Content",
                text: "Motion graphics and animation can help explain healthcare services, technology and products.",
              },
              {
                title: "Multiple Formats",
                text: "Create long-form films together with shorter videos for websites, social media and digital campaigns.",
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
            Healthcare Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create healthcare videos, hospital films,
            medical explainers, doctor interviews, healthcare advertisements and
            medical product videos for organizations across India.
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
              Healthcare Video FAQ
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
            Start Your Healthcare Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Tell Your Healthcare Story?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your hospital, healthcare brand, medical product or
            communication objective and let us develop a professional video
            around it.
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
