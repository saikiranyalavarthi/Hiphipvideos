import Hero from "../components/Hero";
import AboutServices from "../components/AboutServices";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import Location from "../components/Location";

export default function Home() {
  return (
    <>
       <Hero /> 
<AboutServices/>

<Location/>
<ClientsSection/>

<ContactSection/>
 
    </>
  );
}
