import Link from "next/link";

export const metadata = {
  title:
    "Education & EdTech Video Production Company in Hyderabad | HipHipVideos",
  description:
    "HipHipVideos creates education videos, EdTech explainer videos, online course videos, e-learning content, product demos, institute films and educational advertisements in Hyderabad and across India.",
  alternates: {
    canonical: "/industries/education-edtech",
  },
  openGraph: {
    title:
      "Education & EdTech Video Production Company in Hyderabad | HipHipVideos",
    description:
      "Professional video production for EdTech companies, schools, colleges, universities, coaching institutes and education brands.",
    url: "/industries/education-edtech",
    type: "website",
  },
};

const services = [
  {
    number: "01",
    title: "EdTech Video Production",
    description:
      "Professional videos for EdTech platforms, online learning businesses and education technology companies.",
    href: "/services/corporate-video-production",
  },
  {
    number: "02",
    title: "Educational Explainer Videos",
    description:
      "Clear and engaging explainer videos that simplify courses, subjects, products, platforms and learning concepts.",
    href: "/services/explainer-videos",
  },
  {
    number: "03",
    title: "Online Course Videos",
    description:
      "Structured video content for online courses, learning platforms, training programs and digital education.",
    href: "/services/corporate-video-production",
  },
  {
    number: "04",
    title: "Education Brand Films",
    description:
      "Brand films that communicate the mission, teaching approach, campus, faculty and student experience.",
    href: "/services/commercial-video-production",
  },
  {
    number: "05",
    title: "Course & Product Demo Videos",
    description:
      "Visual demonstrations that show how an EdTech product, platform, course or learning solution works.",
    href: "/services/product-video-production",
  },
  {
    number: "06",
    title: "Educational Motion Graphics",
    description:
      "Motion graphics and animation that make educational information, data and complex concepts easier to understand.",
    href: "/services/motion-graphics",
  },
];

const educationTypes = [
  "EdTech Companies",
  "Online Learning Platforms",
  "Schools",
  "Colleges",
  "Universities",
  "Coaching Institutes",
  "Training Companies",
  "E-Learning Businesses",
  "Skill Development",
  "Professional Education",
  "Higher Education",
  "K-12 Education",
  "Test Preparation",
  "Language Learning",
  "Corporate Training",
  "Educational Startups",
];

const contentTypes = [
  "EdTech Explainer Videos",
  "Online Course Videos",
  "Educational Advertisements",
  "Education Brand Films",
  "Course Introduction Videos",
  "Teacher Videos",
  "Faculty Interviews",
  "Student Testimonials",
  "Campus Videos",
  "Product Demo Videos",
  "Learning Videos",
  "Educational Animation",
];

const useCases = [
  "Education Websites",
  "EdTech Platforms",
  "Online Courses",
  "YouTube",
  "Instagram",
  "LinkedIn",
  "Digital Advertising",
  "Student Acquisition",
  "Course Marketing",
  "Admissions Campaigns",
  "Training Programs",
  "Educational Presentations",
];

const process = [
  {
    number: "01",
    title: "Understand the Learning Goal",
    description:
      "We understand your course, product, audience and the learning or marketing objective behind the video.",
  },
  {
    number: "02",
    title: "Content & Story Development",
    description:
      "We organize the subject matter into a clear visual structure that is easier for students and audiences to follow.",
  },
  {
    number: "03",
    title: "Script & Pre-Production",
    description:
      "Scripts, storyboards, presenters, locations, visuals and production requirements are planned before filming.",
  },
  {
    number: "04",
    title: "Video Production",
    description:
      "Professional filming captures instructors, classrooms, campuses, products, demonstrations and brand stories.",
  },
  {
    number: "05",
    title: "Editing & Animation",
    description:
      "Editing, motion graphics, screen recordings, animation, sound design and visual effects bring the content together.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Videos are prepared for websites, learning platforms, social media, advertising and educational presentations.",
  },
];

