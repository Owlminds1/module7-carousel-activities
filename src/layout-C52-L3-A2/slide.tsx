"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L3-A2/pointers.json";
import MyImage from "@/components/myImage";
import Slide4 from "./Slide4";

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
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount,  activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount,  activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "DEBIT CARD"
            : activeSlide === 1
            ? "CREDIT CARD"
            : activeSlide === 2
            ? "DIFFERENT TYPES OF DEBIT CARD"
            :activeSlide === 3 ?"PAYMENTS": ""}
        </h4>
        <p className="text-black text-lg text-center ">
  {activeSlide === 3 ? "Flip the card. Read the questions. Answer with a yes or no, or a description.": ""}
</p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3">
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
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C52Images/DC.jpeg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-4">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
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
                  <MyImage path="/C52Images/CC.png" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <h3 className="text-lg animate-fadeIn text-black">
                    "A card authorizing purchases on credit. A credit card can
                    be used to pay bills, get loans, and can generate interest
                    to be calculated at the time of billing based on when the
                    amount due is paid
                  </h3>

                
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      All definitions are directly quoted from the Merriam
                      Webster or Cambridge dictionary.
                    </p>
                

                
                </div>
              </div>
            </SwiperSlide>

           

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
               
                
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C52Images/Diverse.jpeg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-start gap-2">
                  <h3 className="text-lg animate-fadeIn text-black">
                VISA, MASTERCARD, MAESTRO, RUPAY
                  </h3>

                
              
                </div>

 <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C52Images/CC2.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-start gap-2">

                  <h4 className="font-bold text-lg text-black text-left">DIFFERENT TYPES OF CREDIT CARD</h4>
                  <h3 className="text-lg animate-fadeIn text-black">
                    VISA (TRADITIONAL, SIGNATURE, INFINITE), MASTERCARD
                    (STANDARD, WORLD, WORLD ELITE), MAESTRO, AMERICAN EXPRESS,
                    CAPITAL ONE, DISCOVER
                  </h3>

                
               
                </div>
                

                <div className="col-span-12 w-[60%] text-center">
                     <p className="text-gray-800 mt-3 text-center italic font-normal">
                     All companies processing payments can issue debit cards or credit cards. The different types of debit and credit cards are listed as the name of such companies.
                    </p>
                
                </div>
              </div>
            </SwiperSlide>
            
             <SwiperSlide>
            <Slide4/>
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
              activeSlide < 8 ? "visible" : "invisible"
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
