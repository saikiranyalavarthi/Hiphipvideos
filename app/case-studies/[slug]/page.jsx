import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "../data";

export function generateStaticParams() {
  return caseStudies.map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({ params }) {
  const item = caseStudies.find((study) => study.slug === params.slug);

  if (!item) {
    return {
      title: "Case Study Not Found | HipHipVideos",
    };
  }

  return {
    title: `${item.title} | Video Production Case Study | HipHipVideos`,
    description: item.description,
    alternates: {
      canonical: `https://hiphipvideos.com/case-studies/${item.slug}`,
    },
    openGraph: {
      title: `${item.title} | HipHipVideos`,
      description: item.description,
      url: `https://hiphipvideos.com/case-studies/${item.slug}`,
      siteName: "HipHipVideos",
      type: "article",
    },
  };
}

export default function CaseStudyDetailPage({ params }) {
  const item = caseStudies.find((study) => study.slug === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32 md:px-12 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,255,0,0.13),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/case-studies"
            className="mb-12 inline-flex text-sm text-white/50 transition hover:text-[#CCFF00]"
          >
            ← Back to Case Studies
          </Link>

          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-[#CCFF00]">
            {item.category}
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            {item.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            {item.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {item.services.map((service) => (
              <span
                key={service}
                className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
              Project Overview
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              The Story Behind the Project
            </h2>
          </div>

          <p className="text-base leading-8 text-white/60">
            {item.description}
          </p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-[#111] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
              01 / The Challenge
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Understanding the Challenge
            </h2>
          </div>

          <p className="self-center text-lg leading-8 text-white/60">
            {item.challenge}
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
              02 / Our Solution
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              A Creative Approach
            </h2>
          </div>

          <p className="self-center text-lg leading-8 text-white/60">
            {item.solution}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#CCFF00] px-6 py-20 text-black md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-widest">
            03 / Creative Capabilities
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Video Production Services
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {item.services.map((service, index) => (
              <div
                key={service}
                className="rounded-2xl border border-black/15 bg-white/30 p-7"
              >
                <span className="text-sm font-bold opacity-50">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-black">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
            04 / Business Value
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            What This Video Approach Supports
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {item.benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <span className="text-3xl font-black text-[#CCFF00]">
                  0{index + 1}
                </span>

                <p className="mt-6 text-lg font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#151515] px-8 py-16 text-center md:py-24">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
            Let's Work Together
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-black md:text-6xl">
            Have a Similar Project in Mind?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-white/55">
            Tell us about your business and video requirements. Let's discuss a
            creative solution for your brand.
          </p>

          <Link
            href="/quote"
            className="mt-9 inline-flex rounded-full bg-[#CCFF00] px-9 py-4 font-bold text-black transition hover:bg-white"
          >
            Get a Project Quote ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
