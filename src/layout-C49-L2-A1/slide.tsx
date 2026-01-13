"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";

import MyImage from "@/components/myImage";
import Bingo1 from "./bingo1";
import Bingo2 from "./bingo2";
import Table from "./ratingTable";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };





  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "BINGO"
            : activeSlide === 1
            ? "BINGO [NEEDS]"
            : activeSlide === 2 ? "BINGO": activeSlide === 3 ? " BINGO [WANTS]":""}
        </h4>

        {/* <p className="text-black text-xl text-center ">
          {activeSlide === 1
            ? "Edit the shopping list to make it suitable with only needs and not wants. Add your comments about the original list."
            : ""}
        </p> 
        
        <p className="text-black text-xl text-center ">
          {activeSlide === 1
            ? "Revise the shopping list to make it suitable with only needs and not wants. Make comments about items on the list based on needs and wants."
            : ""}
        </p> */}
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3">
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
            <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C53Images/" />
                </div>
                
                 <div className="col-span-6 w-full  ">
                  <ul className="list-disc list-inside space-y-3 p-2">
                    <li className="text-black text-lg">All the items people need and want are listed on the Bingo</li>
                    
                    
                     <li className="text-black text-lg">You’ve to get as many bingos as possible by selecting the squares with needs.</li>
                     
                      <li className="text-black text-lg">Each Bingo is set to a timer of 2 minutes.</li>
                  </ul>
                </div>

               
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Bingo1/>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C53Images/" />
                </div>
                
                 <div className="col-span-6 w-full  ">
                  <ul className="list-disc list-inside space-y-3 p-2">
                    <li className="text-black text-lg">All the items people need and want are listed on the bingo</li>
                    
                    
                     <li className="text-black text-lg">You’ve to get as You’ve to get as many bingos as possible by selecting the squares with wants.</li>
                     
                      <li className="text-black text-lg">The Bingo is set to a timer of 2 minutes.</li>
                  </ul>
                </div>

               
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <Bingo2/>
            </SwiperSlide>



              <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C53Images/" />
                </div>
                
                 <div className="col-span-6 w-full  ">
                  <ul className="list-disc list-inside space-y-3 p-2">
                    <li className="text-black text-lg">Think of the needs and wants of people in your immediate circle</li>
                    
                    
                     <li className="text-black text-lg">Fill a need and a want for each in the input boxes based on the example. Note that needs and wants of certain categories may overlap.</li>
                     
                      <li className="text-black text-lg">Tally your responses with suggestive responses to recognize needs and wants of others</li>
                  </ul>
                </div>

               
              </div>
            </SwiperSlide>
            
             <SwiperSlide>
              <Table/>
            </SwiperSlide>


            

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
              activeSlide < 5 ? "visible" : "invisible"
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
