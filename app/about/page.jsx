import Hero from "../components/Hero";
import AboutServices from "../components/AboutServices";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import Location from "../components/Location";
import AboutPhilosophySection from "../components/AboutPhilosophySection";
import HeroCreativePage from "../components/HeroCreativePage";

export default function Home() {
  return (
    <>
       {/* <Hero />  */}
       <HeroCreativePage/>
       <AboutPhilosophySection/>
<AboutServices/>

<Location/>
<ClientsSection/>

<ContactSection/>
 
    </>
  );
}
