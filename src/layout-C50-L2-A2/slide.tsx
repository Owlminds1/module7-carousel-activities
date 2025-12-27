"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import SlideData from "@/src/layout-C50-L2-A2/pointers.json";
import Slide2Data from "@/src/layout-C50-L2-A2/pointers2.json";
import Slide3Data from "@/src/layout-C50-L2-A2/pointers3.json";
import Slide4Data from "@/src/layout-C50-L2-A2/pointers4.json";
import Slide5Data from "@/src/layout-C50-L2-A2/pointers5.json";
import Slide6Data from "@/src/layout-C50-L2-A2/pointers6.json";
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
            prev < SlideData.length *2 ? prev + 1 : prev
          );
        }

        if (current === 0) {
          setVisibleCount2((prev) =>
            prev < Slide2Data.length ? prev + 1 : prev
          );
        }

        if (current === 1) {
          setVisibleCount3((prev) =>
            prev < Slide3Data.length ? prev + 1 : prev
          );
        }

        if (current === 1) {
          setVisibleCount4((prev) =>
            prev < Slide4Data.length ? prev + 1 : prev
          );
        }

        if (current === 3) {
          setVisibleCount5((prev) =>
            prev < Slide5Data.length ? prev + 1 : prev
          );
        }
        
        if (current === 4) {
          setVisibleCount6((prev) =>
            prev < Slide6Data.length ? prev + 1 : prev
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

  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount6,
  ]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "BILLS "
            : activeSlide === 1
            ? "RECEIPTS"
            : activeSlide === 2
            ? "RECEIPTS"
            : activeSlide === 3
            ? "ACTIVITY ON BILLS"
            : activeSlide === 4 ?"ACTIVITY ON RECEIPTS": ""}
        </h4>

        <p className="text-black text-lg ">
          {activeSlide === 2
            ? "Guess the information listed on either a bill or a receipt or both by ticking or crossing for each detail."
            : activeSlide === 3
            ? "Now let’s see if you can decode a phone bill."
            :  activeSlide === 4
            ? "Next is a receipt. Will you be able to answer questions about it?"
            :""}
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
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div className="flex justify-center items-center p-2">
                <div className="  w-[60%] bg flex justify-center items-center flex-col gap-5 ">
                 {SlideData.map((item, index) => {
   const stepIndex = index * 2;
                  const showQuestion = visibleCount > stepIndex;
              
                  const showAnswer = visibleCount > stepIndex + 1;

  return (
    <div key={index} className="mt-5 w-full">
      {/* Question */}
      {showQuestion && (
        <h4 className="text-lg font-medium text-left w-full  text-black">
          {item.question}
        </h4>
      )}

      {/* Answer */}
      {showAnswer  && (
        <p className="text-black mt-1">
          {item.answer}
        </p>
      )}
    </div>
  );
})}


                  {SlideData.length +1 < visibleCount && (
                    <div className=" mt-10 w-full flex justify-center items-center flex-col">
                      <p className="text-black text-left w-full ">
                        <span className="font-bold">EXAMPLE</span> : Here’s a
                        customer’s bill generated by the seller.
                      </p>

                      <MyImage path="/C50Images/Read_Bill.png" />
                    </div>
                  )}

                  {SlideData.length +1< visibleCount && (
                    <ul className="list-disc space-y-3 px-2">
                      {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                        <li
                          key={index}
                          className="text-lg font-medium text-black"
                        >
                          {i}
                        </li>
                      ))}

                      {Slide2Data.length > visibleCount2 && (
                        <p className="text-gray-800 italic font-normal">
                          (Enter to show more points)
                        </p>
                      )}
                    </ul>
                  )}

                  {Slide2Data.length - 1 < visibleCount2 && (
                    <div className="w-full flex justify-center items-center flex-col">
                      <p className="text-black text-left text-lg my-2 w-full ">
                        Total number of items: 15
                      </p>

                      <ul className="list-disc space-y-3 px-2">
                        <li className="text-lg font-medium text-black">
                          Finally, the total amount (346BD) to be paid with
                          taxes (00) along with the date of issue (01/11/2030)
                        </li>

                        <li className="text-lg font-medium text-black">
                          The currency is Bahamian dollars.
                        </li>
                      </ul>

                      <p className="text-black italic ">
                        Note that the price of items is for educational purposes
                        only and do not reflect the actual market rate. The
                        details also vary for diverse bills.
                      </p>
                    </div>
                  )}

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center p-2">
                <div className="  w-[60%] bg flex justify-center items-center flex-col gap-5 ">
                  {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                    <div className="mt-5 w-full">
                      <h4
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i.question}
                      </h4>

                      <p className="text-black">{i.answer}</p>
                    </div>
                  ))}

                  {Slide3Data.length - 1 < visibleCount3 && (
                    <div className="w-full flex justify-center items-center flex-col">
                      <p className="text-black text-left w-full ">
                        <span className="font-bold">EXAMPLE</span> : Here’s a
                        customer’s bill generated by the seller.
                      </p>

                      <MyImage path="/C50Images/Retail-Receipt.png" />
                    </div>
                  )}

                  {Slide3Data.length - 1 < visibleCount3 && (
                    <div>
                      <h3 className="text-left w-full font-bold text-black my-2">
                        Here you see:{" "}
                      </h3>
                      <ul className="list-disc space-y-3 px-2">
                        {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                          <li
                            key={index}
                            className="text-lg font-medium text-black"
                          >
                            {i}
                          </li>
                        ))}

                        {Slide4Data.length > visibleCount4 && (
                          <p className="text-gray-800 italic font-normal">
                            (Enter to show more points)
                          </p>
                        )}
                      </ul>
                    </div>
                  )}

                  {Slide4Data.length - 1 < visibleCount4 && (
                    <p className=" text-black italic font-normal">
                      Note that the price of items is for educational purposes
                      only and do not reflect the actual market rate. The
                      details also vary for diverse receipts.
                    </p>
                  )}

                  {Slide3Data.length > visibleCount3 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <ThirdSlide />
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center p-2">
                <div className="  w-[60%] bg flex justify-center items-center flex-col gap-5 ">
                  <MyImage path="/C50Images/Phone_Bill.png"/>
                  {Slide5Data.slice(0, visibleCount5).map((i, index) => (
                    <div className="mt-5 w-full">
                      <h4
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i.question}
                      </h4>
                      <ul className="list-disc space-y-2 p-3">
                        {i.answer.map((list, listIndex) => (
                          <li key={listIndex} className="text-black">{list}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {Slide5Data.length > visibleCount5 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more Questions)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="flex justify-center items-center p-2">
                <div className="  w-[60%] bg flex justify-center items-center flex-col gap-5 ">
                  <MyImage path="/C50Images/Read_reciept.jpg"/>
                  {Slide6Data.slice(0, visibleCount6).map((i, index) => (
                    <div className="mt-5 w-full">
                      <h4
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i.question}
                      </h4>
                      <ul className="list-disc space-y-2 p-3">
                        {i.answer.map((list, listIndex) => (
                          <li key={listIndex} className="text-black">{list}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {Slide6Data.length > visibleCount6 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more Questions)
                    </p>
                  )}
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
              activeSlide < 4 ? "visible" : "invisible"
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
