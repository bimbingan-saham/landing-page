import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StockTicker from "@/components/StockTicker";
import PainPoint from "@/components/PainPoint";
import InsiderNews from "@/components/InsiderNews";
import CatalystAnalysis from "@/components/CatalystAnalysis";
import WhyUs from "@/components/WhyUs";
import LearningOutcomes from "@/components/LearningOutcomes";
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
      <InsiderNews />
      <CatalystAnalysis />
      <WhyUs />
      <LearningOutcomes />
      <Classes />
      <Guarantee />
      <FAQ />
      <CtaFinal />
      <Footer />
    </>
  );
}
