import Navbar from "../components/navbar";
import Hero from "../components/hero";

import { useHeroImageSliderStore } from "../store/heroImageSliderStore";

const HeroLayout = () => {
  const { currentBgImage } = useHeroImageSliderStore();

  return (
    <section
      id="hero"
      className="relative bg-cover md:bg-center h-screen md:p-5"
      style={{
        backgroundImage: `url(${currentBgImage})`,
      }}
    >
      <Navbar />
      <Hero />
    </section>
  );
};

export default HeroLayout;
