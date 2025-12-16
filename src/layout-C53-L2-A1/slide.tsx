"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L2-A1/pointers.json";
import Slide2Data from "@/src/layout-C53-L2-A1/pointer2.json";
import Slide3Data from "@/src/layout-C53-L2-A1/pointers3.json";

import MyImage from "@/components/myImage";
import SlideThree from "./slideThree";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);

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

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length * 2 ? prev + 1 : prev
        );
      }
      
      if (current === 3) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount, visibleCount2, visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, visibleCount3, activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-2xl font-bold text-center text-black">
          {activeSlide === 0
            ? "INCENTIVES"
            : activeSlide === 1
            ? "VISUAL APPEAL"
            : activeSlide === 2
            ? "READ THE FOLLOWING STATEMENTS. "
            : ""}
        </h4>
        <p className="text-black text-lg text-center ">
          {activeSlide === 2
            ? "THEN SELECT THE CORRECT RESPONSE FOR EACH STATEMENT"
            : activeSlide === 3
            ? "ANSWER THE FOLLOWING QUESTIONS ABOUT THE IMAGE OF DISCOUNTS."
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
                            <li className="font-medium text-lg  text-black ">
                              <span className="font-bold">{i.title} : </span>
                              {i.text}
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
              <div className="grid grid-cols-12 gap-5 w-full place-items-center p-2">
                {Slide2Data.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount2 > stepIndex;
                  const showImage = visibleCount2 > stepIndex;
                  const showAnswer = visibleCount2 > stepIndex + 1;

                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-6 w-full flex justify-center items-center">
                        {showImage && <MyImage path={i.img} />}
                      </div>
                      <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                        {showQuestion && (
                          <h4 className="font-bold w-full text-2xl text-black my-3">
                            {i.heading}
                          </h4>
                        )}
                        <ul className="list-disc w-full px-5 space-y-4">
                          {showQuestion &&
                            (index !== 2 ? (
                              <li className="font-medium text-lg  text-black ">
                                <span className={`font-bold`}>
                                  {i.title} :{" "}
                                </span>
                                {i.text.map((textItem, idx) => (
                                  <span key={idx}>
                                    {textItem}
                                    <br />
                                  </span>
                                ))}
                              </li>
                            ) : (
                              i.text.map((textItem, idx) => (
                                <li
                                  key={idx}
                                  className="font-medium text-lg  text-black "
                                >
                                  <span>
                                    {textItem}
                                    <br />
                                  </span>
                                </li>
                              ))
                            ))}
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
                  {Slide2Data.length * 2 > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <SlideThree />
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                  <div className="col-span-6 w-full flex justify-center items-center">
                        <MyImage path="/C53Images/Sales2.jpg" />
                      </div>
                      <div  className="col-span-6 w-full flex flex-col  justify-start items-start gap-1">
                {Slide3Data.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount3 > stepIndex;
                  const showAnswer = visibleCount3 > stepIndex + 1;

                  return (
                      <React.Fragment key={index}>
                      
                          {showQuestion && (
                            <h4 className="font-medium text-xl  text-black ">
                              {i.text}
                            </h4>
                          )}
                      

                        {showAnswer && (
                          <h4 className="text-gray-600 mb-3 w-full text-lg font-medium">
                            Answer : {i.subText}
                          </h4>
                        )}
                      </React.Fragment>
                  );
                })}
                      </div>
                <div className="col-span-12 text-center w-full">
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
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
              activeSlide < 3 ? "visible" : "invisible"
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
