"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C49-L2-A5/pointers.json";
import PdfSlide from "./pdfSlide";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black">
          {activeSlide === 0 ? "GRATITUDE" : "THANK YOU NOTE"}
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
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/Managing.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <p className="'text-lg text-black ">
                    Write a thank you note to your parents who have given you
                    all the privileges including being able to attend this
                    class!
                  </p>
                  <p className="'text-lg text-gray-600 text-left ">
                    Address factors like:
                  </p>

                  <ul className="list-disc space-y-3 px-2">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg font-medium text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                  {SlideData.length - 1 < visibleCount && (
                    <p className="'text-lg text-black ">
                      These factors essentially refer to your parents making
                      space for you so that your needs and wants are fulfilled.
                      But remember that this is not to be taken for granted
                      because your parents are humans too! This is why writing a
                      thank you note shows that you really do appreciate your
                      parents.
                    </p>
                  )}

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="col-span-12 w-full text-center text-gray-900 italic my-5"> Credit: Laurie Santos</div>
              </div>
            </SwiperSlide>

         <SwiperSlide>
  <div className="grid grid-cols-12 place-items-center p-2">
    <div className="col-span-12 w-full flex flex-col gap-5 text-black text-lg leading-relaxed">

 <PdfSlide/>

    </div>
  </div>
</SwiperSlide>


          </Swiper>
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
              activeSlide < 1 ? "visible" : "invisible"
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
