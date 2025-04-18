import { motion, useAnimationControls } from "motion/react";
import { revealFromCenter } from "../constants";

const BackgroundLayer = ({
  image,
  isActive,
  controls,
}: {
  image: string | null;
  isActive: boolean;
  controls: ReturnType<typeof useAnimationControls>;
}) => (
  <motion.div
    className="absolute inset-0 bg-cover md:bg-center"
    style={{
      backgroundImage: `url(${image})`,
      zIndex: isActive ? 2 : 1,
      transformOrigin: "center center",
      willChange: "transform, clip-path",
    }}
    initial="hidden"
    variants={revealFromCenter}
    animate={controls}
  />
);

export default BackgroundLayer;
