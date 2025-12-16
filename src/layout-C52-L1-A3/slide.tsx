"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import Slide2Data from "@/src/layout-C52-L1-A3/pointers2.json";
import Slide3Data from "@/src/layout-C52-L1-A3/pointers3.json";

import RatingTable from "./ratingTable";
import Slide2Table from "./slide2Table";
import RatingTable2 from "./ratingTable2";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(0);

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

        if (current === 1) {
          setVisibleCount2((prev) =>
            prev < Slide2Data.length ? prev + 1 : prev
          );
        }

        if (current === 2) {
          setVisibleCount3((prev) =>
            prev < Slide3Data.length ? prev + 1 : prev
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
  }, [visibleCount2, visibleCount3]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "PRODUCT VALUE [PEOPLE]"
            : activeSlide === 1
            ? "ACTIVITY ON PRODUCT VALUE [PEOPLE]"
            : activeSlide === 2
            ? "PRODUCT VALUE [TIME & SUPPLY]"
            : activeSlide === 3
            ? "ACTIVITY ON PRODUCT VALUE [TIME & SUPPLY]"
            : activeSlide === 4 ? " PRODUCT VALUE [PLACE]": activeSlide === 5 ? "PRODUCT VALUE [PLACE]":""}
        </h4>

        <p className="text-black text-lg text-center ">
          {activeSlide === 1
            ? "Select the customer  from the drop-down menu for each pair of shoes based on the given details."
            : activeSlide === 3
            ? "Select the value of the product from the drop-down menu based on the details."
            : activeSlide === 5 ? "Select the value of the product from the drop-down menu based on the details.":""}
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
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C50Images/PV_Buyers.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  <h4 className="text-black font-bold text-xl ">
                    The value of the product is different for different
                    customers. For e.g. the value of football shoes to someone
                    who plays the sport is higher when compared to an individual
                    who does not play.
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className=" w-full col-span-12  flex justify-center items-center flex-col gap-5 ">
                  <h4 className="text-black text-lg font-medium">
                    Here are the customers:
                  </h4>
                  <ul className="list-disc  w-[30%] ">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>
                  {Slide2Data.length - 1 < visibleCount2 && <Slide2Table />}
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C50Images/PV_Time.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                    <ul key={index} className="list-disc w-full">
                      <li
                        key={index}
                        className="text-lg text-left font-medium text-black"
                      >
                        {i}
                      </li>
                    </ul>
                  ))}

                  {Slide3Data.length > visibleCount3 && (
                    <p className="text-gray-800 italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C50Images/Supply_Demand.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                  <RatingTable />
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className=" w-[60%] col-span-12 bg flex justify-center items-start flex-col gap-5 ">
                  <h4 className="text-black text-center font-bold text-xl ">
                    The value of a product also differs from one place to
                    another. For e.g. woollen clothes are more valued in cold
                    places than warm places.
                  </h4>
                </div>
              </div>
            </SwiperSlide>



              <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C50Images/Place.jpg" />
                </div>
                <div className=" w-full col-span-6 bg flex justify-center items-start flex-col gap-5 ">
                        <div className=" text-black text-center text-lg ">Here are the possible values: high and low</div>

                  <RatingTable2 />
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
              activeSlide < 5 ? "visible" : "invisible"
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
