"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L3-A3/pointers.json";
import Suggestion from "@/src/layout-C53-L3-A3/suggestion.json"

import MyImage from "@/components/myImage";
import SecondSlide from "./secondSlide";

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
  }, [, visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-2xl font-bold text-center text-black">
          {activeSlide === 0
            ? "IDENTIFYING TIPS & TRICKS"
            : activeSlide === 1
            ? "FORMULATING QUESTIONS"
            : activeSlide === 2
            ? "FORMULATING QUESTIONS"
            : ""}
        </h4>
        <p className="text-black text-lg text-center ">
          {activeSlide === 1
            ? "List questions you can ask sales to ensure that you’re buying what you need."
            : ""}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-[90%] shadow-md p-5 min-h-[200px]">
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
               
                {SlideData.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount > stepIndex;
                  const showImage = visibleCount > stepIndex;
                  const showAnswer = visibleCount > stepIndex + 1;

                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-6 w-full flex justify-center items-center">
                        {showImage && <MyImage path={i.img} />}
                      </div>
                      <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                        <ul className="list-disc w-full px-5 space-y-4">
                          {showQuestion && (
                            <li className="font-bold text-lg  text-black ">
                             {i.title} :
                            </li>
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
                  {SlideData.length * 2 > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <SecondSlide/>
            </SwiperSlide> 
            
            
            <SwiperSlide>
             <div className="grid grid-cols-12 w-full p-3">
      <div className="col-span-6 w-full flex justify-center items-center">
        <MyImage path="/C53Images" />
      </div>

      <div className="col-span-6 w-full flex flex-col gap-2">
        <h3 className="font-bold text-lg text-center text-black">
         Suggestive Responses
        </h3>
        {Suggestion.map((i, index) => (
          <div className="font-bold border border-black rounded-lg text-black placeholder:text-black/30 placeholder:font-bold p-2"
          key={index}>
            {i}
          </div>
        ))}
      </div>
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
              activeSlide < 2 ? "visible" : "invisible"
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
