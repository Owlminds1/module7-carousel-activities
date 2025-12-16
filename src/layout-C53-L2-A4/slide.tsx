"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L2-A4/pointers.json";
import Slide2Data from "@/src/layout-C53-L2-A4/pointer2.json";
import Slide3Data from "@/src/layout-C53-L2-A4/pointers3.json";
import Slide4Data from "@/src/layout-C53-L2-A4/pointers4.json";

import MyImage from "@/components/myImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);
  const [visibleCount4, setVisibleCount4] = useState(0);


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
        setVisibleCount((prev) =>
          prev < SlideData.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length * 2? prev + 1 : prev
        );
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev
        );
      }

      if (current === 4) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length * 2 ? prev + 1 : prev
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
    activeSlide,
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-2xl font-bold text-center text-black">
          {activeSlide === 0
            ? "WHAT TO CONSIDER BEFORE PURCHASE"
            : activeSlide === 1
            ? "YOU’RE SMARTER THAN THEM!"
            : activeSlide === 2
            ? "YOU’RE SMARTER THAN THEM!"
            : activeSlide === 3
            ? "Watch this video "
            :""}
        </h4>

        <p className="text-black text-lg text-center ">
          {activeSlide === 1
            ? "Identify the tricks in the following item. Give your responses orally."
            : activeSlide === 2
            ? "Identify the tricks in the following item. Give your responses orally."
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
              <div className="grid grid-cols-12 gap-y-5 w-full place-items-center p-2">
                {/* <div className="col-span-12 w-full text-center">
                   <h3 className="font-bold text-3xl text-black">A Water Bottle</h3>
                </div> */}

                {SlideData.slice(0, visibleCount).map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="col-span-6 w-full flex justify-center items-center">
                      <MyImage path={item.img} />
                    </div>
                    <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                      <div className="w-full ">
                        <ul className="list-disc w-full">
                          <li className="text-lg  text-black animate-fadeIn">
                            <span className="font-bold">{item.text} : </span>
                            {item.answer}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                ))}

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
                  <MyImage path="/C53Images/Deals.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide2Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount2 > stepIndex;
                    const showAnswer = visibleCount2 > stepIndex + 1;

                    return (
                      <div className="w-full " key={index}>
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
                  {Slide2Data.length * 2 > visibleCount2 && (
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
                  <MyImage path="/C53Images/Shipping.png" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide3Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;

                    return (
                      <div className="w-full " key={index}>
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
               <div className="col-span-12 flex justify-center items-center">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/g7031Ty6hqw?si=8vqJlx2tb5nVz8ru" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
               </div>
              </div>
            </SwiperSlide>

             <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Nike.png" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {Slide4Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount4 > stepIndex;
                    const showAnswer = visibleCount4 > stepIndex + 1;

                    return (
                      <div className="w-full " key={index}>
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
