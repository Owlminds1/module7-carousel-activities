"use client";
import  { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Slide2Data from "@/src/layout-C50-L1-A3/slide2.json";
import TableSlide from "./table";
import Image from "next/image";


const Slide = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [visibleCount2, setVisibleCount2] = useState(1);

  const handlePrev = () => swiperRef?.current?.slidePrev();
  const handleNext = () => swiperRef?.current?.slideNext();

  const handleSlideChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex;
    setActiveSlide(index);
    window.scrollTo(0, 0);
  };

  // 👇 Enter press pe points show karne ka logic
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if (activeSlide === 0) {
          setVisibleCount2((prev) =>
            prev < Slide2Data.length ? prev + 1 : prev
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlide]);

  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FCFA] flex justify-center items-center gap-5 flex-col p-5">
      <div className="w-[80%] text-center">
        <h1 className="text-3xl text-black font-bold">


        REASONS AND OUTCOMES
        </h1>

        <p className="text-black text-lg">
          {activeSlide >= 1
            ? "Review categories in each column"
            : ""}
        </p>

        <p className="text-black text-lg">
          {activeSlide >= 1
            ? "Use the input boxes to discuss each category of outcomes, reasons, and impact based on the example shown."
            : ""}
        </p>
      </div>

      <div className="w-[90%]">
        <div className="w-full shadow-lg p-2 rounded-lg">
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
              <div className="grid grid-cols-12 gap-5 w-full min-h-[200px] p-5 place-items-center">
                <div className="col-span-6 w-full flex justify-center items-center flex-col">
                 <ul className="list-disc space-y-4 px-3">
                   <li className="text-black text-center text-lg">
                   Every choice you make leads to a specific outcome thus affecting the next choice you can make.
                  </li>
                
                 </ul>
                </div>

                <div className="w-full col-span-6">
                  <p className="text-lg text-center text-black">
                  Let’s understand this with an example.
                  </p>

                  <p className="text-lg text-center py-3 text-gray-600">
                   Example: Reasons and outcomes of choosing carrots 
                  </p>
                  
                   <p className="text-lg text-center py-3 text-gray-600">
                  We choose carrots because they are healthy and full of nutrients. Choosing carrots leads to good health and fitness.
                  </p>
                  <div className="grid grid-cols-12 w-full ">
                   <div className="col-span-4 w-full border text-center text-black p-2 font-bold">
                      CHOICE
                    </div>

                    <div className="col-span-4 w-full border text-center text-black p-2 font-bold">
                      REASONS
                    </div>

                    <div className="col-span-4 w-full border text-center text-black p-2 font-bold">
                      OUTCOMES
                    </div>
                    <div className="col-span-4 w-full border flex justify-center items-center">
                      <div className="w-20 h-20 relative border">
                        <Image src="/C49Images/carrots.jpg" objectFit="cover" fill alt="images" />
                      </div>
                    </div>

                  
                    <div className="col-span-4 w-full border text-center text-black p-2">
                      Healthy
                    </div>

                    <div className="col-span-4 w-full border text-center text-black p-2">
                      Tasty
                    </div>

                   
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <TableSlide swiperRef={swiperRef} />
            </SwiperSlide>
            
             
          </Swiper>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center gap-5 w-full mt-8">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            } cursor-pointer text-black text-4xl border rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>

          <span
            onClick={handleNext}
            className={`${
              activeSlide < 1 ? "visible" : "invisible"
            } cursor-pointer  text-black text-4xl border rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
