import { motion, useAnimationControls } from "motion/react";

import Navbar from "../components/navbar";
import Hero from "../components/hero";

import { useHeroImageSliderStore } from "../store/heroImageSliderStore";
import { useEffect, useRef, useState } from "react";
import BackgroundLayer from "../components/background-layer";

const HeroLayout = () => {
  const { currentBgImage } = useHeroImageSliderStore();

  const [imageLayerA, setImageLayerA] = useState(currentBgImage);
  const [imageLayerB, setImageLayerB] = useState<string | null>(null);
  const [isLayerAActive, setIsLayerAActive] = useState(true);

  const controlsA = useAnimationControls();
  const controlsB = useAnimationControls();

  const initialLoadDone = useRef(false);

  useEffect(() => {
    setImageLayerA(currentBgImage);
    setImageLayerB(currentBgImage);
    controlsA.set("visible");
    controlsB.set("hidden");

    initialLoadDone.current = true;
  }, []);

  useEffect(() => {
    if (!initialLoadDone.current) return;

    const currentDisplayedImage = isLayerAActive ? imageLayerA : imageLayerB;

    if (currentBgImage === currentDisplayedImage) return;

    const targetControls = isLayerAActive ? controlsB : controlsA;
    const targetSetter = isLayerAActive ? setImageLayerB : setImageLayerA;

    setIsLayerAActive((prev) => !prev);

    targetSetter(currentBgImage);
    targetControls.set("hidden");
    targetControls.start("visible");
  }, [currentBgImage, isLayerAActive]);

  return (
    <section className="relative h-screen md:p-5 overflow-hidden ">
      <BackgroundLayer
        controls={controlsA}
        image={imageLayerA}
        isActive={isLayerAActive}
      />
      {imageLayerB && (
        <BackgroundLayer
          controls={controlsB}
          image={imageLayerB}
          isActive={!isLayerAActive}
        />
      )}

      <div className="relative z-[10] h-full">
        <Navbar />
        <Hero />
      </div>
    </section>
  );
};

export default HeroLayout;
