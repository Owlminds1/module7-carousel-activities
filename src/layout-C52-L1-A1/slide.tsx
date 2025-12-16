"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L1-A1/pointers.json";
import Slide3Data from "@/src/layout-C52-L1-A1/slide3Data.json";
import MyImage from "@/components/myImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const [visibleCount, setVisibleCount] = useState(0);
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
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

     if (current === 2) {
  setVisibleCount3((prev) =>
    prev < Slide3Data.length * 2 ? prev + 1 : prev
  );
}

    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount, visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "SPEND IT (PRICE AND VALUE)"
            : activeSlide === 1
            ? "SPEND IT (PRICE AND VALUE)"
            : activeSlide === 2
            ? "PRICE AND VALUE"
            : ""}
        </h4>

        <p className="text-black text-lg ">
          {activeSlide === 0
            ? "READ THE FOLLOWING QUESTIONS TO TAKE NOTES DURING THE VIDEO"
            : activeSlide === 1
            ? "WATCH THE FOLLOWING VIDEO AND TAKE NOTES"
            : activeSlide === 2
            ? "ANSWER THE FOLLOWING QUESTIONS ABOUT THE VIDEO"
            : ""}
        </p>
      </div>

      <div className="w-[80%] flex justify-center items-center flex-col gap-3">
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
                <div className="col-span-12 w-[60%] flex flex-col gap-5">
                  {SlideData.slice(0, visibleCount).map((i, index) => (
                    <ul key={index} className="list-disc">
                      <li className="text-lg font-medium text-black animate-fadeIn">{i}</li>
                    </ul>
                  ))}

                  {visibleCount < SlideData.length && (
                    <p className="text-gray-800 italic text-center">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-12 w-[40%] flex flex-col gap-5">
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/zIphLnw8CXQ?si=xpLqqynIMdi1-HNp"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>

          <SwiperSlide>
  {Slide3Data.map((i, idx) => {
    const stepIndex = idx * 2; // Step 0,2,4,6...

    // SHOW IMAGE + QUESTION
    const showQuestion = visibleCount3 > stepIndex;

    // SHOW ANSWER (only if 2nd press happened)
    const showAnswer = visibleCount3 > stepIndex + 1;

    return (
      showQuestion && (
        <div
          key={idx}
          className="grid grid-cols-12 w-full place-items-center p-2"
        >
          <div className="col-span-6 w-full flex gap-5">
            <MyImage path={i.img} />
          </div>

          <div className="col-span-6 w-full gap-5">
            <h4 className="text-black text-xl font-bold animate-fadeIn">{i.text}</h4>

            {showAnswer && (
              <p className="text-black text-lg my-2 font-medium animate-fadeIn">
                Answer : {i.answer}
              </p>
            )}
          </div>
        </div>
      )
    );
  })}

  {visibleCount3 < Slide3Data.length * 2 && (
    <p className="text-gray-800 italic text-center">
      (Press Enter to show more)
    </p>
  )}
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
