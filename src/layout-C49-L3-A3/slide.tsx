"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C49-L3-A3/pointers.json";
import Slide2Data from "@/src/layout-C49-L3-A3/pointers2.json";
import Slide3Data from "@/src/layout-C49-L3-A3/pointers3.json";
import Slide4Data from "@/src/layout-C49-L3-A3/pointers4.json";

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
    const idx = swiper.activeIndex;
    setActiveSlide(idx);
  };

  useEffect(
    () => {
      // single keydown listener that always checks the current swiper index
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key !== "Enter" && e.code !== "Enter") return;

        const current = swiperRef.current?.activeIndex ?? activeSlide;

        if (current === 0) {
          setVisibleCount((prev) =>
            prev < SlideData.length ? prev + 1 : prev
          );
        }

        if (current === 1) {
          setVisibleCount2((prev) =>
            prev < Slide2Data.length ? prev + 1 : prev
          );
        }

        if (current === 2) {
          setVisibleCount3((prev) =>
            prev < Slide3Data.length ? prev + 1 : prev
          );
        }

        if (current === 4) {
          setVisibleCount4((prev) =>
            prev < Slide4Data.length ? prev + 1 : prev
          );
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
      // note: no activeSlide dependency needed because we read from swiperRef.current
    },
    [
      /* intentionally empty: we read current index from swiperRef */
    ]
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black">
          Using privilege for good
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
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/Shaheen_Mistri.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h4 className="text-2xl font-bold text-black">
                    WHO IS SHAHEEN MISTRI?
                  </h4>

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

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/Shaheen_Mistri.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h4 className="text-2xl font-bold text-black">
                    What form of privileges does Shaheen have?
                  </h4>

                  <ul className="list-disc space-y-3 px-2">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg font-medium text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/Shaheen_Mistri.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h4 className="text-2xl font-bold text-black">
                    Why is Shaheen an important example to discuss?
                  </h4>

                  <p className="text-lg text-black">
                    Shaheen is an important example because she has used
                    privilege for the common good.
                  </p>

                  <ul className="list-disc space-y-3 px-2">
                    {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg font-medium text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide3Data.length > visibleCount3 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                  <h4 className="text-2xl font-bold text-black">
                    THREE BIG INFLUENCES IN THE LIFE OF SHAHEEN MISTRI
                  </h4>

                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/CltFfiFjA0g?si=EjxcU1gqMbwAW1gF"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/privilege_1.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h4 className="text-2xl font-bold text-black">
                    HOW YOUR INSPIRATION USES PRIVILEGE FOR GOOD
                  </h4>

                  <ul className="list-disc space-y-3 px-2">
                    {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg font-medium text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide4Data.length > visibleCount4 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2 gap-8">
                <div className="col-span-12 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/privilege_1.jpg" />
                </div>
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                <form  className="flex w-full justify-center items-center flex-col gap-8">
                 <div className="flex gap-1 justify-center items-center flex-col w-full">
                   <label htmlFor="first" className="text-black  text-lg px-2 w-[50%] text-left">Who do you admire?</label>
                  <textarea className=" w-[50%] border border-black rounded-lg text-center p-2 text-black min-h-20 " placeholder="write here..."  id="first"/>
                 </div>



                  <div className="flex gap-1 justify-center items-center flex-col w-full">
                   <label htmlFor="sec" className="text-black  text-lg px-2 w-[50%] text-left">Why do you admire this personality?</label>
                  <textarea className=" w-[50%] border border-black rounded-lg text-center p-2 text-black min-h-20 " placeholder="write here..."  id="sec"/>
                 </div>


                   <div className="flex gap-1 justify-center items-center flex-col w-full">
                   <label htmlFor="third" className="text-black  text-lg px-2 w-[50%] text-left">What makes this personality an important example to discuss privilege?</label>
                  <textarea className=" w-[50%] border border-black rounded-lg text-center p-2 text-black min-h-20 " placeholder="write here..."  id="third"/>
                 </div>


                   <div className="flex gap-1 justify-center items-center flex-col w-full">
                   <label htmlFor="fouth" className="text-black  text-lg px-2 w-[50%] text-left">How is this personality privileged?</label>
                  <textarea className=" w-[50%] border border-black rounded-lg text-center p-2 text-black min-h-20 " placeholder="write here..."  id="fouth"/>
                 </div>


                   <div className="flex gap-1 justify-center items-center flex-col w-full">
                   <label htmlFor="fifth" className="text-black  text-lg px-2 w-[50%] text-left">How does this personality use privilege for good?</label>
                  <textarea className=" w-[50%] border border-black rounded-lg text-center p-2 text-black min-h-20 " placeholder="write here..."  id="fifth"/>
                 </div>
                </form>
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
              activeSlide < 10 ? "visible" : "invisible"
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
