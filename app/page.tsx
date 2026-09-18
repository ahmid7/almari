import HowItworks from "@/components/howItworks";
import FiveKindsOfIntelligence from "@/components/fiveKindsOfIntelligence";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import PurposeCta from "@/components/purposeCta";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero animated />
      <HowItworks />
      <FiveKindsOfIntelligence />
      <Pricing />
      <Faq />
      <PurposeCta />
      <Footer />
    </main>
  );
}
