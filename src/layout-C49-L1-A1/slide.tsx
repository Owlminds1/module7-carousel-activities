"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useEffect, useRef, useState } from "react";
import MyImage from "@/components/myImage";

import DragSlide from "./dragSlide";

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
          {activeSlide === 0
            ? "Needs and Wants"
            : activeSlide === 1
            ? "Watch the embedded video"
            : activeSlide === 2
            ? "Draw your needs and wants"
            : "Differentiate between needs and wants"}
        </h4>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
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
                  <MyImage path="/C49Images/needs_and_wants.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-black font-bold text-lg">What Is A Need?</h3>
                  <p className="text-black/80 w-full ">“A situation when something is necessary or must be done:</p>
                  <ul className="list-disc w-full space-y-3 px-2">
                    <li className="text-lg font-medium text-black">
                    To satisfy/meet/fulfil a need
                    </li>

                    <li className="text-lg font-medium text-black">
                     Need for something”
                    </li>
                  </ul>
                  <p className="text-black/80 w-full ">For example: water</p>



                     <h3 className="text-black font-bold text-lg">What Is A Want?</h3>
                  <p className="text-black/80 w-full">“A situation in which there is not enough of something” thus creating a want</p>
                    <p className="text-black/80 w-full ">For example: toys</p>
                 

                 
                </div>
                <div className="col-span-12 text-black/60 text-center py-3 italic">Definitions from Oxford learners’ dictionary</div>
              </div>
            </SwiperSlide>

             <SwiperSlide>
            <div className="grid grid-cols-12 w-full place-items-center">
         
              
              <div className="col-span-12 w-full flex justify-center items-center">

                  <iframe width="600" height="400" src="https://www.youtube.com/embed/FVXKig5tlXQ?si=e3GWMZob4RWjqGXB" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
              
            </div>
            </SwiperSlide>
            
            
            
             <SwiperSlide>
            <div className="grid grid-cols-12 w-full p-5 place-items-center">
         
              
              <div className="col-span-12 w-full flex justify-center items-center">
 <ul className="list-disc  space-y-3 px-2">
                    <li className="text-lg font-medium text-black">
                   Use the boxes to draw three different things you need
                    </li>

                    <li className="text-lg font-medium text-black">
                 Use the boxes to draw three different things you want
                    </li>
                  </ul>
              </div>
              
            </div>
            </SwiperSlide>


              <SwiperSlide>
            <div className="grid grid-cols-12 gap-5 w-full place-items-center p-5">
         
              
              <div className="col-span-12 w-[60%] flex justify-center items-center">
 <ul className="list-disc  space-y-3 px-2">
                    <li className="text-lg font-medium text-black">
                  Coloring the items. Use the brush stroke tool  with your cursor to fill the color into the items. Needs are colored red and wants are colored blue. 
                    </li>

                    <li className="text-lg font-medium text-black">
               If not possible, then the flippable images can appear on a grid and students can identify needs and wants by flipping two cards within the same category but on opposite sides: need or want
                    </li>
                  </ul>
              </div> 
              
              
              <div className="col-span-12 w-full flex justify-center items-center">
<DragSlide/>
              </div>





              <div className="col-span-12 w-full my-3 italic text-center text-black/60">
                Source: OpenUse Twinkle Worksheets
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
              activeSlide < 3
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
