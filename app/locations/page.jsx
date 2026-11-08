import Link from "next/link";
import { locations } from "./data";

export const metadata = {
  title: "Global Video Production Locations | HipHipVideos",
  description:
    "Explore video production services from HipHipVideos across India, USA, UK, UAE, Saudi Arabia and other international markets.",
  alternates: {
    canonical: "/locations",
  },
};

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="text-[#CCFF00] uppercase tracking-[4px] text-sm mb-4">
            Our Locations
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Video Production Services Across Global Markets
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Discover the markets and cities where HipHipVideos can discuss your
            video production requirements. Contact our team to confirm project
            availability and production arrangements for your location.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((country) => (
            <Link
              key={country.slug}
              href={`/locations/${country.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#CCFF00] transition"
            >
              <h2 className="text-2xl font-bold text-[#CCFF00] mb-4">
                {country.name}
              </h2>

              <p className="text-gray-400 text-sm mb-5">
                Explore video production services and city coverage in{" "}
                {country.name}.
              </p>

              <span className="text-white text-sm">Explore locations →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
