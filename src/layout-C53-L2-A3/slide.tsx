"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import Slide4Data from "@/src/layout-C53-L2-A3/pointers4.json";
import Slide5Data from "@/src/layout-C53-L2-A3/pointers5.json";
import Slide6Data from "@/src/layout-C53-L2-A3/pointers6.json";

import MyImage from "@/components/myImage";


import TableSlide3 from "./tableSlide3";
import TableSlide1 from "./tableSlide";
import TableSlide2 from "./tableSlide2";
import Image from "next/image";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

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
    setActiveSlide(swiper.activeIndex);
  };

  // FIXED ENTER LOGIC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 3) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length * 2 ? prev + 1 : prev
        );
      }
      
      
      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length * 2 ? prev + 1 : prev
        );
      }
      
      if (current === 5) {
        setVisibleCount6((prev) =>
          prev < Slide6Data.length * 2 ? prev + 1 : prev
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  },[visibleCount4,visibleCount5,visibleCount6, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount4,visibleCount5,visibleCount6, activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
       <h4 className="text-2xl font-bold text-center text-black">
  {activeSlide === 0
    ? "ASSESSING VALUE (MONEY)"
    : activeSlide === 1
    ? "ASSESSING VALUE (QUALITY)"
    : activeSlide === 2
    ? "ASSESSING VALUE (LOYALTY)"
    : activeSlide >= 3 && activeSlide <= 5
    ? "THINKING ABOUT VALUE"
    : activeSlide >= 6 && activeSlide <= 8
    ? "PRODUCT REVIEW"
    : ""}
</h4>


      <p className="text-black text-lg text-center ">
  {activeSlide >= 3 && activeSlide <= 5
    ? "Here are some things to look out for when buying products:"
    : activeSlide >= 6 && activeSlide <= 8
    ? "Let’s select a product based on preferences. You will have to justify each choice."
    : ""}
</p>

      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3">
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
              <div className="grid grid-cols-12 gap-y-1 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Warren_Buffet.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <div className="w-full ">
                    <h4 className="text-lg  text-black animate-fadeIn">
                      What do you think value means?
                    </h4>
                    <p className="text-lg text-black/80 animate-fadeIn">
                      Warren Buffet, an investor and philanthropist says, “Price
                      is what you pay; value is what you get”
                    </p>
                  </div>
                </div>
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Monetary_Value.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <div className="w-full ">
                    <ul className="list-disc w-full">
                      <li className="text-lg  text-black animate-fadeIn">
                        A value can be monetary value i.e. how much something
                        costs.
                      </li>
                      <li className="text-lg  text-black animate-fadeIn">
                        It is the perceived worth of the product or service to
                        the buyer, based on how useful something is to someone,
                        or how much it means to the buyer.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Product_Value.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc ">
                    <li className="text-lg text-black animate-fadeIn">
                      But value can also be of quality i.e. how well something
                      functions and how long something lasts.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C53Images/Brand_Loyalty.jpg" />
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  <ul className="list-disc ">
                    <li className="text-lg text-black animate-fadeIn">
                      It can also come in forms of loyalty value i.e. how loyal
                      is the brand to its customers. This is visible in the
                      service offered, interaction with clients, and prompt
                      application of customer feedback.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-12 w-[60%]">
                  <h4 className="text-xl text-black text-center">
                    <span className="font-bold">a{`)`} </span> Things are not
                    what they seem.
                  </h4>
                  <p className="text-black/80 text-center text-lg ">
                    It is the job of advertising and marketing to make a product
                    look better than it really is. Very few brands rely on
                    authenticity i.e. being genuine in their communication to
                    market products.
                  </p>
                </div>


                {
                  Slide4Data.slice(0,visibleCount4).map((item,index)=>{

                    const  stepIndex = index *2
 const showQuestion = stepIndex < visibleCount4
 const showAnswer = stepIndex + 1 < visibleCount4

                    return(
                      <React.Fragment key={index}>

                <div className="col-span-6 w-full flex justify-center items-center">
                  {
                    showQuestion && 
                  <MyImage path="/C53Images/Luxury.jpg" />
                  }
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {
                    showQuestion &&
                  <h3 className="text-black text-lg font-bold">{item.text}</h3>
                  }
                  <ul className="list-disc ">
                    {
                      showAnswer && 
                    <li className="text-lg text-black/80 animate-fadeIn">
                    {item.subText}
                    </li>
                    }
                  </ul>
                </div>

                      </React.Fragment>
                    )
                  })
                }
  <div className="col-span-12 text-center w-full">
                  {Slide4Data.length * 2 > visibleCount4 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-12 w-[60%]">
                  <h4 className="text-xl text-black text-center">
                    <span className="font-bold">b{`)`} </span> The value of the product varies according to the profiles of the buyers.
                  </h4>
                  <p className="text-black/80 text-center text-lg ">
                   Different buyers have different needs. The same product can have varieties to suit the requirements of diverse buyers.
                  </p>
                </div>


                {
                  Slide5Data.slice(0,visibleCount5).map((item,index)=>{

                    const  stepIndex = index *2
 const showQuestion = stepIndex < visibleCount5
 const showAnswer = stepIndex + 1 < visibleCount5

                    return(
                      <React.Fragment key={index}>

                <div className="col-span-6 w-full flex justify-center items-center">
                  {
                    showQuestion && 
                  <MyImage path={item.img} />
                  }
                </div>
                <div className="col-span-6 w-full flex flex-col  justify-center items-center gap-2">
                  {
                    showQuestion &&
                  <h3 className="text-black text-lg font-bold">{item.text}</h3>
                  }
                  <ul className="list-disc ">
                    {
                      showAnswer && 
                    <li className="text-lg text-black/80 animate-fadeIn">
                    {item.subText}
                    </li>
                    }
                  </ul>
                    
                    {
                      showAnswer && 
                    <h3 className="text-lg text-black animate-fadeIn">
                    Would you buy it? 
                    </h3>
                    }
                </div>

                      </React.Fragment>
                    )
                  })
                }
  <div className="col-span-12 text-center w-full">
                  {Slide5Data.length * 2 > visibleCount5 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>



              <SwiperSlide>
              <div className="grid grid-cols-12 w-full place-items-center p-2">
                <div className="col-span-12 w-[60%]">
                  <h4 className="text-xl text-black text-center">
                    <span className="font-bold">c{`)`} </span>Accessibility to a product affects its value
                  </h4>
                  <p className="text-black/80 text-center text-lg ">
                The cost of the product doesn’t define its value. Some products are expensive but not useful, whereas other products are affordable but very useful and valuable.
                  </p>
                </div>


                {
                  Slide6Data.slice(0,visibleCount6).map((item,index)=>{

                    const  stepIndex = index *2
 const showQuestion = stepIndex < visibleCount6
 const showAnswer = stepIndex + 1 < visibleCount6

                    return(
                      <React.Fragment key={index}>

                <div className="col-span-12 w-full flex justify-center items-center">
                  {
                    showQuestion && 
               <div  className="flex justify-center items-center gap-3 my-5">
                 <div>
                   <div className="relative w-50 h-50 ">
                   <Image fill alt="image" src="/C53Images/Water.jpg" />
                 </div>
                  <h3 className="text-black   text-lg text-center w-full">{item.titel1}</h3>
                 </div>
                 

                   <div>
                   <div className="relative w-50 h-50 ">
                   <Image fill alt="image" src="/C53Images/Diamond.jpg" />
                 </div>
            <h3 className="text-black   text-lg text-center w-full">{item.titel2}</h3>
                 </div>
                 
               </div>
                  }
                </div>
                <div className="col-span-12 w-full flex flex-col  justify-center items-center gap-2">
                  {
                    showQuestion &&
                  <h3 className="text-black text-lg font-bold">{item.text}</h3>
                  }
                  <ul className="list-disc ">
                    {
                      showAnswer && 
                    <li className="text-lg text-center text-black/80 animate-fadeIn">
                    {item.subText}
                    </li>
                    }
                  </ul>
                    
                    {
                      showAnswer && 
                    <h3 className="text-lg text-black animate-fadeIn">
                    Would you buy it? 
                    </h3>
                    }
                </div>

                      </React.Fragment>
                    )
                  })
                }
  <div className="col-span-12 text-center w-full">
                  {Slide6Data.length * 2 > visibleCount6 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
            
            
             <SwiperSlide>
              <TableSlide1/>
            </SwiperSlide>
            
            <SwiperSlide>
              <TableSlide2/>
            </SwiperSlide>
            
              <SwiperSlide>
              <TableSlide3/>
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
              activeSlide < 8 ? "visible" : "invisible"
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
