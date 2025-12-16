"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import SlideData from "@/src/layout-C52-L3-A4/slideData.json"
import MyImage from "@/components/myImage";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBtnIndex,setActiveBtnIndex]=useState<number | null>(null)
  const [show,setShow]=useState(false)
  const [correct,setCorrect]=useState<HTMLAudioElement>();
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
    setActiveSlide(swiper.activeIndex);
setActiveBtnIndex(null)
setShow(false)
  };


  const handleCheck = (select:string,val:string,index:number)=>{
setActiveBtnIndex(index)
if(val=== select){
  setShow(true)
  correct?.play()
  if(activeSlide === SlideData.length-1){
    setOpen(true)
  }
}
  }

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [ activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
       Secure Transactions
        </h4>
        <p className="text-black text-lg text-center ">
          Choose yes or no against the following statements.
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

            {
              SlideData.map((i,index)=>(
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                
                <div className="col-span-12  w-[80%]  flex flex-col  justify-center items-center gap-8">
                <h3 className="text-xl font-bold text-black">{i.question}</h3>
                <div className="flex gap-5">
                  {
                    i.opt.map((btn,btnIndex)=>(
                      <button
                      onClick={()=>handleCheck(btn,i.val,btnIndex)}
                      key={btnIndex}
                      className={ ` ${activeBtnIndex === btnIndex  ? btn === i.val ? "bg-green-600":"bg-red-500 shake" :"bg-violet-900"} text-white px-5 py-2 cursor-pointer rounded-lg min-w-[150px]`}
                      >{btn}</button>

                    ))
                  }
                </div>
                </div>
              </div>
            </SwiperSlide>

              ))
            }

     
          </Swiper>
          <Welldone open={open} setOpen={setOpen}/>
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
              activeSlide < SlideData.length-1 && show ? "visible" : "invisible"
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
