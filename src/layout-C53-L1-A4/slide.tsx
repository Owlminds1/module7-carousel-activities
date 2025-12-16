"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import GroceryData from "@/src/layout-C53-L1-A4/grocerySlide.json";
import StationaryData from "@/src/layout-C53-L1-A4/stationaryData.json";
import ClothingData from "@/src/layout-C53-L1-A4/clothingData.json";
import MyImage from "@/components/myImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [acticveIndex, setActiveIndex] = useState<number | null>(null);
  const [correctPlay,setCorrectPlay]=useState<HTMLAudioElement>();

  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(()=>{
setCorrectPlay(new Audio('/sound/correct.mp3'))
  },[])

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
    setActiveIndex(null);
  };

const handelCheck=(val:string,option:string,idx:number)=>{
  setActiveIndex(idx);
  if(val===option){
    correctPlay?.play();
  }
}

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
       {
    activeSlide < GroceryData.length 
      ? "Grocery Items"
      : activeSlide < GroceryData.length + StationaryData.length
      ? "Stationary Items"
      : "Clothing Items"
  }
        </h4>

        <p className="text-black text-lg ">
          {
    activeSlide < GroceryData.length 
      ? "Select whether each item is a need or a want."
      : activeSlide < GroceryData.length + StationaryData.length
      ? "Select whether each item is a need or a want."
      : "Select whether each item is an indication of quality or quantity"
  } </p>
      </div>

      <div className="w-[80%] flex justify-center items-center flex-col gap-3">
        <div className="w-full shadow-md p-5 ">
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

            
            {GroceryData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                  
                   <div className="col-span-6 w-full flex justify-center items-center ">
                    <MyImage path={i.img}/>
                 
                  </div>
                  <div className="col-span-6 w-full flex flex-col gap-8">
                    <h2 className="text-black  text-2xl font-bold text-center ">{i.text}</h2>

                    <div className="flex justify-center items-center gap-2 "> 
                      {
                        i.opt.map((option: string, idx: number) => (

                          <button key={idx} 

                          onClick={(e)=>handelCheck(i.val,option,idx)}
                          className={`${acticveIndex === idx ? i.val === option ? "bg-green-500":"bg-red-500 shake":"bg-violet-900"}  text-white min-w-[150px] px-5 py-2 cursor-pointer rounded-lg  active:scale-95 transition-all duration-100`}
                          >{option}</button>
                        ))
                      }
                    </div>
                 
                  </div>
                </div>
              </SwiperSlide>
            ))}



           
            {StationaryData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                  
                   <div className="col-span-6 w-full flex justify-center items-center ">
                    <MyImage path={i.img}/>
                 
                  </div>
                  <div className="col-span-6 w-full flex flex-col gap-8">
                    <h2 className="text-black  text-2xl font-bold text-center ">{i.text}</h2>

                    <div className="flex justify-center items-center gap-2 "> 
                      {
                        i.opt.map((option: string, idx: number) => (

                          <button key={idx} 

                          onClick={(e)=>handelCheck(i.val,option,idx)}
                          className={`${acticveIndex === idx ? i.val === option ? "bg-green-500":"bg-red-500 shake":"bg-violet-900"}  text-white min-w-[150px] px-5 py-2 cursor-pointer rounded-lg  active:scale-95 transition-all duration-100`}
                          >{option}</button>
                        ))
                      }
                    </div>
                 
                  </div>
                </div>
              </SwiperSlide>
            ))}


             {ClothingData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                  
                   <div className="col-span-6 w-full flex justify-center items-center ">
                    <MyImage path={i.img}/>
                 
                  </div>
                  <div className="col-span-6 w-full flex flex-col gap-8">
                    <h2 className="text-black  text-2xl font-bold text-center ">{i.text}</h2>

                    <div className="flex justify-center items-center gap-2 "> 
                      {
                        i.opt.map((option: string, idx: number) => (

                          <button key={idx} 

                          onClick={(e)=>handelCheck(i.val,option,idx)}
                          className={`${acticveIndex === idx ? i.val === option ? "bg-green-500":"bg-red-500 shake":"bg-violet-900"}  text-white min-w-[150px] px-5 py-2 cursor-pointer rounded-lg  active:scale-95 transition-all duration-100`}
                          >{option}</button>
                        ))
                      }
                    </div>
                 
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
              activeSlide < GroceryData.length + StationaryData.length + ClothingData.length-1 ? "visible" : "invisible"
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
