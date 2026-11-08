import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getCountry, getCity, slugify } from "../../data";

export function generateStaticParams() {
  return locations.flatMap((country) =>
    country.cities.map((city) => ({
      country: country.slug,
      city: slugify(city),
    })),
  );
}

export async function generateMetadata({ params }) {
  const { country: countrySlug, city: citySlug } = await params;

  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);

  if (!country || !city) {
    return {
      title: "Location Not Found | HipHipVideos",
    };
  }

  const title = `Video Production Company in ${city} | HipHipVideos`;

  const description =
    `Looking for professional video production in ${city}, ${country.name}? ` +
    `Explore commercial videos, corporate films, product videos, explainer videos ` +
    `and creative video solutions from HipHipVideos. Discuss your project today.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/locations/${country.slug}/${citySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://hiphipvideos.com/locations/${country.slug}/${citySlug}`,
      siteName: "HipHipVideos",
      type: "website",
    },
  };
}

export default async function CityPage({ params }) {
  const { country: countrySlug, city: citySlug } = await params;

  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);

  if (!country || !city) {
    notFound();
  }

  // VIDEO PRODUCTION SERVICES
  const services = [
    {
      title: "Commercial Video Production",
      description:
        "Create engaging commercial videos that introduce your brand, communicate your message and present your products or services to your target audience.",
      href: "/services/commercial-video-production",
    },
    {
      title: "Corporate Video Production",
      description:
        "Communicate your company vision, team, culture, services and business story through professionally planned corporate video content.",
      href: "/services/corporate-video-production",
    },
    {
      title: "Product Video Production",
      description:
        "Showcase product features, benefits, functionality and details through product demonstration videos and promotional video content.",
      href: "/services/product-video-production",
    },
    {
      title: "Explainer Video Production",
      description:
        "Make complex products, services and business ideas easier to understand through engaging explainer videos and visual storytelling.",
      href: "/services/explainer-videos",
    },
    {
      title: "Real Estate Video Production",
      description:
        "Present properties, projects, developments and spaces through real estate promotional videos and visual presentations.",
      href: "/services/real-estate-video-production",
    },
    {
      title: "3D Product Animation",
      description:
        "Present product structures, features and concepts through 3D product animation and computer-generated visuals.",
      href: "/services/3d-product-animation",
    },
    {
      title: "Motion Graphics",
      description:
        "Use animated graphics, typography and visual effects to communicate information and strengthen your brand videos.",
      href: "/services/motion-graphics",
    },
    {
      title: "D2C Video Production",
      description:
        "Develop product-focused video concepts for direct-to-consumer brands, digital campaigns and online product marketing.",
      href: "/services/d2c-video-production",
    },
    {
      title: "SaaS Video Production",
      description:
        "Explain software products, digital platforms and technology solutions through product walkthroughs and SaaS videos.",
      href: "/services/saas-video-production",
    },
  ];

  const industries = [
    "Technology and SaaS",
    "Real Estate and Property",
    "Fashion and Lifestyle",
    "Healthcare and Medical",
    "Education and EdTech",
    "Manufacturing and Industrial",
    "Consumer Products and D2C",
    "Corporate and Professional Services",
  ];

  const faqs = [
    {
      question: `Do you offer video production services in ${city}?`,
      answer: `You can contact HipHipVideos with your project requirements and location details. Our team can discuss project availability, production arrangements and suitable options for ${city}, ${country.name}.`,
    },
    {
      question: `What types of video production services can I enquire about in ${city}?`,
      answer:
        "You can enquire about commercial video production, corporate films, product videos, explainer videos, promotional videos, real estate videos, 3D product animation and motion graphics.",
    },
    {
      question: `How much does video production cost in ${city}?`,
      answer:
        "Video production costs depend on the creative concept, video duration, production requirements, locations, crew, equipment, animation and editing complexity. Contact our team with your brief to discuss a project estimate.",
    },
    {
      question: "Can you create videos for digital marketing campaigns?",
      answer:
        "Yes. You can discuss promotional videos, product videos, brand films, social media video content and other creative video formats for your digital marketing objectives.",
    },
    {
      question: "How long does a video production project take?",
      answer:
        "The timeline depends on concept development, scripting, pre-production, filming, animation, editing and feedback. The project schedule can be discussed after reviewing your requirements.",
    },
    {
      question: "How can I get a video production quote?",
      answer:
        "Visit the HipHipVideos quote page and share your business details, video requirements, preferred timeline and project objectives.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hiphipvideos.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://hiphipvideos.com/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
        item: `https://hiphipvideos.com/locations/${country.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: city,
        item: `https://hiphipvideos.com/locations/${country.slug}/${citySlug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#07111F] text-white pt-32 pb-20 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-[#CCFF00]">
            Home
          </Link>
          {" / "}
          <Link href="/locations" className="hover:text-[#CCFF00]">
            Locations
          </Link>
          {" / "}
          <Link
            href={`/locations/${country.slug}`}
            className="hover:text-[#CCFF00]"
          >
            {country.name}
          </Link>
          {" / "}
          <span className="text-[#CCFF00]">{city}</span>
        </nav>

        {/* HERO SECTION */}
        <section className="max-w-5xl mb-20">
          <p className="text-[#CCFF00] uppercase tracking-[4px] text-sm mb-5">
            Video Production Services
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            Video Production Company in {city}, {country.name}
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            Looking for professional video production services in {city}?
            HipHipVideos helps businesses explore creative video solutions for
            brand communication, product marketing, corporate storytelling and
            digital campaigns. From commercial video production and corporate
            films to product videos and explainer videos, we help you plan video
            content around your business objectives.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            A well-planned business video can introduce your company,
            demonstrate a product, explain a service and communicate your brand
            message. Whether you are a startup, established company, technology
            business, real estate brand or consumer product business in {city},
            the right video format starts with a clear audience, creative
            direction and purpose.
          </p>

          <p className="text-gray-400 leading-8">
            Contact HipHipVideos to discuss your video production brief,
            preferred format, budget expectations and project timeline. Our team
            can review your requirements and confirm suitable production
            arrangements for {city}, {country.name}.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              href="/quote"
              className="inline-flex rounded-lg bg-[#CCFF00] px-7 py-3 font-semibold text-black hover:shadow-[0_0_20px_#CCFF00] transition"
            >
              Get a Project Quote
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex rounded-lg border border-white/20 px-7 py-3 font-semibold text-white hover:border-[#CCFF00] hover:text-[#CCFF00] transition"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-7">
            Creative Video Production Solutions for Businesses in {city}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 leading-8 mb-5">
                Video is an important communication format for businesses that
                want to present their products, services and ideas clearly. A
                corporate brand film can introduce a company, while a product
                demonstration can help customers understand how something works.
                Explainer videos can simplify complex topics, and promotional
                videos can communicate campaign messages.
              </p>

              <p className="text-gray-400 leading-8">
                For businesses targeting audiences in {city}, video content can
                be planned around the audience, industry, distribution channel
                and marketing objective. The creative approach should match the
                message rather than simply adding effects or visuals.
              </p>
            </div>

            <div>
              <p className="text-gray-300 leading-8 mb-5">
                HipHipVideos can discuss different video formats, including
                commercial advertisements, corporate communication videos,
                product showcases, brand storytelling, real estate videos,
                motion graphics and animated explainers.
              </p>

              <p className="text-gray-400 leading-8">
                Every project has different requirements. The concept, script,
                filming arrangements, visual style, editing and final delivery
                formats should be considered before production begins. Share
                your brief with our team to explore a suitable approach for your
                business.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mb-20">
          <div className="max-w-3xl mb-10">
            <p className="text-[#CCFF00] uppercase tracking-widest text-sm mb-4">
              What We Do
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Video Production Services in {city}
            </h2>

            <p className="text-gray-400 leading-8">
              Explore different video production formats for your business.
              Select a service to learn more about its creative approach,
              applications and project requirements.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-[#CCFF00] hover:bg-white/[0.08] transition"
              >
                <h3 className="text-lg font-semibold text-[#CCFF00] mb-4 group-hover:text-white transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  {service.description}
                </p>

                <span className="inline-block mt-5 text-sm font-semibold text-white group-hover:text-[#CCFF00]">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* COMMERCIAL VIDEO */}
        <section className="mb-20 rounded-2xl border border-white/10 bg-white/5 p-7 md:p-10">
          <h2 className="text-3xl font-bold mb-6">
            Commercial and Promotional Video Production
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Commercial videos help businesses introduce products, services and
            brand messages through visual storytelling. They can be developed
            for advertising campaigns, websites, presentations, product launches
            and digital platforms.
          </p>

          <p className="text-gray-400 leading-8 mb-5">
            A commercial video project may involve creative concept development,
            scripting, storyboarding, filming, editing, sound design, motion
            graphics and final video delivery. The production approach depends
            on the campaign objective, intended audience and distribution
            platform.
          </p>

          <p className="text-gray-400 leading-8">
            If your business is planning a promotional campaign in {city},
            discuss the message, visual style, audience and expected
            deliverables with HipHipVideos.
          </p>
        </section>

        {/* CORPORATE VIDEO */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Corporate Video Production for Companies in {city}
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Corporate video production focuses on communicating a company's
            identity, values, people, services and business capabilities. These
            videos can support company introductions, internal communication,
            recruitment, presentations and corporate marketing.
          </p>

          <p className="text-gray-400 leading-8 mb-5">
            A corporate film may include interviews, workplace visuals, business
            activities, team introductions, voiceovers, branded graphics and
            supporting footage. The script and production plan should
            communicate the company's message in a clear and professional
            manner.
          </p>

          <p className="text-gray-400 leading-8">
            Businesses in {city} can contact our team to discuss corporate
            films, company profile videos, brand presentations and other
            business video requirements.
          </p>
        </section>

        {/* PRODUCT VIDEO */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Product Video Production and Product Demonstration Videos
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Product videos help audiences understand what a product does, how it
            works and what makes it useful. They can include product
            demonstrations, feature highlights, close-up visuals, demonstrations
            of functionality and promotional storytelling.
          </p>

          <p className="text-gray-400 leading-8 mb-5">
            Product video content can be used on ecommerce websites, landing
            pages, social media campaigns, product presentations and digital
            advertisements. The right format depends on the product category and
            the information customers need.
          </p>

          <p className="text-gray-400 leading-8">
            If you are launching or marketing a product in {city}, discuss
            product video concepts, filming requirements and animation
            possibilities with HipHipVideos.
          </p>
        </section>

        {/* INDUSTRIES */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industries We Can Create Video Content For
          </h2>

          <p className="text-gray-400 leading-8 mb-9 max-w-4xl">
            Different industries need different types of video communication. A
            technology company may need a software explainer, while a real
            estate brand may need a property presentation. Video concepts should
            be planned around the product, audience and business objective.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-gray-200 font-medium">{industry}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-400 leading-8 mt-8">
            Whether you operate in technology, healthcare, education,
            manufacturing, real estate, fashion or consumer products, start with
            a clear video objective. Contact our team to discuss the type of
            content that fits your business.
          </p>
        </section>

        {/* PRODUCTION PROCESS */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Video Production Process
          </h2>

          <p className="text-gray-400 leading-8 mb-9">
            A structured video production workflow helps organize creative
            decisions, production activities and final delivery. The exact
            workflow depends on the scope and complexity of each project.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                number: "01",
                title: "Discovery and Planning",
                text: "Understand your business, audience, goals, project scope and video requirements.",
              },
              {
                number: "02",
                title: "Concept and Script",
                text: "Develop the creative direction, key message, script and visual storytelling approach.",
              },
              {
                number: "03",
                title: "Pre-Production",
                text: "Plan the storyboard, production schedule, locations, resources and filming requirements.",
              },
              {
                number: "04",
                title: "Production",
                text: "Execute the planned filming, visual creation, product demonstrations or animation work.",
              },
              {
                number: "05",
                title: "Editing and Post-Production",
                text: "Develop the final video through editing, sound design, graphics, colour and visual finishing.",
              },
              {
                number: "06",
                title: "Review and Delivery",
                text: "Review the final output and prepare the agreed video formats for the intended platforms.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <span className="text-3xl font-bold text-[#CCFF00]">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold mt-5 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO MARKETING */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Video Content for Digital Marketing and Brand Communication
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Video content can support several stages of a digital marketing
            campaign. Short promotional videos can introduce a campaign, product
            demonstrations can explain features, and brand films can communicate
            a company's identity and story.
          </p>

          <p className="text-gray-400 leading-8 mb-5">
            Businesses targeting audiences in {city} can plan video assets for
            websites, social media, digital advertisements, landing pages,
            presentations and product launches. Each video should have a clear
            purpose and a format suitable for its intended platform.
          </p>

          <p className="text-gray-400 leading-8">
            Video production and digital marketing work best when the creative
            message, audience, distribution strategy and campaign objectives are
            considered together.
          </p>
        </section>

        {/* PORTFOLIO */}
        <section className="mb-20 rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-5">
            Explore Our Video Production Portfolio
          </h2>

          <p className="text-gray-300 leading-8 mb-7">
            Explore the HipHipVideos portfolio to understand our creative
            approach to video projects, visual storytelling, brand communication
            and production formats. Review relevant examples when evaluating the
            right creative direction for your project.
          </p>

          <Link
            href="/portfolio"
            className="inline-flex rounded-lg bg-[#CCFF00] px-7 py-3 font-semibold text-black hover:shadow-[0_0_20px_#CCFF00] transition"
          >
            View Our Portfolio
          </Link>
        </section>

        {/* WHY CHOOSE */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Plan Your Video Project with HipHipVideos?
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            Choosing a video production partner involves more than selecting a
            camera or editing style. Businesses should consider creative
            direction, communication, project planning, production requirements,
            delivery formats and how the final video supports their objectives.
          </p>

          <p className="text-gray-400 leading-8 mb-5">
            HipHipVideos provides a point of contact for businesses to discuss
            different video formats, creative concepts and project requirements.
            Our team can review your brief and discuss suitable production
            arrangements based on the project scope and location.
          </p>

          <p className="text-gray-400 leading-8">
            If you are comparing video production companies for a project
            targeting {city}, review relevant work samples, clarify the
            deliverables and discuss the expected timeline before making your
            decision.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-9">
            Frequently Asked Questions About Video Production in {city}
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#CCFF00]">
                  {faq.question}
                </h3>

                <p className="text-gray-300 mt-3 leading-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OTHER CITIES */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Explore Video Production Locations in {country.name}
          </h2>

          <p className="text-gray-400 leading-8 mb-7">
            Explore other cities in {country.name} to learn more about the video
            production enquiries and project arrangements HipHipVideos can
            discuss.
          </p>

          <div className="flex flex-wrap gap-3">
            {country.cities
              .filter((item) => item !== city)
              .map((item) => {
                const slug = slugify(item);

                return (
                  <Link
                    key={slug}
                    href={`/locations/${country.slug}/${slug}`}
                    className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 hover:border-[#CCFF00] hover:text-[#CCFF00] transition"
                  >
                    {item}
                  </Link>
                );
              })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="rounded-2xl bg-[#CCFF00] p-8 md:p-12 text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Planning a Video Production Project in {city}?
          </h2>

          <p className="max-w-3xl leading-8 mb-8">
            Tell us about your business, video concept, target audience and
            production requirements. Contact HipHipVideos to discuss your
            project and explore the next steps.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-lg bg-black text-white px-7 py-3 font-semibold hover:bg-gray-800 transition"
            >
              Request a Quote
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-black/30 px-7 py-3 font-semibold hover:bg-black/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
