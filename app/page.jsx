import Hero from "./components/Hero";
import AboutServices from "./components/AboutServices";
import IndustriesSection from "./components/IndustriesSection";
import ClientsSection from "./components/ClientsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

import CallToActionSection from "./components/CallToActionSection";

export default function Home() {
  return (
    <>
       <Hero /> 
<AboutServices/>
<IndustriesSection/>

<ClientsSection/>
<TestimonialsSection/>
<ContactSection/>
<CallToActionSection/>

 
    </>
  );
}
