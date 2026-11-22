import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import BestCreations from "./components/BestCreations";
import AboutServices from "./components/AboutServices";
import WhatWeDo from "./components/WhatWeDo";
import ProcessSection from "./components/ProcessSection";
import CaseStudies from "./components/CaseStudies";
import WhyHipHipVideos from "./components/WhyHipHipVideos";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import CinematicVideoSection from "./components/CinematicVideoSection";
import IndustriesSection from "./components/IndustriesSection";

export default function Home() {
  return (
    <>
      {/* 01. Hero - AI-powered product & business video creation */}
      <Hero />

      {/* 02. Our Trusted Partners */}
      <ClientsSection />

      {/* 03. Our Work - Portfolio showcase */}
      <IndustriesSection />

      {/* 04. About Hip Hip - Video creation company positioning */}
      <WhatWeDo />

      {/* 05. Our Services - Product & business video services */}
      <AboutServices />

      {/* 06. Our Process - Creative video creation workflow */}
      {/* <ProcessSection /> */}

      {/* 07. Case Studies - Projects, solutions & creative results */}
      <CaseStudies />

      {/* 08. Why Hip Hip - AI, creativity & business-focused approach */}
      <WhyHipHipVideos />

      {/* 09. Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Contact / Project Enquiry Form */}
      <ContactSection />

      {/* 11. FAQ - SEO-focused questions */}
      <FAQSection />

      {/* 12. CTA - Start your video project */}
      <CTASection />
      <CinematicVideoSection />
      {/* 13. Footer is handled by the global layout */}
    </>
  );
}
