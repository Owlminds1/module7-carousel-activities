"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C50-L2-A1/pointers.json";
import Slide3Data from "@/src/layout-C50-L2-A1/slide3Data.json";
import Slide4Data from "@/src/layout-C50-L2-A1/slide4Data.json";
import QuestionData from "@/src/layout-C50-L2-A1/Question.json";
import DragSlide from "./dragSlide";
import DragSlide2 from "./dragSlide2";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    scroll(0, 0);
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

  const [selected, setSelected] = useState<(string | null)[]>(
    Array(QuestionData.length).fill(null)
  );

  const handleClick = (qIndex: number, option: string) => {
    const newSelected = [...selected];
    newSelected[qIndex] = option;
    setSelected(newSelected);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? " COMMUNITY SERVICE"
            : activeSlide === 1
            ? "CHARITY"
            : activeSlide === 2
            ? "CHARITY"
            : ""}
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
              <DragSlide />
            </SwiperSlide> 
            
            
             <SwiperSlide>
          <div className="grid grid-cols-12 w-full place-items-center ">
            <div className="col-span-6 w-full flex justify-center items-center">
              <MyImage path="/C49Images/charity.jpg"/>
            </div>
            
             <div className="col-span-6 w-full ">
          <ul className="list-disc space-y-4 px-3">
  <li className="text-lg text-black font-medium">
    Imagine you have $500 to give to each charity.
  </li>

  <li className="text-lg text-black font-medium">
    Actions that help create a better environment belong to environmental charities. 
   
  </li>
  <li className="text-lg text-black font-medium">
 Actions that help other humans belong to humanitarian charities.   
  </li>

  <li className="text-lg text-black font-medium">
    Distribute the items according to the work of each charity.
  </li>
</ul>

            </div>

          </div>
            </SwiperSlide>


             <SwiperSlide>
              <DragSlide2 />
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
              activeSlide < 2 ? "visible" : "invisible"
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
