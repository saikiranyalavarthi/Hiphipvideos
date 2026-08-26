import Link from "next/link";

export const metadata = {
  title: "Corporate Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates corporate films, company profile videos, corporate communication videos, employer branding films and business videos in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/corporate",
  },
  openGraph: {
    title: "Corporate Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional corporate video production for companies, startups, enterprises and growing businesses.",
    url: "/industries/corporate",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "Corporate Film Production",
    description:
      "Professional corporate films that communicate your company's story, values, capabilities, people and vision.",
    href: "/services/corporate-video-production",
  },
  {
    number: "02",
    title: "Company Profile Videos",
    description:
      "Present your company, services, expertise and capabilities through a professional company profile video.",
    href: "/services/corporate-video-production",
  },
  {
    number: "03",
    title: "Corporate Brand Films",
    description:
      "Creative brand films that communicate your business identity and build a stronger connection with your audience.",
    href: "/services/commercial-video-production",
  },
  {
    number: "04",
    title: "Corporate Communication Videos",
    description:
      "Clear business videos designed for internal communication, announcements, training and corporate messaging.",
    href: "/services/corporate-video-production",
  },
  {
    number: "05",
    title: "Employer Branding Videos",
    description:
      "Showcase your people, culture, workplace and employee experience to strengthen your employer brand.",
    href: "/services/corporate-video-production",
  },
  {
    number: "06",
    title: "Corporate Motion Graphics",
    description:
      "Use animated graphics, charts, typography and visual elements to simplify business information.",
    href: "/services/motion-graphics",
  },
];

const corporateTypes = [
  "Company Profile Videos",
  "Corporate Films",
  "Brand Films",
  "Employer Branding",
  "Internal Communication",
  "Training Videos",
  "Leadership Videos",
  "Business Videos",
  "Corporate Advertisements",
  "Annual Report Videos",
  "Event Videos",
  "Product Communication",
];

const industries = [
  "Technology",
  "IT Services",
  "SaaS",
  "Finance",
  "Banking",
  "Healthcare",
  "Pharmaceuticals",
  "Manufacturing",
  "Real Estate",
  "Education",
  "Automotive",
  "Professional Services",
];

const useCases = [
  "Company Websites",
  "LinkedIn",
  "YouTube",
  "Corporate Presentations",
  "Sales Meetings",
  "Investor Presentations",
  "Employee Communication",
  "Recruitment",
  "Employer Branding",
  "Training",
  "Digital Marketing",
  "Business Development",
];

const process = [
  {
    number: "01",
    title: "Understand Your Business",
    description:
      "We learn about your company, audience, brand positioning, objectives, people and communication requirements.",
  },
  {
    number: "02",
    title: "Creative Strategy",
    description:
      "We develop the story, creative direction and visual approach around your business communication goal.",
  },
  {
    number: "03",
    title: "Script & Planning",
    description:
      "We prepare scripts, interview questions, storyboards, shot lists, locations and production schedules.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Our team handles filming, interviews, cinematography, lighting, direction and on-location production.",
  },
  {
    number: "05",
    title: "Post-Production",
    description:
      "Editing, color grading, sound design, music, motion graphics and visual effects complete the corporate video.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Final videos can be prepared for websites, presentations, social media, internal communication and marketing campaigns.",
  },
];

const faqs = [
  {
    question: "What is corporate video production?",
    answer:
      "Corporate video production creates professional video content for businesses and organizations. It can include company profile films, corporate brand films, employer branding videos, training videos, internal communication and business presentations.",
  },
  {
    question:
      "Does HipHipVideos provide corporate video production in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad, Telangana, creating corporate films, company profile videos, brand films and business communication videos for companies across India.",
  },
  {
    question: "Can you create a company profile video?",
    answer:
      "Yes. Company profile videos can communicate your company's history, services, capabilities, people, facilities, values and vision in a professional visual format.",
  },
  {
    question: "Can you create videos for employee recruitment?",
    answer:
      "Yes. Employer branding videos can showcase company culture, employees, workplace experience and career opportunities to support recruitment and employer branding.",
  },
  {
    question: "Can you create corporate videos for LinkedIn?",
    answer:
      "Yes. Corporate videos can be created and adapted for LinkedIn, YouTube, websites and other digital channels.",
  },
  {
    question: "Can you create leadership or CEO videos?",
    answer:
      "Yes. Leadership videos can include interviews, messages, thought leadership content and professionally produced executive communication.",
  },
  {
    question: "Can corporate videos include interviews?",
    answer:
      "Yes. Employee, leadership, customer and subject-matter-expert interviews can be incorporated into corporate films and business communication videos.",
  },
  {
    question: "Can one corporate shoot produce multiple videos?",
    answer:
      "Yes. With suitable planning, one production can generate a main corporate film together with shorter social media edits, interview clips and other business communication assets.",
  },
];

export default function CorporateIndustryPage() {
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
              Corporate Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Corporate Video Production for{" "}
              <span className="text-[#CCFF00]">Businesses That Lead</span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates corporate films, company profile videos,
              brand films, employer branding videos and business communication
              content that helps companies communicate clearly and
              professionally.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Corporate video production company in Hyderabad serving startups,
              enterprises and businesses across India.
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
              Corporate Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Your Business Story Into Powerful Visual Communication
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              A strong corporate video can explain what your company does,
              introduce your people, communicate your values and present your
              capabilities in a format that is easy for audiences to understand.
            </p>

            <p>
              HipHipVideos creates corporate video content for startups, growing
              businesses, enterprises and organizations across different
              industries.
            </p>

            <p>
              From company profile films to employer branding and leadership
              videos, we build each production around the communication
              objective.
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
              Corporate Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Professional video services for company communication, marketing,
              recruitment, presentations and brand building.
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

      {/* CORPORATE VIDEO TYPES */}
      <section
        aria-labelledby="types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Video Types
          </p>

          <h2
            id="types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Corporate Video Content for Modern Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create professional visual communication for different business and
            marketing requirements.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {corporateTypes.map((item) => (
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

      {/* INDUSTRIES */}
      <section
        aria-labelledby="industries-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Business Industries
          </p>

          <h2
            id="industries-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Corporate Video Production Across Industries
          </h2>

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
            Corporate Videos for Marketing, Communication & Recruitment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Use professional corporate videos across your website, sales,
            recruitment, internal communication and digital marketing.
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
              From Business Strategy to Final Corporate Film
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              A structured production process helps turn complex business
              information into clear and engaging visual communication.
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
              Corporate Videos Built Around Your Business Goals
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Business Storytelling",
                text: "We turn your company's information, people and capabilities into a clear visual story.",
              },
              {
                title: "Professional Production",
                text: "Professional filming, interviews, lighting, cinematography and post-production create a polished result.",
              },
              {
                title: "Audience Focused",
                text: "Content is planned around the people you want to reach, from customers and investors to employees and candidates.",
              },
              {
                title: "Multiple Deliverables",
                text: "A single production can generate a main corporate film together with shorter digital and social media assets.",
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
            Corporate Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create corporate films, company profile
            videos, business videos, employer branding content and corporate
            communication videos for businesses across India.
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
              Corporate Video FAQ
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
            Start Your Corporate Video Project
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Tell Your Company Story?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your company, audience and communication objective and
            let us create a professional corporate video around your business.
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
