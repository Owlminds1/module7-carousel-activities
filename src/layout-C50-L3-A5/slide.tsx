"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";


import SlideData from "@/src/layout-C50-L3-A5/pointers.json";
import DragDropTable from "./dragDropTable";
import MyImage from "@/components/myImage";


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
          prev < SlideData.length ? prev + 1 : prev
        );
      }

    
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [,visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
        BUDGETING
        </h4>

      
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
            {/* SLIDE 0 */}
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
               
<div className="col-span-6">
  <MyImage path="/C50Images/Shopping.jpg"/>
</div>
                <div className="col-span-6 w-[60%] flex flex-col gap-5">
                  {SlideData.slice(0, visibleCount).map((i, index) => (
                    <ul key={index} className="list-disc">
                      <li className="text-lg font-medium text-black">{i}</li>
                    </ul>
                  ))}

                  {visibleCount < SlideData.length && (
                    <p className="text-gray-800 italic text-center">(Enter to show more points)</p>
                  )}
                </div>
              </div>
            </SwiperSlide>

         <SwiperSlide>
          <DragDropTable swiperRef={swiperRef}/>
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
