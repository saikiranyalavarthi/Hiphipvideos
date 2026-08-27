import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import AboutServices from "./components/AboutServices";
import IndustriesSection from "./components/IndustriesSection";
import ClientsSection from "./components/ClientsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import CaseStudies from "./components/CaseStudies";
import WhyHipHipVideos from "./components/WhyHipHipVideos";
import HyderabadSection from "./components/HyderabadSection";
import ProcessSection from "./components/ProcessSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import BestCreations from "./components/BestCreations";
import CinematicVideoSection from "./components/CinematicVideoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <AboutServices />
      <IndustriesSection />
      <ClientsSection />
      <CaseStudies />
      <BestCreations />
      <CinematicVideoSection />
      <WhyHipHipVideos />
      <ProcessSection />
      <HyderabadSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
