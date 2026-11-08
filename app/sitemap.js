import { locations, slugify } from "./locations/data";

const baseUrl = "https://hiphipvideos.com";

export default function sitemap() {
  const now = new Date();

  // Main website pages
  const mainPages = [
    "",
    "/about",
    "/process",
    "/contact",
    "/quote",
    "/portfolio",
    "/case-studies",
    "/services",
    "/industries",
    "/blog",
    "/locations",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Services
  const services = [
    "commercial-video-production",
    "corporate-video-production",
    "product-video-production",
    "explainer-videos",
    "pitch-videos",
    "franchise-videos",
    "fashion-video-production",
    "real-estate-video-production",
    "d2c-video-production",
    "saas-video-production",
    "3d-product-animation",
    "motion-graphics",
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Industries
  const industries = [
    "apps-saas",
    "d2c-brands",
    "real-estate",
    "fashion",
    "electronics-gadgets",
    "industrial-manufacturing",
    "corporate",
    "healthcare",
    "education-edtech",
    "automotive",
    "consumer-products",
  ].map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Blog pages
  const blogSlugs = [
    "video-production-process",
    "how-to-choose-video-production-company-hyderabad",
    "how-much-does-video-production-cost-in-hyderabad",
    "commercial-video-production-guide",
    "product-video-production-guide",
    "explainer-video-guide",
    "corporate-video-production-guide",
    "3d-product-animation-guide",
    "motion-graphics-guide",
    "video-marketing-for-business",
    "video-marketing-for-startups",
    "product-launch-video-guide",
  ];

  const blogs = [
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  // Country location pages
  const countryPages = locations.map((country) => ({
    url: `${baseUrl}/locations/${country.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // City location pages
  const cityPages = locations.flatMap((country) =>
    country.cities.map((city) => ({
      url: `${baseUrl}/locations/${country.slug}/${slugify(city)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  );

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/Terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/Privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...mainPages,
    ...services,
    ...industries,
    ...blogs,
    ...countryPages,
    ...cityPages,
    ...legalPages,
  ];
}
