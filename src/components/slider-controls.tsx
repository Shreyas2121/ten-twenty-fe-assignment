import { heroImages } from "../constants";
import { STROKE_WIDTH } from "../constants/animations";
import { useElementSize } from "../hooks/useElementSize";
import { useHeroImageSliderStore } from "../store/heroImageSliderStore";
import { motion, useAnimationControls } from "motion/react";

import { useEffect, useMemo, useRef } from "react";

const SliderControls = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useElementSize(containerRef);
  const { currentImageIndex, nextImage } = useHeroImageSliderStore();

  const wasManuallyStopped = useRef(false);

  const controls = useAnimationControls();

  const nextImageIndex = (currentImageIndex + 1) % heroImages.length;

  const perimeter = useMemo(() => {
    return (dimensions.width + dimensions.height) * 2;
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    let isCancelled = false;
    if (perimeter > 0) {
      wasManuallyStopped.current = false;
      controls.set({
        strokeDashoffset: perimeter,
      });

      controls
        .start({
          strokeDashoffset: 0,
          transition: { duration: 6, ease: "linear" },
        })
        .then(() => {
          if (!wasManuallyStopped.current && !isCancelled) {
            nextImage();
          }
        });
    }

    return () => {
      isCancelled = true;
      controls.stop();
    };
  }, [currentImageIndex, perimeter]);

  const handleNextClick = () => {
    wasManuallyStopped.current = true;
    controls.stop();
    controls.set({ strokeDashoffset: perimeter });
    nextImage();
  };

  return (
    <div className="pl-8 md:pl-32 pb-[67px] absolute left-0 bottom-1 flex items-center gap-8">
      <div
        ref={containerRef}
        className="relative border border-[#EEF4F9] p-4 md:p-6  border-opacity-[30%] mr-8 border-animate"
      >
        <svg
          width={dimensions.width}
          height={dimensions.height}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "visible",
            pointerEvents: "none",
          }}
          preserveAspectRatio=" none"
        >
          {perimeter > 0 && (
            <motion.rect
              animate={controls}
              x={0}
              y={0}
              width={dimensions.width}
              height={dimensions.height}
              rx="7px"
              ry="7px"
              fill="none"
              stroke="white"
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={perimeter}
              initial={{ strokeDashoffset: perimeter }}
            />
          )}
        </svg>

        <div className="z-[1] w-[77px] h-[77px] md:w-24 md:h-28 relative flex items-center justify-center overflow-hidden">
          <motion.img
            key={heroImages[nextImageIndex]}
            variants={{
              hidden: {
                clipPath: "inset(50% 0% 50% 0%)",
                opacity: 0,
              },
              visible: {
                clipPath: "inset(0% 0% 0% 0%)",
                opacity: 1,
                transition: {
                  duration: 1.4,
                  ease: [0.83, 0, 0.17, 1],
                },
              },
            }}
            initial="hidden"
            animate="visible"
            src={heroImages[nextImageIndex]}
            alt="Hero BG Image"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => handleNextClick()}
            className="absolute text-white"
          >
            Next
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-white text-sm">
        <span className="">
          {String(currentImageIndex + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-16 md:w-[10rem] bg-[#EEF4F9]"></span>
        <span className=""> {String(heroImages.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default SliderControls;
