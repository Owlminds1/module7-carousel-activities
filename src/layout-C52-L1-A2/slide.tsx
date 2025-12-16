"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { act, useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L1-A2/pointers.json";
import Slide3Data from "@/src/layout-C52-L1-A2/slide3Data.json";
import Slide4Data from "@/src/layout-C52-L1-A2/slide4Data.json";
import Slide5Data from "@/src/layout-C52-L1-A2/slide5Data.json";
import MyImage from "@/components/myImage";
import PurchaseCycle from "./purchase-cycle";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    scroll(0,0)
  };

  // FIXED ENTER LOGIC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      // Slide 0
      if (current === 0) {
        setVisibleCount((prev) =>
          prev < SlideData.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 1) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 3) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length ? prev + 1 : prev
        );
      }

      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    ,
    visibleCount,
    visibleCount3,
    visibleCount4,
    activeSlide,
    visibleCount5,
  ]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount3, visibleCount4, visibleCount5]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "HOW PRICE AND VALUE DIFFER"
            : activeSlide === 1
            ? "SPEND IT (PRICE AND VALUE)"
            : activeSlide === 2
            ? "WHAT IS A PURCHASE CYCLE?"
            : activeSlide === 3
            ? "ACTIVITY ON PURCHASE CYCLE"
            : activeSlide === 4
            ? "WHAT WILL YOU PURCHASE?"
            : ""}
        </h4>

        <p className="text-black text-lg text-center ">
          {activeSlide === 3
            ? "Let’s say you’re the customer. You want to go buy some apples. You’ve to choose based on:"
            : activeSlide === 4
            ? "Here are some options:"
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
            {/* SLIDE 0 */}
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Good_Price.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col gap-5">
                  {SlideData.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount > stepIndex;
                    const showAnswer = visibleCount > stepIndex + 1;

                    return (
                      <div>
                        {showQuestion && (
                          <ul key={index} className="list-disc">
                            <li className="text-lg font-bold text-black animate-fadeIn">
                              {i.text}
                            </li>
                          </ul>
                        )}
                        {showAnswer && (
                          <ul className="list-inside ">
                            <li className="text-black/80 font-normal text-lg  ">
                              {" "}
                              <span className="font-bold text-lg ">→</span>{" "}
                              {i.points}
                            </li>
                          </ul>
                        )}
                      </div>
                    );
                  })}

                  {visibleCount < SlideData.length * 2 && (
                    <p className="text-gray-800 italic text-center">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/VC.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col gap-5">
                  <h4 className="font-bold text-black text-lg ">
                    For e.g., bringing a robotic vacuum cleaner home by paying
                    the price has value.
                  </h4>
                  {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                    <ul key={index} className="list-disc">
                      <li className="text-lg font-medium text-black animate-fadeIn">
                        {i}
                      </li>
                    </ul>
                  ))}

                  {visibleCount3 < Slide3Data.length && (
                    <p className="text-gray-800 italic text-center">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <PurchaseCycle />
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Purchase.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col gap-5">
                  {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                    <ul key={index} className="list-disc">
                      <li className="text-lg font-medium text-black animate-fadeIn">
                        {i}
                      </li>
                    </ul>
                  ))}

                  {visibleCount4 < Slide4Data.length && (
                    <p className="text-gray-800 italic text-center">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-3 w-full font-bold text-center bg-violet-900 text-white p-1 ">
                  VARIETY of APPLES
                </div>
                <div className="col-span-3 w-full font-bold text-center bg-violet-900 text-white p-1 ">
                  PRICE
                </div>
                <div className="col-span-3 w-full font-bold text-center bg-violet-900 text-white p-1 ">
                  QUALITY
                </div>
                <div className="col-span-3 w-full font-bold text-center bg-violet-900 text-white p-1 ">
                  REVIEW
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  A
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  10
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  Really good seem fresh
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  5 stars
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  B
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  15
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  Okay but seem artificial
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  5 stars
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  C
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  10
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  Good but seem old
                </div>
                <div className="col-span-3 w-full text-black p-1 border text-center ">
                  3 stars
                </div>
                <div className="col-span-6">
                  <MyImage path="/C50Images/Apples.jpg" />
                </div>

                <div className="col-span-6 w-full flex flex-col gap-5 ">
                <div>
  <h3 className="font-bold text-lg text-black">
                    What will you buy?{" "}
                  </h3>
                  <h4 className="font-medium text-black">
                    When you decide which apples to buy, you can give details:
                  </h4>
                </div>
                  {Slide5Data.slice(0, visibleCount5).map((i, index) => (
                    <ul key={index} className="list-disc space-y-2">
                      <li className="text-lg font-medium text-black animate-fadeIn">
                        {i}
                      </li>
                    </ul>
                  ))}

                  {visibleCount5 > Slide5Data.length - 1 && (
                    <div className="mt-5">
                      <h3 className="font-bold text-xl text-black ">
                        SUGGESTIVE RESPONSES:
                      </h3>
                      <p className="text-lg text-black ">
                        The best item would be A. These apples are decently
                        priced, have good customer reviews, and are freshly
                        sold.
                      </p>
                    </div>
                  )}

                  {visibleCount5 < Slide5Data.length && (
                    <p className="text-gray-800 italic text-center">
                      (Enter to show more points)
                    </p>
                  )}
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
              activeSlide < 4 ? "visible" : "invisible"
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
