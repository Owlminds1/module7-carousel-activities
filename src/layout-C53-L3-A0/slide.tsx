"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L3-A0/pointer1.json";
import Slide2Data from "@/src/layout-C53-L3-A0/pointer2.json";
import MyImage from "@/components/myImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;
      const current = swiperRef.current?.activeIndex ?? activeSlide;
      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }
      
      if (current === 1) {
        setVisibleCount2((prev) => (prev < Slide2Data.length ? prev + 1 : prev));
      }
    }; window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    ,
    visibleCount,

    activeSlide,
  ]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [
    visibleCount,
  
    activeSlide,
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
    Locate
        </h4>

      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3">
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
        
             
           <SwiperSlide >
                <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                  <div className="col-span-6 w-full min-h-[100px] flex justify-center items-center ">
                    <MyImage path="/C53Image" />
                  </div>

                  <div className="col-span-6 w-full min-h-[100px] flex flex-col justify-center items-center ">
                    <ul className="list-disc space-y-2">
                      {SlideData.slice(0, visibleCount).map((item, index) => (
                        <li key={index} className="text-black text-lg  ">
                          {item}
                        </li>
                      ))}
                    </ul>

                       <div className="col-span-12 text-center w-full">
                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                  </div>
                  

                  <div className="col-span-12 w-full ">
                    <h2 className="text-gray-600 text-md italic text-center ">
                      (Activity inspired by “Fresh & Fun Critical-Thinking Activities” By Laurie Rozakis)
                    </h2>
                  </div>
                </div>
              </SwiperSlide>


               <SwiperSlide >
                <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                  <div className="col-span-6 w-full min-h-[100px] flex justify-center items-center ">
                    <MyImage path="/C53Image" />
                  </div>

                  <div className="col-span-6 w-full min-h-[100px] flex flex-col justify-center items-center ">
                    <ul className="list-disc space-y-2">
                      {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                        <li key={index} className="text-black text-lg ">
                          {item}
                        </li>
                      ))}
                    </ul>

                       <div className="col-span-12 text-center w-full">
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                  </div>
                  

                  <div className="col-span-12 w-full ">
                    <h2 className="text-gray-600 text-md italic text-center ">
                      (Activity inspired by “Fresh & Fun Critical-Thinking Activities” By Laurie Rozakis)
                    </h2>
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
