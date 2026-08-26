import Link from "next/link";

export const metadata = {
  title: "Franchise Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates franchise marketing videos, franchise promotional videos, franchise recruitment videos and brand films for businesses in Hyderabad and across India.",
  alternates: {
    canonical: "/services/franchise-videos",
  },
  openGraph: {
    title: "Franchise Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional franchise marketing, promotional and recruitment videos created by HipHipVideos in Hyderabad.",
    url: "/services/franchise-videos",
    type: "website",
  },
};

const franchiseTypes = [
  {
    number: "01",
    title: "Franchise Promotional Videos",
    description:
      "Present your franchise opportunity, brand strengths and business model through a professional promotional video.",
  },
  {
    number: "02",
    title: "Franchise Recruitment Videos",
    description:
      "Create engaging videos designed to introduce potential franchise partners to your brand and business opportunity.",
  },
  {
    number: "03",
    title: "Franchise Brand Films",
    description:
      "Tell your brand story, communicate your values and showcase the experience behind your franchise network.",
  },
  {
    number: "04",
    title: "Franchise Opportunity Videos",
    description:
      "Explain the franchise model, support structure, investment opportunity and business proposition through visual storytelling.",
  },
  {
    number: "05",
    title: "Franchise Location Videos",
    description:
      "Showcase successful franchise locations, facilities, customer experiences and day-to-day operations.",
  },
  {
    number: "06",
    title: "Franchise Testimonial Videos",
    description:
      "Feature franchise owners and partners sharing authentic experiences, business journeys and perspectives on the brand.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the Franchise",
    description:
      "We learn about your brand, franchise model, ideal partner, business opportunity and communication objectives.",
  },
  {
    number: "02",
    title: "Develop the Story",
    description:
      "We identify the strongest messages and build a visual narrative around the opportunity and your brand.",
  },
  {
    number: "03",
    title: "Script & Planning",
    description:
      "We develop the script, interview questions, storyboard, locations, schedule and production plan.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "We film your brand, locations, people, franchise owners, products and customer experiences using professional production.",
  },
  {
    number: "05",
    title: "Editing & Post-Production",
    description:
      "Editing, interviews, motion graphics, music, sound design, color grading and visual effects are combined into the final story.",
  },
  {
    number: "06",
    title: "Campaign Delivery",
    description:
      "The finished videos can be delivered in formats suitable for websites, social media, advertising, presentations and franchise campaigns.",
  },
];

const videoUses = [
  "Franchise Websites",
  "Franchise Landing Pages",
  "Franchise Recruitment",
  "Digital Advertising",
  "Social Media",
  "Franchise Exhibitions",
  "Business Presentations",
  "Investor Communication",
  "Email Campaigns",
  "Brand Campaigns",
];

const franchiseContent = [
  "Brand Story",
  "Franchise Opportunity",
  "Business Model",
  "Investment Information",
  "Franchise Support",
  "Location Showcase",
  "Owner Testimonials",
  "Customer Experience",
  "Team & Culture",
  "Growth Story",
];

const faqs = [
  {
    question: "What is franchise video production?",
    answer:
      "Franchise video production involves creating professional videos that communicate a franchise brand, business opportunity, franchise model, support system, locations or owner experience to potential franchise partners and customers.",
  },
  {
    question: "What types of franchise videos does HipHipVideos create?",
    answer:
      "HipHipVideos creates franchise promotional videos, recruitment videos, brand films, franchise opportunity videos, location videos and franchise testimonial videos.",
  },
  {
    question: "Do you create franchise videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is based in Hyderabad, Telangana and provides franchise video production services for businesses in Hyderabad and clients across India.",
  },
  {
    question: "Can you interview existing franchise owners?",
    answer:
      "Yes. Franchise owner interviews and testimonials can be incorporated into the production to communicate real experiences and perspectives.",
  },
  {
    question: "Can you film our franchise locations?",
    answer:
      "Yes. Depending on the project, production can include filming franchise locations, facilities, employees, customers, products and day-to-day operations.",
  },
  {
    question: "Can franchise videos be used for digital advertising?",
    answer:
      "Yes. Franchise videos can be produced in different lengths and formats for websites, social media, digital advertising, presentations and recruitment campaigns.",
  },
  {
    question: "Do you handle scripting and editing?",
    answer:
      "Yes. Our end-to-end production process can include concept development, scripting, interviews, filming, editing, motion graphics, sound design, color grading and final delivery.",
  },
  {
    question: "How can we start a franchise video project?",
    answer:
      "Share your franchise model, target audience, locations, objectives and campaign requirements with HipHipVideos. We can then discuss the creative direction and production approach.",
  },
];

