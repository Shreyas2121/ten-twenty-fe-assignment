import { motion } from "motion/react";

import SliderControls from "./slider-controls";
import {
  containerSequenceVariants,
  elementStaggerVariants,
  wordFadeInUpVariant,
} from "../constants";

const heading = `From Our Farms
To Your Hands`;
const subheading = "Welcome To TenTwenty Farms";

const Hero = () => {
  const subheadingWords = subheading.split(" ");
  const headingLines = heading.split("\n");

  return (
    <>
      <motion.div
        className="pl-8 md:pl-32 pb-16 md:pt-[50px] absolute left-0 bottom-[60%] md:bottom-1/2 transform translate-y-1/2"
        variants={containerSequenceVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-primary leading-[130%] md:leading-[150%] text-sm md:text-base"
          variants={elementStaggerVariants}
        >
          {subheadingWords.map((word, index, arr) => (
            <motion.span
              key={`sub-${index}`}
              style={{ display: "inline-block", marginRight: "0.25em" }}
              variants={wordFadeInUpVariant}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        <motion.h1 className="text-primary leading-[100%] text-[46px] md:text-[64px] mt-6">
          {headingLines.map((line, lineIndex) => (
            <motion.div
              key={`line-${lineIndex}`}
              className="line-block"
              variants={elementStaggerVariants}
            >
              {line.split(" ").map((word, wordIndex, arr) => (
                <motion.span
                  key={`l${lineIndex}-w${wordIndex}`}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                  variants={wordFadeInUpVariant}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.h1>
      </motion.div>

      <SliderControls />
    </>
  );
};

export default Hero;
