"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import Slide4Data from "@/src/layout-C49-L2-A2/pointers4.json";
import Slide2Data from "@/src/layout-C49-L2-A2/slideData.json";

import Image from "next/image";
import MyImage from "@/components/myImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [correct,setCorrect]=useState<HTMLAudioElement>()

  const [activeBtnIndex, setActiveBtnIndex] = useState<{[cardIndex:number]:number}>({});

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount4, setVisibleCount4] = useState(0);


  useEffect(()=>{
setCorrect(()=>new Audio("/sound/correct.mp3"))
  },[])

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

      if (current === 3) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length * 2 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount4, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount4, activeSlide]);

  const handleCheck = (value: string, select: string,cardIndex:number, index: number) => {
    setActiveBtnIndex((prev) =>({...prev,[cardIndex]:index}));
    if (value === select) {
     correct?.play()
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-2xl font-bold text-center text-black">
          {activeSlide === 0
            ? "PRIVILEGE"
            : activeSlide === 1
            ? "FURTHERING UNDERSTANDING"
            : activeSlide === 2
            ? "JORDAN FAMILY ATHELETES"
            : activeSlide === 3
            ? "VIDEO Q&A"
            : ""}
        </h4>
        <p className="text-black text-lg text-center ">
          {/* {activeSlide === 2
            ? "THEN SELECT THE CORRECT RESPONSE FOR EACH STATEMENT"
            : activeSlide === 3
            ? "ANSWER THE FOLLOWING QUESTIONS ABOUT THE IMAGE OF DISCOUNTS."
            : ""} */}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
        <div className="w-[90%] shadow-md p-5 min-h-[200px]">
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
                <div className="col-span-12 w-[40%] ">
                  <ul className="list-disc space-y-3  w-full ">
                    <li className="text-lg text-black font-medium ">
                      I will give you a series of statements relating to
                      privilege
                    </li>
                    <li className="text-lg text-black font-medium ">
                      You choose the best word that matches the description{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-3 bg-violet-100 rounded-lg  w-full place-items-center p-2">
                {Slide2Data.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-6 bg-white  border min-h-[400px] shadow p-4 rounded-lg w-full flex gap-4 flex-col justify-center items-center "
                  >
                    <div className="w-50 h-50 relative border rounded-lg ">
                      <Image src={item.img} fill alt="images" />
                    </div>
                    <h3 className="text-black min-h-20 flex justify-center items-center text-lg  font-bold text-center">
                      {item.text}
                    </h3>

                    <div className=" flex gap-2">
                      {item.opt.map((btn, btnIndex) => (
                        <button
                          onClick={() => handleCheck(item.val, btn,index, btnIndex)}
                          key={btnIndex}
                          className={`${
                            activeBtnIndex[index] === btnIndex
                              ? item.val === btn
                                ? "bg-green-600"
                                : "bg-red-500 shake"
                              : "bg-violet-900"
                          }  text-sm text-white px-5 py-2 rounded-lg cursor-pointer active:scale-95 active:shadow  min-w-[150px]`}
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>


              <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full  ">
             <iframe width="90%" height="400" src="https://www.youtube.com/embed/HpaWSPmNIkU?si=8W-KFd0r9_qRuXIN" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                
                
                <div className="col-span-6 w-full p-5 ">
                  <h3 className="text-lg text-black font-bold my-5">Let’s attentively watch a video about the “Back to School” initiative of the Jordan Brand Family in collaboration with the celebrated basketball player, Michael Jordan.</h3>
                  <ul className="list-disc space-y-3  w-full ">
                    <li className="text-lg text-black font-medium ">
                     In this video, you will see how Michael Jordan and the Jordan Brand partner with Jordan family athletes to donate to charities and causes in their hometowns and communities.
                    </li>
                   
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-8 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex flex-col gap-3">
                  <MyImage path="/C49Images"/>
                  <MyImage path="/C49Images/Michael_Jordan.jpg"/>
                </div>
                <div
              
                  className="col-span-6 w-full flex flex-col  justify-center items-start gap-3"
                >
                {Slide4Data.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount4 > stepIndex;
                  const showAnswer = visibleCount4 > stepIndex + 1;

                  return (
                     <React.Fragment     key={index}>
                       {showQuestion && (
                        <h4 className="font-bold text-lg  text-black ">
                          {i.text}
                        </h4>
                      )}

                      {showAnswer && (
                  
                      
                            <p
                             
                              className="font-medium text-lg  text-black/70"
                            >
                              {i.subText}
                            </p>
                         
                      )}

                      
                     </React.Fragment>
                    );
                  })}

                   <div className="col-span-12 text-center w-full">
                  {Slide4Data.length * 2 > visibleCount4 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
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
