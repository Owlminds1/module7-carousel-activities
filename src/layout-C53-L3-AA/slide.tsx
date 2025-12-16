"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useRef, useState } from "react";

import SlideData from "@/src/layout-C53-L3-AA/slide1.json";
import MyImage from "@/components/myImage";
import { MdOutlineDeleteOutline  } from "react-icons/md";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [editData,setEditData]=useState(SlideData)

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };


const handlePriceChange =(index:number,value:string)=>{
const update = [...editData]
update[index].col2 = value
setEditData(update)
}


const handleQuantityChange = (index: number, value: string) => {
  const updated = [...editData];
  updated[index].col3 = value; // col3 = quantity
  setEditData(updated);
};


const handleDel = (index: number) => {
  const filtered = editData.filter((_, i) => i !== index);
  setEditData(filtered);
};



  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-center text-black">
          {activeSlide === 0
            ? "SHOPPING LIST"
            : activeSlide === 1
            ? "SHOPPING LIST (EDITABLE)"
            : "SUGGESTIVE SHOPPING LIST"}
        </h4>

        <p className="text-black text-lg ">
          {activeSlide === 1
            ? "Edit the shopping list to make it suitable with only needs and not wants. Add your comments about the original list."
            : ""}
        </p>
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

                <div className="col-span-6  w-full grid grid-cols-12  ">
                  <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    ITEM
                  </div>
                  <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    PRICE
                  </div>
                  <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    QUANTITY
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Shoes
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $200
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    2
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    T-shirt
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $300
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    6
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    School bag
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $50
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    1
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Pokemon cards
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $400
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    4 set
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    XBox
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $2000
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Console with games
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Tiara
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $25
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    1
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Water bottle
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $2000
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    4
                  </div>

                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Perfume
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $100
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    2
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
                <div className="col-span-5 w-full flex justify-center items-center ">
                  <MyImage path="/C53Images/" />
                </div>

                <div className="col-span-7  w-full grid grid-cols-12  ">
                  <div className="col-span-3 w-full text-white bg-violet-900 text-center font-bold p-1">
                    ITEM
                  </div>
                  <div className="col-span-3 w-full text-white bg-violet-900 text-center font-bold p-1">
                    PRICE
                  </div>
                  <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    QUANTITY
                  </div>
                  
                  <div className="col-span-2 w-full  ">
                    
                  </div>
                  {editData.map((i, index) => (
                    <React.Fragment key={index} >
                      <div className="col-span-3 w-full text-black font-bold p-1 border px-3">
                        {i.col1}
                      </div>
                      <div className="col-span-3 w-full text-black font-bold p-1 border px-3">
                       $<input type="number" value={i.col2}
                       onChange={(e)=>handlePriceChange(index,e.target.value)}
                       
                       title="price" className="w-[60px] outline-0 " />
                      </div>
                      <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                     <input
                     title="Quantity"
  type="text"
  value={i.col3}
  onChange={(e) => handleQuantityChange(index, e.target.value)}
  className="w-full outline-0"
/>
                      </div>

                        <div
                        onClick={()=>handleDel(index)}
                        className="col-span-2 w-full px-3  ">
                    <MdOutlineDeleteOutline  className="text-xl text-red-500 cursor-pointer "/>
                  </div>
                    </React.Fragment>
                  ))}
               
                </div>

                <div className="col-span-12 w-[50%]">
                  <h3 className="font-bold text-black text-lg ">Comments:</h3>
                  <p className="text-black text-md font-medium">Most items are for more than one person. Many are too expensive. These are not needs but wants. To focus on the needs, I’d revise this way.</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="grid grid-cols-12 w-full  gap-5 place-items-center p-2">
               

                <div className="col-span-12  w-[60%] grid grid-cols-12  ">
                
                   <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    ITEM
                  </div>
                  <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    PRICE
                  </div>
                  <div className="col-span-4 w-full text-white bg-violet-900 text-center font-bold p-1">
                    QUANTITY
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    Shoes
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $100
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    1
                  </div>



                   <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                   T-shirt
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $100
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    2
                  </div>


                   <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                   School bag
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $50
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    1
                  </div>

                  
                   <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                   Water bottle
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    $50
                  </div>
                  <div className="col-span-4 w-full text-black font-bold p-1 border px-3">
                    1
                  </div>

                </div>
              </div>
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
              activeSlide < 2 ? "visible" : "invisible"
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
