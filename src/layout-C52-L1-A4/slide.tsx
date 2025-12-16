"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {  useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L1-A4/slide1.json";
import MyImage from "@/components/myImage";
import SlideB from "./slide2";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

 

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
  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     if (e.key !== "Enter" && e.code !== "Enter") return;

  //     const current = swiperRef.current?.activeIndex ?? activeSlide;

  //     Slide 0
  //     if (current === 0) {
  //       setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyPress);
  //   return () => window.removeEventListener("keydown", handleKeyPress);
  // }, [, visibleCunt, activeSlide]);

  // Auto height update
  // useEffect(() => {
  //   swiperRef.current?.updateAutoHeight();
  // }, [visibleCount]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide <= SlideData.length
            ? "CHOOSE A GIFT"
            : activeSlide === 5
            ? "CHOOSE A GIFT"
            : activeSlide === 6
            ? "SUGGESTIVE RESPONSES"
            : ""}
        </h4>

        <p className="text-black text-lg ">
          {activeSlide <= SlideData.length
            ? "You’ve to choose a birthday gift for your friend Tiara."
            : activeSlide === 5
            ? "What would you choose? Think about"
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
                 <div className="col-span-6 w-full flex justify-center items-center gap-5">
                    <MyImage path="/C52Images/Birthday.jpg" />
                  </div>
                <div className="col-span-6 w-full flex flex-col ustify-center items-center gap-5">
                  <ul className="list-disc space-y-3 px-5 w-full">
                    <li className="text-black text-lg ">
                      Read and analyse the situation.
                    </li>
                    <li className="text-black text-lg ">
                      Respond to it by selecting the best possible gift.
                    </li>
                  </ul>
                    <h2 className="text-black text-xl ">
                      Tiara has to pick a birthday gift. She has 50 dollars to
                      spend. She doesn’t want to buy something inexpensive, but
                      she also doesn’t want to spend too much money. Here are
                      some options she knows the birthday girl would like:
                    </h2>
                </div>
              </div>
            </SwiperSlide>

            {/* SLIDE 0 */}
            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full place-items-center p-2">
                  <div className="col-span-6 w-full flex justify-center items-center gap-5">
                    <MyImage path={i.img} />
                  </div>

                  <div className="col-span-6 w-full flex flex-col  justify-center items-start gap-2">
                 
                    <div className="w-full ">
                      <ul className="list-disc px-5">
                        <li className="text-xl text-black font-bold">
                          {i.text}
                        </li>
                      </ul>

                      <span className="text-violet-900 text-lg text-center  w-full px-5 ">
                        {i.price}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <SlideB />
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 place-items-start w-full">
                {/* RIGHT TEXT AREA */}
                <div className="w-full col-span-12 flex flex-col justify-center items-center gap-6 p-3">
                  <div className=" rounded-xl p-5 w-[80%]  text-lg leading-10">
                    <p className="text-black text-xl  leading-10">
                      I’d choose ______{" "}
                      <span className="font-bold">(any of the items) </span>
                      for Tiara because she loves ______{" "}
                      <span className="font-bold">
                        {" "}
                        (any of the corresponding nouns){" "}
                      </span>
                      . This item will definitely be an ______{" "}
                      <span className="font-bold">(awesome) </span>
                      gift as it is of a good quality ______{" "}
                      <span className="font-bold">(brand) </span>. I am sure she
                      will ______ <span className="font-bold">(thank) </span>
                      me because it will remind her of our ______{" "}
                      <span className="font-bold">(friendship) </span>
                      whenever she uses it!
                    </p>
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
              activeSlide < SlideData.length + 2 ? "visible" : "invisible"
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
