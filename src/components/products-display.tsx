import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import { productsData } from "../constants";

import { motion, AnimatePresence, Variants } from "motion/react";

const textItemVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const ProductsDisplay = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const currentSlide = productsData[activeIndex];

  return (
    <div className="relative py-8 overflow-hidden mt-[100px]">
      <Swiper
        modules={[A11y]}
        spaceBetween={15}
        slidesPerView={1.6}
        className="mySwiper"
        centeredSlides={true}
        loop={true}
        onSlideChange={handleSlideChange}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 130,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 130,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        }}
      >
        {productsData.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="w-full h-full transform transition-all duration-300 ">
              <img
                className="block w-full h-64 md:h-[500px] object-cover rounded-lg shadow-lg"
                src={product.image}
                alt="Product Image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-10 h-16 relative animated-text-container">
        <AnimatePresence initial={false} mode="wait">
          {currentSlide && (
            <motion.div
              key={activeIndex}
              variants={{
                enter: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1,
                  },
                },
                exit: {
                  transition: {
                    staggerChildren: 0.08,
                    staggerDirection: -1,
                  },
                },
              }}
              initial="initial"
              animate="enter"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.h3
                variants={textItemVariants}
                className="mb-1 text-4xl tracking-[-1px] leading-[40px] md:leading[60px] font-normal md:font-medium md:text-2xl"
              >
                {currentSlide.title}
              </motion.h3>
              <motion.p
                variants={textItemVariants}
                className="text-[#7A7777] text-[16px] md:text-2xl"
              >
                {currentSlide.location}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsDisplay;
