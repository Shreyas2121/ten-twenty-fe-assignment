import { Variants } from "motion/dist/react";

export const STROKE_WIDTH = 6;

export const revealFromCenter: Variants = {
  hidden: {
    clipPath: "inset(50% 0% 50% 0%)",
    scale: 1,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1.08,
    transition: {
      duration: 1.4,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const containerSequenceVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const elementStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const wordFadeInUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};
