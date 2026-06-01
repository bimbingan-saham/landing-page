import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StockTicker from "@/components/StockTicker";
import PainPoint from "@/components/PainPoint";
import WhyUs from "@/components/WhyUs";
import AboutInstructor from "@/components/AboutInstructor";
import Classes from "@/components/Classes";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StockTicker />
      <PainPoint />
      <WhyUs />
      <AboutInstructor />
      <Classes />
      <Guarantee />
      <FAQ />
      <CtaFinal />
      <Footer />
    </>
  );
}
