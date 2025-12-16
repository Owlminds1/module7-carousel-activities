"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L1-A1/slideData.json";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const [open, setOpen] = useState(false);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "THOSE SHOES"
            : activeSlide >= 1
            ? "THOSE SHOES Q&A"
            : ""}
        </h4>
        {/* <p className="text-black text-lg text-center ">
         Choose the best possible response for the following situations.
        </p> */}
      </div>

      <div className="w-[80%] flex justify-center items-center flex-col gap-3">
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

               <div className="flex justify-center items-center w-full p-3">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/bGKYmjaYqhY?si=2QX9FUwCOMfK7_HF" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

              </div>
            </SwiperSlide>
            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full place-items-center p-2">
                  <div className="col-span-12  w-full  flex min-h-[100px]  justify-center items-center gap-8">
                    <h3 className="text-2xl text-center font-bold text-black">
                      {i.text}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Welldone open={open} setOpen={setOpen} />
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
              activeSlide < SlideData.length  ? "visible" : "invisible"
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
