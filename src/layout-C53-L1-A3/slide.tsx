"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L1-A3/pointers.json";


import MyImage from "@/components/myImage";
import DragSlide from "./dragSlide";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  // FIXED ENTER LOGIC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      // Slide 0
      if (current === 0) {
        setVisibleCount((prev) =>
          prev < SlideData.length * 2 ? prev + 1 : prev
        );
      }
      
    
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "HOW TO KEEP SAVINGS"
            : activeSlide === 1
            ? "DOING TASKS TO KEEP SAVINGS"
            : ""}
        </h4>
        <p className="text-black text-lg text-center ">
          {activeSlide === 1
            ? "Match the following statements with their respective categories."
            : ""}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
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
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-12 w-full text-center font-bold text-black text-lg ">
                  We can save our money by doing several tasks:

                </div>
                {SlideData.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount > stepIndex;
                  const showImage = visibleCount > stepIndex;
                  const showAnswer = visibleCount > stepIndex + 1;

                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-6 w-full flex justify-center items-center">
                        {
                          showImage && (
                            <MyImage path={i.img} />

                          )
                        }
                      </div>
                      <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                        <ul className="list-disc w-full px-5 space-y-4">
                          {showQuestion && (
                            <li className="font-bold text-black ">{i.text}</li>
                          )}
                        </ul>

                        {showAnswer && (
                          <h4 className="text-gray-600 text-lg font-medium">
                            {i.subText}
                          </h4>
                        )}

                    
                      </div>
                    </React.Fragment>
                  );
                })}
                <div className="col-span-12 text-center w-full">
                      {SlideData.length *2 > visibleCount && (
                          <p className="text-gray-800 mt-3 text-center italic font-normal">
                            (Enter to show more points)
                          </p>
                        )}
                </div>
              </div>
            </SwiperSlide>


<SwiperSlide>
  <DragSlide />
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
