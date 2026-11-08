
import Link from "next/link";

export const metadata = {
  title: "Video Production Case Studies | Creative Projects & Brand Stories | HipHipVideos",
  description:
    "Explore HipHipVideos case studies featuring creative video production, corporate films, product videos, explainer animations, brand storytelling, and visual marketing solutions.",
  alternates: {
    canonical: "https://hiphipvideos.com/case-studies",
  },
  openGraph: {
    title: "Video Production Case Studies | HipHipVideos",
    description:
      "Discover creative video production projects, brand stories, and visual communication solutions by HipHipVideos.",
    url: "https://hiphipvideos.com/case-studies",
    siteName: "HipHipVideos",
    type: "website",
  },
};

const projects = [
  {
    number: "01",
    category: "Technology & SaaS",
    title: "Making Complex Technology Easier to Understand",
    description:
      "A technology-focused video storytelling concept designed to communicate software features, product value, and digital solutions in a simple and engaging way.",
    challenge:
      "Technology products can be difficult to explain when audiences are unfamiliar with their features and functionality.",
    solution:
      "A structured visual storytelling approach using product demonstrations, motion graphics, and clear messaging.",
    services: ["Explainer Video", "Motion Graphics", "Product Demonstration"],
    slug: "technology-saas-video-production",
    icon: "💻",
    color: "from-blue-500/20 to-cyan-500/5",
  },
  {
    number: "02",
    category: "Real Estate",
    title: "Creating Engaging Real Estate Brand Stories",
    description:
      "A real estate video concept focused on showcasing property features, project highlights, architectural details, and investment opportunities.",
    challenge:
      "Property buyers need clear visual information to understand project features and the overall experience.",
    solution:
      "Cinematic property storytelling with carefully planned visuals, project highlights, and promotional messaging.",
    services: ["Real Estate Films", "Property Walkthrough", "Promotional Videos"],
    slug: "real-estate-video-production",
    icon: "🏙️",
    color: "from-amber-500/20 to-orange-500/5",
  },
  {
    number: "03",
    category: "Product & E-commerce",
    title: "Turning Product Features into Visual Stories",
    description:
      "A product video concept created to highlight product design, features, functionality, and key selling points for digital audiences.",
    challenge:
      "Online customers often need more information than product images and written descriptions can provide.",
    solution:
      "Product-focused video storytelling combining feature demonstrations, close-up visuals, editing, and motion graphics.",
    services: ["Product Videos", "3D Animation", "Commercial Videos"],
    slug: "product-video-production",
    icon: "📦",
    color: "from-purple-500/20 to-pink-500/5",
  },
  {
    number: "04",
    category: "Corporate",
    title: "Communicating a Company's Vision Through Video",
    description:
      "A corporate video concept designed to communicate company identity, business capabilities, services, and organizational values.",
    challenge:
      "Businesses need a consistent and professional way to introduce their company to customers, partners, and stakeholders.",
    solution:
      "A structured corporate film approach using brand messaging, professional visuals, and a clear narrative.",
    services: ["Corporate Film", "Company Profile", "Brand Storytelling"],
    slug: "corporate-video-production",
    icon: "🏢",
    color: "from-emerald-500/20 to-teal-500/5",
  },
  {
    number: "05",
    category: "Healthcare",
    title: "Making Healthcare Communication More Accessible",
    description:
      "A healthcare video concept focused on explaining medical services, facilities, healthcare processes, and patient information.",
    challenge:
      "Healthcare information can be complex and difficult for general audiences to understand.",
    solution:
      "Clear visual communication supported by informative storytelling, animation, and structured messaging.",
    services: ["Healthcare Videos", "Medical Explainers", "Motion Graphics"],
    slug: "healthcare-video-production",
    icon: "🏥",
    color: "from-rose-500/20 to-red-500/5",
  },
  {
    number: "06",
    category: "Education & EdTech",
    title: "Creating Better Learning Experiences Through Video",
    description:
      "An educational video concept designed to make learning content more engaging through structured explanations and visual storytelling.",
    challenge:
      "Educational brands need content that communicates concepts clearly and keeps learners interested.",
    solution:
      "Educational explainers, animated sequences, and organized video lessons tailored to the subject and audience.",
    services: ["Educational Videos", "Explainer Animation", "Course Videos"],
    slug: "education-video-production",
    icon: "🎓",
    color: "from-yellow-500/20 to-orange-500/5",
  },
];

const workflow = [
  {
    number: "01",
    title: "The Challenge",
    description:
      "Understand the business problem, target audience, communication gaps, and project objectives.",
  },
  {
    number: "02",
    title: "The Strategy",
    description:
      "Build a creative direction, define the message, and plan the visual storytelling approach.",
  },
  {
    number: "03",
    title: "The Execution",
    description:
      "Bring the concept to life through video production, editing, animation, and motion graphics.",
  },
  {
    number: "04",
    title: "The Delivery",
    description:
      "Prepare final video assets for websites, social platforms, advertising, and business communication.",
  },
];

