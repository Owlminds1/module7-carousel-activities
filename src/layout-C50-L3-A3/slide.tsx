"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C50-L3-A3/pointers.json";
import Slide2Data from "@/src/layout-C50-L3-A3/slide2Data.json";
import Slide3Data from "@/src/layout-C50-L3-A3/slide3Data.json";
import Slide4Data from "@/src/layout-C50-L3-A3/slide4Data.json";
import Slide5Data from "@/src/layout-C50-L3-A3/pointers5.json";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const videoRef =useRef<HTMLVideoElement | null>(null)

  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);
  const [visibleCount5, setVisibleCount5] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    if(videoRef.current){
      videoRef.current.pause()
    }
  };

  // FIXED ENTER LOGIC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      // Slide 0
      if (current === 0) {
        setVisibleCount((prev) =>
          prev < SlideData.length ? prev + 1 : prev
        );
      }

      // Slide 1
      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev
        );
      }

      // Slide 2
      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length ? prev + 1 : prev
        );
      }

      // Slide 3 (💥 Slide4 + Slide5 Logic)
      if (current === 3) {
        // First show Slide4 items
        if (visibleCount4 < Slide4Data.length) {
          setVisibleCount4((prev) => prev + 1);
          return;
        }

        // Once Slide4 is completed → Show Slide5
        if (visibleCount5 < Slide5Data.length) {
          setVisibleCount5((prev) => prev + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [,visibleCount,visibleCount2,visibleCount3,visibleCount4, visibleCount5, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, visibleCount3, visibleCount4, visibleCount5]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "A BOY, A BUDGET AND A DREAM"
            : activeSlide >= 1
            ? "A BOY, A BUDGET AND A DREAM Q&A"
            : ""}
        </h4>

        <p className="text-black text-lg text-center ">
          {activeSlide === 0 ? " Make notes on:" : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-3 min-h-[200px]">
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
                <div className="col-span-6 w-full">
                 <video ref={videoRef} controls muted  autoPlay src="/C50Images/boyDream.mp4"></video>
                </div>

                <div className="col-span-6 flex flex-col gap-5">
                  {SlideData.slice(0, visibleCount).map((i, index) => (
                    <ul key={index} className="list-disc">
                      <li className="text-lg font-medium text-black">{i}</li>
                    </ul>
                  ))}

                  {visibleCount < SlideData.length && (
                    <p className="text-gray-800 italic">(Enter to show more points)</p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 1 */}
            <SwiperSlide>
              {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 w-full place-items-center p-2"
                >
                  <div className="col-span-6">
                    <MyImage path={i.img} />
                  </div>

                  <div className="col-span-6 flex flex-col gap-2">
                    <h4 className="text-black text-lg font-bold">{i.text}</h4>
                    <p className="text-black">{i.suggestion}</p>
                  </div>
                </div>
              ))}

              {visibleCount2 < Slide2Data.length && (
                <p className="text-gray-800 text-center my-3 italic">
                  (Enter to show more points)
                </p>
              )}
            </SwiperSlide>

            {/* SLIDE 2 */}
            <SwiperSlide>
              {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 w-full place-items-center p-2"
                >
                  <div className="col-span-6">
                    <MyImage path={i.img} />
                  </div>

                  <div className="col-span-6 flex flex-col gap-2">
                    <h4 className="text-black text-lg font-bold">{i.text}</h4>
                    <p className="text-black">{i.suggestion}</p>
                  </div>
                </div>
              ))}

              {visibleCount3 < Slide3Data.length && (
                <p className="text-gray-800 text-center my-3 italic">
                  (Enter to show more points)
                </p>
              )}
            </SwiperSlide>

            {/* SLIDE 3 (Slide4 + Slide5 Combined) */}
            <SwiperSlide>
              {/* Slide4Data */}
              {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 w-full place-items-center p-2"
                >
                  <div className="col-span-6">
                    <MyImage path="/C50Images/Clean.png" />
                  </div>

                  <div className="col-span-6 flex flex-col gap-2">
                    <h4 className="text-black text-lg font-bold">{i.text}</h4>
                    <p className="text-black">{i.suggestion}</p>
                  </div>
                </div>
              ))}

              {/* Slide4 Hint */}
              {visibleCount4 < Slide4Data.length && (
                <p className="text-gray-800 text-center my-3 italic">
                  (Enter to show more points)
                </p>
              )}

              {/* Slide5 — Only After Slide4 Completed */}
              {visibleCount4 === Slide4Data.length && (
                <div className="grid grid-cols-12 w-full place-items-center p-2">
                  <div className="col-span-6">
                    <MyImage path="/C50Images/Camp.png" />
                  </div>

                  <div className="col-span-6 flex flex-col gap-2">
                    <h4 className="text-black text-lg font-bold">
                      In what ways does Joey transform?
                    </h4>

                    {Slide5Data.slice(0, visibleCount5).map((i, idx) => (
                      <ul key={idx} className="list-disc">
                        <li className="text-lg font-medium text-black">{i}</li>
                      </ul>
                    ))}

                    {visibleCount5 < Slide5Data.length && (
                      <p className="text-gray-800 italic">(Enter to show more points)</p>
                    )}
                  </div>
                </div>
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
              activeSlide < 3 ? "visible" : "invisible"
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
