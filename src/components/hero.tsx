import SliderControls from "./slider-controls";

const Hero = () => {
  return (
    <>
      <div className="pl-8 md:pl-32 pb-16 md:pt-[50px] absolute left-0 bottom-[60%] md:bottom-1/2 transform translate-y-1/2">
        <p className="text-primary leading-[130%] md:leading-[150%] text-sm md:text-base">
          Welcome To TenTwenty Farms
        </p>
        <h1 className="text-primary leading-[100%] text-[46px] md:text-[64px] mt-6">
          From Our Farms <br />
          To Your Hands
        </h1>
      </div>
      <SliderControls />
    </>
  );
};

export default Hero;
