import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContactButtons from "./components/FloatingContactButtons";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.hiphipvideos.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "HipHipVideos | Video Production Company in Hyderabad",
    template: "%s | HipHipVideos",
  },

  description:
    "HipHipVideos is a premium video production company in Hyderabad creating commercial, corporate, product, SaaS, pitch, fashion, D2C, real estate, gadget and industrial videos for brands.",

  keywords: [
    "video production company",
    "video production company Hyderabad",
    "commercial video production",
    "corporate video production",
    "product video production",
    "SaaS video production",
    "pitch video production",
    "franchise video production",
    "fashion video production",
    "D2C video production",
    "real estate video production",
    "electronics video production",
    "gadget video production",
    "industrial video production",
    "manufacturing video production",
  ],

  authors: [
    {
      name: "HipHipVideos",
      url: siteUrl,
    },
  ],

  creator: "HipHipVideos",
  publisher: "HipHipVideos",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "HipHipVideos",

    title: "HipHipVideos | Video Production Company in Hyderabad",

    description:
      "Premium commercial, corporate, product, SaaS, pitch, fashion, D2C, real estate, gadget and industrial video production.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HipHipVideos - Video Production Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "HipHipVideos | Video Production Company in Hyderabad",

    description:
      "Premium video production for brands, businesses and ambitious ideas.",

    images: ["/og-image.jpg"],
  },

  verification: {
    // Your current Google Search Console verification
    // is using the HTML file method:
    // public/googlec2c465a4409126ab.html
  },
};

export default function RootLayout({ children }) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "VideoProductionCompany",

    "@id": `${siteUrl}/#business`,

    name: "HipHipVideos",

    url: siteUrl,

    logo: `${siteUrl}/logo.png`,

    image: `${siteUrl}/og-image.jpg`,

    description:
      "HipHipVideos is a video production company creating commercial, corporate, product, SaaS, pitch, fashion, D2C, real estate, electronics and industrial videos.",

    telephone: "+916301022795",

    email: "info@hiphipvideos.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500008",
      addressCountry: "IN",
    },

    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],

    serviceType: [
      "Commercial Video Production",
      "Corporate Video Production",
      "Product Video Production",
      "SaaS Video Production",
      "Pitch Video Production",
      "Franchise Video Production",
      "Fashion Video Production",
      "D2C Brand Video Production",
      "Real Estate Video Production",
      "Electronics & Gadget Video Production",
      "Industrial & Manufacturing Video Production",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {/* ============================= */}
        {/* GOOGLE ANALYTICS 4 */}
        {/* ============================= */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6TK4Y60WKR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            window.gtag = function() {
              window.dataLayer.push(arguments);
            };

            window.gtag('js', new Date());

            window.gtag('config', 'G-6TK4Y60WKR');
          `}
        </Script>

        {/* ============================= */}
        {/* BUSINESS SCHEMA */}
        {/* ============================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        {/* ============================= */}
        {/* WEBSITE */}
        {/* ============================= */}

        <FloatingContactButtons />

        <Navbar />

        <main className="pt-28">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
