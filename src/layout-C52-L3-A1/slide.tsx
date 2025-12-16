"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L3-A1/pointers.json";
import Slide2Data from "@/src/layout-C52-L3-A1/pointers2.json";
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

  // FIXED ENTER LOGIC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      // Slide 0
      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 2) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length * 2 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount, visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          Cash, Credit Cards, or Checks Q&A
        </h4>
        <p className="text-black text-lg text-center ">
          {activeSlide === 0
            ? "Read the following questions to answer after the video"
            : activeSlide === 2
            ? "Answer the following questions about the video"
            : ""}
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
                  <MyImage path="/C52Images/Bookcover2.jpg" />
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
                <div className="col-span-12 w-full flex justify-center items-center">
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/N23D5b6Kyng?si=h8rr9-5PtHRLoE6p"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center gap-5">
                  <MyImage path="/C52Images/Bookcover2.jpg" />
                </div>

                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <div className="w-full flex flex-col ">
                    {Slide2Data.map((i, index) => {
                      const stepIndex = index * 2;
                      const showQuestions = visibleCount2 > stepIndex;
                      const showAnswer = visibleCount2 > stepIndex + 1;
                      return (
                        <div className="mt-3" key={index}>
                          {showQuestions && (
                            <h3 className="text-lg font-bold animate-fadeIn text-black">
                              {i.question}
                            </h3>
                          )}

                          {showAnswer && (
                            <p className="text-lg animate-fadeIn  text-black/70">
                              Answer : {i.answer}
                            </p>
                          )}
                        </div>
                      );
                    })}

                    {Slide2Data.length * 2 > visibleCount2 && (
                      <p className="text-gray-800 text-center  italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
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
