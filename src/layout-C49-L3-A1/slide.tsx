"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C49-L2-A5/pointers.json";
import Link from "next/link";
import Image from "next/image";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

 

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0 ? "HOW TO RECOGNIZE PRIVILEGE AND UPLIFT THOSE WITHOUT IT " : "WHAT’S PRIVILEGE TO YOU?"}
        </h4>
        <p className="text-black text-lg text-center">
          {activeSlide === 1 ?"Discuss all you know about privilege in the mind map using the input boxes.":""}
        </p>
      </div>

      <div className=" w-full flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3   ">
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
              <div className=" min-h-[200px] w-full flex justify-center items-center ">
                 <Link className="text-white text-center bg-violet-900 px-8 py-2 min-w-[150px] rounded-lg" href="https://www.canva.com/design/DAGu1IRi0HU/k22ttm8FP98T9TrAj3VSDQ/watch?utm_content=DAGu1IRi0HU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5eaf42f258" target="blank" >VIDEO</Link>
                </div>
            </SwiperSlide>

         <SwiperSlide>
  <div className="flex justify-between items-center  gap-5 flex-col relative p-2">
   <Image src="/C49Images/Photo_top.jpg" width={300} height={100} alt="image"/>
   <div className="w-30 h-30 relative rounded-full border border-black p-2 flex justify-center font-bold items-center text-black after:absolute after:content-[''] after:bg-black after:top-[40%] after:left-[-250px] after:w-[250px] after:h-0.5     before:absolute before:content-[''] before:bg-black before:top-[40%] before:right-[-250px] before:w-[250px] before:h-0.5">
PRIVILEGE
   </div>

   <Image src="/C49Images/Photo_down.jpg" width={300} height={100} alt="image"/>


   <textarea className="text-black text-center p-2 min-h-28 absolute z-10 border backdrop-blur-lg border-black w-[300px] left-[3%] top-[39%] " placeholder="write here... "/>


      <textarea className="text-black text-center p-2 min-h-28 absolute z-10 border backdrop-blur-lg border-black w-[300px] right-[3%] top-[39%] " placeholder="write here... "/>
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