const faqs = [
  {
    question: "What are video production case studies?",
    answer:
      "Video production case studies explain the project objectives, creative challenges, video strategy, production approach, and outcomes of a video project.",
  },
  {
    question: "What types of projects does HipHipVideos work on?",
    answer:
      "HipHipVideos focuses on creative video solutions such as corporate films, product videos, commercial videos, explainer animations, real estate videos, and motion graphics.",
  },
  {
    question: "Can I request a video project similar to a case study?",
    answer:
      "Yes. You can share a reference project, your business requirements, target audience, and preferred video style to discuss a suitable creative approach.",
  },
  {
    question: "How can video production help my business?",
    answer:
      "Business videos can help explain products and services, communicate brand identity, present features, support marketing campaigns, and make information easier to understand.",
  },
  {
    question: "How do I start a project with HipHipVideos?",
    answer:
      "Visit the quote page and share your project details. Include your business type, video requirements, preferred timeline, and any available references.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="overflow-hidden bg-[#080808] text-white">

      {/* HERO SECTION */}
      <section className="relative px-6 pb-24 pt-32 md:px-12 md:pb-32 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,255,0,0.14),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-[#CCFF00]">
            Our Case Studies
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Ideas Into
            <span className="block text-[#CCFF00]">
              Visual Impact.
            </span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-lg leading-8 text-white/65">
              Discover how creative video production, strategic
              storytelling, product visuals, and animation can help
              businesses communicate their ideas and present their
              brands more effectively.
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
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
              Creative Thinking
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Every Project Begins With a Story.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/60">
            <p>
              Video is an effective way for businesses to present ideas,
              communicate products, introduce services, and connect with
              their audiences. The right creative approach can turn
              complex information into a clear and engaging experience.
            </p>

            <p>
              At HipHipVideos, our creative approach focuses on
              understanding the communication objective first and
              developing video concepts that support the brand's
              message, audience, and marketing requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
              Selected Creative Concepts
            </p>

            <h2 className="text-4xl font-black md:text-6xl">
              Explore Our Case Studies
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/55">
              Explore different creative approaches for technology,
              real estate, products, corporate brands, healthcare,
              and education.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/40"
              >
                <div
                  className={`relative flex min-h-[230px] items-center justify-center bg-gradient-to-br ${project.color}`}
                >
                  <span className="text-8xl transition duration-500 group-hover:scale-110">
                    {project.icon}
                  </span>

                  <span className="absolute left-7 top-7 text-sm font-bold tracking-widest text-white/50">
                    CASE STUDY / {project.number}
                  </span>

                  <span className="absolute bottom-7 right-7 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="p-7 md:p-9">
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#CCFF00]">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-black leading-tight md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-sm font-bold text-white">
                        The Challenge
                      </h4>
                      <p className="text-sm leading-6 text-white/50">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-sm font-bold text-white">
                        Our Approach
                      </h4>
                      <p className="text-sm leading-6 text-white/50">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/60"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="mt-8 inline-flex items-center gap-3 font-bold text-[#CCFF00] transition group-hover:gap-5"
                  >
                    Explore Case Study <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#CCFF00] px-6 py-20 text-black md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.25em]">
            Our Approach
          </p>

          <h2 className="max-w-4xl text-4xl font-black md:text-6xl">
            A Creative Process Built Around Your Business Goals.
          </h2>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <div key={item.number} className="border-t border-black/25 pt-6">
                <span className="text-4xl font-black opacity-40">
                  {item.number}
                </span>

                <h3 className="mt-6 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
                Industry Experience
              </p>

              <h2 className="text-4xl font-black md:text-6xl">
                Creative Solutions for Every Industry.
              </h2>
            </div>

            <Link
              href="/industries"
              className="font-bold text-[#CCFF00] transition hover:translate-x-1"
            >
              Explore All Industries →
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              "Technology & SaaS",
              "Real Estate",
              "Healthcare",
              "Education",
              "Fashion",
              "Manufacturing",
              "Automotive",
              "Consumer Products",
              "Corporate",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/65 transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#151515] px-8 py-16 text-center md:px-16 md:py-24">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
            Have a Project in Mind?
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-7xl">
            Let's Create Your Next Success Story.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/55">
            Whether you need a corporate film, product video, explainer
            animation, or commercial, let's discuss your creative goals.
          </p>

          <Link
            href="/quote"
            className="mt-10 inline-flex rounded-full bg-[#CCFF00] px-9 py-4 font-bold text-black transition hover:bg-white"
          >
            Discuss Your Project ↗
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
            Frequently Asked Questions
          </p>

          <h2 className="mb-12 text-4xl font-black md:text-6xl">
            Case Studies FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                  {faq.question}
                  <span className="text-2xl text-[#CCFF00] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
