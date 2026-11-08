export const locations = [
  {
    name: "India",
    slug: "india",
    cities: [
      "Hyderabad",
      "Mumbai",
      "Bangalore",
      "Chennai",
      "Delhi",
      "Pune",
      "Kolkata",
      "Ahmedabad",
      "Jaipur",
      "Lucknow",
      "Chandigarh",
      "Indore",
      "Nagpur",
      "Kochi",
      "Coimbatore",
      "Surat",
      "Visakhapatnam",
      "Bhopal",
      "Vadodara",
      "Noida",
      "Gurugram",
    ],
  },
  {
    name: "USA",
    slug: "usa",
    cities: [
      "New York",
      "Los Angeles",
      "Chicago",
      "San Francisco",
      "Miami",
      "Seattle",
      "Austin",
      "Boston",
      "Dallas",
      "Atlanta",
      "Houston",
      "Washington DC",
    ],
  },
  {
    name: "United Kingdom",
    slug: "uk",
    cities: [
      "London",
      "Manchester",
      "Birmingham",
      "Leeds",
      "Glasgow",
      "Edinburgh",
      "Bristol",
      "Liverpool",
    ],
  },
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    cities: ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina", "Khobar"],
  },
  {
    name: "UAE",
    slug: "uae",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  },
  {
    name: "Canada",
    slug: "canada",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  },
  {
    name: "Australia",
    slug: "australia",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  },
  {
    name: "Singapore",
    slug: "singapore",
    cities: ["Singapore City"],
  },
  {
    name: "Germany",
    slug: "germany",
    cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
  },
  {
    name: "France",
    slug: "france",
    cities: ["Paris", "Lyon", "Marseille"],
  },
  {
    name: "Netherlands",
    slug: "netherlands",
    cities: ["Amsterdam", "Rotterdam"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    cities: ["Auckland", "Wellington"],
  },
  {
    name: "South Africa",
    slug: "south-africa",
    cities: ["Johannesburg", "Cape Town", "Durban"],
  },
  {
    name: "Qatar",
    slug: "qatar",
    cities: ["Doha"],
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    cities: ["Kuwait City"],
  },
  {
    name: "Oman",
    slug: "oman",
    cities: ["Muscat"],
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    cities: ["Manama"],
  },
];

export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCountry(countrySlug) {
  return locations.find((country) => country.slug === countrySlug);
}

export function getCity(countrySlug, citySlug) {
  const country = getCountry(countrySlug);

  if (!country) return null;

  return country.cities.find((city) => slugify(city) === citySlug);
}
