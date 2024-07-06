import Workflow from "./Workflow";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Testimonials />
    </>
  );
}
