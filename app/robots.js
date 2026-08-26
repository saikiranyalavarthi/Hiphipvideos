const baseUrl = "https://hiphipvideos.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
