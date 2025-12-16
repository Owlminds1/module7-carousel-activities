"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L2-A5/slideData..json";

import MyImage from "@/components/myImage";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [selectBtn, setSelectBtn] = useState<number | null>(null);
  const [show, setShow] = useState(true);
  const [correct,setCorrect]=useState<HTMLAudioElement>()
  const [open,setOpen]=useState(false)


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
    const current = swiper.activeIndex;
    setActiveSlide(current);
    setSelectBtn(null);

    if (current === 0) {
      setShow(true); // only first slide me show = true
    } else {
      setShow(false); // baaki sub slides me false
    }
  };

  const handleCheck = (select: string, val: string, index: number) => {
    setSelectBtn(index);
    if (select === val) {
      setShow(true);
      correct?.play()
      if(SlideData.length-1 < activeSlide){
        setOpen(true)
      }
    }
  };

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          CHOOSE AN OPTION
        </h4>
        <p className="text-black text-lg ">
          Select the best possible response to each situation.
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
                <div className="col-span-12 w-[50%] flex flex-col  justify-center items-start gap-4">
                  <h4 className="text-black text-xl font-normal">
                    For example: Y is based in Puerto Rico. He regularly sends
                    money to his parents. But he now has to choose based on how
                    much additional charge is applicable on wire transfers.{" "}
                  </h4>
                  <div className="flex justify-center items-center gap-2 w-full flex-wrap ">
                    <ul className="list-disc w-full px-5">
                      <li className="font-bold text-black ">
                        Wire Transfer: 5%
                      </li>
                      <li className=" text-black ">Bank Transfer: 10%</li>
                      <li className=" text-black ">Online Apps: 2%</li>
                    </ul>
                  </div>
                  <h4 className="text-black text-xl font-bold ">
                    What would he choose?
                  </h4>
                  <h3 className="font-bold text-black ">Wire Transfer: 5%</h3>
                </div>
              </div>
            </SwiperSlide>

            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full place-items-center p-2">
                  <div className="col-span-6 w-full flex justify-center items-center">
                    <MyImage path={i.img} />
                  </div>
                  <div className="col-span-6 w-full flex flex-col  justify-center items-start gap-4">
                    <h4 className="text-black text-xl font-normal">{i.text}</h4>
                    <h4 className="text-black text-xl font-bold ">
                      {i.question}
                    </h4>
                    <div className="flex justify-center items-center gap-2 w-full flex-wrap ">
                      {i.opt.map((btn, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleCheck(btn, i.val, btnIndex)}
                          className={` ${
                            btnIndex === selectBtn
                              ? i.val === btn
                                ? "bg-green-600"
                                : "bg-red-500 shake"
                              : "bg-violet-900"
                          }  text-white cursor-pointer active:scale-95 transition-all duration-150 min-w-1/3 py-2 px-3 rounded-lg `}
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <Welldone open={open} setOpen={setOpen}/>
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
              activeSlide < SlideData.length && show ? "visible" : "invisible"
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
