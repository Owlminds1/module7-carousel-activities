"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C50-L1-A2/questions.json";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBtnIndex, setActiveBtnIndex] = useState<number | null>(null);
  
  const [bgCorrect, setBgCorrect] = useState<HTMLAudioElement>();

  useEffect(() => {
    setBgCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  const handlePrev = () => swiperRef?.current?.slidePrev();
  const handleNext = () => swiperRef?.current?.slideNext();

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtnIndex(null);
  };

  const handleCheck = (answer: string, val: string, index: number) => {
    setActiveBtnIndex(index);

    if (val === answer) {
      bgCorrect?.play();
    }
  };

  // FUNCTION: returns true if slide is a reason slide (odd slide index)
  const isReasonSlide = (index: number) => index % 2 === 1;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black text-center">
          What would you do?
        </h4>
        <p className="text-center text-black text-lg ">
          Read the following statements attentively. Respond with a yes or no
          based on what you understand by patience.
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-3 min-h-[200px]">
          <Swiper
            loop={false}
            autoHeight
            allowTouchMove={false}
            modules={[Navigation]}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {SlideData.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid grid-cols-12 gap-3 place-items-center p-5">

                  {/* Show image ONLY on question slides */}
                  <div className="col-span-12 w-full flex justify-center">
                    {!isReasonSlide(idx) && item.image && (
                      <MyImage path={item.image} />
                    )}
                  </div>

                  <div className="col-span-12 w-full flex flex-col items-center gap-5">
                    <h4 className="text-xl w-[60%] text-center text-black font-bold">
                      {item.question}
                    </h4>

                    {/* Buttons only on question slides */}
                    {!isReasonSlide(idx) && (
                      <div className="flex justify-center gap-3">
                        {item.btnVal.map((btn, btnIndex) => (
                          <button
                            key={btnIndex}
                            onClick={() =>
                              handleCheck(item.val, btn, btnIndex)
                            }
                            className={`${
                              btnIndex === activeBtnIndex
                                ? item.val === btn
                                  ? "bg-green-500"
                                  : "bg-red-500 shake"
                                : "bg-violet-900"
                            } text-white rounded-lg px-8 py-2 min-w-[150px] transition-all duration-300 cursor-pointer`}
                          >
                            {btn}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* Bottom Navigation Buttons */}
        <div className="flex justify-between items-center gap-5 w-full mt-8">
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
              activeSlide < SlideData.length - 1 ? "visible" : "invisible"
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
