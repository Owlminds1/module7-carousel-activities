"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C49-L3-PCA/questions.json";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBtnIndex, setActiveBtnIndex] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [bgCorrect, setBgCorrect] = useState<HTMLAudioElement>();

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtnIndex(null);
    setShow(swiper.activeIndex === 0);
  };

  useEffect(() => {
    setBgCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  const handleCheck = (answer: string, val: string, index: number) => {
    setActiveBtnIndex(index);
    if (val === answer) {
      setShow(true);
      bgCorrect?.play();
      if (SlideData.length - 1 < activeSlide) {
        setOpen(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black">
          {activeSlide === 0 ? "PRIVILEGE" : "FURTHERING UNDERSTANDING"}
        </h4>
      </div>

      <div className=" w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-[200px]  ">
          <Swiper
            loop={false}
            autoHeight
            allowTouchMove={false}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            // navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className=" col-span-12 w-[40%] flex justify-start items-start flex-col gap-5 ">
                  <ul className="list-disc space-y-3 px-2 ">
                    <li className="text-lg font-medium text-black">
                      I will give you a series of statements relating to
                      privilege
                    </li>

                    <li className="text-lg font-medium text-black">
                      You choose the best word that matches the description
                    </li>
                  </ul>

                  <p className="text-md text-gray-900 italic">
                    All are definitions cited or paraphrased from dictionaries
                    such as Cambridge, Merriam-Webster, or thinktank websites
                    such as the UN.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 gap-3 place-items-center p-5">
                  <div className="col-span-12 w-full flex justify-center items-center flex-col">
                    <MyImage path={i.image} />
                  </div>
                  <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                    <h4 className="text-xl  text-center text-black font-bold">
                      {i.question}
                    </h4>
                    <div className="flex justify-center items-center gap-3">
                      {i.btnVal.map((btn, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleCheck(i.val, btn, btnIndex)}
                          className={`${
                            btnIndex === activeBtnIndex
                              ? i.val === btn
                                ? "bg-green-500"
                                : "bg-red-500 shake"
                              : "bg-violet-900"
                          } text-white  rounded-lg px-8 py-2 cursor-pointer min-w-[150px] active:scale-95 transition-all duration-300`}
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Welldone open={open} setOpen={setOpen} />
        </div>

        {/* slide buttons  */}
        <div className="flex justify-between items-center gap-5 w-full mt-8  ">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < SlideData.length && show ? "visible" : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
