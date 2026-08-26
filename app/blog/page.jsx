import Link from "next/link";

export const metadata = {
  title: "Video Production Blog | Guides, Tips & Insights | HipHipVideos",
  description:
    "Explore HipHipVideos articles about video production, commercial videos, corporate films, product videos, explainer videos, motion graphics, video marketing and production in Hyderabad.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Video Production Blog | Guides, Tips & Insights | HipHipVideos",
    description:
      "Video production guides, creative insights and video marketing tips from HipHipVideos, a video production company in Hyderabad.",
    url: "/blog",
    type: "website",
  },
};

const categories = [
  "Video Production",
  "Video Marketing",
  "Commercial Videos",
  "Corporate Videos",
  "Product Videos",
  "Explainer Videos",
  "3D Animation",
  "Motion Graphics",
  "Business",
];

const posts = [
  {
    category: "Video Production",
    title: "How Does the Video Production Process Work?",
    description:
      "Understand the complete video production workflow from creative concept and scripting to filming, editing, post-production and final delivery.",
    href: "/blog/video-production-process",
  },
  {
    category: "Video Production",
    title: "How to Choose a Video Production Company in Hyderabad",
    description:
      "A practical guide to evaluating creative capabilities, production quality, communication, portfolio, process and project requirements.",
    href: "/blog/how-to-choose-video-production-company-hyderabad",
  },
  {
    category: "Video Production",
    title: "How Much Does Video Production Cost in Hyderabad?",
    description:
      "Learn which factors influence video production costs, including concept development, crew, equipment, locations, production days, editing and animation.",
    href: "/blog/how-much-does-video-production-cost-in-hyderabad",
  },
  {
    category: "Commercial Videos",
    title: "What Makes a Good Commercial Video?",
    description:
      "Explore the creative and production elements that can make advertising videos more memorable, relevant and effective.",
    href: "/blog/commercial-video-production-guide",
  },
  {
    category: "Product Videos",
    title: "Why Product Videos Matter for Modern Brands",
    description:
      "Discover how product videos can demonstrate features, communicate value and help customers understand products.",
    href: "/blog/product-video-production-guide",
  },
  {
    category: "Explainer Videos",
    title: "What Is an Explainer Video and When Should You Use One?",
    description:
      "Learn how explainer videos simplify products, services, technology and complex ideas for customers and audiences.",
    href: "/blog/explainer-video-guide",
  },
  {
    category: "Corporate Videos",
    title: "Corporate Video Production: A Complete Guide",
    description:
      "Understand corporate films, company profile videos, internal communication videos and brand storytelling.",
    href: "/blog/corporate-video-production-guide",
  },
  {
    category: "3D Animation",
    title: "3D Product Animation: When Is It the Right Choice?",
    description:
      "Explore how 3D product animation can demonstrate products, components, technology and concepts that are difficult to film.",
    href: "/blog/3d-product-animation-guide",
  },
  {
    category: "Motion Graphics",
    title: "How Motion Graphics Can Improve Business Videos",
    description:
      "Learn how typography, animation, diagrams, transitions and visual graphics can make information easier to understand.",
    href: "/blog/motion-graphics-guide",
  },
  {
    category: "Video Marketing",
    title: "How Businesses Can Use Video Marketing",
    description:
      "A practical look at how businesses can use video across websites, social media, advertising, product launches and campaigns.",
    href: "/blog/video-marketing-for-business",
  },
  {
    category: "Business",
    title: "Video Marketing for Startups: What Should You Create First?",
    description:
      "A practical video content roadmap for startups looking to communicate their product, brand and value proposition.",
    href: "/blog/video-marketing-for-startups",
  },
  {
    category: "Product Videos",
    title: "How to Create a Product Launch Video",
    description:
      "Learn how to plan a product launch video around the product story, audience, key benefits and campaign objective.",
    href: "/blog/product-launch-video-guide",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-28 md:py-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#CCFF00]/5 blur-[160px]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00] sm:text-sm">
              HipHipVideos Blog
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Video Production{" "}
              <span className="text-[#CCFF00]">Insights & Guides</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
              Practical guides and insights about video production, video
              marketing, commercial videos, corporate films, product videos,
              explainer videos, animation and creative storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap justify-center gap-3 px-6">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-white/50 transition hover:border-[#CCFF00]/30 hover:text-[#CCFF00]"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section
        aria-labelledby="articles-heading"
        className="border-t border-white/10 py-20 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
              Latest Articles
            </p>

            <h2
              id="articles-heading"
              className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl"
            >
              Learn About Video Production
            </h2>

            <p className="mt-5 text-base leading-7 text-white/50 sm:text-lg">
              Explore useful information to help you plan, produce and use
              better video content for your business.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#CCFF00]/30 hover:bg-white/[0.045] sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#CCFF00]">
                  {post.category}
                </p>

                <h3 className="mt-4 text-xl font-bold leading-7 transition-colors group-hover:text-[#CCFF00]">
                  {post.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-white/50">
                  {post.description}
                </p>

                <Link
                  href={post.href}
                  className="mt-7 text-sm font-semibold text-white/50 transition-colors hover:text-[#CCFF00]"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#CCFF00]">
            Hyderabad Video Production
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Video Production Insights From Hyderabad
          </h2>

          <p className="mt-6 text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
            HipHipVideos is a video production company based in Hyderabad,
            Telangana. Our blog covers practical topics for brands, startups and
            businesses looking to use professional video content for marketing,
            communication, advertising and brand building.
          </p>

          <Link
            href="/quote"
            className="mt-8 inline-flex rounded-lg bg-[#CCFF00] px-7 py-3 text-sm font-bold text-black transition hover:-translate-y-1"
          >
            Start Your Video Project
          </Link>
        </div>
      </section>
    </main>
  );
}