export default function FranchiseVideosPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              Franchise Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Franchise Videos That{" "}
              <span className="text-[#CCFF00]">
                Turn Your Brand Into an Opportunity
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates franchise marketing videos, promotional
              films, recruitment videos and brand stories that help businesses
              communicate their franchise opportunity and connect with potential
              partners.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Franchise video production in Hyderabad and across India.
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
        aria-labelledby="franchise-intro-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Franchise Storytelling
            </p>

            <h2
              id="franchise-intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Show Potential Franchise Partners What Your Brand Can Become
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Franchise decisions involve more than understanding an investment
              opportunity. Potential partners also want to understand the brand,
              customer experience, operating model, support system and people
              behind the business.
            </p>

            <p>
              A well-produced franchise video can bring these elements together
              into a clear visual story that communicates the opportunity and
              gives potential partners a stronger understanding of the brand.
            </p>

            <p>
              HipHipVideos develops franchise videos around your business model,
              target franchise partner and campaign objective, combining
              interviews, locations, products, people and professional visual
              storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section
        aria-labelledby="franchise-types-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Franchise Video Services
            </p>

            <h2
              id="franchise-types-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Video Content for Every Franchise Marketing Need
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              We create different video formats depending on whether your goal
              is franchise recruitment, brand communication, location marketing
              or business storytelling.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {franchiseTypes.map((item) => (
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

      {/* CONTENT ELEMENTS */}
      <section
        aria-labelledby="franchise-content-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Franchise Story Elements
          </p>

          <h2
            id="franchise-content-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Communicate the Parts of Your Franchise That Matter
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Your video can bring together the information potential franchise
            partners need to understand your brand and opportunity.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {franchiseContent.map((item) => (
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
        aria-labelledby="franchise-process-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Our Process
            </p>

            <h2
              id="franchise-process-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              From Franchise Brief to Final Campaign Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We manage the creative and production process from the first
              conversation through filming, editing and final delivery.
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

      {/* USE CASES */}
      <section
        aria-labelledby="franchise-use-cases-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Where Franchise Videos Are Used
          </p>

          <h2
            id="franchise-use-cases-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Built for Franchise Marketing & Recruitment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Franchise videos can be adapted for websites, recruitment campaigns,
            social platforms, advertising and business events.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {videoUses.map((item) => (
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

      {/* WHY HIPHIPVIDEOS */}
      <section
        aria-labelledby="why-franchise-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Why HipHipVideos
            </p>

            <h2
              id="why-franchise-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Visual Storytelling Built Around Your Franchise Opportunity
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Brand Storytelling",
                text: "We communicate what makes your brand, customer experience and franchise model distinctive.",
              },
              {
                title: "Owner Interviews",
                text: "Existing franchise owners can share authentic experiences and perspectives through professionally produced interviews.",
              },
              {
                title: "Location Filming",
                text: "Show real locations, teams, facilities, products and customer experiences to make the opportunity more tangible.",
              },
              {
                title: "Marketing Ready",
                text: "Videos can be produced in formats suited to websites, social media, advertising, presentations and recruitment campaigns.",
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
        aria-labelledby="franchise-hyderabad-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad
          </p>

          <h2
            id="franchise-hyderabad-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Franchise Video Production in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is based in Hyderabad, Telangana and creates franchise
            marketing, promotional and recruitment videos for brands and
            businesses in Hyderabad and across India.
          </p>

          <p className="mt-5 text-sm leading-6 text-white/35 sm:text-base">
            Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills,
            Hyderabad, Telangana 500008
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="franchise-faq-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Franchise Video FAQ
            </p>

            <h2
              id="franchise-faq-heading"
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
            Start Your Franchise Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Promote Your Franchise Opportunity?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your franchise model, brand and marketing objective
            and let's explore the right video production approach.
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
