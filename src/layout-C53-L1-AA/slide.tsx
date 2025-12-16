"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);

  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center  flex-col">
        <h4 className="text-3xl font-bold text-center text-black">
        SMART SHOPPER
        </h4>

        <p className="text-black text-lg text-center w-[80%] ">
      {
        activeSlide === 0
          ? "You’ve $50 of pocket money to spend. You can buy any of the following items. There’s no right or wrong answer, but we will let you know when the choice is not healthy or wise!"
          : ""
      }
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-5 ">
          <Swiper
            loop={false}
            autoHeight
            allowTouchMove={false}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
          <SwiperSlide>
<Table swiperRef={swiperRef}/>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" flex justify-center items-center flex-col gap-3 p-5">
              <h3 className="text-black font-bold w-[80%] text-center text-2xl">How will you ensure that you make wise use of your pocket money - save for items your value?</h3>

              <textarea placeholder="write here..." className="text-black p-2 w-[60%] outline-0 focus:ring-2 ring-1 ring-violet-900 rounded-lg transition-all duration-300 focus:ring-violet-900 " rows={3}  />
            </div>
          </SwiperSlide>
          </Swiper>
        </div>

        {/* Navigation */}
        <div className="flex justify-between w-full mt-8">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            } cursor-pointer text-black text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>

          <span
            onClick={handleNext}
            className={`${
              activeSlide < 1 ? "visible" : "invisible"
            } cursor-pointer text-black text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
