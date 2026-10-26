import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import PlanTripBanner from "./components/sections/PlaceTripBanner";
import TravelGallery from "./components/sections/TravelGallery";
import FAQs from "./components/sections/FAQs";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <PlanTripBanner />
      <TravelGallery />
      <FAQs />
    </>
  );
}
