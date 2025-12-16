"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C50-L1-A1/questions.json";

import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBtnIndex, setActiveBtnIndex] = useState<number | null>(null);
  

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtnIndex(null);
  };

  const handleCheck = (index: number) => {
    setActiveBtnIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0 ? "Don’t Eat the Marshmallow!" : "PATIENCE"}
        </h4>
        <p className="text-center text-black text-lg my-2">
          {
            activeSlide === 0 ? "":"Read the following items with conditions. Select the most appropriate response to show whether you’re able to practice patience."
          }
        </p>
      </div>

      <div className=" w-[100%] flex justify-center items-center flex-col gap-3  ">
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
              <div className="  w-full text-center flex justify-center items-center min-h-[200px] ">
                <Link
                  href="https://www.canva.com/design/DAGvGfXqfJU/quxQehAznR9yIDSJKBoZDQ/edit?ui=eyJBIjp7Ik8iOnsiQiI6dHJ1ZX19fQ"
                  className="text-white bg-violet-900 rounded-lg min-w-[100px] px-8 py-2 cursor-pointer"
                  target="blank"
                >
                  Watch Video
                </Link>
              </div>
            </SwiperSlide>

            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 gap-3 place-items-center p-5">
                  <div className="col-span-6 w-full flex justify-center items-center flex-col">
                    <MyImage path={i.image} />
                  </div>
                  <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                    <h4 className="text-lg font-bold text-left text-black w-full">ITEM : {i.item}</h4>
                   <div>
                     <h4 className="text-md text-left text-black w-full">CONDITION : </h4>
                    <ul className="list-disc space-y-4 px-3">
                    {
                      i.question.map((list,listIndex)=>(

                        <li className="text-lg text-black">{list}</li>
                      ))
                    }
                    </ul>
                   </div>

                    <h4 className="text-lg  text-left text-black font-bold">
                      {i.question}
                    </h4>
                    <div className="flex justify-center items-center gap-3">
                      {i.btnVal.map((btn, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleCheck(btnIndex)}
                          className={`${
                            btnIndex === activeBtnIndex
                      
                                ? "bg-violet-900 text-white"
                              
                              : "border  border-violet-900 text-violet-900"
                          }   rounded-lg px-4 text-md font-bold py-2 cursor-pointer min-w-[200px] min-h-20 active:scale-95 transition-all duration-300`}
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
              activeSlide < SlideData.length  ? "visible" : "invisible"
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
