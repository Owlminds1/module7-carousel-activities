"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";

import { MdOutlineDeleteOutline } from "react-icons/md";
import MyImage from "@/components/myImage";
import Slide2 from "./slide2";

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
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "KINDNESS"
            : activeSlide === 1
            ? " PILLARS OF KINDNESS"
            : " RANDOM ACTS OF KINDNESS"}
        </h4>

        <p className="text-black text-lg ">
          {activeSlide === 1
            ? "Based on the criteria in the chart, list down actions that can ensure all aspects of kindness."
            : ""}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-2 ">
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
              <div className="grid grid-cols-12 w-full ">
                <div className="col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                  <h3 className="font-bold text-xl text-center  text-black ">
                    How Kindness Impacts Our Lives.
                  </h3>
                  <MyImage path="/C49Images/Goodness.jpg" />
                  <h3 className="italic text-black/60 text-sm text-center py-3">
                    Credit: Laurie Santos
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Slide2 />
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full ">
                <div className="col-span-6 w-full flex justify-center items-center  ">
                  <MyImage path="/C49Images/RAK.jpg" />
                </div>


                  <div className="col-span-6 w-full flex justify-center items-center  flex-col gap-3 p-3 ">
               <ul className="list-disc space-y-2  w-full">
                <li className="text-black text-lg font-bold ">
                  Now can you reflect on all the points to define three actions you’d do as your random acts of kindness? 
                </li>
                
                
                
                
               </ul>

               <textarea  placeholder="write here..." rows={4} className="border w-full rounded-lg p-2 text-black "/>

                              <ul className="list-disc space-y-2 w-full ">
              
                
                
                
                 <li className="text-black text-lg  font-bold">
                 Describe how others would feel if you were to do those acts of kindness.
                </li>
               </ul>

               <textarea  placeholder="write here..." rows={4} className="border w-full rounded-lg p-2 text-black "/>

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
