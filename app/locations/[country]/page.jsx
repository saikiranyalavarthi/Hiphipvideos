import Link from "next/link";
import { notFound } from "next/navigation";
import { locations, getCountry, slugify } from "../data";

export function generateStaticParams() {
  return locations.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);

  if (!country) return { title: "Location Not Found" };

  return {
    title: `Video Production Services in ${country.name} | HipHipVideos`,
    description: `Explore commercial, corporate, product and explainer video production services for businesses in ${country.name}. Contact HipHipVideos to discuss your project.`,
    alternates: {
      canonical: `/locations/${country.slug}`,
    },
  };
}

export default async function CountryPage({ params }) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);

  if (!country) notFound();

  return (
    <main className="min-h-screen bg-[#07111F] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#CCFF00] uppercase tracking-[4px] text-sm mb-4">
          Video Production Locations
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Video Production Services in {country.name}
        </h1>

        <p className="max-w-3xl text-gray-300 text-lg leading-8 mb-12">
          HipHipVideos works with businesses to discuss commercial, corporate,
          product, explainer and brand video projects. Contact our team to
          confirm production availability, location requirements and project
          arrangements in {country.name}.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Explore Cities in {country.name}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {country.cities.map((city) => (
            <Link
              key={city}
              href={`/locations/${country.slug}/${slugify(city)}`}
              className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-[#CCFF00] transition"
            >
              <h3 className="text-xl font-semibold text-white">
                Video Production in {city}
              </h3>

              <span className="inline-block mt-3 text-sm text-[#CCFF00]">
                Explore city →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold mb-4">
            Discuss Your Video Project
          </h2>

          <p className="text-gray-300 mb-6">
            Tell us about your business, target audience and video requirements.
            Our team can discuss the right production approach for your project.
          </p>

          <Link
            href="/quote"
            className="inline-block rounded-lg bg-[#CCFF00] px-7 py-3 font-semibold text-black"
          >
            Get a Free Discovery Call
          </Link>
        </div>
      </div>
    </main>
  );
}
