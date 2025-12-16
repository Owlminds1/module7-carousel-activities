"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L2-A4/pointers.json";
import Slide2Data from "@/src/layout-C52-L2-A4/pointers2.json";
import MyImage from "@/components/myImage";
import ThirdSlide from "./ThirdSlide"

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

  // FIXED ENTER LOGIC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      // Slide 0
      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length  ? prev + 1 : prev
        );
      }  
      
 
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount, visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2,activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "BANK ACCOUNTS"
            : activeSlide === 1
            ? "NOTES ON BANKING"
            : activeSlide === 2
            ? "BANKING"
            :""}
        </h4>
<p className="text-black text-lg ">
  {activeSlide === 2 ? "Identify the different methods of banking by answering yes or no.":""}
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
                  <MyImage path="/C52Images/Bank_Account.jpg"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                

                  <ul className="list-disc w-full px-5 space-y-4">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        <span className="font-bold">{i.title} : </span>{i.text}
                      </li>
                    ))}
                  </ul>
 {SlideData.length-1 < visibleCount && (
                    <p className="text-gray-800 mt-3 w-full text-center italic font-normal">
                     ( All definitions are directly quoted from merriam-webster or cambridge dictionary.)
                    </p>
                  )}
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
                  <MyImage path="/C52Images/Banking.jpeg"/>
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



             { Slide2Data.length > visibleCount2  && (
  <p className="text-gray-800 mt-3 text-center italic font-normal">
    (Enter to show more points)
  </p>
)}

                </div>
              </div>
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