const faqs = [
  {
    question: "What is education and EdTech video production?",
    answer:
      "Education and EdTech video production creates professional video content for schools, colleges, universities, coaching institutes, online learning platforms, EdTech companies and education brands.",
  },
  {
    question: "Does HipHipVideos create EdTech videos in Hyderabad?",
    answer:
      "Yes. HipHipVideos is a video production company based in Hyderabad creating EdTech videos, educational explainers, online course videos, product demos and education brand films.",
  },
  {
    question: "Can you create online course videos?",
    answer:
      "Yes. We can create structured educational video content for online courses, digital learning platforms, training programs and educational websites.",
  },
  {
    question: "Can you create EdTech explainer videos?",
    answer:
      "Yes. EdTech explainer videos can explain your platform, learning model, technology, courses, features and benefits using live-action, screen recordings, motion graphics or animation.",
  },
  {
    question: "Can you create educational advertisements?",
    answer:
      "Yes. Education advertising videos can be created for admissions, course launches, student acquisition, digital campaigns and education brand marketing.",
  },
  {
    question: "Can you create student testimonial videos?",
    answer:
      "Yes. Student testimonials can showcase learner experiences, outcomes and perspectives through professionally filmed interviews and supporting visuals.",
  },
  {
    question: "Can you create videos for schools and colleges?",
    answer:
      "Yes. We can create campus films, institutional videos, faculty interviews, student stories, admission campaigns and educational brand content.",
  },
  {
    question: "Can you create animation for educational content?",
    answer:
      "Yes. Motion graphics and animation can be used to explain subjects, concepts, processes, statistics, software interfaces and other educational information.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "HipHipVideos",
  description: "Education and EdTech video production company in Hyderabad.",
  url: "https://hiphipvideos.com/industries/education-edtech",
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
    "Education Video Production",
    "EdTech Video Production",
    "Educational Explainer Videos",
    "Online Course Video Production",
    "Education Brand Films",
  ],
};

export default function EducationEdTechPage() {
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
              Education & EdTech Video Production
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Education Videos That{" "}
              <span className="text-[#CCFF00]">
                Make Learning More Engaging
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              HipHipVideos creates EdTech videos, educational explainers, online
              course videos, product demos, education brand films and digital
              learning content for education companies and institutions.
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/40 sm:text-base">
              Education and EdTech video production company in Hyderabad
              creating professional video content for education brands across
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
              Education Storytelling
            </p>

            <h2
              id="intro-heading"
              className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            >
              Turn Education Ideas Into Clear Visual Experiences
            </h2>
          </div>

          <div className="space-y-5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            <p>
              Education and EdTech businesses need to explain courses,
              platforms, products and learning experiences in ways that are
              simple and engaging.
            </p>

            <p>
              Video can combine instructors, students, demonstrations, screen
              recordings, animation and storytelling to communicate educational
              ideas effectively.
            </p>

            <p>
              HipHipVideos creates education content around your audience,
              learning objective, brand and business goals.
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
              Education & EdTech Video Production Services
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
              Professional video production for education companies,
              institutions, learning platforms and educational brands.
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

      {/* EDUCATION TYPES */}
      <section
        aria-labelledby="education-types-heading"
        className="border-t border-white/10 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Education Sectors
          </p>

          <h2
            id="education-types-heading"
            className="mt-4 text-3xl font-bold sm:text-4xl"
          >
            Video Production for Education & EdTech Businesses
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Visual storytelling for learning platforms, institutions, education
            startups and training organizations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {educationTypes.map((item) => (
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
            Educational Video Content for Digital Learning
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
            Education Videos for Marketing & Learning
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-white/50 sm:text-lg">
            Create video content for online learning, student acquisition,
            course marketing, digital campaigns and education communication.
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
              From Educational Idea to Final Video
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              We plan every production around the learning objective, audience,
              content and communication goals.
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
              Education Storytelling Built Around Your Audience
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Clear Learning Stories",
                text: "We organize educational information into structured visual stories that are easier to follow.",
              },
              {
                title: "Engaging Visuals",
                text: "Professional filming, graphics and animation can make educational content more engaging.",
              },
              {
                title: "EdTech Product Demos",
                text: "Show students and customers how your platform, software or learning product works.",
              },
              {
                title: "Multi-Platform Content",
                text: "Create video assets for websites, learning platforms, social media, advertising and presentations.",
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
            Education & EdTech Video Production Company in Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a creative video production company based in
            Hyderabad, Telangana. We create education videos, EdTech explainers,
            online course content, institutional films, product demos and
            educational advertisements for organizations across India.
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
              Education Video FAQ
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
            Start Your Education Video
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Ready to Bring Your Education Story to Life?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            Tell us about your EdTech platform, course, institution or education
            brand and let us create a video around your goals.
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
