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
            : ""}
        </h4>

        <p className="text-black text-lg text-center ">
          {activeSlide === 0
            ? "Here are the items in the market."
            : "Make your choice (ideal suggestive responses)"}
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
              <div>
                <MyImage path="/C53Images/"/>
              </div>
               <div className="flex justify-center items-center gap-5">
                <div className="grid grid-cols-12 w-full place-items-center ">
                  <div className="col-span-6 w-full p-1 text-center text-white bg-violet-900 font-bold">
                    Decorations Items
                  </div>
                  <div className="col-span-6 w-full p-1 text-center text-white bg-violet-900 font-bold">
                    Price ($)
                  </div>

                  {Decorations.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="col-span-6 p-1  min-h-[60px] border w-full text-center text-black font-bold">
                        {item.text}
                      </div>

                      <div className="col-span-6 border min-h-[60px] p-1 w-full text-center text-black ">
                        {item.price}
                      </div>
                    </React.Fragment>
                  ))}
                </div>

                <div className="grid grid-cols-12 w-full place-items-center ">
                  <div className="col-span-6 w-full p-1 text-center text-white bg-violet-900 font-bold">
                    Food Items
                  </div>
                  <div className="col-span-6 w-full p-1 text-center text-white bg-violet-900 font-bold">
                    Price ($)
                  </div>

                  {Foods.map((item, index) => (
                    <React.Fragment key={index}>
                      <div className="col-span-6 p-1  min-h-[60px] border w-full text-center text-black font-bold">
                        {item.text}
                      </div>

                      <div className="col-span-6 border min-h-[60px] p-1 w-full text-center text-black ">
                        {item.price}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
             </div>
            </SwiperSlide>

            <SwiperSlide>
              <SecondSlide />
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
