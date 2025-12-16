"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L1-A2/pointers.json";
import Slide2Data from "@/src/layout-C53-L1-A2/pointer2.json";
import Slide3Data from "@/src/layout-C53-L1-A2/pointer3.json";
import MyImage from "@/components/myImage";
import MenuCardSLide from "./menuCardSLide";

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
          prev < Slide2Data.length  ? prev + 1 : prev
        );
      }
      
      if (current === 3) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length  ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount,visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount,visibleCount2, activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "SOME TIPS ON ORDERING AT A RESTAURANT"
            : activeSlide === 1
            ? "AT THE RESTAURANT"
            : activeSlide === 2
            ? "CREATE YOUR PLATE"
            : activeSlide === 3
            ? "AN IDEAL PLATE"
            : ""}
        </h4>
        <p className="text-black text-lg text-center ">
          {activeSlide === 1
            ? "Let’s apply these tips to ordering at a restaurant!"
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
                {SlideData.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount > stepIndex;
                  const showImage = visibleCount > stepIndex;
                  const showAnswer = visibleCount > stepIndex + 1;

                  return (
                    <React.Fragment>
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
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Restaurant.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-4">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>


                   {Slide2Data.length-1 < visibleCount2 && (
                    <h4 className="text-black text-xl mt-3 text-center font-bold">
                     What would you choose?
                    </h4>
                  )}

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <MenuCardSLide/>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Plate.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-4">
                    {Slide3Data.slice(0, visibleCount3 ).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>


                

                  {Slide3Data.length > visibleCount3 && (
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
