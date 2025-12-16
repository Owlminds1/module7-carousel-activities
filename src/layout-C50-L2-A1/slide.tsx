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
    scroll(0,0)
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
            ? "FOUR MONEY BEARS"
            : activeSlide === 1
            ? "FOUR MONEY BEARS Q&A"
            : activeSlide === 2
            ? "FOUR MONEY BEARS"
            : activeSlide === 3
            ? "FOUR MONEY BEARS Q&A"
            : activeSlide === 4
            ? "FOUR MONEY BEARS Q&A"
            :  activeSlide === 5
            ? "FOUR MONEY BEARS Q&A"
            : activeSlide === 6 ? "Drag and place each action into columns relating to user profiles." :""}
        </h4>

        <p className="text-black py-2 text-lg font-normal">
          {activeSlide === 2
            ? "Here are some terms you will see in the video:"
            : activeSlide === 4
            ? "Select the correct title for the definition of each user."
            : ""}
        </p>
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
              <div className="grid grid-cols-12 w-full place-items-center">
                <div className="col-span-12 w-full flex justify-center items-center">
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/HBegTK7G5vE?si=SVZUrKvqS1WJnMz5"
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
                  <MyImage path="/C50Images/Four_Money_Bears.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
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
              {Slide3Data.map((i, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 place-items-center p-2"
                >
                  <div className="col-span-6 w-full flex justify-center items-center ">
                    <MyImage path={i.img} />
                  </div>
                  <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                    <p className="text-lg text-black">
                      <span className="font-bold">{i.title} : </span>
                      {i.text}
                    </p>
                    <p className="text-gray-700">{i.suggestion}</p>
                  </div>
                </div>
              ))}
            </SwiperSlide>

            <SwiperSlide>
              {Slide4Data.map((i, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 place-items-center p-2"
                >
                  <div className="col-span-6 w-full flex justify-center items-center ">
                    <MyImage path={i.img} />
                  </div>
                  <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                    <h3 className="text-xl font-bold text-black">{i.text}</h3>
                    <ul className="list-disc space-y-3 p-3">
                      {i.answer.map((list, list_index) => (
                        <li key={list_index} className="text-lg text-black ">
                          {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </SwiperSlide>

            <SwiperSlide>
              <div className="p-6 space-y-10 flex justify-center items-center flex-col">
                <MyImage path="/C50Images/Four_MB.png" />

                {QuestionData.map((item, qIndex) => (
                  <div
                    key={qIndex}
                    className="grid grid-cols-12 w-[80%] place-items-center border p-5 min-h-[200px]"
                  >
                    <div className="col-span-12 w-full flex justify-center items-center flex-col gap-5">
                      <h2 className="text-lg text-center text-black font-bold ">
                        {item.question}
                      </h2>

                      <div className="flex justify-center items-center gap-3">
                        {item.answer.map((opt, i) => {
                          const userChoice = selected[qIndex];
                          const isCorrect =
                            userChoice === opt && opt === item.val;
                          const isWrong =
                            userChoice === opt && opt !== item.val;

                          return (
                            <button
                              key={i}
                              onClick={() => handleClick(qIndex, opt)}
                              className={`
                        w-full py-3 min-w-[200px] rounded-lg text-white font-semibold transition cursor-pointer
                        ${
                          userChoice
                            ? isCorrect
                              ? "bg-green-600"
                              : isWrong
                              ? "bg-red-600 shake"
                              : "bg-violet-900"
                            : "bg-violet-900"
                        }
                      `}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>

            <SwiperSlide>
             <div className="flex justify-center items-center flex-col gap-8">
               <div className="grid border grid-cols-12 gap-y-5 place-items-center w-full p-5">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Common.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h3 className="text-xl font-bold text-black">
                    What is a common thread between all four users?
                  </h3>
                  <ul className="list-disc space-y-3 p-3">
                    <li className="text-lg text-black ">
                      All users don’t save or invest, but three users don’t give
                      either.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid  border grid-cols-12 gap-y-5 place-items-center w-full p-5">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Teach.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h3 className="text-xl font-bold text-black">
                    How does the author suggest making changes to using money?
                  </h3>
                  <ul className="list-disc space-y-3 p-3">
                    <li className="text-lg text-black ">
                      The author suggests the users teach each other how to
                      manage money for today and the future.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid border grid-cols-12 gap-y-5 place-items-center w-full p-5 ">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/Teach.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h3 className="text-xl font-bold text-black">
                    What do the four money bears do after following the author’s
                    advice?
                  </h3>
                  <ul className="list-disc space-y-3 p-3">
                    <li className="text-lg text-black ">
                      The users decide to start a program called the budget to
                      teach each other how to manage money. They work together
                      to follow the four money bear rules: spend cautiously,
                      save diligently, invest wisely, give generously.
                    </li>
                  </ul>
                </div>
              </div>
             </div>
            </SwiperSlide>

             <SwiperSlide>
           <DragSlide/>
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
              activeSlide < 6 ? "visible" : "invisible"
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
