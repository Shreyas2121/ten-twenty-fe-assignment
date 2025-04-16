import ProductsDisplay from "./products-display";
import { motion } from "motion/react";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ProductsSection = () => {
  return (
    <section className="bg-[#FFFCFA] py-16 md:py-24">
      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.1 }}
        className="px-4 flex flex-col gap-8 items-center justify-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-[56px] opacity-0 transform translate-y-10 tracking-[-1px]"
        >
          Quality Products
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-2xl text-[#7A7777] opacity-0 transform translate-y-10 text-center md:w-1/2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </motion.p>
      </motion.div>

      <ProductsDisplay />
    </section>
  );
};

export default ProductsSection;
