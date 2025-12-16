"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L2-A2/pointers.json";
import Slide2Data from "@/src/layout-C53-L2-A2/pointer2.json";
import Slide3Data from "@/src/layout-C53-L2-A2/pointers3.json";
import Slide4Data from "@/src/layout-C53-L2-A2/pointers4.json";
import Slide5Data from "@/src/layout-C53-L2-A2/pointers5.json";
import Slide6Data from "@/src/layout-C53-L2-A2/pointers6.json";
import Slide7Data from "@/src/layout-C53-L2-A2/pointers7.json";

import MyImage from "@/components/myImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(0);
  const [visibleCount6, setVisibleCount6] = useState(0);
  const [visibleCount7, setVisibleCount7] = useState(0);

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
          prev < Slide2Data.length ? prev + 1 : prev
        );
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 3) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 5) {
        setVisibleCount6((prev) =>
          prev < Slide6Data.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 6) {
        setVisibleCount7((prev) =>
          prev < Slide7Data.length * 2 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    ,
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount6,
    visibleCount7,
    activeSlide,
  ]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount6,
    visibleCount7,
    activeSlide,
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-2xl font-bold text-center text-black">
          {activeSlide === 0
            ? "WHAT TO CONSIDER BEFORE PURCHASE"
            : activeSlide >= 1
            ? "EXAMPLES OF PRODUCTS TO CONSIDER"
            : ""}
        </h4>

        <p className="text-black text-lg text-center ">
          {activeSlide > 1
            ? "Answer the following questions about each item (orally):"
            : ""}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-[90%] shadow-md p-5 min-h-[200px]">
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
                  <MyImage path="/C53Images/Questions.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-4">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="font-medium text-lg animate-fadeIn text-black "
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  <div className=" text-center w-full">
                    {SlideData.length - 1 < visibleCount && (
                      <p className="text-black mt-3 text-center text-md font-medium ">
                        Make your own stock for the quarter to ensure items stay
                        fresh and usable
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-span-12 text-center w-full">
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
                  <MyImage path="/C53Images" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-4">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="font-medium text-lg animate-fadeIn  text-black "
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-span-12 text-center w-full">
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-12 w-full text-center">
                  <h3 className="font-bold text-3xl text-black">
                    Two Sets Of Pencil Boxes
                  </h3>
                </div>
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Pencil_Box.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide3Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;

                    return (
                      <div className="w-full ">
                        {showQuestion && (
                          <h3 className="text-xl font-bold text-black animate-fadeIn">
                            {item.text}
                          </h3>
                        )}

                        {showAnswer && (
                          <h3 className="text-md font-bold mb-3 text-black/60 animate-fadeIn">
                            {" "}
                            Answer : {item.subText}
                          </h3>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 text-center w-full">
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 w-full place-items-center p-2">
                <div className="col-span-12 w-full text-center">
                  <h3 className="font-bold text-3xl text-black">
                    A Water Bottle
                  </h3>
                </div>
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Water2.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide4Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount4 > stepIndex;
                    const showAnswer = visibleCount4 > stepIndex + 1;

                    return (
                      <div className="w-full ">
                        {showQuestion && (
                          <h3 className="text-xl font-bold text-black animate-fadeIn">
                            {item.text}
                          </h3>
                        )}

                        {showAnswer && (
                          <h3 className="text-md font-bold mb-3 text-black/60 animate-fadeIn">
                            {" "}
                            Answer : {item.subText}
                          </h3>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 text-center w-full">
                  {Slide4Data.length * 2 > visibleCount4 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 w-full place-items-center p-2">
                <div className="col-span-12 w-full text-center">
                  <h3 className="font-bold text-3xl text-black">
                    Packets Of Ready-To-Eat Mushrooms
                  </h3>
                </div>
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Mushrooms.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide5Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount5 > stepIndex;
                    const showAnswer = visibleCount5 > stepIndex + 1;

                    return (
                      <div className="w-full ">
                        {showQuestion && (
                          <h3 className="text-xl font-bold text-black animate-fadeIn">
                            {item.text}
                          </h3>
                        )}

                        {showAnswer && (
                          <h3 className="text-md font-bold mb-3 text-black/60 animate-fadeIn">
                            {" "}
                            Answer : {item.subText}
                          </h3>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 text-center w-full">
                  {Slide5Data.length * 2 > visibleCount5 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 w-full place-items-center p-2">
                <div className="col-span-12 w-full text-center">
                  <h3 className="font-bold text-3xl text-black">
                    A Playstation And An Xbox
                  </h3>
                </div>
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/VG.jpeg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide6Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount6 > stepIndex;
                    const showAnswer = visibleCount6 > stepIndex + 1;

                    return (
                      <div className="w-full ">
                        {showQuestion && (
                          <h3 className="text-xl font-bold text-black animate-fadeIn">
                            {item.text}
                          </h3>
                        )}

                        {showAnswer && (
                          <h3 className="text-md font-bold mb-3 text-black/60 animate-fadeIn">
                            {" "}
                            Answer : {item.subText}
                          </h3>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 text-center w-full">
                  {Slide6Data.length * 2 > visibleCount6 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 w-full place-items-center p-2">
                <div className="col-span-12 w-full text-center">
                  <h3 className="font-bold text-3xl text-black">
                    A Pair Of Walking Shoes
                  </h3>
                </div>
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Shoes2.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide7Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount7 > stepIndex;
                    const showAnswer = visibleCount7 > stepIndex + 1;

                    return (
                      <div className="w-full ">
                        {showQuestion && (
                          <h3 className="text-xl font-bold text-black animate-fadeIn">
                            {item.text}
                          </h3>
                        )}

                        {showAnswer && (
                          <h3 className="text-md font-bold mb-3 text-black/60 animate-fadeIn">
                            {" "}
                            Answer : {item.subText}
                          </h3>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 text-center w-full">
                  {Slide7Data.length * 2 > visibleCount7 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
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
              activeSlide < 6 ? "visible" : "invisible"
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
