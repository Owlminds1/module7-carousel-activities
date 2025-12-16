"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C49-L1-A2/questionData.json";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const [correctBg, setCorrectBg] = useState<HTMLAudioElement>();
  const [show, setShow] = useState(true);
  const [open,setOpen]=useState(false)

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
    setShow(true)
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtn(null);
    if (activeSlide >= 2) {
      setShow(false);
    }
  };

  useEffect(() => {
    setCorrectBg(new Audio("/sound/correct.mp3"));
  }, []);

  const handleCheck = (
    e: React.MouseEvent<HTMLButtonElement>,
    value: string,
    answerVal: string,
    btnIndex: number
  ) => {
    setActiveBtn(btnIndex);

    if (value === answerVal) {
      correctBg?.play();
      setShow(true);

      if(activeSlide === SlideData.length+2){
       setOpen(true)
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black">
          {activeSlide === 0
            ? "RECALL"
            : activeSlide === 1
            ? "PRIVILEGE"
            : activeSlide === 2
            ? "PRIVILEGE OR NOT?"
            : "PRIVILEGE OR NOT?"}
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
                  <MyImage path="/C49Images/Fold_Paper.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc space-y-3 px-2">
                    <li className="text-lg font-medium text-black">
                      Grab a piece of paper and fold it.
                    </li>

                    <li className="text-lg font-medium text-black">
                      Write needs on one side and wants on another recalling the
                      warm up activity.
                    </li>
                  </ul>

                  <div className="grid grid-cols-12 place-items-center w-full border border-black">
                    <div className="col-span-6 text-center bg-violet-900 text-white p-1 border w-full">
                      NEEDS
                    </div>

                    <div className="col-span-6 text-center bg-violet-900 text-white p-1 border w-full">
                      WANTS
                    </div>

                    <div className="col-span-6 w-full text-center  p-1 border">
                      <textarea
                        placeholder="write here..."
                        className="text-center w-full outline-0 text-black p-2 min-h-10"
                      />
                    </div>

                    <div className="col-span-6 w-full text-center  p-1 border">
                      <textarea
                        placeholder="write here..."
                        className="text-center w-full outline-0 text-black p-2 min-h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/privilege_1.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-normal text-gray-800 ">
                      Privilege refers to:
                    </h4>
                    <p className="text-xl font-normal text-black">
                      “A right or benefit that is given to some people and not
                      to others” (Britannica)
                    </p>

                    <h4 className="text-lg font-normal text-gray-800 ">
                      For example:
                    </h4>
                    <ul className="list-disc space-y-3 px-2">
                      <li className="text-xl font-medium text-black">
                        Only one student can be a class monitor.
                      </li>

                      <li className="text-xl font-medium text-black">
                        This position comes with certain duties that only a
                        class monitor is to do.
                      </li>

                      <li className="text-xl font-medium text-black">
                        It is a matter of privilege because the class monitor is
                        well-respected, has authority over other students, and
                        can report misbehavior to the teacher.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C49Images/privilege.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-lg font-normal text-gray-800 ">
                      Some kinds of privileges are fair while others are not.
                      Let’s see how.
                    </h4>
                    <ul className="list-disc space-y-3 px-2">
                      <li className="text-xl font-medium text-black">
                        Read the following statements.
                      </li>

                      <li className="text-xl font-medium text-black">
                        Identify whether they are positions of privilege or not.
                      </li>

                      <li className="text-xl font-medium text-black">
                        Respond with a Yes if it’s a privilege and No if it’s
                        not a privilege.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {SlideData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center p-2">
                  <div className="col-span-6 w-full flex justify-center items-center ">
                     <MyImage path="/C49Images/privilege.jpg" />
                  </div>
                  <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                    <h4 className="text-xl text-black font-bold">
                      {item.question}
                    </h4>
                    <div className="flex justify-center items-center gap-5 ">
                      {item.answerData.map((btn, btnIndex) => (
                        <button
                          key={btnIndex}
                          className={`${
                            btnIndex === activeBtn
                              ? item.val === btn
                                ? "bg-green-600"
                                : "bg-red-500 shake"
                              : "bg-violet-900"
                          } text-white min-w-[150px] py-2 px-5 active:scale-95 transition-all duration-300 rounded-lg cursor-pointer  min-w-[150px];`}
                          onClick={(e) =>
                            handleCheck(e, item.val, btn, btnIndex)
                          }
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
<Welldone open={open} setOpen={setOpen}/>
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
              activeSlide < SlideData.length + 2 && show
                ? "visible"
                : "invisible"
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
