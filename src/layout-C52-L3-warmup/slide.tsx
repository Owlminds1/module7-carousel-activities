"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L3-warmup/slide1.json";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          Homophones
        </h4>

        {/* <p className="text-black text-lg ">
          {activeSlide <= SlideData.length
            ? "You’ve to choose a birthday gift for your friend Tiara."
            : activeSlide === 5
            ? "What would you choose? Think about"
            : ""}
        </p> */}
      </div>

      <div className="w-[60%] flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-5 min-h-[200px]">
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
            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full place-items-center p-2">
                  <div className="col-span-12 w-full flex flex-col ustify-center items-center gap-5">
                    <h2 className="text-black text-4xl ">{i.text}</h2>
                    {show ? (
                      <h2 className=" animate-fadeIn font-normal text-violet-900 text-3xl italic  ">
                        {i.suggestion}
                      </h2>
                    ) : (
                      <button
                        onClick={() => setShow(true)}
                        className="text-white bg-violet-900 px-5 py-2 cursor-pointer rounded-lg"
                      >
                        Show Suggestion
                      </button>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
              activeSlide < SlideData.length - 1 ? "visible" : "invisible"
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
