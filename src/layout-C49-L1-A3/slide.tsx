"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import Slide1Data from "@/src/layout-C49-L1-A3/slide1Data.json"
import Image from "next/image";



const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [correctBg, setCorrectBg] = useState<HTMLAudioElement>();


  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
   
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
   
  };

  useEffect(() => {
    setCorrectBg(new Audio("/sound/correct.mp3"));
  }, []);

 

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black">
          {activeSlide === 0
            ? "TURNING PRIVILEGE INTO KINDNESS"
            : activeSlide === 1
            ? "DID YOU KNOW?"
            : activeSlide === 2
            ? "LET’S BE KIND!"
            : ""}
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
              {
                Slide1Data.map((item,index)=>(

              <div key={index} className="grid  grid-cols-12 place-items-center p-2 border ">
                <div className="col-span-6 w-full flex justify-center items-center ">
               <div className="w-[300px] h-[300px] relative">
                   <Image src={item.img} objectFit="cover" fill alt="image not found" />
               </div>
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  
<h4 className="text-2xl text-black font-medium">{item.text}</h4>
                
                </div>
              </div>
                ))
              }
            </SwiperSlide>


             <SwiperSlide>
             

              <div className="grid  grid-cols-12 place-items-center p-2  ">
                <div className="col-span-6 w-full flex justify-center items-center ">
                <div className="w-[300px] h-[300px] relative">
                   <Image src="/C49Images/Be_Kind.jpg" objectFit="cover" fill alt="image not found" />
               </div>
                  
            
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-gray-800 ">Kindness increases our:</p>
                  <ul className="list-disc space-y-3 px-3">
<li className="text-2xl text-black font-medium">Love</li>                
<li className="text-2xl text-black font-medium">Energy</li>                
<li className="text-2xl text-black font-medium">Lifespan</li>                
<li className="text-2xl text-black font-medium">Happiness </li>                
                  </ul>
                    
                </div>
              </div>
               
            </SwiperSlide>

     
            
          </Swiper>
{/* <Welldone open={open} setOpen={setOpen}/> */}
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
              activeSlide < 1 
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
