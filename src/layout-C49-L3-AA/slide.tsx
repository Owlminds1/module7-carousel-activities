"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useRef, useState } from "react";
import MyImage from "@/components/myImage";


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
        <h4 className="text-3xl font-bold text-black">
       A Need or A Want?
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
                  <MyImage path="/C49Images/needs_and_wants2.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <h4 className="text-xl font-bold text-black ">
                    Think of some of your needs that are essentially wants.
                  </h4>

                  <ul className="list-disc space-y-3 px-2">
                    <li className="text-lg font-medium text-black">
                      List them.
                    </li>

                    <li className="text-lg font-medium text-black">
                      Choose a need instead of that want (which you earlier
                      thought was a need)
                    </li>

                    <li className="text-lg font-medium text-black">
                      Justify your choices
                    </li>
                  </ul>

                  <p className="text-md text-gray-900 italic">
                    Enter your responses in input boxes
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center flex-col">
                  <MyImage path="/C49Images/" />
                  <MyImage path="/C49Images/" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <p className="text-lg text-gray-900 italic">
                    EXAMPLE : A Need or A Want?
                  </p>

                  <p className="text-lg text-black ">
                    I thought I needed{" "}
                    <input
                      type="text"
                      className="outline-0 border-b border-black  text-center p-1"
                      placeholder="write here..."
                    />{" "}
                    (new sneakers), but after this class I understood that
                    it’s actually a want! So now, I’d rather choose{" "}
                    <input
                      type="text"
                      className="outline-0 border-b border-black  text-center p-1"
                      placeholder="write here..."
                    />{" "}
                    (a clock) because{" "}
                    <input
                      type="text"
                      className="outline-0 border-b border-black  text-center p-1"
                      placeholder="write here..."
                    />{" "}
                    (I must not only tell the time, but also be timely in
                    finishing my tasks!)
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center flex-col">
                  <MyImage path="/C49Images/" />
                  <MyImage path="/C49Images/" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-5 ">
                  <p className="text-lg text-gray-900 italic">
                    A Need or A Want?
                  </p>

                  

                  <p className="text-lg text-black ">
                    I thought I needed  <input
                      type="text"
                      className="outline-0 border-b border-black  text-center p-1"
                      placeholder="write here..."
                    /> but after this class I understood that it’s actually a want!  So now, I’d rather choose  <input
                      type="text"
                      className="outline-0 border-b border-black  text-center p-1"
                      placeholder="write here..."
                    /> because  <input
                      type="text"
                      className="outline-0 border-b border-black  text-center p-1"
                      placeholder="write here..."
                    /> 
                   
                  </p>
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
