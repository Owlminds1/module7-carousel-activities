"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";

import Decorations from "@/src/layout-C53-L3-A4/Decorations.json";
import Foods from "@/src/layout-C53-L3-A4/food.json";
import SecondSlide from "./secondSlide";
import MyImage from "@/components/myImage";
import ThirdSlide from "./thirdSlide";

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
            ? "HAPPY BIRTHDAY PARTY!"
            : activeSlide === 1
            ? "HAPPY BIRTHDAY PARTY!"
            : "Suggestive Responses"}
        </h4>

        <p className="text-black text-xl text-center ">
          {activeSlide === 0
            ? "Here are the items in the market."
            : "Make your choice (ideal suggestive responses)"}
        </p>

        <p className="text-black text-xl text-center ">
          {activeSlide === 0
            ? "You’ve to apply all you’ve learned to ensure that you shop based on needs and budget."
            : ""}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
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
              <div className=" flex justify-center flex-col gap-5 items-center">
                <p className="text-xl text-black w-[70%] text-center">
                  You’ve to create a shopping list for a birthday party. Your
                  budget is $400. Some 6 people are coming plus your family of
                  four (total 10 people). Some guests are vegan, so no eggs.
                </p>

                <p className="text-xl text-black w-[70%] text-center">
                  Note: You can buy one or more quanitity of each item.
                </p>
                <div>
                  <MyImage path="/C53Images/Shopping_Birthday.jpg" />
                </div>
                
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <SecondSlide />
            </SwiperSlide>
            
              <SwiperSlide>
             <ThirdSlide/>
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
