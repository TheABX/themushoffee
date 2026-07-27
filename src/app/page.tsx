import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import NotifyForm from "@/components/home/NotifyForm";
import RootCause from "@/components/home/RootCause";
import TasteFeeling from "@/components/home/TasteFeeling";
import FeatureStrip from "@/components/home/FeatureStrip";
import WhatsInside from "@/components/home/WhatsInside";
import IngredientLabel from "@/components/home/IngredientLabel";
import Sourcing from "@/components/home/Sourcing";
import Testimonials from "@/components/home/Testimonials";
import Guarantee from "@/components/home/Guarantee";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <NotifyForm />
      <RootCause />
      <TasteFeeling />
      <FeatureStrip />
      <WhatsInside />
      <IngredientLabel />
      <Sourcing />
      <Testimonials />
      <Guarantee />
      <FAQ />
    </>
  );
}
