"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useRef, useState } from "react";
import TableData from "@/src/layout-C50-L1-A4/tableData.json";

import Table from "./table";
import Image from "next/image";


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






  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "CHOOSE WISELY"
            : activeSlide === 1
            ? "CHOOSE WISELY"
            : "SUGGESTIVE RESPONSES"}
        </h4>

        {/* <p className="text-black text-lg ">
          {activeSlide === 1
            ? ""
            : ""}
        </p> */}
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-5 ">
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
  <div className="flex justify-center items-center ">
    <ul className="list-disc space-y-3 ">
      <li className="text-black text-lg">Choose one of the items in each category.</li>
      <li className="text-black text-lg">Explain orally why this item is wiser to choose compared to other items.</li>
      <li className="text-black text-lg">Place your choice in your choice basket to see how many points you get.</li>
      <li className="text-black text-lg">Count the total number of points to see how wise you are!</li>
    </ul>
  </div>
</SwiperSlide>

            <SwiperSlide>
           <Table/>
            </SwiperSlide>


             <SwiperSlide>
          <div className="grid grid-cols-12 gap-5 p-2 place-items-center ">
               {/* LEFT SIDE (ML) */}
                 {TableData.map((item, index) => (
               <div key={index}  className="col-span-6 w-full">
                   <div className=" shadow">
                     <div className=" bg-violet-900 text-white text-center font-bold p-1">
                       {item.category}
                     </div>
         
                    <div className="flex justify-center items-center gap-5 p-3  ">
                       {item.items.map((cat, catIndx) => (
                       <div
                         key={catIndx}
                         draggable
                         className="col-span-3 border p-2 flex flex-col items-center cursor-grab"
                       >
                         <div className="relative w-16 h-16 rounded overflow-hidden">
                           <Image objectFit="cover" fill src={cat.img} alt={cat.name} />
                         </div>
                         <h4 className={`${cat.points === 10 ? "font-bold" :"font-normal"} text-sm text-black`}>{cat.name}</h4>
                         <h4 className={`${cat.points === 10 ? "font-bold" :"font-normal"} text-sm text-black`}>{cat.points} points</h4>
                       </div>
                     ))}
                    </div>
                   </div>
               </div>
                 ))}
         
              
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
              activeSlide < 2 ? "visible" : "invisible"
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
