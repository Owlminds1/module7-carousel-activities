"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L2-A3/pointers.json";
import Slide2Data from "@/src/layout-C52-L2-A3/pointers2.json";
import Slide3Data from "@/src/layout-C52-L2-A3/pointers3.json";
import Slide4Data from "@/src/layout-C52-L2-A3/pointers4.json";
import Slide5Data from "@/src/layout-C52-L2-A3/pointers5.json";
import Slide6Data from "@/src/layout-C52-L2-A3/pointers6.json";
import Slide7Data from "@/src/layout-C52-L2-A3/pointers7.json";
import MyImage from "@/components/myImage";
import ThirdSlide from "./ThirdSlide";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(0);
  const [visibleCount6, setVisibleCount6] = useState(0);
  const [visibleCount7, setVisibleCount7] = useState(0);

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
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length  ? prev + 1 : prev
        );
      }  
      
      
      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length  ? prev + 1 : prev
        );
      }
      
     if (current === 3) {
  // Step 1 → Slide 4 ke points pehle dikho
  if (visibleCount4 < Slide4Data.length) {
    setVisibleCount4((prev) => prev + 1);
    return;
  }

  // Step 2 → Slide 4 complete → Slide 5 start
  if (visibleCount5 < Slide5Data.length) {
    setVisibleCount5((prev) => prev + 1);
    return;
  }
}

      
      if (current === 3) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length  ? prev + 1 : prev
        );
      }

       if (current === 4) {
  // Step 1 → Slide 4 ke points pehle dikho
  if (visibleCount6 < Slide6Data.length) {
    setVisibleCount6((prev) => prev + 1);
    return;
  }
}

 if (current === 5) {
  // Step 1 → Slide 4 ke points pehle dikho
  if (visibleCount7 < Slide7Data.length) {
    setVisibleCount7((prev) => prev + 1);
    return;
  }
}

    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [, visibleCount, visibleCount2, visibleCount3,visibleCount4,visibleCount5,visibleCount6,visibleCount7,activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2,visibleCount3,visibleCount4,visibleCount5,visibleCount6,visibleCount7,activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "DEPOSIT"
            : activeSlide === 1
            ? "TRANSFERS"
            : activeSlide === 2
            ? "CHEQUE"
            : activeSlide === 3 ? "SAFE CHEQUE":  activeSlide === 4 ?"ECHEQUE": activeSlide === 5 ? "DIGITAL BANKING": activeSlide ===6 ? "BANKING ACTIVITY":""}
        </h4>
<p className="text-black text-lg ">
  {activeSlide === 6 ? "Tick (correct) or cross (incorrect) against the following statements about banking.":""}
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
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C52Images/Deposit.jpeg"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-2">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

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
                  <MyImage path="/C52Images/Wire_Transfer.jpg"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-2">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide2Data.length > visibleCount2 && (
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
                  <MyImage path="/C52Images/Cheque.png"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                

                  <ul className="list-disc w-full px-5 space-y-4">
                    {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        <span className="font-bold">{i.title} : </span>{i.text}
                      </li>
                    ))}
                  </ul>

                  {Slide3Data.length > visibleCount3 && (
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
                  <MyImage path="/C52Images/Cheque.png"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                <h3 className="text-xl font-bold text-black">How to make it safer</h3>

                  <ul className="list-disc w-full px-5 space-y-4">
                    {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                       {i.text}
                      </li>
                    ))}
                  </ul>


 {Slide4Data.length-1 < visibleCount4 && (
                   
                  <ul className="  w-full px-5 space-y-4">
                    {Slide5Data.slice(0, visibleCount5).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                    ➞ <span className="font-bold">{i.title} : </span>{i.text}
                      </li>
                    ))}
                  </ul>
                  )}



             { ((Slide4Data.length > visibleCount4) || (Slide5Data.length > visibleCount5)) && (
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
                  <MyImage path="/C52Images/Digital_Cheque.jpeg"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
<h3 className="text-black text-xl font-bold">Nowadays people use digital cheques as well, also commonly called echeque or electronic cheques. To use this service, customers have to ensure:
</h3>

                  <ul className="list-disc w-full px-5 space-y-4">
                    {Slide6Data.slice(0, visibleCount6).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        <span className="font-bold">{i.title} : </span>{i.text}
                      </li>
                    ))}
                  </ul>

                  {Slide6Data.length > visibleCount6 && (
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
                  <MyImage path="/C52Images/Online_Banking.jpg"/>
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc w-full px-5 space-y-2">
                    {Slide7Data.slice(0, visibleCount7).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg animate-fadeIn text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide7Data.length > visibleCount7 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
            <ThirdSlide/>
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
              activeSlide < 6 ? "visible" : "invisible"
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
